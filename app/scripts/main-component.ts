namespace app {
  'use strict'

  class Config {
    public pageSize: number = 200
  }

  class GroupRow {
    public memberRows: string[][] = []
    public lastRow: number
    public row: string[] = []
    public class: string
  }

  class State {
    public headings: string[] = []
    public groupings: number[] = []
    public fileName: string
    public currentPageOffset: number = 0
    public currentRow: number = 0
    public sortBy: number = 0
    public sortDesc: boolean = false
    public filters: string[] = []
  }

  export class MainComponentController {
    private static groupingClasses: string[] = [ 'success', 'warning', 'danger' ]

    public error: string
    public groupedData: (GroupRow|any[])[]

    public currentPage: number

    public totalBlanks: number[] = []
    public filteredBlanks: number[] = []

    public state: State
    public config: Config
    public contextURLs: string[]

    public dirty: boolean = false

    public selectedRows: {[id: number]: number} = {}

    private altKeyDown: boolean = false

    private data: any[][] = []

    public loadFile(file: File): void {
      if (!file) return
      this.state.fileName = file.name
      this.selectSheetService.selectSheet(file).then(
        (data: string[][]) => {
          this.state.headings = data.shift()
          if (data[data.length - 1].length === 1 && data[data.length - 1 ][0] === '') data.pop()
          this.data = data
          let isNumber: boolean[] = this.state.headings.map(h => true)
          this.data.forEach(row => row.forEach((column: string, index: number) => {if (!('' + parseInt(column, 10) === column)) isNumber[index] = false}))
          isNumber.forEach((thisIsNumber: boolean, index: number) => {
            if (thisIsNumber) {
              this.data.forEach(row => row[index] = parseInt(row[index], 10))
            }
          })
          this.localStorageService.set('data', data)
          this.groupingsUpdated()
        },
        (errMessage) => this.error = errMessage)
    }
    public saveCSVFile(): void {
      let data: string[][] = [this.state.headings].concat(this.data)
      let fn: string = 'fica-' + this.state.fileName.replace(/\..*?$/, '.csv')
      saveAs(new Blob([Papa.unparse(data)], {type: 'text/csv'}), fn)
    }
    public setSortBy(headingIndex: number): void {
      if (this.state.sortBy === headingIndex) this.state.sortDesc = !this.state.sortDesc
      this.state.sortBy = headingIndex
      this.groupingsUpdated()
    }
    public groupingsUpdated(): void {
      this.data.sort((a: string[], b: string[]) => {
        for (let i: number = 0; i < this.state.groupings.length; i++) {
          let groupIndex: number = this.state.groupings[i]
          if (a[groupIndex] < b[groupIndex]) return -1
          if (b[groupIndex] < a[groupIndex]) return 1
        }
        if (a[this.state.sortBy] < b[this.state.sortBy]) return this.state.sortDesc ? 1 : -1
        if (b[this.state.sortBy] < a[this.state.sortBy]) return this.state.sortDesc ? -1 : 1
        return 0
      })
      this.save()
      this.updateGroupedData()
    }
    public addNewGrouping(newGroupingIndex: number): void {
      this.state.groupings.push(newGroupingIndex)
      this.groupingsUpdated()
    }
    public removeGrouping(indexOfGrouping: number): void {
      this.state.groupings.splice(indexOfGrouping, 1)
      this.groupingsUpdated()
    }
    public mouseFocus(row: number, altKey: boolean): void {
      this.altKeyDown = altKey
      this.setRow(row)
    }
    public save(): void {
      this.localStorageService.set('data', this.data)
      this.dirty = false
    }
    constructor(private $uibModal: angular.ui.bootstrap.IModalService, private $localStorage: any, private localStorageService: any, private $http: angular.IHttpService, private $sce: angular.ISCEService, private selectSheetService: SelectSheetService, private hotkeys: angular.hotkeys.HotkeysProvider, private focus: any) {}
    public $onInit(): void {
      if (!this.$localStorage.state) this.$localStorage.state = new State()
      this.state = this.$localStorage.state
      if (!this.$localStorage.config) this.$localStorage.config = new Config()
      this.config = this.$localStorage.config
      this.currentPage = Math.floor(this.state.currentPageOffset / this.config.pageSize) + 1
      this.data = this.localStorageService.get('data')
      if (!this.data) this.data = []
      this.updateGroupedData()
      this.hotkeys.add({
        combo: 'ctrl+1',
        allowIn: ['INPUT', 'TD'],
        callback: (event: Event, hotkey: angular.hotkeys.Hotkey): void => {
          this.altKeyDown = false
          let lastRow: number = 0
          for (let row in this.selectedRows) {
            if (this.groupedData[row] instanceof GroupRow) {
              let grow: GroupRow = (<GroupRow>this.groupedData[row])
              grow.row[1] = 'yes'
              grow.memberRows.forEach(row => {
                if (row[1] === '') {
                  this.totalBlanks[1]--
                  this.filteredBlanks[1]--
                }
                row[1] = 'yes'
              })
            } else {
              if (this.groupedData[row][1] === '')  {
                this.totalBlanks[1]--
                this.filteredBlanks[1]--
              }
              this.groupedData[row][1] = 'yes'
            }
            if (lastRow < this.selectedRows[row]) lastRow = this.selectedRows[row]
          }
          while (!this.groupedData[lastRow] && lastRow < this.groupedData.length - 2)
            lastRow++
          this.dirty = true
          this.setRow(lastRow + 1)
          event.preventDefault()
        }
      })
      this.hotkeys.add({
        combo: 'ctrl+2',
        allowIn: ['INPUT', 'TD'],
        callback: (event: Event, hotkey: angular.hotkeys.Hotkey): void => {
          this.altKeyDown = false
          let lastRow: number = 0
          for (let row in this.selectedRows) {
            if (this.groupedData[row] instanceof GroupRow) {
              let grow: GroupRow = (<GroupRow>this.groupedData[row])
              grow.row[1] = 'no'
              grow.memberRows.forEach(row => {
                if (row[1] === '') {
                  this.totalBlanks[1]--
                  this.filteredBlanks[1]--
               }
                row[1] = 'no'
              })
            } else {
              if (this.groupedData[row][1] === '')  {
                this.totalBlanks[1]--
                this.filteredBlanks[1]--
             }
              this.groupedData[row][1] = 'no'
            }
            if (lastRow < this.selectedRows[row]) lastRow = this.selectedRows[row]
          }
          while (!this.groupedData[lastRow] && lastRow < this.groupedData.length - 2)
            lastRow++
          this.dirty = true
          this.setRow(lastRow + 1)
          event.preventDefault()
        }
      })
      this.hotkeys.add({combo: 'alt+tab', allowIn: ['INPUT', 'TD'], callback: (event: Event, hotkey: angular.hotkeys.Hotkey): void => {
        this.altKeyDown = true
        if (this.groupedData[this.state.currentRow] instanceof GroupRow)
          this.state.currentRow = (<GroupRow>this.groupedData[this.state.currentRow]).lastRow
        this.next()
        event.preventDefault()
      }})
      this.hotkeys.add({combo: 'tab', allowIn: ['INPUT', 'TD'], callback: (event: Event, hotkey: angular.hotkeys.Hotkey): void => {
        this.altKeyDown = false
        this.next()
        event.preventDefault()
      }})
      this.hotkeys.add({combo: 'shift+tab', allowIn: ['INPUT', 'TD'], callback: (event: Event, hotkey: angular.hotkeys.Hotkey): void => {
        this.altKeyDown = false; this.prev(); event.preventDefault()
      }})
      this.hotkeys.add({combo: 'alt+shift+tab', allowIn: ['INPUT', 'TD'], callback: (event: Event, hotkey: angular.hotkeys.Hotkey): void => {
        this.altKeyDown = true; this.prev(); event.preventDefault()
      }})
    }
    public $onDestroy(): void {
      this.hotkeys.del('ctrl+1')
      this.hotkeys.del('ctrl+2')
      this.hotkeys.del('tab')
      this.hotkeys.del('shift+tab')
      this.save()
    }
    private next(): void {
      if (this.state.currentRow === this.groupedData.length - 1) this.setRow(0)
      else this.setRow(this.state.currentRow + 1)
    }
    private prev(): void {
      if (this.state.currentRow === 0) this.setRow(this.groupedData.length - 1)
      else this.setRow(this.state.currentRow - 1)
    }
    private updateGroupedData(): void {
      let currentGroups: GroupRow[] = this.state.groupings.map(v => new GroupRow())
      this.groupedData = []
      this.selectedRows = {}
      this.state.currentRow = undefined
      this.currentPage = 1
      this.state.currentPageOffset = 0
      for (let i: number = 0; i < this.state.headings.length; i++)  {
        this.totalBlanks[i] = 0
        this.filteredBlanks[i] = 0
      }
      this.data.forEach((row, index) => {
        let allowed: boolean = true
        this.state.filters.forEach((filter: string, columnIndex: number) => {
          if (filter !== null && filter !== '') {
            if (filter.indexOf('!') === 0) {
              if (row[columnIndex].indexOf(filter.substring(1)) === 0) allowed = false
            } else if (filter.indexOf('>') === 0) {
              if (row[columnIndex] <= parseInt(filter.substring(1), 10)) allowed = false
            } else if (filter.indexOf('<') === 0) {
              if (row[columnIndex] > parseInt(filter.substring(1), 10)) allowed = false
            } else if (row[columnIndex].indexOf(filter) !== 0) allowed = false
          }
        })
        for (let i: number = 0; i < this.state.headings.length; i++) if (row[i] === '') this.totalBlanks[i]++
        if (allowed) {
          for (let i: number = 0; i < this.state.headings.length; i++) if (row[i] === '') this.filteredBlanks[i]++
          for (let i: number = 0; i < this.state.groupings.length; i++) {
            let groupIndex: number = this.state.groupings[i]
            if (currentGroups[i].row[groupIndex] !== row[groupIndex] && currentGroups[i].memberRows.length === 1)
              this.groupedData.pop()
          }
          for (let i: number = 0; i < this.state.groupings.length; i++) {
            let groupIndex: number = this.state.groupings[i]
            if (currentGroups[i].row[groupIndex] !== row[groupIndex]) {
              currentGroups[i].lastRow = this.groupedData.length - 1
              currentGroups[i] = new GroupRow()
              currentGroups[i].row[row.length - 1] = undefined
              currentGroups[i].class = MainComponentController.groupingClasses[i]
              for (let j: number = 0; j < i; j++) currentGroups[i].row[this.state.groupings[j]] = currentGroups[j].row[this.state.groupings[j]]
              currentGroups[i].row[groupIndex] = row[groupIndex]
              this.groupedData.push(currentGroups[i])
            }
            currentGroups[i].memberRows.push(row)
          }
          this.groupedData.push(row)
        }
      })
      for (let i: number = 0; i < this.state.groupings.length; i++) currentGroups[i].lastRow = this.groupedData.length
    }
    private setRow(row: number): void {
      this.state.currentRow = row
      this.currentPage = Math.floor(this.state.currentRow / this.config.pageSize + 1)
      this.state.currentPageOffset = (this.currentPage - 1) * this.config.pageSize
      if (!this.altKeyDown) this.selectedRows = {}
      this.selectedRows[row] = row
      if (this.groupedData[row] instanceof GroupRow && (<GroupRow>this.groupedData[row]).memberRows.length !== 1)
        for (let i: number = row + 1; i <= (<GroupRow>this.groupedData[row]).lastRow; i++) this.selectedRows[i] = i
      let crow: string[] = this.groupedData[row] instanceof GroupRow ? ((<GroupRow>this.groupedData[row]).memberRows.length === 1 ? (<GroupRow>this.groupedData[row]).memberRows[0] : (<GroupRow>this.groupedData[row]).row) : <string[]>this.groupedData[row]
      this.contextURLs = []
      if (crow[5]) this.contextURLs.push(this.$sce.trustAsResourceUrl('#/ceec-concord/' + crow[5]))
      if (crow[0]) this.contextURLs.push(this.$sce.trustAsResourceUrl('http://www.oed.com/search?searchType=dictionary&q=' + crow[0]))
      this.focus('row' + row)
    }

  }

  export class MainComponent implements angular.IComponentOptions {
      public controller: Function = MainComponentController
      public templateUrl: string = 'partials/main.html'
  }
}
