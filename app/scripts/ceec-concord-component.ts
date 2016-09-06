namespace app {
  'use strict'

  import s = fi.seco.sparql

  class Snippet {
    constructor(public before: any, public beforeSort: string, public beforeString, public match: string, public after: any, public afterSort: string, public afterString: string, public fulltext: any, public id: string) {}
  }

  export class CeecConcordComponentController {
    private static query: string = `
PREFIX text: <http://jena.apache.org/text#>
PREFIX cs: <http://ldf.fi/ceec-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT DISTINCT ?id ?fulltext WHERE {
  BIND(CONCAT("\\"",REPLACE(<QUERY>,"([\\\\+\\\\-\\\\&\\\\|\\\\!\\\\(\\\\)\\\\{\\\\}\\\\[\\\\]\\\\^\\\\\\"\\\\~\\\\*\\\\?\\\\:\\\\/\\\\\\\\])","\\\\\\\\$1"),"\\"") AS ?query)
  ?id text:query (?query 1000000000) .
  ?id cs:fulltext ?fulltext .
  ?id cs:year ?year .
  FILTER (REGEX(?fulltext, <REGEXP>,"i") && xsd:int(?year)>=1680)
}`
    public word: string
    public sortBy: number = 1
    public sortDesc: boolean = false
    public concordances: Snippet[]
    public more: boolean = false
    public open(letterId: string, text: string, event: MouseEvent): void {
      if (event.altKey) this.$window.open('https://www.google.com/search?tbm=bks&q="' + encodeURIComponent(text) + '"', '_blank')
      else this.$window.open('http://h89.it.helsinki.fi/ceec/func/letterFunc.jsp?letterID=' + letterId, '_blank')
    }
    public $onChanges(): void {
      if (this.word) this.update()
    }
    public setSortBy(index: number): void {
      if (this.sortBy === index) this.sortDesc = !this.sortDesc
      this.sortBy = index
      if (this.sortBy === 0)
        this.concordances.sort((a: Snippet, b: Snippet) => {
          return a.beforeSort < b.beforeSort ? (this.sortDesc ? 1 : -1) : (a.beforeSort > b.beforeSort ? (this.sortDesc ? -1 : 1) : 0)
        })
      else if (this.sortBy === 1)
        this.concordances.sort((a: Snippet, b: Snippet) => a.match < b.match ? (this.sortDesc ? 1 : -1)  : (a.match > b.match ? (this.sortDesc ? -1 : 1)  : 0))
      else this.concordances.sort((a: Snippet, b: Snippet) => a.afterSort < b.afterSort ? (this.sortDesc ? 1 : -1)  : (a.afterSort > b.afterSort ? (this.sortDesc ? -1 : 1)  : 0))
    }
    constructor(private sparqlService: s.SparqlService, private $sce: angular.ISCEService, private $window: angular.IWindowService) {}

    public update(limit: boolean = true): void {
      this.more = false
      let regexS: string = '((?:\\W|^)' + this.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '(?:\\W|$))'
      this.sparqlService.query('http://ldf.fi/ceec/sparql', CeecConcordComponentController.query.replace(/<REGEXP>/g, this.sparqlService.stringToSPARQLString(regexS)).replace(/<QUERY>/g, this.sparqlService.stringToSPARQLString(this.word)) + (limit ? 'LIMIT 31' : '')).then(
        (response: angular.IHttpPromiseCallbackArg<s.ISparqlBindingResult<{[id: string]: s.ISparqlBinding}>>) => {
          this.concordances = []
          this.more = limit && response.data.results.bindings.length === 31
          if (this.more) response.data.results.bindings.splice(0, 1)
          response.data.results.bindings.forEach(r => {
            let tmp: HTMLDivElement = document.createElement('div')
            tmp.textContent = r['fulltext'].value
            let ft: string = tmp.innerHTML
            let regexp: RegExp = new RegExp(regexS, 'i')
            let before: string
            let after: string
            let parts: string[] = ft.split(regexp)
            let lastBefore: string
            if (parts[0].length > 120) {
              lastBefore = parts[0].substring(parts[0].length - 120)
              lastBefore = lastBefore.substring(lastBefore.indexOf(' ') + 1)
            } else lastBefore = parts[0]
            if (parts[0].length > 1000) {
              let sentences: string[] = parts[0].substring(parts[0].length - 500).split(/([\.\?!])/)
              sentences[sentences.length - 1] = '<b>' + sentences[sentences.length - 1]
              ft = parts[0].substring(0, 500) + '<span style="color:red">...</span>' + sentences.join('')
            } else {
              let sentences: string[] = parts[0].split(/([\.\?!])/)
              sentences[sentences.length - 1] = '<b>' + sentences[sentences.length - 1]
              ft = sentences.join('')
            }
            for (let i: number = 2; i < parts.length; i += 2) {
              ft += '<span style="color:blue">'
              ft += parts[i - 1]
              ft += '</span>'
              before = lastBefore
              if (parts[i].length > 120) {
                after = parts[i].substring(0, 120)
                after = after.substring(0, after.lastIndexOf(' '))
                lastBefore = parts[i].substring(parts[i].length - 120)
                lastBefore = lastBefore.substring(lastBefore.indexOf(' ') + 1)
              } else {
                after = parts[i]
                lastBefore = parts[i]
              }
              if (parts[i].length > 1000) {
                let sentences: string[] = parts[i].substring(0, 500).split(/([\.\?!])/)
                sentences[0] = sentences[0] + '</b>'
                ft += sentences.join('') + '<span style="color:red">...</span>'
                if (i + 2 < parts.length) {
                  sentences = parts[i].substring(parts[i].length - 500).split(/([\.\?!])/)
                  sentences[sentences.length - 1] = '<b>' + sentences[sentences.length - 1]
                  ft += sentences.join('')
                } else ft +=  parts[i].substring(parts[i].length - 500)
              } else {
                let sentences: string[] = parts[i].split(/([\.\?!])/)
                sentences[0] = sentences[0] + '</b>'
                if (i + 2 < parts.length)
                  sentences[sentences.length - 1] = '<b>' + sentences[sentences.length - 1]
                ft += sentences.join('')
              }
              tmp.innerHTML = before
              before = tmp.textContent.replace(/\n/g, ' ')
              let beforeS: string[] = before.split(/\s/)
              tmp.innerHTML = after
              after = tmp.textContent.replace(/\n/g, ' ')
              this.concordances.push(new Snippet(this.$sce.trustAsHtml(before), beforeS[beforeS.length - 1].toLowerCase(), before, parts[i - 1], this.$sce.trustAsHtml(after), after.toLowerCase(), after, this.$sce.trustAsHtml(ft), r['id'].value.replace('http://ldf.fi/ceec/letter_', '')))
            }
          })
          this.sortDesc = !this.sortDesc
          this.setSortBy(this.sortBy)
        }
      )
    }

  }

  export class CeecConcordComponent implements angular.IComponentOptions {
    public controller: Function = CeecConcordComponentController
    public bindings: {[param: string]: string} = {
      'word': '<'
    }
    public templateUrl: string = 'partials/ceec-concord.html'
  }
}
