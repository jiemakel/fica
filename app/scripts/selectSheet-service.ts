namespace app {
  'use strict'

  class Sheet {
    public data: string[][] = []
    public active: boolean = false
    constructor(public name: string) {}
  }

  interface ISelectSheetScope extends angular.IScope {
    firstRowIsHeader: boolean
    loadSheet: () => void
    sheets: Sheet[]
    skipRows: number
  }

  declare var XLSX: any

  export class SelectSheetService {

    constructor(private $uibModal: angular.ui.bootstrap.IModalService, private $q: angular.IQService, private $rootScope: angular.IRootScopeService) {}
    public selectSheet(file: File): angular.IPromise<string[][]> {
      if (!file) return
      let deferred: angular.IDeferred<string[][]> = this.$q.defer()
      let $scope: ISelectSheetScope = <ISelectSheetScope>this.$rootScope.$new()
      $scope.firstRowIsHeader = true
      $scope.loadSheet = () => {
        $scope.sheets.filter(s => s.active).forEach(s => {
          if (!$scope.firstRowIsHeader)
            s.data.splice(0,  ($scope.skipRows ? $scope.skipRows : 0), s.data[0].map((column, index) => 'Column ' + (index + 1)))
          else s.data.splice(0,  ($scope.skipRows ? $scope.skipRows : 0))
          deferred.resolve(s.data)
        })
      }
      if (file.type.indexOf('text/') === 0)
        Papa.parse(file, { complete: (csv): void => {
          if (csv.errors.length !== 0)
            deferred.reject(csv.errors.map(e => e.message).join('\n'))
          else {
            $scope.sheets = [ new Sheet('Table') ]
            $scope.firstRowIsHeader = true
            $scope.sheets[0].data = csv.data
            $scope.sheets[0].active = true
            this.$uibModal.open({
              templateUrl: 'partials/selectSheet.html',
              scope: $scope,
              size: 'lg'
            })
          }
        }
        , error: (error: PapaParse.ParseError): void => deferred.reject(error.message)})
      else {
        let reader: FileReader = new FileReader()
        reader.onload = () => {
          try {
            let workBook: any = XLSX.read(reader.result, {type: 'binary'})
            $scope.sheets = []
            workBook.SheetNames.forEach(sn => {
              let sheet: Sheet = new Sheet(sn)
              let sheetJson: {}[] = XLSX.utils.sheet_to_json(workBook.Sheets[sn])
              sheet.data = [[]]
              for (let header in sheetJson[0]) if (header.indexOf('__') !== 0) sheet.data[0].push(header)
              XLSX.utils.sheet_to_json(workBook.Sheets[sn]).forEach(row => {
                let row2: string[] = []
                sheet.data[0].forEach(h => row2.push(row[h]))
                sheet.data.push(row2)
              })
              $scope.sheets.push(sheet)
            })
            $scope.firstRowIsHeader = true
            $scope.sheets[0].active = true
            this.$uibModal.open({
              templateUrl: 'partials/selectSheet.html',
              scope: $scope,
              size: 'lg'
            })
          } catch (err) {
            deferred.reject(err.message)
          }
        }
        reader.readAsBinaryString(file)
      }
      return deferred.promise
    }
  }
}
