namespace app {
  "use strict";

  import s = fi.seco.sparql;

  export class CeecConcordComponentController extends ConcordComponentController {
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
}`;
    public open(letterId: string, text: string, event: MouseEvent): void {
      if (event.altKey)
        this.$window.open(
          'https://www.google.com/search?tbm=bks&q="' +
            encodeURIComponent(text) +
            '"',
          "_blank"
        );
      else
        this.$window.open(
          "http://h251.it.helsinki.fi/ceec/func/letterFunc.jsp?letterID=" +
            letterId,
          "_blank"
        );
    }
    constructor(
      private sparqlService: s.SparqlService,
      $sce: angular.ISCEService,
      $window: angular.IWindowService
    ) {
      super($sce, $window);
    }

    public doUpdate(limit: boolean = true): void {
      let regexS: string =
        "((?:\\W|^)" +
        this.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
        "(?:\\W|$))";
      this.sparqlService
        .query(
          "http://ldf.fi/ceec/sparql",
          CeecConcordComponentController.query
            .replace(
              /<REGEXP>/g,
              this.sparqlService.stringToSPARQLString(regexS)
            )
            .replace(
              /<QUERY>/g,
              this.sparqlService.stringToSPARQLString(this.word)
            ) + (limit ? "LIMIT 31" : "")
        )
        .then(
          (
            response: angular.IHttpPromiseCallbackArg<
              s.ISparqlBindingResult<{ [id: string]: s.ISparqlBinding }>
            >
          ) => {
            this.processResults(
              limit,
              response.data.results.bindings.map(r => {
                return {
                  id: r["id"].value.replace("http://ldf.fi/ceec/letter_", ""),
                  fulltext: r["fulltext"].value
                };
              })
            );
          }
        );
    }
  }

  export class CeecConcordComponent implements angular.IComponentOptions {
    public controller: Function = CeecConcordComponentController;
    public bindings: { [param: string]: string } = {
      word: "<"
    };
    public templateUrl: string = "partials/concord.html";
  }
}
