namespace app {
  'use strict'

  class Sheet {
    constructor(
      public name: string
    ) {}
    public data: string[][] = []
    public active: boolean = false
  }

  interface IError {
    data?: string
    config?: {}
    status?: number
  }

  interface IMainScope extends angular.IScope {
    loadFile: (file: File) => void
    loadSheet: () => void
    saveCSVFile: () => void
    fileName: string
    sheets: Sheet[]
    firstRowIsHeader: boolean
    error: IError
    skipRows: number
    headings: string[]
    data: string[][]
    accept: number[]
    newGrouping: number
    groupings: number[]
    groupedData: Group[]
    acceptF: (group: Group, row: number) => void
  }

  class Group {
    constructor(public label: string) {}
    public open: boolean = false
    public subgroups: Group[]
    public rows: number[]
    public accepted: number = 0
    public filtered: number = 0
    public unprocessed: number = 0
    public parentGroup: Group
  }

  declare var XLSX: any

  export class MainController {
    constructor(private $scope: IMainScope, $uibModal: angular.ui.bootstrap.IModalService, $localStorage: any) {
      $scope.data = $localStorage.data
      $scope.accept = $scope.data.map(() => 0)
      $scope.headings = $localStorage.headings
      $scope.fileName = $localStorage.fileName
      $scope.groupings = []
      $scope.acceptF = (group: Group, row: number) => {
        if ($scope.accept[row] !== 1) {
          $scope.accept[row] = 1
          while (group) {
            group.accepted++
            group.unprocessed--
            group = group.parentGroup
          }
        }
      }
      let buildGroup: (rows: number[], groupingIndex: number) => Group[] = (rows: number[], groupingIndex: number) => {
        let groupRowMap: { [index: string]: number[] } = {}
        rows.forEach(r => {
          if (!groupRowMap[$scope.data[r][$scope.groupings[groupingIndex]]]) groupRowMap[$scope.data[r][$scope.groupings[groupingIndex]]] = []
          groupRowMap[$scope.data[r][$scope.groupings[groupingIndex]]].push(r)
        })
        let groups: Group[] = []
        for (let groupName in groupRowMap) {
          let group: Group = new Group(groupName)
          if (groupingIndex < $scope.groupings.length - 1) {
            group.subgroups = buildGroup(groupRowMap[groupName], groupingIndex + 1)
            let sizes: number[] = group.subgroups.reduce(
              (size: number[], subgroup: Group) => {
                subgroup.parentGroup = group
                size[0] += subgroup.accepted
                size[1] += subgroup.filtered
                size[2] += subgroup.unprocessed
                return size
              },
              [0, 0, 0])
            group.accepted = sizes[0]
            group.filtered = sizes[1]
            group.unprocessed = sizes[2]
            group.open = group.subgroups.length === 1
          } else {
            group.rows = groupRowMap[groupName]
            group.open = group.rows.length === 1
            group.rows.forEach(row => {
              switch ($scope.accept[row]) {
                case 0: group.unprocessed++; break
                case 1: group.accepted++; break
                case 2: group.filtered++; break
                default: throw 'Unknown accept:' + $scope.accept[row]
              }
            })
          }
          groups.push(group)
        }
        return groups
      }
      $scope.$watchCollection('groupings', (groupings: number[]) => {
        $scope.groupedData = []
        let allRows: number[] = $scope.data.map((value: string[], index: number) => index)
        $scope.groupedData = buildGroup(allRows, 0)
      })
      $scope.$watch('newGrouping', (newGrouping: number) => {
        if (newGrouping) {
          $scope.groupings.push(newGrouping)
          $scope.newGrouping = undefined
        }
      })
      let init: (data: string[][]) => void = (data: string[][]) => {
        $scope.headings =  data[0].map((column, index) => $scope.firstRowIsHeader ? column : 'Column ' + (index + 1))
        $localStorage.headings = $scope.headings
        $scope.data = data
        $localStorage.data = $scope.data
        $scope.data.splice(0,  ($scope.skipRows ? $scope.skipRows : 0) + ($scope.firstRowIsHeader ? 1 : 0))
      }
      let handleError: (error: IError) => void = (error: IError) => $scope.error = error
      $scope.firstRowIsHeader = true
      $scope.loadFile = (file: File) => {
        if (!file) return
        $scope.fileName = file.name
        $localStorage.fileName = $scope.fileName
        if (file.type.indexOf('text/') === 0)
          Papa.parse(file, { complete: (csv): void => {
            if (csv.errors.length !== 0)
              handleError({data: csv.errors.map(e => e.message).join('\n')})
            else {
              $scope.sheets = [ new Sheet('Table') ]
              $scope.firstRowIsHeader = true
              $scope.sheets[0].data = csv.data
              $scope.sheets[0].active = true
              $uibModal.open({
                templateUrl: 'selectSheet',
                scope: $scope,
                size: 'lg'
              })
            }
          }
          , error: (error: PapaParse.ParseError): void => handleError({data: error.message})})
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
              $uibModal.open({
                templateUrl: 'selectSheet',
                scope: $scope,
                size: 'lg'
              })
            } catch (err) {
              handleError({data: err.message})
            }
          }
          reader.readAsBinaryString(file)
        }
      }
      $scope.loadSheet = () => {
        $scope.sheets.filter(s => s.active).forEach(s => {
          init(s.data)
        })
      }
      $scope.saveCSVFile = () => {
        let data: string[][] = [$scope.headings].concat($scope.data)
        let fn: string = 'fica-' + $scope.fileName.replace(/\..*?$/, '.csv')
        saveAs(new Blob([Papa.unparse(data)], {type: 'text/csv'}), fn)
      }
    }
  }
}
