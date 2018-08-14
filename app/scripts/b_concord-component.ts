namespace app {
  "use strict";

  export interface IResult {
    id: string;
    fulltext: string;
  }

  class Snippet {
    constructor(
      public before: any,
      public beforeSort: string,
      public beforeString,
      public match: string,
      public after: any,
      public afterSort: string,
      public afterString: string,
      public fulltext: any,
      public id: string
    ) {}
  }

  export abstract class ConcordComponentController {
    public word: string;
    public sortBy: number = 1;
    public sortDesc: boolean = false;
    public concordances: Snippet[];
    public more: boolean = false;
    public abstract open(
      letterId: string,
      text: string,
      event: MouseEvent
    ): void;
    public $onChanges(): void {
      if (this.word) this.update();
    }
    public setSortBy(index: number): void {
      if (this.sortBy === index) this.sortDesc = !this.sortDesc;
      this.sortBy = index;
      if (this.sortBy === 0)
        this.concordances.sort((a: Snippet, b: Snippet) => {
          return a.beforeSort < b.beforeSort
            ? this.sortDesc
              ? 1
              : -1
            : a.beforeSort > b.beforeSort
              ? this.sortDesc
                ? -1
                : 1
              : 0;
        });
      else if (this.sortBy === 1)
        this.concordances.sort(
          (a: Snippet, b: Snippet) =>
            a.match < b.match
              ? this.sortDesc
                ? 1
                : -1
              : a.match > b.match
                ? this.sortDesc
                  ? -1
                  : 1
                : 0
        );
      else
        this.concordances.sort(
          (a: Snippet, b: Snippet) =>
            a.afterSort < b.afterSort
              ? this.sortDesc
                ? 1
                : -1
              : a.afterSort > b.afterSort
                ? this.sortDesc
                  ? -1
                  : 1
                : 0
        );
    }
    constructor(
      protected $sce: angular.ISCEService,
      protected $window: angular.IWindowService
    ) {}

    protected abstract doUpdate(limit: boolean): void;

    public update(limit: boolean = true) {
      this.more = false;
      this.doUpdate(limit);
    }

    protected processResults(limit: boolean, results: IResult[]) {
      this.concordances = [];
      this.more = limit && results.length === 31;
      if (this.more) results.splice(0, 1);
      let regexS: string =
        "((?:\\W|^)" +
        this.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
        "(?:\\W|$))";
      results.forEach(r => {
        let tmp: HTMLDivElement = document.createElement("div");
        tmp.textContent = r.fulltext;
        let ft: string = tmp.innerHTML;
        let regexp: RegExp = new RegExp(regexS, "i");
        let before: string;
        let after: string;
        let parts: string[] = ft.split(regexp);
        let lastBefore: string;
        if (parts[0].length > 120) {
          lastBefore = parts[0].substring(parts[0].length - 120);
          lastBefore = lastBefore.substring(lastBefore.indexOf(" ") + 1);
        } else lastBefore = parts[0];
        if (parts[0].length > 1000) {
          let sentences: string[] = parts[0]
            .substring(parts[0].length - 500)
            .split(/([\.\?!])/);
          sentences[sentences.length - 1] =
            "<b>" + sentences[sentences.length - 1];
          ft =
            parts[0].substring(0, 500) +
            '<span style="color:red">...</span>' +
            sentences.join("");
        } else {
          let sentences: string[] = parts[0].split(/([\.\?!])/);
          sentences[sentences.length - 1] =
            "<b>" + sentences[sentences.length - 1];
          ft = sentences.join("");
        }
        for (let i: number = 2; i < parts.length; i += 2) {
          ft += '<span style="color:blue">';
          ft += parts[i - 1];
          ft += "</span>";
          before = lastBefore;
          if (parts[i].length > 120) {
            after = parts[i].substring(0, 120);
            after = after.substring(0, after.lastIndexOf(" "));
            lastBefore = parts[i].substring(parts[i].length - 120);
            lastBefore = lastBefore.substring(lastBefore.indexOf(" ") + 1);
          } else {
            after = parts[i];
            lastBefore = parts[i];
          }
          if (parts[i].length > 1000) {
            let sentences: string[] = parts[i]
              .substring(0, 500)
              .split(/([\.\?!])/);
            sentences[0] = sentences[0] + "</b>";
            ft += sentences.join("") + '<span style="color:red">...</span>';
            if (i + 2 < parts.length) {
              sentences = parts[i]
                .substring(parts[i].length - 500)
                .split(/([\.\?!])/);
              sentences[sentences.length - 1] =
                "<b>" + sentences[sentences.length - 1];
              ft += sentences.join("");
            } else ft += parts[i].substring(parts[i].length - 500);
          } else {
            let sentences: string[] = parts[i].split(/([\.\?!])/);
            sentences[0] = sentences[0] + "</b>";
            if (i + 2 < parts.length)
              sentences[sentences.length - 1] =
                "<b>" + sentences[sentences.length - 1];
            ft += sentences.join("");
          }
          tmp.innerHTML = before;
          before = tmp.textContent.replace(/\n/g, " ");
          let beforeS: string[] = before.split(/\s/);
          tmp.innerHTML = after;
          after = tmp.textContent.replace(/\n/g, " ");
          this.concordances.push(
            new Snippet(
              this.$sce.trustAsHtml(before),
              beforeS[beforeS.length - 1].toLowerCase(),
              before,
              parts[i - 1],
              this.$sce.trustAsHtml(after),
              after.toLowerCase(),
              after,
              this.$sce.trustAsHtml(ft),
              r.id
            )
          );
        }
      });
      this.sortDesc = !this.sortDesc;
      this.setSortBy(this.sortBy);
    }
  }
}
