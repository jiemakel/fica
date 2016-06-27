namespace app {
  'use strict'

  import s = fi.seco.sparql

  class Snippet {
    constructor(public before: any, public match: string, public after: any) {}
  }

  export class CeecConcordComponentController {
    private static query: string = `
PREFIX text: <http://jena.apache.org/text#>
PREFIX cs: <http://ldf.fi/ceec-schema#>
SELECT DISTINCT ?id ?fulltext WHERE {
  BIND(CONCAT("\\"",REPLACE(<QUERY>,"([\\\\+\\\\-\\\\&\\\\|\\\\!\\\\(\\\\)\\\\{\\\\}\\\\[\\\\]\\\\^\\\\\\"\\\\~\\\\*\\\\?\\\\:\\\\/\\\\\\\\])","\\\\\\\\$1"),"\\"") AS ?query)
  ?id text:query ?query .
  ?id cs:fulltext ?fulltext .
}
LIMIT 30`
    public concordances: Snippet[]
    constructor(private sparqlService: s.SparqlService, private $sce: angular.ISCEService, private $stateParams: angular.ui.IStateParamsService) {
      sparqlService.query('http://ldf.fi/ceec/sparql', CeecConcordComponentController.query.replace(/<QUERY>/g, sparqlService.stringToSPARQLString($stateParams['word']))).then(
        (response: angular.IHttpPromiseCallbackArg<s.ISparqlBindingResult<{[id: string]: s.ISparqlBinding}>>) => {
          this.concordances = []
          response.data.results.bindings.forEach(r => {
            let tmp: HTMLDivElement = document.createElement('div')
            tmp.textContent = r['fulltext'].value
            let ft: string = tmp.innerHTML
            let regexp: RegExp = new RegExp('(' + $stateParams['word'].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + ')')
            let before: string
            let after: string
            let parts: string[] = ft.split(regexp)
            let lastBefore: string = parts[0].length > 60 ? parts[0].substring(parts[0].length - 60) : parts[0]
            for (let i: number = 2; i < parts.length; i += 2) {
              before = lastBefore
              if (parts[i].length > 60) {
                after = parts[i].substring(0, 60)
                lastBefore = parts[i].substring(parts[i].length - 60)
              } else {
                after = parts[i]
                lastBefore = parts[i]
              }
              this.concordances.push(new Snippet(this.$sce.trustAsHtml(before), $stateParams['word'], this.$sce.trustAsHtml(after)))
            }
          })
        }
      )
    }
  }

  export class CeecConcordComponent implements angular.IComponentOptions {
    public controller: Function = CeecConcordComponentController
    public templateUrl: string = 'partials/ceec-concord.html'
  }
}
