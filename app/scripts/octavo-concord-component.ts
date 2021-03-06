namespace app {
  "use strict";

  import s = fi.seco.sparql;

  export class OctavoConcordComponentController extends ConcordComponentController {
    public year: string;
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
          "http://h89.it.helsinki.fi/ceec/func/letterFunc.jsp?letterID=" +
            letterId,
          "_blank"
        );
    }
    constructor(
      private $q: angular.IQService,
      $sce: angular.ISCEService,
      $window: angular.IWindowService,
      private $http: angular.IHttpService
    ) {
      super($sce, $window);
    }
    public $onChanges(): void {
      if (this.year) this.update();
      else super.$onChanges();
    }

    public doUpdate(limit: boolean = true): void {
      let w = encodeURIComponent(this.word);
      let y = encodeURIComponent(this.year);
      let l = limit ? "31" : "-1";
      this.$q
        .all([
          this.$http.get(
            "https://vm0824.kaj.pouta.csc.fi/octavo/eebo/search?snippetLimit="+l+"&limit=" +
              l +
              "&query=" +
              w +
              "+publication_year:[1000%20TO%20" +
              y +
              "]+estc_language:English&timeout=60&field=author&field=publication_year&field=title"
          ),
          this.$http.get(
            "https://vm0824.kaj.pouta.csc.fi/octavo/bn/search?snippetLimit="+l+"&limit=" +
              l +
              "&query=" +
              w +
              "+dateStart:[10000000%20TO%20" +
              y +
              "9999]&timeout=60&field=author&field=title&field=dateStart"
          ),
          this.$http.get(
            "https://vm0824.kaj.pouta.csc.fi/octavo/ecco/search?snippetLimit="+l+"&limit=" +
              l +
              "&query=" +
              w +
              "+publication_year:[1000%20TO%20" +
              y +
              "]+estc_language:English&timeout=60&field=author&field=publication_year&field=title"
          ),
          this.$http.get(
            "https://vm0824.kaj.pouta.csc.fi/octavo/bln1800/search?snippetLimit="+l+"&limit=" +
              l +
              "&query=" +
              w +
              "+dateStart:[10000000%20TO%20" +
              y +
              "9999]&timeout=60&field=author&field=title&field=dateStart"
          )
        ])
        .then(response => {
          let results: IResult[] = [];
          response.forEach(response => {
            let name = response.data["queryMetadata"].index.name
            response.data["results"].docs.forEach(doc => {
              let author = doc.author ? doc.author : "?"
              let title = doc.title ? doc.title : "?"
              let year = doc.publication_year ? doc.publication_year : (doc.dateStart ? doc.dateStart : "?")
              doc.snippets.forEach(snippet =>
                results.push({
                  id: null,
                  fulltext: name+": "+author+": "+year+": "+title+": "+snippet.snippet.replace(/<\/?b>/g, "")
                })
              );
            });
          });
          this.processResults(limit, results);
        });
    }
  }

  export class OctavoConcordComponent implements angular.IComponentOptions {
    public controller: Function = OctavoConcordComponentController;
    public bindings: { [param: string]: string } = {
      word: "<",
      year: "<"
    };
    public templateUrl: string = "partials/concord.html";
  }
}
