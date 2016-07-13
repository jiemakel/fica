namespace app {
  'use strict'

  import s = fi.seco.sparql

  class Snippet {
    constructor(public before: any, public match: string, public after: any, public fulltext: any, public id: string) {}
  }

  export class CeecConcordComponentController {
    private static query: string = `
PREFIX text: <http://jena.apache.org/text#>
PREFIX cs: <http://ldf.fi/ceec-schema#>
SELECT DISTINCT ?id ?fulltext WHERE {
  BIND(CONCAT("\\"",REPLACE(<QUERY>,"([\\\\+\\\\-\\\\&\\\\|\\\\!\\\\(\\\\)\\\\{\\\\}\\\\[\\\\]\\\\^\\\\\\"\\\\~\\\\*\\\\?\\\\:\\\\/\\\\\\\\])","\\\\\\\\$1"),"\\"") AS ?query)
  ?id text:query (?query 1000000000) .
  ?id cs:fulltext ?fulltext .
  FILTER (REGEX(?fulltext, <REGEXP>,"i"))
}
LIMIT 30`
    public word: string
    public concordances: Snippet[]
    public open(letterId: string): void {
      this.$window.open('http://h89.it.helsinki.fi/ceec/func/letterFunc.jsp?letterID=' + letterId, '_blank')
    }
    public $onChanges(): void {
      if (this.word) {
        let regexS: string = '((?:\\W|^)' + this.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '(?:\\W|$))'
        this.sparqlService.query('http://ldf.fi/ceec/sparql', CeecConcordComponentController.query.replace(/<REGEXP>/g, this.sparqlService.stringToSPARQLString(regexS)).replace(/<QUERY>/g, this.sparqlService.stringToSPARQLString(this.word))).then(
          (response: angular.IHttpPromiseCallbackArg<s.ISparqlBindingResult<{[id: string]: s.ISparqlBinding}>>) => {
            this.concordances = []
            response.data.results.bindings.forEach(r => {
              let tmp: HTMLDivElement = document.createElement('div')
              tmp.textContent = r['fulltext'].value
              let ft: string = tmp.innerHTML
              let regexp: RegExp = new RegExp(regexS, 'i')
              let before: string
              let after: string
              let parts: string[] = ft.split(regexp)
              console.log(parts.length, ft)
              let lastBefore: string = parts[0].length > 120 ? parts[0].substring(parts[0].length - 120) : parts[0]
              if (parts[0].length > 1000)
                ft = parts[0].substring(0, 500) + '<span style="color:red">...</span>' + parts[0].substring(parts[0].length - 500)
              else ft = parts[0]
              for (let i: number = 2; i < parts.length; i += 2) {
                ft += '<span style="color:blue">'
                ft += parts[i - 1]
                ft += '</span>'
                before = lastBefore
                if (parts[i].length > 120) {
                  after = parts[i].substring(0, 120)
                  lastBefore = parts[i].substring(parts[i].length - 120)
                } else {
                  after = parts[i]
                  lastBefore = parts[i]
                }
                if (parts[i].length > 1000)
                  ft += parts[i].substring(0, 500) + '<span style="color:red">...</span>' + parts[i].substring(parts[i].length - 500)
                else ft += parts[i]
                this.concordances.push(new Snippet(this.$sce.trustAsHtml(before), parts[i - 1], this.$sce.trustAsHtml(after), this.$sce.trustAsHtml(ft), r['id'].value.replace('http://ldf.fi/ceec/letter_', '')))
              }
            })
          }
        )
      }
    }
    constructor(private sparqlService: s.SparqlService, private $sce: angular.ISCEService, private $window: angular.IWindowService) {}
  }

  export class CeecConcordComponent implements angular.IComponentOptions {
    public controller: Function = CeecConcordComponentController
    public bindings: {[param: string]: string} = {
      'word': '<'
    }
    public templateUrl: string = 'partials/ceec-concord.html'
  }
}
