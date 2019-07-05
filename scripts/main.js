var app;
(function (app) {
    'use strict';
    var m = angular.module('app', ['http-auth-interceptor', 'ui.router', 'ngFileUpload', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ngStorage', 'LocalStorageModule', 'fi.seco.sparql', 'cfp.hotkeys', 'focusOn']);
    m.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('main', {
            url: '/',
            template: '<main></main>'
        });
        $stateProvider.state('ceec-concord', {
            url: '/ceec-concord/:word',
            template: '<ceec-concord></ceec-concord>'
        });
    });
    m.config(function ($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('fica.');
    });
    m.config(function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('fica-q');
    });
    m.filter('trustAsHtml', ['$sce', function ($sce) {
            return function (htmlCode) {
                return $sce.trustAsHtml(htmlCode);
            };
        }]);
    var SelectOnFocusDirective = (function () {
        function SelectOnFocusDirective() {
            this.restrict = 'A';
        }/*<auto_generate>*/SelectOnFocusDirective.$inject = []; SelectOnFocusDirective.$componentName = 'selectOnFocus'/*</auto_generate>*/
        SelectOnFocusDirective.prototype.link = function (scope, element, attr) {
            element.on('mouseup', function (event) { event.preventDefault(); });
            element.on('focus', function (event) { this.select(); });
        };
        return SelectOnFocusDirective;
    }());/*<auto_generate>*/angular.module('app').directive('selectOnFocus',[function(){return new (Function.prototype.bind.apply(SelectOnFocusDirective,[null].concat(Array.prototype.slice.call(arguments))));}]);/*</auto_generate>*/
    app.SelectOnFocusDirective = SelectOnFocusDirective;
    var BindHtmlCompileDirective = (function () {
        function BindHtmlCompileDirective($compile) {
            var _this = this;
            this.$compile = $compile;
            this.restrict = 'A';
            this.link = function (scope, element, attrs) {
                scope.$watch(function () { return scope.$eval(attrs['bindHtmlCompile']); }, function (value) {
                    element.html(value && value.toString());
                    var compileScope = scope;
                    if (attrs['bindHtmlScope'])
                        compileScope = scope.$eval(attrs['bindHtmlScope']);
                    _this.$compile(element.contents())(compileScope);
                });
            };
        }/*<auto_generate>*/BindHtmlCompileDirective.$inject = ['$compile']; BindHtmlCompileDirective.$componentName = 'bindHtmlCompile'/*</auto_generate>*/
        return BindHtmlCompileDirective;
    }());/*<auto_generate>*/angular.module('app').directive('bindHtmlCompile',['$compile',function(){return new (Function.prototype.bind.apply(BindHtmlCompileDirective,[null].concat(Array.prototype.slice.call(arguments))));}]);/*</auto_generate>*/
    app.BindHtmlCompileDirective = BindHtmlCompileDirective;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QTtvQkFDcEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDakQsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDLENBQUE7UUFUdUQsQ0FBQztRQVUzRCwrQkFBQztJQUFELENBWkEsQUFZQyxJQUFBO0lBWlksNEJBQXdCLDJCQVlwQyxDQUFBO0FBRUgsQ0FBQyxFQWhEUyxHQUFHLEtBQUgsR0FBRyxRQWdEWiIsImZpbGUiOiJzY3JpcHRzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBhcHAge1xuICAndXNlIHN0cmljdCdcbiAgbGV0IG06IGFuZ3VsYXIuSU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbICdodHRwLWF1dGgtaW50ZXJjZXB0b3InLCAndWkucm91dGVyJywgJ25nRmlsZVVwbG9hZCcsICd1aS5ib290c3RyYXAnLCAndWkuYm9vdHN0cmFwLnRwbHMnLCAnbmdTdG9yYWdlJywgJ0xvY2FsU3RvcmFnZU1vZHVsZScsICdmaS5zZWNvLnNwYXJxbCcsICdjZnAuaG90a2V5cycsICdmb2N1c09uJyBdKVxuICBtLmNvbmZpZygoJHN0YXRlUHJvdmlkZXI6IGFuZ3VsYXIudWkuSVN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcjogYW5ndWxhci51aS5JVXJsUm91dGVyUHJvdmlkZXIpID0+IHtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJylcbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbWFpbicsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgdGVtcGxhdGU6ICc8bWFpbj48L21haW4+J1xuICAgIH0pXG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2NlZWMtY29uY29yZCcsIHtcbiAgICAgIHVybDogJy9jZWVjLWNvbmNvcmQvOndvcmQnLFxuICAgICAgdGVtcGxhdGU6ICc8Y2VlYy1jb25jb3JkPjwvY2VlYy1jb25jb3JkPidcbiAgICB9KVxuICB9KVxuICBtLmNvbmZpZygoJGxvY2FsU3RvcmFnZVByb3ZpZGVyKSA9PiB7XG4gICAgJGxvY2FsU3RvcmFnZVByb3ZpZGVyLnNldEtleVByZWZpeCgnZmljYS4nKVxuICB9KVxuICBtLmNvbmZpZygobG9jYWxTdG9yYWdlU2VydmljZVByb3ZpZGVyKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlU2VydmljZVByb3ZpZGVyLnNldFByZWZpeCgnZmljYS1xJylcbiAgfSlcbiAgbS5maWx0ZXIoJ3RydXN0QXNIdG1sJywgWyckc2NlJywgZnVuY3Rpb24oJHNjZTogYW5ndWxhci5JU0NFU2VydmljZSk6IChodG1sQ29kZTogc3RyaW5nKSA9PiBhbnkge1xuICAgIHJldHVybiBmdW5jdGlvbihodG1sQ29kZTogc3RyaW5nKTogYW55IHtcbiAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sKGh0bWxDb2RlKVxuICAgIH1cbiAgfV0pXG5cbiAgZXhwb3J0IGNsYXNzIFNlbGVjdE9uRm9jdXNEaXJlY3RpdmUge1xuICAgIHB1YmxpYyByZXN0cmljdDogc3RyaW5nID0gJ0EnXG4gICAgcHVibGljIGxpbmsoc2NvcGU6IGFuZ3VsYXIuSVNjb3BlLCBlbGVtZW50OiBKUXVlcnksIGF0dHI6IGFuZ3VsYXIuSUF0dHJpYnV0ZXMpOiB2b2lkIHtcbiAgICAgIGVsZW1lbnQub24oJ21vdXNldXAnLCBmdW5jdGlvbiAoZXZlbnQ6IEpRdWVyeUV2ZW50T2JqZWN0KTogdm9pZCB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0pXG4gICAgICBlbGVtZW50Lm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldmVudDogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHsgdGhpcy5zZWxlY3QoKTsgfSlcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQmluZEh0bWxDb21waWxlRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgcmVzdHJpY3Q6IHN0cmluZyA9ICdBJ1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJGNvbXBpbGU6IGFuZ3VsYXIuSUNvbXBpbGVTZXJ2aWNlKSB7fVxuICAgIHB1YmxpYyBsaW5rOiAoLi4uYW55KSA9PiB2b2lkID0gKHNjb3BlOiBhbmd1bGFyLklTY29wZSwgZWxlbWVudDogSlF1ZXJ5LCBhdHRyczogYW5ndWxhci5JQXR0cmlidXRlcykgPT4ge1xuICAgICAgc2NvcGUuJHdhdGNoKCgpID0+IHNjb3BlLiRldmFsKGF0dHJzWydiaW5kSHRtbENvbXBpbGUnXSksICh2YWx1ZSkgPT4ge1xuICAgICAgICBlbGVtZW50Lmh0bWwodmFsdWUgJiYgdmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgbGV0IGNvbXBpbGVTY29wZTogYW5ndWxhci5JU2NvcGUgPSBzY29wZVxuICAgICAgICBpZiAoYXR0cnNbJ2JpbmRIdG1sU2NvcGUnXSlcbiAgICAgICAgICBjb21waWxlU2NvcGUgPSBzY29wZS4kZXZhbChhdHRyc1snYmluZEh0bWxTY29wZSddKVxuICAgICAgICB0aGlzLiRjb21waWxlKGVsZW1lbnQuY29udGVudHMoKSkoY29tcGlsZVNjb3BlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxufVxuIl19

var app;
(function (app) {
    "use strict";
    var Snippet = (function () {
        function Snippet(before, beforeSort, beforeString, match, after, afterSort, afterString, fulltext, id) {
            this.before = before;
            this.beforeSort = beforeSort;
            this.beforeString = beforeString;
            this.match = match;
            this.after = after;
            this.afterSort = afterSort;
            this.afterString = afterString;
            this.fulltext = fulltext;
            this.id = id;
        }
        return Snippet;
    }());
    var ConcordComponentController = (function () {
        function ConcordComponentController($sce, $window) {
            this.$sce = $sce;
            this.$window = $window;
            this.sortBy = 1;
            this.sortDesc = false;
            this.more = false;
        }/*<auto_generate>*/ConcordComponentController.$inject = ['$sce','$window']; ConcordComponentController.$componentName = 'ConcordComponentController'/*</auto_generate>*/
        ConcordComponentController.prototype.$onChanges = function () {
            if (this.word)
                this.update();
        };
        ConcordComponentController.prototype.setSortBy = function (index) {
            var _this = this;
            if (this.sortBy === index)
                this.sortDesc = !this.sortDesc;
            this.sortBy = index;
            if (this.sortBy === 0)
                this.concordances.sort(function (a, b) {
                    return a.beforeSort < b.beforeSort
                        ? _this.sortDesc
                            ? 1
                            : -1
                        : a.beforeSort > b.beforeSort
                            ? _this.sortDesc
                                ? -1
                                : 1
                            : 0;
                });
            else if (this.sortBy === 1)
                this.concordances.sort(function (a, b) {
                    return a.match < b.match
                        ? _this.sortDesc
                            ? 1
                            : -1
                        : a.match > b.match
                            ? _this.sortDesc
                                ? -1
                                : 1
                            : 0;
                });
            else
                this.concordances.sort(function (a, b) {
                    return a.afterSort < b.afterSort
                        ? _this.sortDesc
                            ? 1
                            : -1
                        : a.afterSort > b.afterSort
                            ? _this.sortDesc
                                ? -1
                                : 1
                            : 0;
                });
        };
        ConcordComponentController.prototype.update = function (limit) {
            if (limit === void 0) { limit = true; }
            this.more = false;
            this.doUpdate(limit);
        };
        ConcordComponentController.prototype.processResults = function (limit, results) {
            var _this = this;
            this.concordances = [];
            this.more = limit && results.length === 31;
            if (this.more)
                results.splice(0, 1);
            var regexS = "((?:\\W|^)" +
                this.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
                "(?:\\W|$))";
            results.forEach(function (r) {
                var tmp = document.createElement("div");
                tmp.textContent = r.fulltext;
                var ft = tmp.innerHTML;
                var regexp = new RegExp(regexS, "i");
                var before;
                var after;
                var parts = ft.split(regexp);
                var lastBefore;
                if (parts[0].length > 120) {
                    lastBefore = parts[0].substring(parts[0].length - 120);
                    lastBefore = lastBefore.substring(lastBefore.indexOf(" ") + 1);
                }
                else
                    lastBefore = parts[0];
                if (parts[0].length > 1000) {
                    var sentences = parts[0]
                        .substring(parts[0].length - 500)
                        .split(/([\.\?!])/);
                    sentences[sentences.length - 1] =
                        "<b>" + sentences[sentences.length - 1];
                    ft =
                        parts[0].substring(0, 500) +
                            '<span style="color:red">...</span>' +
                            sentences.join("");
                }
                else {
                    var sentences = parts[0].split(/([\.\?!])/);
                    sentences[sentences.length - 1] =
                        "<b>" + sentences[sentences.length - 1];
                    ft = sentences.join("");
                }
                for (var i = 2; i < parts.length; i += 2) {
                    ft += '<span style="color:blue">';
                    ft += parts[i - 1];
                    ft += "</span>";
                    before = lastBefore;
                    if (parts[i].length > 120) {
                        after = parts[i].substring(0, 120);
                        after = after.substring(0, after.lastIndexOf(" "));
                        lastBefore = parts[i].substring(parts[i].length - 120);
                        lastBefore = lastBefore.substring(lastBefore.indexOf(" ") + 1);
                    }
                    else {
                        after = parts[i];
                        lastBefore = parts[i];
                    }
                    if (parts[i].length > 1000) {
                        var sentences = parts[i]
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
                        }
                        else
                            ft += parts[i].substring(parts[i].length - 500);
                    }
                    else {
                        var sentences = parts[i].split(/([\.\?!])/);
                        sentences[0] = sentences[0] + "</b>";
                        if (i + 2 < parts.length)
                            sentences[sentences.length - 1] =
                                "<b>" + sentences[sentences.length - 1];
                        ft += sentences.join("");
                    }
                    tmp.innerHTML = before;
                    before = tmp.textContent.replace(/\n/g, " ");
                    var beforeS = before.split(/\s/);
                    tmp.innerHTML = after;
                    after = tmp.textContent.replace(/\n/g, " ");
                    _this.concordances.push(new Snippet(_this.$sce.trustAsHtml(before), beforeS[beforeS.length - 1].toLowerCase(), before, parts[i - 1], _this.$sce.trustAsHtml(after), after.toLowerCase(), after, _this.$sce.trustAsHtml(ft), r.id));
                }
            });
            this.sortDesc = !this.sortDesc;
            this.setSortBy(this.sortBy);
        };
        return ConcordComponentController;
    }());/*<auto_generate>*/angular.module('app').controller('ConcordComponentController',ConcordComponentController);/*</auto_generate>*/
    app.ConcordComponentController = ConcordComponentController;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvYl9jb25jb3JkLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0EyTFo7QUEzTEQsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNiLFlBQVksQ0FBQztJQU9iO1FBQ0UsaUJBQ1MsTUFBVyxFQUNYLFVBQWtCLEVBQ2xCLFlBQVksRUFDWixLQUFhLEVBQ2IsS0FBVSxFQUNWLFNBQWlCLEVBQ2pCLFdBQW1CLEVBQ25CLFFBQWEsRUFDYixFQUFVO1lBUlYsV0FBTSxHQUFOLE1BQU0sQ0FBSztZQUNYLGVBQVUsR0FBVixVQUFVLENBQVE7WUFDbEIsaUJBQVksR0FBWixZQUFZLENBQUE7WUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQ2IsVUFBSyxHQUFMLEtBQUssQ0FBSztZQUNWLGNBQVMsR0FBVCxTQUFTLENBQVE7WUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7WUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBSztZQUNiLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDaEIsQ0FBQztRQUNOLGNBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQUVEO1FBd0RFLG9DQUNZLElBQXlCLEVBQ3pCLE9BQStCO1lBRC9CLFNBQUksR0FBSixJQUFJLENBQXFCO1lBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQXdCO1lBeERwQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1lBQ25CLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFFMUIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQXNEMUIsQ0FBQztRQWhERywrQ0FBVSxHQUFqQjtZQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFDTSw4Q0FBUyxHQUFoQixVQUFpQixLQUFhO1lBQTlCLGlCQXlDQztZQXhDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQztnQkFBQyxJ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TSxFQUNOLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1osS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQzVCLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFDbkIsS0FBSyxFQUNMLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUN6QixDQUFDLENBQUMsRUFBRSxDQUNMLENBQ0YsQ0FBQztnQkFDSixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0gsaUNBQUM7SUFBRCxDQXBLQSxBQW9LQyxJQUFBO0lBcEtxQiw4QkFBMEIsNkJBb0svQyxDQUFBO0FBQ0gsQ0FBQyxFQTNMUyxHQUFHLEtBQUgsR0FBRyxRQTJMWiIsImZpbGUiOiJzY3JpcHRzL2JfY29uY29yZC1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYXBwIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJUmVzdWx0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGZ1bGx0ZXh0OiBzdHJpbmc7XG4gIH1cblxuICBjbGFzcyBTbmlwcGV0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBiZWZvcmU6IGFueSxcbiAgICAgIHB1YmxpYyBiZWZvcmVTb3J0OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgYmVmb3JlU3RyaW5nLFxuICAgICAgcHVibGljIG1hdGNoOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgYWZ0ZXI6IGFueSxcbiAgICAgIHB1YmxpYyBhZnRlclNvcnQ6IHN0cmluZyxcbiAgICAgIHB1YmxpYyBhZnRlclN0cmluZzogc3RyaW5nLFxuICAgICAgcHVibGljIGZ1bGx0ZXh0OiBhbnksXG4gICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xuICAgICkge31cbiAgfVxuXG4gIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb25jb3JkQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgcHVibGljIHdvcmQ6IHN0cmluZztcbiAgICBwdWJsaWMgc29ydEJ5OiBudW1iZXIgPSAxO1xuICAgIHB1YmxpYyBzb3J0RGVzYzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBjb25jb3JkYW5jZXM6IFNuaXBwZXRbXTtcbiAgICBwdWJsaWMgbW9yZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBvcGVuKFxuICAgICAgbGV0dGVySWQ6IHN0cmluZyxcbiAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgIGV2ZW50OiBNb3VzZUV2ZW50XG4gICAgKTogdm9pZDtcbiAgICBwdWJsaWMgJG9uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLndvcmQpIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRTb3J0QnkoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuc29ydEJ5ID09PSBpbmRleCkgdGhpcy5zb3J0RGVzYyA9ICF0aGlzLnNvcnREZXNjO1xuICAgICAgdGhpcy5zb3J0QnkgPSBpbmRleDtcbiAgICAgIGlmICh0aGlzLnNvcnRCeSA9PT0gMClcbiAgICAgICAgdGhpcy5jb25jb3JkYW5jZXMuc29ydCgoYTogU25pcHBldCwgYjogU25pcHBldCkgPT4ge1xuICAgICAgICAgIHJldHVybiBhLmJlZm9yZVNvcnQgPCBiLmJlZm9yZVNvcnRcbiAgICAgICAgICAgID8gdGhpcy5zb3J0RGVzY1xuICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgOiAtMVxuICAgICAgICAgICAgOiBhLmJlZm9yZVNvcnQgPiBiLmJlZm9yZVNvcnRcbiAgICAgICAgICAgICAgPyB0aGlzLnNvcnREZXNjXG4gICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgIDogMVxuICAgICAgICAgICAgICA6IDA7XG4gICAgICAgIH0pO1xuICAgICAgZWxzZSBpZiAodGhpcy5zb3J0QnkgPT09IDEpXG4gICAgICAgIHRoaXMuY29uY29yZGFuY2VzLnNvcnQoXG4gICAgICAgICAgKGE6IFNuaXBwZXQsIGI6IFNuaXBwZXQpID0+XG4gICAgICAgICAgICBhLm1hdGNoIDwgYi5tYXRjaFxuICAgICAgICAgICAgICA/IHRoaXMuc29ydERlc2NcbiAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICA6IC0xXG4gICAgICAgICAgICAgIDogYS5tYXRjaCA+IGIubWF0Y2hcbiAgICAgICAgICAgICAgICA/IHRoaXMuc29ydERlc2NcbiAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgIDogMVxuICAgICAgICAgICAgICAgIDogMFxuICAgICAgICApO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmNvbmNvcmRhbmNlcy5zb3J0KFxuICAgICAgICAgIChhOiBTbmlwcGV0LCBiOiBTbmlwcGV0KSA9PlxuICAgICAgICAgICAgYS5hZnRlclNvcnQgPCBiLmFmdGVyU29ydFxuICAgICAgICAgICAgICA/IHRoaXMuc29ydERlc2NcbiAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICA6IC0xXG4gICAgICAgICAgICAgIDogYS5hZnRlclNvcnQgPiBiLmFmdGVyU29ydFxuICAgICAgICAgICAgICAgID8gdGhpcy5zb3J0RGVzY1xuICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgOiAxXG4gICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJvdGVjdGVkICRzY2U6IGFuZ3VsYXIuSVNDRVNlcnZpY2UsXG4gICAgICBwcm90ZWN0ZWQgJHdpbmRvdzogYW5ndWxhci5JV2luZG93U2VydmljZVxuICAgICkge31cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkb1VwZGF0ZShsaW1pdDogYm9vbGVhbik6IHZvaWQ7XG5cbiAgICBwdWJsaWMgdXBkYXRlKGxpbWl0OiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgdGhpcy5tb3JlID0gZmFsc2U7XG4gICAgICB0aGlzLmRvVXBkYXRlKGxpbWl0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcHJvY2Vzc1Jlc3VsdHMobGltaXQ6IGJvb2xlYW4sIHJlc3VsdHM6IElSZXN1bHRbXSkge1xuICAgICAgdGhpcy5jb25jb3JkYW5jZXMgPSBbXTtcbiAgICAgIHRoaXMubW9yZSA9IGxpbWl0ICYmIHJlc3VsdHMubGVuZ3RoID09PSAzMTtcbiAgICAgIGlmICh0aGlzLm1vcmUpIHJlc3VsdHMuc3BsaWNlKDAsIDEpO1xuICAgICAgbGV0IHJlZ2V4Uzogc3RyaW5nID1cbiAgICAgICAgXCIoKD86XFxcXFd8XilcIiArXG4gICAgICAgIHRoaXMud29yZC5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csIFwiXFxcXCQmXCIpICtcbiAgICAgICAgXCIoPzpcXFxcV3wkKSlcIjtcbiAgICAgIHJlc3VsdHMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgbGV0IHRtcDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0bXAudGV4dENvbnRlbnQgPSByLmZ1bGx0ZXh0O1xuICAgICAgICBsZXQgZnQ6IHN0cmluZyA9IHRtcC5pbm5lckhUTUw7XG4gICAgICAgIGxldCByZWdleHA6IFJlZ0V4cCA9IG5ldyBSZWdFeHAocmVnZXhTLCBcImlcIik7XG4gICAgICAgIGxldCBiZWZvcmU6IHN0cmluZztcbiAgICAgICAgbGV0IGFmdGVyOiBzdHJpbmc7XG4gICAgICAgIGxldCBwYXJ0czogc3RyaW5nW10gPSBmdC5zcGxpdChyZWdleHApO1xuICAgICAgICBsZXQgbGFzdEJlZm9yZTogc3RyaW5nO1xuICAgICAgICBpZiAocGFydHNbMF0ubGVuZ3RoID4gMTIwKSB7XG4gICAgICAgICAgbGFzdEJlZm9yZSA9IHBhcnRzWzBdLnN1YnN0cmluZyhwYXJ0c1swXS5sZW5ndGggLSAxMjApO1xuICAgICAgICAgIGxhc3RCZWZvcmUgPSBsYXN0QmVmb3JlLnN1YnN0cmluZyhsYXN0QmVmb3JlLmluZGV4T2YoXCIgXCIpICsgMSk7XG4gICAgICAgIH0gZWxzZSBsYXN0QmVmb3JlID0gcGFydHNbMF07XG4gICAgICAgIGlmIChwYXJ0c1swXS5sZW5ndGggPiAxMDAwKSB7XG4gICAgICAgICAgbGV0IHNlbnRlbmNlczogc3RyaW5nW10gPSBwYXJ0c1swXVxuICAgICAgICAgICAgLnN1YnN0cmluZyhwYXJ0c1swXS5sZW5ndGggLSA1MDApXG4gICAgICAgICAgICAuc3BsaXQoLyhbXFwuXFw/IV0pLyk7XG4gICAgICAgICAgc2VudGVuY2VzW3NlbnRlbmNlcy5sZW5ndGggLSAxXSA9XG4gICAgICAgICAgICBcIjxiPlwiICsgc2VudGVuY2VzW3NlbnRlbmNlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBmdCA9XG4gICAgICAgICAgICBwYXJ0c1swXS5zdWJzdHJpbmcoMCwgNTAwKSArXG4gICAgICAgICAgICAnPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWRcIj4uLi48L3NwYW4+JyArXG4gICAgICAgICAgICBzZW50ZW5jZXMuam9pbihcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgc2VudGVuY2VzOiBzdHJpbmdbXSA9IHBhcnRzWzBdLnNwbGl0KC8oW1xcLlxcPyFdKS8pO1xuICAgICAgICAgIHNlbnRlbmNlc1tzZW50ZW5jZXMubGVuZ3RoIC0gMV0gPVxuICAgICAgICAgICAgXCI8Yj5cIiArIHNlbnRlbmNlc1tzZW50ZW5jZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgZnQgPSBzZW50ZW5jZXMuam9pbihcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAyOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICBmdCArPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjpibHVlXCI+JztcbiAgICAgICAgICBmdCArPSBwYXJ0c1tpIC0gMV07XG4gICAgICAgICAgZnQgKz0gXCI8L3NwYW4+XCI7XG4gICAgICAgICAgYmVmb3JlID0gbGFzdEJlZm9yZTtcbiAgICAgICAgICBpZiAocGFydHNbaV0ubGVuZ3RoID4gMTIwKSB7XG4gICAgICAgICAgICBhZnRlciA9IHBhcnRzW2ldLnN1YnN0cmluZygwLCAxMjApO1xuICAgICAgICAgICAgYWZ0ZXIgPSBhZnRlci5zdWJzdHJpbmcoMCwgYWZ0ZXIubGFzdEluZGV4T2YoXCIgXCIpKTtcbiAgICAgICAgICAgIGxhc3RCZWZvcmUgPSBwYXJ0c1tpXS5zdWJzdHJpbmcocGFydHNbaV0ubGVuZ3RoIC0gMTIwKTtcbiAgICAgICAgICAgIGxhc3RCZWZvcmUgPSBsYXN0QmVmb3JlLnN1YnN0cmluZyhsYXN0QmVmb3JlLmluZGV4T2YoXCIgXCIpICsgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFmdGVyID0gcGFydHNbaV07XG4gICAgICAgICAgICBsYXN0QmVmb3JlID0gcGFydHNbaV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXJ0c1tpXS5sZW5ndGggPiAxMDAwKSB7XG4gICAgICAgICAgICBsZXQgc2VudGVuY2VzOiBzdHJpbmdbXSA9IHBhcnRzW2ldXG4gICAgICAgICAgICAgIC5zdWJzdHJpbmcoMCwgNTAwKVxuICAgICAgICAgICAgICAuc3BsaXQoLyhbXFwuXFw/IV0pLyk7XG4gICAgICAgICAgICBzZW50ZW5jZXNbMF0gPSBzZW50ZW5jZXNbMF0gKyBcIjwvYj5cIjtcbiAgICAgICAgICAgIGZ0ICs9IHNlbnRlbmNlcy5qb2luKFwiXCIpICsgJzxzcGFuIHN0eWxlPVwiY29sb3I6cmVkXCI+Li4uPC9zcGFuPic7XG4gICAgICAgICAgICBpZiAoaSArIDIgPCBwYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgc2VudGVuY2VzID0gcGFydHNbaV1cbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKHBhcnRzW2ldLmxlbmd0aCAtIDUwMClcbiAgICAgICAgICAgICAgICAuc3BsaXQoLyhbXFwuXFw/IV0pLyk7XG4gICAgICAgICAgICAgIHNlbnRlbmNlc1tzZW50ZW5jZXMubGVuZ3RoIC0gMV0gPVxuICAgICAgICAgICAgICAgIFwiPGI+XCIgKyBzZW50ZW5jZXNbc2VudGVuY2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICBmdCArPSBzZW50ZW5jZXMuam9pbihcIlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBmdCArPSBwYXJ0c1tpXS5zdWJzdHJpbmcocGFydHNbaV0ubGVuZ3RoIC0gNTAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNlbnRlbmNlczogc3RyaW5nW10gPSBwYXJ0c1tpXS5zcGxpdCgvKFtcXC5cXD8hXSkvKTtcbiAgICAgICAgICAgIHNlbnRlbmNlc1swXSA9IHNlbnRlbmNlc1swXSArIFwiPC9iPlwiO1xuICAgICAgICAgICAgaWYgKGkgKyAyIDwgcGFydHMubGVuZ3RoKVxuICAgICAgICAgICAgICBzZW50ZW5jZXNbc2VudGVuY2VzLmxlbmd0aCAtIDFdID1cbiAgICAgICAgICAgICAgICBcIjxiPlwiICsgc2VudGVuY2VzW3NlbnRlbmNlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGZ0ICs9IHNlbnRlbmNlcy5qb2luKFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gYmVmb3JlO1xuICAgICAgICAgIGJlZm9yZSA9IHRtcC50ZXh0Q29udGVudC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpO1xuICAgICAgICAgIGxldCBiZWZvcmVTOiBzdHJpbmdbXSA9IGJlZm9yZS5zcGxpdCgvXFxzLyk7XG4gICAgICAgICAgdG1wLmlubmVySFRNTCA9IGFmdGVyO1xuICAgICAgICAgIGFmdGVyID0gdG1wLnRleHRDb250ZW50LnJlcGxhY2UoL1xcbi9nLCBcIiBcIik7XG4gICAgICAgICAgdGhpcy5jb25jb3JkYW5jZXMucHVzaChcbiAgICAgICAgICAgIG5ldyBTbmlwcGV0KFxuICAgICAgICAgICAgICB0aGlzLiRzY2UudHJ1c3RBc0h0bWwoYmVmb3JlKSxcbiAgICAgICAgICAgICAgYmVmb3JlU1tiZWZvcmVTLmxlbmd0aCAtIDFdLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgIGJlZm9yZSxcbiAgICAgICAgICAgICAgcGFydHNbaSAtIDFdLFxuICAgICAgICAgICAgICB0aGlzLiRzY2UudHJ1c3RBc0h0bWwoYWZ0ZXIpLFxuICAgICAgICAgICAgICBhZnRlci50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICBhZnRlcixcbiAgICAgICAgICAgICAgdGhpcy4kc2NlLnRydXN0QXNIdG1sKGZ0KSxcbiAgICAgICAgICAgICAgci5pZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zb3J0RGVzYyA9ICF0aGlzLnNvcnREZXNjO1xuICAgICAgdGhpcy5zZXRTb3J0QnkodGhpcy5zb3J0QnkpO1xuICAgIH1cbiAgfVxufVxuIl19

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    "use strict";
    var CeecConcordComponentController = (function (_super) {
        __extends(CeecConcordComponentController, _super);
        function CeecConcordComponentController(sparqlService, $sce, $window) {
            _super.call(this, $sce, $window);
            this.sparqlService = sparqlService;
        }/*<auto_generate>*/CeecConcordComponentController.$inject = ['sparqlService','$sce','$window']; CeecConcordComponentController.$componentName = 'CeecConcordComponentController'/*</auto_generate>*/
        CeecConcordComponentController.prototype.open = function (letterId, text, event) {
            if (event.altKey)
                this.$window.open('https://www.google.com/search?tbm=bks&q="' +
                    encodeURIComponent(text) +
                    '"', "_blank");
            else
                this.$window.open("http://h251.it.helsinki.fi/ceec/func/letterFunc.jsp?letterID=" +
                    letterId, "_blank");
        };
        CeecConcordComponentController.prototype.doUpdate = function (limit) {
            var _this = this;
            if (limit === void 0) { limit = true; }
            var regexS = "((?:\\W|^)" +
                this.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
                "(?:\\W|$))";
            this.sparqlService
                .query("http://ldf.fi/ceec/sparql", CeecConcordComponentController.query
                .replace(/<REGEXP>/g, this.sparqlService.stringToSPARQLString(regexS))
                .replace(/<QUERY>/g, this.sparqlService.stringToSPARQLString(this.word)) + (limit ? "LIMIT 31" : ""))
                .then(function (response) {
                _this.processResults(limit, response.data.results.bindings.map(function (r) {
                    return {
                        id: r["id"].value.replace("http://ldf.fi/ceec/letter_", ""),
                        fulltext: r["fulltext"].value
                    };
                }));
            });
        };
        CeecConcordComponentController.query = "\nPREFIX text: <http://jena.apache.org/text#>\nPREFIX cs: <http://ldf.fi/ceec-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT DISTINCT ?id ?fulltext WHERE {\n  BIND(CONCAT(\"\\\"\",REPLACE(<QUERY>,\"([\\\\+\\\\-\\\\&\\\\|\\\\!\\\\(\\\\)\\\\{\\\\}\\\\[\\\\]\\\\^\\\\\\\"\\\\~\\\\*\\\\?\\\\:\\\\/\\\\\\\\])\",\"\\\\\\\\$1\"),\"\\\"\") AS ?query)\n  ?id text:query (?query 1000000000) .\n  ?id cs:fulltext ?fulltext .\n  ?id cs:year ?year .\n  FILTER (REGEX(?fulltext, <REGEXP>,\"i\") && xsd:int(?year)>=1640 && xsd:int(?year)<1660)\n}";
        return CeecConcordComponentController;
    }(app.ConcordComponentController));/*<auto_generate>*/angular.module('app').controller('CeecConcordComponentController',CeecConcordComponentController);/*</auto_generate>*/
    app.CeecConcordComponentController = CeecConcordComponentController;
    var CeecConcordComponent = (function () {
        function CeecConcordComponent() {
            this.controller = CeecConcordComponentController;
            this.bindings = {
                word: "<"
            };
            this.templateUrl = "partials/concord.html";
        }/*<auto_generate>*/CeecConcordComponent.$inject = []; CeecConcordComponent.$componentName = 'ceecConcord'/*</auto_generate>*/
        return CeecConcordComponent;
    }());/*<auto_generate>*/angular.module('app').component('ceecConcord',new CeecConcordComponent());/*</auto_generate>*/
    app.CeecConcordComponent = CeecConcordComponent;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvY2VlYy1jb25jb3JkLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQVUsR0FBRyxDQXFGWjtBQXJGRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ2IsWUFBWSxDQUFDO0lBSWI7UUFBb0Qsa0RBQTBCO1FBMkI1RSx3Q0FDVSxhQUE4QixFQUN0QyxJQUF5QixFQUN6QixPQUErQjtZQUUvQixrQkFBTSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFKYixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFLeEMsQ0FBQztRQXJCTSw2Q0FBSSxHQUFYLFVBQVksUUFBZ0IsRUFBRSxJQUFZLEVBQUUsS0FBaUI7WUFDM0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDZiwyQ0FBMkM7b0JBQ3pDLGtCQUFrQixDQUFDLElBQUksQ0FBQztvQkFDeEIsR0FBRyxFQUNMLFFBQVEsQ0FDVCxDQUFDO1lBQ0osSUFBSTtnQkFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDZiwrREFBK0Q7b0JBQzdELFFBQVEsRUFDVixRQUFRLENBQ1QsQ0FBQztRQUNOLENBQUM7UUFTTSxpREFBUSxHQUFmLFVBQWdCLEtBQXFCO1lBQXJDLGlCQW1DQztZQW5DZSxxQkFBcUIsR0FBckIsWUFBcUI7WUFDbkMsSUFBSSxNQUFNLEdBQ1IsWUFBWTtnQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUM7Z0JBQ25ELFlBQVksQ0FBQztZQUNmLElBQUksQ0FBQyxhQUFhO2lCQUNmLEtBQUssQ0FDSiwyQkFBMkIsRUFDM0IsOEJBQThCLENBQUMsS0FBSztpQkFDakMsT0FBTyxDQUNOLFdBQVcsRUFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUNoRDtpQkFDQSxPQUFPLENBQ04sVUFBVSxFQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNuRCxHQUFHLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FDaEM7aUJBQ0EsSUFBSSxDQUNILFVBQ0UsUUFFQztnQkFFRCxLQUFJLENBQUMsY0FBYyxDQUNqQixLQUFLLEVBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQzt3QkFDTCxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxDQUFDO3dCQUMzRCxRQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7cUJBQzlCLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztZQUNKLENBQUMsQ0FDRixDQUFDO1FBQ04sQ0FBQztRQXJFYyxvQ0FBSyxHQUFXLHdpQkFVakMsQ0FBQztRQTRERCxxQ0FBQztJQUFELENBdkVBLEFBdUVDLENBdkVtRCw4QkFBMEIsR0F1RTdFO0lBdkVZLGtDQUE4QixpQ0F1RTFDLENBQUE7SUFFRDtRQUFBO1lBQ1MsZUFBVSxHQUFhLDhCQUE4QixDQUFDO1lBQ3RELGFBQVEsR0FBZ0M7Z0JBQzdDLElBQUksRUFBRSxHQUFHO2FBQ1YsQ0FBQztZQUNLLGdCQUFXLEdBQVcsdUJBQXVCLENBQUM7UUFDdkQsQ0FBQztRQUFELDJCQUFDO0lBQUQsQ0FOQSxBQU1DLElBQUE7SUFOWSx3QkFBb0IsdUJBTWhDLENBQUE7QUFDSCxDQUFDLEVBckZTLEdBQUcsS0FBSCxHQUFHLFFBcUZaIiwiZmlsZSI6InNjcmlwdHMvY2VlYy1jb25jb3JkLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBhcHAge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpbXBvcnQgcyA9IGZpLnNlY28uc3BhcnFsO1xuXG4gIGV4cG9ydCBjbGFzcyBDZWVjQ29uY29yZENvbXBvbmVudENvbnRyb2xsZXIgZXh0ZW5kcyBDb25jb3JkQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcXVlcnk6IHN0cmluZyA9IGBcblBSRUZJWCB0ZXh0OiA8aHR0cDovL2plbmEuYXBhY2hlLm9yZy90ZXh0Iz5cblBSRUZJWCBjczogPGh0dHA6Ly9sZGYuZmkvY2VlYy1zY2hlbWEjPlxuUFJFRklYIHhzZDogPGh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIz5cblNFTEVDVCBESVNUSU5DVCA/aWQgP2Z1bGx0ZXh0IFdIRVJFIHtcbiAgQklORChDT05DQVQoXCJcXFxcXCJcIixSRVBMQUNFKDxRVUVSWT4sXCIoW1xcXFxcXFxcK1xcXFxcXFxcLVxcXFxcXFxcJlxcXFxcXFxcfFxcXFxcXFxcIVxcXFxcXFxcKFxcXFxcXFxcKVxcXFxcXFxce1xcXFxcXFxcfVxcXFxcXFxcW1xcXFxcXFxcXVxcXFxcXFxcXlxcXFxcXFxcXFxcXFwiXFxcXFxcXFx+XFxcXFxcXFwqXFxcXFxcXFw/XFxcXFxcXFw6XFxcXFxcXFwvXFxcXFxcXFxcXFxcXFxcXF0pXCIsXCJcXFxcXFxcXFxcXFxcXFxcJDFcIiksXCJcXFxcXCJcIikgQVMgP3F1ZXJ5KVxuICA/aWQgdGV4dDpxdWVyeSAoP3F1ZXJ5IDEwMDAwMDAwMDApIC5cbiAgP2lkIGNzOmZ1bGx0ZXh0ID9mdWxsdGV4dCAuXG4gID9pZCBjczp5ZWFyID95ZWFyIC5cbiAgRklMVEVSIChSRUdFWCg/ZnVsbHRleHQsIDxSRUdFWFA+LFwiaVwiKSAmJiB4c2Q6aW50KD95ZWFyKT49MTY0MCAmJiB4c2Q6aW50KD95ZWFyKTwxNjYwKVxufWA7XG4gICAgcHVibGljIG9wZW4obGV0dGVySWQ6IHN0cmluZywgdGV4dDogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKGV2ZW50LmFsdEtleSlcbiAgICAgICAgdGhpcy4kd2luZG93Lm9wZW4oXG4gICAgICAgICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3RibT1ia3MmcT1cIicgK1xuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpICtcbiAgICAgICAgICAgICdcIicsXG4gICAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgICApO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLiR3aW5kb3cub3BlbihcbiAgICAgICAgICBcImh0dHA6Ly9oMjUxLml0LmhlbHNpbmtpLmZpL2NlZWMvZnVuYy9sZXR0ZXJGdW5jLmpzcD9sZXR0ZXJJRD1cIiArXG4gICAgICAgICAgICBsZXR0ZXJJZCxcbiAgICAgICAgICBcIl9ibGFua1wiXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBzcGFycWxTZXJ2aWNlOiBzLlNwYXJxbFNlcnZpY2UsXG4gICAgICAkc2NlOiBhbmd1bGFyLklTQ0VTZXJ2aWNlLFxuICAgICAgJHdpbmRvdzogYW5ndWxhci5JV2luZG93U2VydmljZVxuICAgICkge1xuICAgICAgc3VwZXIoJHNjZSwgJHdpbmRvdyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRvVXBkYXRlKGxpbWl0OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgbGV0IHJlZ2V4Uzogc3RyaW5nID1cbiAgICAgICAgXCIoKD86XFxcXFd8XilcIiArXG4gICAgICAgIHRoaXMud29yZC5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csIFwiXFxcXCQmXCIpICtcbiAgICAgICAgXCIoPzpcXFxcV3wkKSlcIjtcbiAgICAgIHRoaXMuc3BhcnFsU2VydmljZVxuICAgICAgICAucXVlcnkoXG4gICAgICAgICAgXCJodHRwOi8vbGRmLmZpL2NlZWMvc3BhcnFsXCIsXG4gICAgICAgICAgQ2VlY0NvbmNvcmRDb21wb25lbnRDb250cm9sbGVyLnF1ZXJ5XG4gICAgICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICAgICAgLzxSRUdFWFA+L2csXG4gICAgICAgICAgICAgIHRoaXMuc3BhcnFsU2VydmljZS5zdHJpbmdUb1NQQVJRTFN0cmluZyhyZWdleFMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICAgICAgLzxRVUVSWT4vZyxcbiAgICAgICAgICAgICAgdGhpcy5zcGFycWxTZXJ2aWNlLnN0cmluZ1RvU1BBUlFMU3RyaW5nKHRoaXMud29yZClcbiAgICAgICAgICAgICkgKyAobGltaXQgPyBcIkxJTUlUIDMxXCIgOiBcIlwiKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIHJlc3BvbnNlOiBhbmd1bGFyLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPFxuICAgICAgICAgICAgICBzLklTcGFycWxCaW5kaW5nUmVzdWx0PHsgW2lkOiBzdHJpbmddOiBzLklTcGFycWxCaW5kaW5nIH0+XG4gICAgICAgICAgICA+XG4gICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXN1bHRzKFxuICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5yZXN1bHRzLmJpbmRpbmdzLm1hcChyID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaWQ6IHJbXCJpZFwiXS52YWx1ZS5yZXBsYWNlKFwiaHR0cDovL2xkZi5maS9jZWVjL2xldHRlcl9cIiwgXCJcIiksXG4gICAgICAgICAgICAgICAgICBmdWxsdGV4dDogcltcImZ1bGx0ZXh0XCJdLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDZWVjQ29uY29yZENvbXBvbmVudCBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnMge1xuICAgIHB1YmxpYyBjb250cm9sbGVyOiBGdW5jdGlvbiA9IENlZWNDb25jb3JkQ29tcG9uZW50Q29udHJvbGxlcjtcbiAgICBwdWJsaWMgYmluZGluZ3M6IHsgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgICAgIHdvcmQ6IFwiPFwiXG4gICAgfTtcbiAgICBwdWJsaWMgdGVtcGxhdGVVcmw6IHN0cmluZyA9IFwicGFydGlhbHMvY29uY29yZC5odG1sXCI7XG4gIH1cbn1cbiJdfQ==

var app;
(function (app) {
    "use strict";
    var Config = (function () {
        function Config() {
            this.pageSize = 200;
        }
        return Config;
    }());
    var GroupRow = (function () {
        function GroupRow() {
            this.memberRows = [];
            this.row = [];
        }
        return GroupRow;
    }());
    var State = (function () {
        function State() {
            this.headings = [];
            this.groupings = [];
            this.currentPageOffset = 0;
            this.currentRow = 0;
            this.sortBy = 0;
            this.sortDesc = false;
            this.filters = [];
        }
        return State;
    }());
    var MainComponentController = (function () {
        function MainComponentController($uibModal, $localStorage, localStorageService, $http, $sce, selectSheetService, hotkeys, focus, $window) {
            this.$uibModal = $uibModal;
            this.$localStorage = $localStorage;
            this.localStorageService = localStorageService;
            this.$http = $http;
            this.$sce = $sce;
            this.selectSheetService = selectSheetService;
            this.hotkeys = hotkeys;
            this.focus = focus;
            this.$window = $window;
            this.totalBlanks = [];
            this.filteredBlanks = [];
            this.dirty = false;
            this.groupingsDirty = false;
            this.selectedRows = {};
            this.altKeyDown = false;
            this.data = [];
        }/*<auto_generate>*/MainComponentController.$inject = ['$uibModal','$localStorage','localStorageService','$http','$sce','selectSheetService','hotkeys','focus','$window']; MainComponentController.$componentName = 'MainComponentController'/*</auto_generate>*/
        MainComponentController.prototype.loadFile = function (file) {
            var _this = this;
            if (!file)
                return;
            this.state.fileName = file.name;
            this.selectSheetService.selectSheet(file).then(function (data) {
                _this.state.headings = data.shift();
                if (data[data.length - 1].length === 1 &&
                    data[data.length - 1][0] === "")
                    data.pop();
                _this.data = data;
                var isNumber = _this.state.headings.map(function (h) { return true; });
                _this.data.forEach(function (row) {
                    return row.forEach(function (column, index) {
                        if (!("" + parseInt(column, 10) === column))
                            isNumber[index] = false;
                    });
                });
                isNumber.forEach(function (thisIsNumber, index) {
                    if (thisIsNumber) {
                        _this.data.forEach(function (row) { return (row[index] = parseInt(row[index], 10)); });
                    }
                });
                _this.localStorageService.set("data", data);
                _this.groupingsUpdated();
            }, function (errMessage) { return (_this.error = errMessage); });
        };
        MainComponentController.prototype.saveCSVFile = function () {
            var data = [this.state.headings].concat(this.data);
            var fn = "fica-" + this.state.fileName.replace(/\..*?$/, ".csv");
            saveAs(new Blob([Papa.unparse(data)], { type: "text/csv" }), fn);
        };
        MainComponentController.prototype.setSortBy = function (headingIndex) {
            if (this.state.sortBy === headingIndex)
                this.state.sortDesc = !this.state.sortDesc;
            this.state.sortBy = headingIndex;
            this.groupingsUpdated();
        };
        MainComponentController.prototype.groupingsUpdated = function () {
            var _this = this;
            this.data.sort(function (a, b) {
                for (var i = 0; i < _this.state.groupings.length; i++) {
                    var groupIndex = _this.state.groupings[i];
                    if (a[groupIndex] < b[groupIndex])
                        return -1;
                    if (b[groupIndex] < a[groupIndex])
                        return 1;
                }
                if (a[_this.state.sortBy] < b[_this.state.sortBy])
                    return _this.state.sortDesc ? 1 : -1;
                if (b[_this.state.sortBy] < a[_this.state.sortBy])
                    return _this.state.sortDesc ? -1 : 1;
                return 0;
            });
            this.save();
            this.updateGroupedData();
        };
        MainComponentController.prototype.addNewGrouping = function (newGroupingIndex) {
            this.state.groupings.push(newGroupingIndex);
            this.groupingsUpdated();
        };
        MainComponentController.prototype.removeGrouping = function (indexOfGrouping) {
            this.state.groupings.splice(indexOfGrouping, 1);
            this.groupingsUpdated();
        };
        MainComponentController.prototype.mouseFocus = function (row, altKey) {
            this.altKeyDown = altKey;
            this.setRow(row, false);
        };
        MainComponentController.prototype.save = function () {
            this.localStorageService.set("data", this.data);
            this.groupingsDirty = this.dirty;
            this.dirty = false;
        };
        MainComponentController.prototype.$onInit = function () {
            var _this = this;
            this.$window.onunload = function () {
                _this.save();
            };
            if (!this.$localStorage.state)
                this.$localStorage.state = new State();
            this.state = this.$localStorage.state;
            if (!this.$localStorage.config)
                this.$localStorage.config = new Config();
            this.config = this.$localStorage.config;
            this.currentPage =
                Math.floor(this.state.currentPageOffset / this.config.pageSize) + 1;
            this.data = this.localStorageService.get("data");
            if (!this.data)
                this.data = [];
            this.updateGroupedData();
            this.hotkeys.add({
                combo: "ctrl+q",
                allowIn: ["INPUT", "TD"],
                callback: function (event, hotkey) {
                    _this.setColumnValues(2, "yes");
                }
            });
            this.hotkeys.add({
                combo: "ctrl+w",
                allowIn: ["INPUT", "TD"],
                callback: function (event, hotkey) {
                    _this.setColumnValues(2, "no");
                }
            });
            this.hotkeys.add({
                combo: "ctrl+e",
                allowIn: ["INPUT", "TD"],
                callback: function (event, hotkey) {
                    _this.setColumnValues(2, "unclear");
                }
            });
            this.hotkeys.add({
                combo: "ctrl+r",
                allowIn: ["INPUT", "TD"],
                callback: function (event, hotkey) {
                    _this.setColumnValues(2, "adj");
                }
            });
            this.hotkeys.add({
                combo: "alt+tab",
                allowIn: ["INPUT", "TD"],
                callback: function (event, hotkey) {
                    _this.altKeyDown = true;
                    if (_this.groupedData[_this.state.currentRow] instanceof GroupRow)
                        _this.state.currentRow = (_this.groupedData[_this.state.currentRow]).lastRow;
                    _this.next();
                    event.preventDefault();
                }
            });
            this.hotkeys.add({
                combo: "tab",
                allowIn: ["INPUT", "TD"],
                callback: function (event, hotkey) {
                    _this.altKeyDown = false;
                    _this.next();
                    event.preventDefault();
                }
            });
            this.hotkeys.add({
                combo: "shift+tab",
                allowIn: ["INPUT", "TD"],
                callback: function (event, hotkey) {
                    _this.altKeyDown = false;
                    _this.prev();
                    event.preventDefault();
                }
            });
            this.hotkeys.add({
                combo: "alt+shift+tab",
                allowIn: ["INPUT", "TD"],
                callback: function (event, hotkey) {
                    _this.altKeyDown = true;
                    _this.prev();
                    event.preventDefault();
                }
            });
            this.groupingsUpdated();
        };
        MainComponentController.prototype.$onDestroy = function () {
            this.hotkeys.del("ctrl+q");
            this.hotkeys.del("ctrl+w");
            this.hotkeys.del("ctrl+e");
            this.hotkeys.del("ctrl+r");
            this.hotkeys.del("tab");
            this.hotkeys.del("shift+tab");
            this.hotkeys.del("alt+shift+tab");
            this.hotkeys.del("alt+tab");
            this.save();
        };
        MainComponentController.prototype.next = function () {
            if (this.state.currentRow === this.groupedData.length - 1 ||
                this.state.currentRow === undefined)
                this.setRow(0);
            else
                this.setRow(this.state.currentRow + 1);
        };
        MainComponentController.prototype.prev = function () {
            if (this.state.currentRow === 0 || this.state.currentRow === undefined)
                this.setRow(this.groupedData.length - 1);
            else
                this.setRow(this.state.currentRow - 1);
        };
        MainComponentController.prototype.updateGroupedData = function () {
            var _this = this;
            this.groupingsDirty = false;
            var currentGroups = this.state.groupings.map(function (v) { return new GroupRow(); });
            this.groupedData = [];
            this.selectedRows = {};
            this.state.currentRow = undefined;
            //      this.currentPage = 1
            //      this.state.currentPageOffset = 0
            for (var i = 0; i < this.state.headings.length; i++) {
                this.totalBlanks[i] = 0;
                this.filteredBlanks[i] = 0;
            }
            this.data.forEach(function (row, index) {
                var allowed = true;
                _this.state.filters.forEach(function (filter, columnIndex) {
                    if (filter !== null && filter !== "") {
                        if (filter.indexOf("!") === 0) {
                            if (filter === "!") {
                                if (row[columnIndex] !== "")
                                    allowed = false;
                            }
                            else if (row[columnIndex].indexOf(filter.substring(1)) === 0)
                                allowed = false;
                        }
                        else if (filter.indexOf(">") === 0) {
                            if (row[columnIndex] <= parseInt(filter.substring(1), 10))
                                allowed = false;
                        }
                        else if (filter.indexOf("<") === 0) {
                            if (row[columnIndex] > parseInt(filter.substring(1), 10))
                                allowed = false;
                        }
                        else if (row[columnIndex].indexOf(filter) !== 0)
                            allowed = false;
                    }
                });
                for (var i = 0; i < _this.state.headings.length; i++)
                    if (row[i] === "")
                        _this.totalBlanks[i]++;
                if (allowed) {
                    for (var i = 0; i < _this.state.headings.length; i++)
                        if (row[i] === "")
                            _this.filteredBlanks[i]++;
                    for (var i = 0; i < _this.state.groupings.length; i++) {
                        var groupIndex = _this.state.groupings[i];
                        if (currentGroups[i].row[groupIndex] !== row[groupIndex] &&
                            currentGroups[i].memberRows.length === 1)
                            _this.groupedData.pop();
                    }
                    for (var i = 0; i < _this.state.groupings.length; i++) {
                        var groupIndex = _this.state.groupings[i];
                        if (currentGroups[i].row[groupIndex] !== row[groupIndex]) {
                            currentGroups[i].lastRow = _this.groupedData.length - 1;
                            currentGroups[i] = new GroupRow();
                            currentGroups[i].row[row.length - 1] = undefined;
                            currentGroups[i].class =
                                MainComponentController.groupingClasses[i];
                            for (var j = 0; j < i; j++)
                                currentGroups[i].row[_this.state.groupings[j]] =
                                    currentGroups[j].row[_this.state.groupings[j]];
                            currentGroups[i].row[groupIndex] = row[groupIndex];
                            _this.groupedData.push(currentGroups[i]);
                        }
                        currentGroups[i].memberRows.push(row);
                    }
                    _this.groupedData.push(row);
                }
            });
            for (var i = 0; i < this.state.groupings.length; i++)
                currentGroups[i].lastRow = this.groupedData.length;
        };
        MainComponentController.prototype.setRow = function (row, focus) {
            if (focus === void 0) { focus = true; }
            if (this.state.currentRow !== row) {
                this.state.currentRow = row;
                this.currentPage = Math.floor(this.state.currentRow / this.config.pageSize + 1);
                this.state.currentPageOffset =
                    (this.currentPage - 1) * this.config.pageSize;
                if (!this.altKeyDown)
                    this.selectedRows = {};
                this.selectedRows[row] = row;
                if (this.groupedData[row] instanceof GroupRow &&
                    this.groupedData[row].memberRows.length !== 1)
                    for (var i = row + 1; i <= this.groupedData[row].lastRow; i++)
                        this.selectedRows[i] = i;
                var crow = this.groupedData[row] instanceof GroupRow
                    ? this.groupedData[row].memberRows.length === 1
                        ? this.groupedData[row].memberRows[0]
                        : this.groupedData[row].row
                    : this.groupedData[row];
                this.contexts = [];
                if (crow[1])
                    this.contexts.push(this.$sce.trustAsHtml("<ceec-concord word=\"'" +
                        crow[1].replace(/\\/g, "\\\\").replace(/'/g, "\\'") +
                        "'\"></ceec-concord>"));
                if (crow[4])
                    this.contexts.push(this.$sce.trustAsHtml("<octavo-concord word=\"'" +
                        crow[1].replace(/\\/g, "\\\\").replace(/'/g, "\\'") +
                        "'\" year=\"'" +
                        crow[4] +
                        "'\"></octavo-concord>"));
                if (crow[0])
                    this.contexts.push(this.$sce.trustAsHtml('<iframe style="width:100%;height:100%" src="http://www.oed.com/search?searchType=dictionary&q=' +
                        encodeURI(crow[0]) +
                        '"></iframe>'));
                if (focus)
                    this.focus("row" + row);
            }
        };
        MainComponentController.prototype.setColumnValues = function (index, value) {
            var _this = this;
            this.altKeyDown = false;
            var lastRow = 0;
            for (var row in this.selectedRows) {
                if (this.groupedData[row] instanceof GroupRow) {
                    var grow = this.groupedData[row];
                    grow.row[index] = value;
                    grow.memberRows.forEach(function (row) {
                        if (row[index] === "") {
                            _this.totalBlanks[index]--;
                            _this.filteredBlanks[index]--;
                        }
                        row[index] = value;
                    });
                }
                else {
                    if (this.groupedData[row][index] === "") {
                        this.totalBlanks[index]--;
                        this.filteredBlanks[index]--;
                    }
                    this.groupedData[row][index] = value;
                }
                if (lastRow < this.selectedRows[row])
                    lastRow = this.selectedRows[row];
            }
            while (!this.groupedData[lastRow] &&
                lastRow < this.groupedData.length - 2)
                lastRow++;
            this.dirty = true;
            this.setRow(lastRow + 1);
        };
        MainComponentController.groupingClasses = ["success", "warning", "danger"];
        return MainComponentController;
    }());/*<auto_generate>*/angular.module('app').controller('MainComponentController',MainComponentController);/*</auto_generate>*/
    app.MainComponentController = MainComponentController;
    var MainComponent = (function () {
        function MainComponent() {
            this.controller = MainComponentController;
            this.templateUrl = "partials/main.html";
        }/*<auto_generate>*/MainComponent.$inject = []; MainComponent.$componentName = 'main'/*</auto_generate>*/
        return MainComponent;
    }());/*<auto_generate>*/angular.module('app').component('main',new MainComponent());/*</auto_generate>*/
    app.MainComponent = MainComponent;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvbWFpbi1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBOFlaO0FBOVlELFdBQVUsR0FBRyxFQUFDLENBQUM7SUFDYixZQUFZLENBQUM7SUFFYjtRQUFBO1lBQ1MsYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUNoQyxDQUFDO1FBQUQsYUFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRUQ7UUFBQTtZQUNTLGVBQVUsR0FBZSxFQUFFLENBQUM7WUFFNUIsUUFBRyxHQUFhLEVBQUUsQ0FBQztRQUU1QixDQUFDO1FBQUQsZUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBRUQ7UUFBQTtZQUNTLGFBQVEsR0FBYSxFQUFFLENBQUM7WUFDeEIsY0FBUyxHQUFhLEVBQUUsQ0FBQztZQUV6QixzQkFBaUIsR0FBVyxDQUFDLENBQUM7WUFDOUIsZUFBVSxHQUFXLENBQUMsQ0FBQztZQUN2QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1lBQ25CLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBQUQsWUFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBRUQ7UUErRkUsaUNBQ1UsU0FBNkMsRUFDN0MsYUFBa0IsRUFDbEIsbUJBQXdCLEVBQ3hCLEtBQTJCLEVBQzNCLElBQXlCLEVBQ3pCLGtCQUFzQyxFQUN0QyxPQUF3QyxFQUN4QyxLQUFVLEVBQ1YsT0FBK0I7WUFSL0IsY0FBUyxHQUFULFNBQVMsQ0FBb0M7WUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQUs7WUFDbEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFLO1lBQ3hCLFVBQUssR0FBTCxLQUFLLENBQXNCO1lBQzNCLFNBQUksR0FBSixJQUFJLENBQXFCO1lBQ3pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7WUFDdEMsWUFBTyxHQUFQLE9BQU8sQ0FBaUM7WUFDeEMsVUFBSyxHQUFMLEtBQUssQ0FBSztZQUNWLFlB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b25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYXBwIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgY2xhc3MgQ29uZmlnIHtcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDIwMDtcbiAgfVxuXG4gIGNsYXNzIEdyb3VwUm93IHtcbiAgICBwdWJsaWMgbWVtYmVyUm93czogc3RyaW5nW11bXSA9IFtdO1xuICAgIHB1YmxpYyBsYXN0Um93OiBudW1iZXI7XG4gICAgcHVibGljIHJvdzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgY2xhc3M6IHN0cmluZztcbiAgfVxuXG4gIGNsYXNzIFN0YXRlIHtcbiAgICBwdWJsaWMgaGVhZGluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIGdyb3VwaW5nczogbnVtYmVyW10gPSBbXTtcbiAgICBwdWJsaWMgZmlsZU5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgY3VycmVudFBhZ2VPZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGN1cnJlbnRSb3c6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHNvcnRCeTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgc29ydERlc2M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZmlsdGVyczogc3RyaW5nW10gPSBbXTtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ3JvdXBpbmdDbGFzc2VzOiBzdHJpbmdbXSA9IFtcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiZGFuZ2VyXCJdO1xuXG4gICAgcHVibGljIGVycm9yOiBzdHJpbmc7XG4gICAgcHVibGljIGdyb3VwZWREYXRhOiAoR3JvdXBSb3cgfCBhbnlbXSlbXTtcblxuICAgIHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyO1xuXG4gICAgcHVibGljIHRvdGFsQmxhbmtzOiBudW1iZXJbXSA9IFtdO1xuICAgIHB1YmxpYyBmaWx0ZXJlZEJsYW5rczogbnVtYmVyW10gPSBbXTtcblxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGU7XG4gICAgcHVibGljIGNvbmZpZzogQ29uZmlnO1xuICAgIHB1YmxpYyBjb250ZXh0czoge31bXTtcblxuICAgIHB1YmxpYyBkaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBncm91cGluZ3NEaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHNlbGVjdGVkUm93czogeyBbaWQ6IG51bWJlcl06IG51bWJlciB9ID0ge307XG5cbiAgICBwcml2YXRlIGFsdEtleURvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgZGF0YTogYW55W11bXSA9IFtdO1xuXG4gICAgcHVibGljIGxvYWRGaWxlKGZpbGU6IEZpbGUpOiB2b2lkIHtcbiAgICAgIGlmICghZmlsZSkgcmV0dXJuO1xuICAgICAgdGhpcy5zdGF0ZS5maWxlTmFtZSA9IGZpbGUubmFtZTtcbiAgICAgIHRoaXMuc2VsZWN0U2hlZXRTZXJ2aWNlLnNlbGVjdFNoZWV0KGZpbGUpLnRoZW4oKGRhdGE6IHN0cmluZ1tdW10pID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZS5oZWFkaW5ncyA9IGRhdGEuc2hpZnQoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRhdGFbZGF0YS5sZW5ndGggLSAxXS5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICBkYXRhW2RhdGEubGVuZ3RoIC0gMV1bMF0gPT09IFwiXCJcbiAgICAgICAgKVxuICAgICAgICAgIGRhdGEucG9wKCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIGxldCBpc051bWJlcjogYm9vbGVhbltdID0gdGhpcy5zdGF0ZS5oZWFkaW5ncy5tYXAoaCA9PiB0cnVlKTtcbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+XG4gICAgICAgICAgcm93LmZvckVhY2goKGNvbHVtbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShcIlwiICsgcGFyc2VJbnQoY29sdW1uLCAxMCkgPT09IGNvbHVtbikpXG4gICAgICAgICAgICAgIGlzTnVtYmVyW2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIGlzTnVtYmVyLmZvckVhY2goKHRoaXNJc051bWJlcjogYm9vbGVhbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmICh0aGlzSXNOdW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiAocm93W2luZGV4XSA9IHBhcnNlSW50KHJvd1tpbmRleF0sIDEwKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoXCJkYXRhXCIsIGRhdGEpO1xuICAgICAgICB0aGlzLmdyb3VwaW5nc1VwZGF0ZWQoKTtcbiAgICAgIH0sIGVyck1lc3NhZ2UgPT4gKHRoaXMuZXJyb3IgPSBlcnJNZXNzYWdlKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzYXZlQ1NWRmlsZSgpOiB2b2lkIHtcbiAgICAgIGxldCBkYXRhOiBzdHJpbmdbXVtdID0gW3RoaXMuc3RhdGUuaGVhZGluZ3NdLmNvbmNhdCh0aGlzLmRhdGEpO1xuICAgICAgbGV0IGZuOiBzdHJpbmcgPSBcImZpY2EtXCIgKyB0aGlzLnN0YXRlLmZpbGVOYW1lLnJlcGxhY2UoL1xcLi4qPyQvLCBcIi5jc3ZcIik7XG4gICAgICBzYXZlQXMobmV3IEJsb2IoW1BhcGEudW5wYXJzZShkYXRhKV0sIHsgdHlwZTogXCJ0ZXh0L2NzdlwiIH0pLCBmbik7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRTb3J0QnkoaGVhZGluZ0luZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRCeSA9PT0gaGVhZGluZ0luZGV4KVxuICAgICAgICB0aGlzLnN0YXRlLnNvcnREZXNjID0gIXRoaXMuc3RhdGUuc29ydERlc2M7XG4gICAgICB0aGlzLnN0YXRlLnNvcnRCeSA9IGhlYWRpbmdJbmRleDtcbiAgICAgIHRoaXMuZ3JvdXBpbmdzVXBkYXRlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ3JvdXBpbmdzVXBkYXRlZCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGF0YS5zb3J0KChhOiBzdHJpbmdbXSwgYjogc3RyaW5nW10pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RhdGUuZ3JvdXBpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGdyb3VwSW5kZXg6IG51bWJlciA9IHRoaXMuc3RhdGUuZ3JvdXBpbmdzW2ldO1xuICAgICAgICAgIGlmIChhW2dyb3VwSW5kZXhdIDwgYltncm91cEluZGV4XSkgcmV0dXJuIC0xO1xuICAgICAgICAgIGlmIChiW2dyb3VwSW5kZXhdIDwgYVtncm91cEluZGV4XSkgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbdGhpcy5zdGF0ZS5zb3J0QnldIDwgYlt0aGlzLnN0YXRlLnNvcnRCeV0pXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc29ydERlc2MgPyAxIDogLTE7XG4gICAgICAgIGlmIChiW3RoaXMuc3RhdGUuc29ydEJ5XSA8IGFbdGhpcy5zdGF0ZS5zb3J0QnldKVxuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNvcnREZXNjID8gLTEgOiAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLnVwZGF0ZUdyb3VwZWREYXRhKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGROZXdHcm91cGluZyhuZXdHcm91cGluZ0luZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuc3RhdGUuZ3JvdXBpbmdzLnB1c2gobmV3R3JvdXBpbmdJbmRleCk7XG4gICAgICB0aGlzLmdyb3VwaW5nc1VwZGF0ZWQoKTtcbiAgICB9XG4gICAgcHVibGljIHJlbW92ZUdyb3VwaW5nKGluZGV4T2ZHcm91cGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLnN0YXRlLmdyb3VwaW5ncy5zcGxpY2UoaW5kZXhPZkdyb3VwaW5nLCAxKTtcbiAgICAgIHRoaXMuZ3JvdXBpbmdzVXBkYXRlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgbW91c2VGb2N1cyhyb3c6IG51bWJlciwgYWx0S2V5OiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmFsdEtleURvd24gPSBhbHRLZXk7XG4gICAgICB0aGlzLnNldFJvdyhyb3csIGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIHNhdmUoKTogdm9pZCB7XG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KFwiZGF0YVwiLCB0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5ncm91cGluZ3NEaXJ0eSA9IHRoaXMuZGlydHk7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSAkdWliTW9kYWw6IGFuZ3VsYXIudWkuYm9vdHN0cmFwLklNb2RhbFNlcnZpY2UsXG4gICAgICBwcml2YXRlICRsb2NhbFN0b3JhZ2U6IGFueSxcbiAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogYW55LFxuICAgICAgcHJpdmF0ZSAkaHR0cDogYW5ndWxhci5JSHR0cFNlcnZpY2UsXG4gICAgICBwcml2YXRlICRzY2U6IGFuZ3VsYXIuSVNDRVNlcnZpY2UsXG4gICAgICBwcml2YXRlIHNlbGVjdFNoZWV0U2VydmljZTogU2VsZWN0U2hlZXRTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBob3RrZXlzOiBhbmd1bGFyLmhvdGtleXMuSG90a2V5c1Byb3ZpZGVyLFxuICAgICAgcHJpdmF0ZSBmb2N1czogYW55LFxuICAgICAgcHJpdmF0ZSAkd2luZG93OiBhbmd1bGFyLklXaW5kb3dTZXJ2aWNlXG4gICAgKSB7fVxuICAgIHB1YmxpYyAkb25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy4kd2luZG93Lm9udW5sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIH07XG4gICAgICBpZiAoIXRoaXMuJGxvY2FsU3RvcmFnZS5zdGF0ZSkgdGhpcy4kbG9jYWxTdG9yYWdlLnN0YXRlID0gbmV3IFN0YXRlKCk7XG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy4kbG9jYWxTdG9yYWdlLnN0YXRlO1xuICAgICAgaWYgKCF0aGlzLiRsb2NhbFN0b3JhZ2UuY29uZmlnKSB0aGlzLiRsb2NhbFN0b3JhZ2UuY29uZmlnID0gbmV3IENvbmZpZygpO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLiRsb2NhbFN0b3JhZ2UuY29uZmlnO1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9XG4gICAgICAgIE1hdGguZmxvb3IodGhpcy5zdGF0ZS5jdXJyZW50UGFnZU9mZnNldCAvIHRoaXMuY29uZmlnLnBhZ2VTaXplKSArIDE7XG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KFwiZGF0YVwiKTtcbiAgICAgIGlmICghdGhpcy5kYXRhKSB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMudXBkYXRlR3JvdXBlZERhdGEoKTtcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe1xuICAgICAgICBjb21ibzogXCJjdHJsK3FcIixcbiAgICAgICAgYWxsb3dJbjogW1wiSU5QVVRcIiwgXCJURFwiXSxcbiAgICAgICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q29sdW1uVmFsdWVzKDIsIFwieWVzXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe1xuICAgICAgICBjb21ibzogXCJjdHJsK3dcIixcbiAgICAgICAgYWxsb3dJbjogW1wiSU5QVVRcIiwgXCJURFwiXSxcbiAgICAgICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q29sdW1uVmFsdWVzKDIsIFwibm9cIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5ob3RrZXlzLmFkZCh7XG4gICAgICAgIGNvbWJvOiBcImN0cmwrZVwiLFxuICAgICAgICBhbGxvd0luOiBbXCJJTlBVVFwiLCBcIlREXCJdLFxuICAgICAgICBjYWxsYmFjazogKGV2ZW50OiBFdmVudCwgaG90a2V5OiBhbmd1bGFyLmhvdGtleXMuSG90a2V5KTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRDb2x1bW5WYWx1ZXMoMiwgXCJ1bmNsZWFyXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe1xuICAgICAgICBjb21ibzogXCJjdHJsK3JcIixcbiAgICAgICAgYWxsb3dJbjogW1wiSU5QVVRcIiwgXCJURFwiXSxcbiAgICAgICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q29sdW1uVmFsdWVzKDIsIFwiYWRqXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe1xuICAgICAgICBjb21ibzogXCJhbHQrdGFiXCIsXG4gICAgICAgIGFsbG93SW46IFtcIklOUFVUXCIsIFwiVERcIl0sXG4gICAgICAgIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50LCBob3RrZXk6IGFuZ3VsYXIuaG90a2V5cy5Ib3RrZXkpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLmFsdEtleURvd24gPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLmdyb3VwZWREYXRhW3RoaXMuc3RhdGUuY3VycmVudFJvd10gaW5zdGFuY2VvZiBHcm91cFJvdylcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFJvdyA9ICg8R3JvdXBSb3c+KFxuICAgICAgICAgICAgICB0aGlzLmdyb3VwZWREYXRhW3RoaXMuc3RhdGUuY3VycmVudFJvd11cbiAgICAgICAgICAgICkpLmxhc3RSb3c7XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhvdGtleXMuYWRkKHtcbiAgICAgICAgY29tYm86IFwidGFiXCIsXG4gICAgICAgIGFsbG93SW46IFtcIklOUFVUXCIsIFwiVERcIl0sXG4gICAgICAgIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50LCBob3RrZXk6IGFuZ3VsYXIuaG90a2V5cy5Ib3RrZXkpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLmFsdEtleURvd24gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe1xuICAgICAgICBjb21ibzogXCJzaGlmdCt0YWJcIixcbiAgICAgICAgYWxsb3dJbjogW1wiSU5QVVRcIiwgXCJURFwiXSxcbiAgICAgICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuYWx0S2V5RG93biA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5ob3RrZXlzLmFkZCh7XG4gICAgICAgIGNvbWJvOiBcImFsdCtzaGlmdCt0YWJcIixcbiAgICAgICAgYWxsb3dJbjogW1wiSU5QVVRcIiwgXCJURFwiXSxcbiAgICAgICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuYWx0S2V5RG93biA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmdyb3VwaW5nc1VwZGF0ZWQoKTtcbiAgICB9XG4gICAgcHVibGljICRvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvdGtleXMuZGVsKFwiY3RybCtxXCIpO1xuICAgICAgdGhpcy5ob3RrZXlzLmRlbChcImN0cmwrd1wiKTtcbiAgICAgIHRoaXMuaG90a2V5cy5kZWwoXCJjdHJsK2VcIik7XG4gICAgICB0aGlzLmhvdGtleXMuZGVsKFwiY3RybCtyXCIpO1xuICAgICAgdGhpcy5ob3RrZXlzLmRlbChcInRhYlwiKTtcbiAgICAgIHRoaXMuaG90a2V5cy5kZWwoXCJzaGlmdCt0YWJcIik7XG4gICAgICB0aGlzLmhvdGtleXMuZGVsKFwiYWx0K3NoaWZ0K3RhYlwiKTtcbiAgICAgIHRoaXMuaG90a2V5cy5kZWwoXCJhbHQrdGFiXCIpO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICAgIHByaXZhdGUgbmV4dCgpOiB2b2lkIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Um93ID09PSB0aGlzLmdyb3VwZWREYXRhLmxlbmd0aCAtIDEgfHxcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Um93ID09PSB1bmRlZmluZWRcbiAgICAgIClcbiAgICAgICAgdGhpcy5zZXRSb3coMCk7XG4gICAgICBlbHNlIHRoaXMuc2V0Um93KHRoaXMuc3RhdGUuY3VycmVudFJvdyArIDEpO1xuICAgIH1cbiAgICBwcml2YXRlIHByZXYoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Um93ID09PSAwIHx8IHRoaXMuc3RhdGUuY3VycmVudFJvdyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB0aGlzLnNldFJvdyh0aGlzLmdyb3VwZWREYXRhLmxlbmd0aCAtIDEpO1xuICAgICAgZWxzZSB0aGlzLnNldFJvdyh0aGlzLnN0YXRlLmN1cnJlbnRSb3cgLSAxKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVHcm91cGVkRGF0YSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZ3JvdXBpbmdzRGlydHkgPSBmYWxzZTtcbiAgICAgIGxldCBjdXJyZW50R3JvdXBzOiBHcm91cFJvd1tdID0gdGhpcy5zdGF0ZS5ncm91cGluZ3MubWFwKFxuICAgICAgICB2ID0+IG5ldyBHcm91cFJvdygpXG4gICAgICApO1xuICAgICAgdGhpcy5ncm91cGVkRGF0YSA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3RlZFJvd3MgPSB7fTtcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgIC8vICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDFcbiAgICAgIC8vICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UGFnZU9mZnNldCA9IDBcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmhlYWRpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudG90YWxCbGFua3NbaV0gPSAwO1xuICAgICAgICB0aGlzLmZpbHRlcmVkQmxhbmtzW2ldID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBhbGxvd2VkOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJzLmZvckVhY2goKGZpbHRlcjogc3RyaW5nLCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCAmJiBmaWx0ZXIgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuaW5kZXhPZihcIiFcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PT0gXCIhXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAocm93W2NvbHVtbkluZGV4XSAhPT0gXCJcIikgYWxsb3dlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvd1tjb2x1bW5JbmRleF0uaW5kZXhPZihmaWx0ZXIuc3Vic3RyaW5nKDEpKSA9PT0gMClcbiAgICAgICAgICAgICAgICBhbGxvd2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlci5pbmRleE9mKFwiPlwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICBpZiAocm93W2NvbHVtbkluZGV4XSA8PSBwYXJzZUludChmaWx0ZXIuc3Vic3RyaW5nKDEpLCAxMCkpXG4gICAgICAgICAgICAgICAgYWxsb3dlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIuaW5kZXhPZihcIjxcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgaWYgKHJvd1tjb2x1bW5JbmRleF0gPiBwYXJzZUludChmaWx0ZXIuc3Vic3RyaW5nKDEpLCAxMCkpXG4gICAgICAgICAgICAgICAgYWxsb3dlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dbY29sdW1uSW5kZXhdLmluZGV4T2YoZmlsdGVyKSAhPT0gMCkgYWxsb3dlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmhlYWRpbmdzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgIGlmIChyb3dbaV0gPT09IFwiXCIpIHRoaXMudG90YWxCbGFua3NbaV0rKztcbiAgICAgICAgaWYgKGFsbG93ZWQpIHtcbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zdGF0ZS5oZWFkaW5ncy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmIChyb3dbaV0gPT09IFwiXCIpIHRoaXMuZmlsdGVyZWRCbGFua3NbaV0rKztcbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zdGF0ZS5ncm91cGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBncm91cEluZGV4OiBudW1iZXIgPSB0aGlzLnN0YXRlLmdyb3VwaW5nc1tpXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3VycmVudEdyb3Vwc1tpXS5yb3dbZ3JvdXBJbmRleF0gIT09IHJvd1tncm91cEluZGV4XSAmJlxuICAgICAgICAgICAgICBjdXJyZW50R3JvdXBzW2ldLm1lbWJlclJvd3MubGVuZ3RoID09PSAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHRoaXMuZ3JvdXBlZERhdGEucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmdyb3VwaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGdyb3VwSW5kZXg6IG51bWJlciA9IHRoaXMuc3RhdGUuZ3JvdXBpbmdzW2ldO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRHcm91cHNbaV0ucm93W2dyb3VwSW5kZXhdICE9PSByb3dbZ3JvdXBJbmRleF0pIHtcbiAgICAgICAgICAgICAgY3VycmVudEdyb3Vwc1tpXS5sYXN0Um93ID0gdGhpcy5ncm91cGVkRGF0YS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICBjdXJyZW50R3JvdXBzW2ldID0gbmV3IEdyb3VwUm93KCk7XG4gICAgICAgICAgICAgIGN1cnJlbnRHcm91cHNbaV0ucm93W3Jvdy5sZW5ndGggLSAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgY3VycmVudEdyb3Vwc1tpXS5jbGFzcyA9XG4gICAgICAgICAgICAgICAgTWFpbkNvbXBvbmVudENvbnRyb2xsZXIuZ3JvdXBpbmdDbGFzc2VzW2ldO1xuICAgICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgaTsgaisrKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cHNbaV0ucm93W3RoaXMuc3RhdGUuZ3JvdXBpbmdzW2pdXSA9XG4gICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBzW2pdLnJvd1t0aGlzLnN0YXRlLmdyb3VwaW5nc1tqXV07XG4gICAgICAgICAgICAgIGN1cnJlbnRHcm91cHNbaV0ucm93W2dyb3VwSW5kZXhdID0gcm93W2dyb3VwSW5kZXhdO1xuICAgICAgICAgICAgICB0aGlzLmdyb3VwZWREYXRhLnB1c2goY3VycmVudEdyb3Vwc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50R3JvdXBzW2ldLm1lbWJlclJvd3MucHVzaChyb3cpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmdyb3VwZWREYXRhLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zdGF0ZS5ncm91cGluZ3MubGVuZ3RoOyBpKyspXG4gICAgICAgIGN1cnJlbnRHcm91cHNbaV0ubGFzdFJvdyA9IHRoaXMuZ3JvdXBlZERhdGEubGVuZ3RoO1xuICAgIH1cbiAgICBwcml2YXRlIHNldFJvdyhyb3c6IG51bWJlciwgZm9jdXM6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Um93ICE9PSByb3cpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Um93ID0gcm93O1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gTWF0aC5mbG9vcihcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRSb3cgLyB0aGlzLmNvbmZpZy5wYWdlU2l6ZSArIDFcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UGFnZU9mZnNldCA9XG4gICAgICAgICAgKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMuY29uZmlnLnBhZ2VTaXplO1xuICAgICAgICBpZiAoIXRoaXMuYWx0S2V5RG93bikgdGhpcy5zZWxlY3RlZFJvd3MgPSB7fTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3Nbcm93XSA9IHJvdztcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuZ3JvdXBlZERhdGFbcm93XSBpbnN0YW5jZW9mIEdyb3VwUm93ICYmXG4gICAgICAgICAgKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd10pLm1lbWJlclJvd3MubGVuZ3RoICE9PSAxXG4gICAgICAgIClcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IHJvdyArIDE7XG4gICAgICAgICAgICBpIDw9ICg8R3JvdXBSb3c+dGhpcy5ncm91cGVkRGF0YVtyb3ddKS5sYXN0Um93O1xuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3NbaV0gPSBpO1xuICAgICAgICBsZXQgY3Jvdzogc3RyaW5nW10gPVxuICAgICAgICAgIHRoaXMuZ3JvdXBlZERhdGFbcm93XSBpbnN0YW5jZW9mIEdyb3VwUm93XG4gICAgICAgICAgICA/ICg8R3JvdXBSb3c+dGhpcy5ncm91cGVkRGF0YVtyb3ddKS5tZW1iZXJSb3dzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgICA/ICg8R3JvdXBSb3c+dGhpcy5ncm91cGVkRGF0YVtyb3ddKS5tZW1iZXJSb3dzWzBdXG4gICAgICAgICAgICAgIDogKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd10pLnJvd1xuICAgICAgICAgICAgOiA8c3RyaW5nW10+dGhpcy5ncm91cGVkRGF0YVtyb3ddO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgICAgIGlmIChjcm93WzFdKVxuICAgICAgICAgIHRoaXMuY29udGV4dHMucHVzaChcbiAgICAgICAgICAgIHRoaXMuJHNjZS50cnVzdEFzSHRtbChcbiAgICAgICAgICAgICAgXCI8Y2VlYy1jb25jb3JkIHdvcmQ9XFxcIidcIiArXG4gICAgICAgICAgICAgICAgY3Jvd1sxXS5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIikucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpICtcbiAgICAgICAgICAgICAgICBcIidcXFwiPjwvY2VlYy1jb25jb3JkPlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgaWYgKGNyb3dbNF0pXG4gICAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKFxuICAgICAgICAgICAgdGhpcy4kc2NlLnRydXN0QXNIdG1sKFxuICAgICAgICAgICAgICBcIjxvY3Rhdm8tY29uY29yZCB3b3JkPVxcXCInXCIgK1xuICAgICAgICAgICAgICAgIGNyb3dbMV0ucmVwbGFjZSgvXFxcXC9nLCBcIlxcXFxcXFxcXCIpLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKSArXG4gICAgICAgICAgICAgICAgXCInXFxcIiB5ZWFyPVxcXCInXCIgK1xuICAgICAgICAgICAgICAgIGNyb3dbNF0gK1xuICAgICAgICAgICAgICAgIFwiJ1xcXCI+PC9vY3Rhdm8tY29uY29yZD5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIGlmIChjcm93WzBdKVxuICAgICAgICAgIHRoaXMuY29udGV4dHMucHVzaChcbiAgICAgICAgICAgIHRoaXMuJHNjZS50cnVzdEFzSHRtbChcbiAgICAgICAgICAgICAgJzxpZnJhbWUgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDoxMDAlXCIgc3JjPVwiaHR0cDovL3d3dy5vZWQuY29tL3NlYXJjaD9zZWFyY2hUeXBlPWRpY3Rpb25hcnkmcT0nICtcbiAgICAgICAgICAgICAgICBlbmNvZGVVUkkoY3Jvd1swXSkgK1xuICAgICAgICAgICAgICAgICdcIj48L2lmcmFtZT4nXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgaWYgKGZvY3VzKSB0aGlzLmZvY3VzKFwicm93XCIgKyByb3cpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNldENvbHVtblZhbHVlcyhpbmRleDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmFsdEtleURvd24gPSBmYWxzZTtcbiAgICAgIGxldCBsYXN0Um93OiBudW1iZXIgPSAwO1xuICAgICAgZm9yIChsZXQgcm93IGluIHRoaXMuc2VsZWN0ZWRSb3dzKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwZWREYXRhW3Jvd10gaW5zdGFuY2VvZiBHcm91cFJvdykge1xuICAgICAgICAgIGxldCBncm93OiBHcm91cFJvdyA9IDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd107XG4gICAgICAgICAgZ3Jvdy5yb3dbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgZ3Jvdy5tZW1iZXJSb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGlmIChyb3dbaW5kZXhdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgIHRoaXMudG90YWxCbGFua3NbaW5kZXhdLS07XG4gICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRCbGFua3NbaW5kZXhdLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3dbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuZ3JvdXBlZERhdGFbcm93XVtpbmRleF0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxCbGFua3NbaW5kZXhdLS07XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkQmxhbmtzW2luZGV4XS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmdyb3VwZWREYXRhW3Jvd11baW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RSb3cgPCB0aGlzLnNlbGVjdGVkUm93c1tyb3ddKSBsYXN0Um93ID0gdGhpcy5zZWxlY3RlZFJvd3Nbcm93XTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChcbiAgICAgICAgIXRoaXMuZ3JvdXBlZERhdGFbbGFzdFJvd10gJiZcbiAgICAgICAgbGFzdFJvdyA8IHRoaXMuZ3JvdXBlZERhdGEubGVuZ3RoIC0gMlxuICAgICAgKVxuICAgICAgICBsYXN0Um93Kys7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Um93KGxhc3RSb3cgKyAxKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnMge1xuICAgIHB1YmxpYyBjb250cm9sbGVyOiBGdW5jdGlvbiA9IE1haW5Db21wb25lbnRDb250cm9sbGVyO1xuICAgIHB1YmxpYyB0ZW1wbGF0ZVVybDogc3RyaW5nID0gXCJwYXJ0aWFscy9tYWluLmh0bWxcIjtcbiAgfVxufVxuIl19

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    "use strict";
    var OctavoConcordComponentController = (function (_super) {
        __extends(OctavoConcordComponentController, _super);
        function OctavoConcordComponentController($q, $sce, $window, $http) {
            _super.call(this, $sce, $window);
            this.$q = $q;
            this.$http = $http;
        }/*<auto_generate>*/OctavoConcordComponentController.$inject = ['$q','$sce','$window','$http']; OctavoConcordComponentController.$componentName = 'OctavoConcordComponentController'/*</auto_generate>*/
        OctavoConcordComponentController.prototype.open = function (letterId, text, event) {
            if (event.altKey)
                this.$window.open('https://www.google.com/search?tbm=bks&q="' +
                    encodeURIComponent(text) +
                    '"', "_blank");
            else
                this.$window.open("http://h89.it.helsinki.fi/ceec/func/letterFunc.jsp?letterID=" +
                    letterId, "_blank");
        };
        OctavoConcordComponentController.prototype.$onChanges = function () {
            if (this.year)
                this.update();
            else
                _super.prototype.$onChanges.call(this);
        };
        OctavoConcordComponentController.prototype.doUpdate = function (limit) {
            var _this = this;
            if (limit === void 0) { limit = true; }
            var w = encodeURIComponent(this.word);
            var y = encodeURIComponent(this.year);
            var l = limit ? "31" : "-1";
            this.$q
                .all([
                this.$http.get("https://vm0824.kaj.pouta.csc.fi/octavo/eebo/search?snippetLimit=" + l + "&limit=" +
                    l +
                    "&query=" +
                    w +
                    "+publication_year:[1000%20TO%20" +
                    y +
                    "]+estc_language:English&timeout=60&field=author&field=publication_year&field=title"),
                this.$http.get("https://vm0824.kaj.pouta.csc.fi/octavo/bn/search?snippetLimit=" + l + "&limit=" +
                    l +
                    "&query=" +
                    w +
                    "+dateStart:[10000000%20TO%20" +
                    y +
                    "9999]&timeout=60&field=author&field=title&field=dateStart"),
                this.$http.get("https://vm0824.kaj.pouta.csc.fi/octavo/ecco/search?snippetLimit=" + l + "&limit=" +
                    l +
                    "&query=" +
                    w +
                    "+publication_year:[1000%20TO%20" +
                    y +
                    "]+estc_language:English&timeout=60&field=author&field=publication_year&field=title"),
                this.$http.get("https://vm0824.kaj.pouta.csc.fi/octavo/bln1800/search?snippetLimit=" + l + "&limit=" +
                    l +
                    "&query=" +
                    w +
                    "+dateStart:[10000000%20TO%20" +
                    y +
                    "9999]&timeout=60&field=author&field=title&field=dateStart")
            ])
                .then(function (response) {
                var results = [];
                response.forEach(function (response) {
                    var name = response.data["queryMetadata"].index.name;
                    response.data["results"].docs.forEach(function (doc) {
                        var author = doc.author ? doc.author : "?";
                        var title = doc.title ? doc.title : "?";
                        var year = doc.publication_year ? doc.publication_year : (doc.dateStart ? doc.dateStart : "?");
                        doc.snippets.forEach(function (snippet) {
                            return results.push({
                                id: null,
                                fulltext: name + ": " + author + ": " + year + ": " + title + ": " + snippet.snippet.replace(/<\/?b>/g, "")
                            });
                        });
                    });
                });
                _this.processResults(limit, results);
            });
        };
        return OctavoConcordComponentController;
    }(app.ConcordComponentController));/*<auto_generate>*/angular.module('app').controller('OctavoConcordComponentController',OctavoConcordComponentController);/*</auto_generate>*/
    app.OctavoConcordComponentController = OctavoConcordComponentController;
    var OctavoConcordComponent = (function () {
        function OctavoConcordComponent() {
            this.controller = OctavoConcordComponentController;
            this.bindings = {
                word: "<",
                year: "<"
            };
            this.templateUrl = "partials/concord.html";
        }/*<auto_generate>*/OctavoConcordComponent.$inject = []; OctavoConcordComponent.$componentName = 'octavoConcord'/*</auto_generate>*/
        return OctavoConcordComponent;
    }());/*<auto_generate>*/angular.module('app').component('octavoConcord',new OctavoConcordComponent());/*</auto_generate>*/
    app.OctavoConcordComponent = OctavoConcordComponent;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvb2N0YXZvLWNvbmNvcmQtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBVSxHQUFHLENBMkdaO0FBM0dELFdBQVUsR0FBRyxFQUFDLENBQUM7SUFDYixZQUFZLENBQUM7SUFJYjtRQUFzRCxvREFBMEI7UUFpQjlFLDBDQUNVLEVBQXFCLEVBQzdCLElBQXlCLEVBQ3pCLE9BQStCLEVBQ3ZCLEtBQTJCO1lBRW5DLGtCQUFNLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUxiLE9BQUUsR0FBRixFQUFFLENBQW1CO1lBR3JCLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBR3JDLENBQUM7UUF0Qk0sK0NBQUksR0FBWCxVQUFZLFFBQWdCLEVBQUUsSUFBWSxFQUFFLEtBQWlCO1lBQzNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2YsMkNBQTJDO29CQUN6QyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEdBQUcsRUFDTCxRQUFRLENBQ1QsQ0FBQztZQUNKLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2YsOERBQThEO29CQUM1RCxRQUFRLEVBQ1YsUUFBUSxDQUNULENBQUM7UUFDTixDQUFDO1FBU00scURBQVUsR0FBakI7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM3QixJQUFJO2dCQUFDLGdCQUFLLENBQUMsVUFBVSxXQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVNLG1EQUFRLEdBQWYsVUFBZ0IsS0FBcUI7WUFBckMsaUJBNkRDO1lBN0RlLHFCQUFxQixHQUFyQixZQUFxQjtZQUNuQyxJQUFJLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEdB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WUFDSyxnQkFBVyxHQUFXLHVCQUF1QixDQUFDO1FBQ3ZELENBQUM7UUFBRCw2QkFBQztJQUFELENBUEEsQUFPQyxJQUFBO0lBUFksMEJBQXNCLHlCQU9sQyxDQUFBO0FBQ0gsQ0FBQyxFQTNHUyxHQUFHLEtBQUgsR0FBRyxRQTJHWiIsImZpbGUiOiJzY3JpcHRzL29jdGF2by1jb25jb3JkLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBhcHAge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpbXBvcnQgcyA9IGZpLnNlY28uc3BhcnFsO1xuXG4gIGV4cG9ydCBjbGFzcyBPY3Rhdm9Db25jb3JkQ29tcG9uZW50Q29udHJvbGxlciBleHRlbmRzIENvbmNvcmRDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgeWVhcjogc3RyaW5nO1xuICAgIHB1YmxpYyBvcGVuKGxldHRlcklkOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmIChldmVudC5hbHRLZXkpXG4gICAgICAgIHRoaXMuJHdpbmRvdy5vcGVuKFxuICAgICAgICAgICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD90Ym09YmtzJnE9XCInICtcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSArXG4gICAgICAgICAgICAnXCInLFxuICAgICAgICAgIFwiX2JsYW5rXCJcbiAgICAgICAgKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy4kd2luZG93Lm9wZW4oXG4gICAgICAgICAgXCJodHRwOi8vaDg5Lml0LmhlbHNpbmtpLmZpL2NlZWMvZnVuYy9sZXR0ZXJGdW5jLmpzcD9sZXR0ZXJJRD1cIiArXG4gICAgICAgICAgICBsZXR0ZXJJZCxcbiAgICAgICAgICBcIl9ibGFua1wiXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSAkcTogYW5ndWxhci5JUVNlcnZpY2UsXG4gICAgICAkc2NlOiBhbmd1bGFyLklTQ0VTZXJ2aWNlLFxuICAgICAgJHdpbmRvdzogYW5ndWxhci5JV2luZG93U2VydmljZSxcbiAgICAgIHByaXZhdGUgJGh0dHA6IGFuZ3VsYXIuSUh0dHBTZXJ2aWNlXG4gICAgKSB7XG4gICAgICBzdXBlcigkc2NlLCAkd2luZG93KTtcbiAgICB9XG4gICAgcHVibGljICRvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy55ZWFyKSB0aGlzLnVwZGF0ZSgpO1xuICAgICAgZWxzZSBzdXBlci4kb25DaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRvVXBkYXRlKGxpbWl0OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgbGV0IHcgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy53b3JkKTtcbiAgICAgIGxldCB5ID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMueWVhcik7XG4gICAgICBsZXQgbCA9IGxpbWl0ID8gXCIzMVwiIDogXCItMVwiO1xuICAgICAgdGhpcy4kcVxuICAgICAgICAuYWxsKFtcbiAgICAgICAgICB0aGlzLiRodHRwLmdldChcbiAgICAgICAgICAgIFwiaHR0cHM6Ly92bTA4MjQua2FqLnBvdXRhLmNzYy5maS9vY3Rhdm8vZWViby9zZWFyY2g/c25pcHBldExpbWl0PVwiK2wrXCImbGltaXQ9XCIgK1xuICAgICAgICAgICAgICBsICtcbiAgICAgICAgICAgICAgXCImcXVlcnk9XCIgK1xuICAgICAgICAgICAgICB3ICtcbiAgICAgICAgICAgICAgXCIrcHVibGljYXRpb25feWVhcjpbMTAwMCUyMFRPJTIwXCIgK1xuICAgICAgICAgICAgICB5ICtcbiAgICAgICAgICAgICAgXCJdK2VzdGNfbGFuZ3VhZ2U6RW5nbGlzaCZ0aW1lb3V0PTYwJmZpZWxkPWF1dGhvciZmaWVsZD1wdWJsaWNhdGlvbl95ZWFyJmZpZWxkPXRpdGxlXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KFxuICAgICAgICAgICAgXCJodHRwczovL3ZtMDgyNC5rYWoucG91dGEuY3NjLmZpL29jdGF2by9ibi9zZWFyY2g/c25pcHBldExpbWl0PVwiK2wrXCImbGltaXQ9XCIgK1xuICAgICAgICAgICAgICBsICtcbiAgICAgICAgICAgICAgXCImcXVlcnk9XCIgK1xuICAgICAgICAgICAgICB3ICtcbiAgICAgICAgICAgICAgXCIrZGF0ZVN0YXJ0OlsxMDAwMDAwMCUyMFRPJTIwXCIgK1xuICAgICAgICAgICAgICB5ICtcbiAgICAgICAgICAgICAgXCI5OTk5XSZ0aW1lb3V0PTYwJmZpZWxkPWF1dGhvciZmaWVsZD10aXRsZSZmaWVsZD1kYXRlU3RhcnRcIlxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy4kaHR0cC5nZXQoXG4gICAgICAgICAgICBcImh0dHBzOi8vdm0wODI0Lmthai5wb3V0YS5jc2MuZmkvb2N0YXZvL2VjY28vc2VhcmNoP3NuaXBwZXRMaW1pdD1cIitsK1wiJmxpbWl0PVwiICtcbiAgICAgICAgICAgICAgbCArXG4gICAgICAgICAgICAgIFwiJnF1ZXJ5PVwiICtcbiAgICAgICAgICAgICAgdyArXG4gICAgICAgICAgICAgIFwiK3B1YmxpY2F0aW9uX3llYXI6WzEwMDAlMjBUTyUyMFwiICtcbiAgICAgICAgICAgICAgeSArXG4gICAgICAgICAgICAgIFwiXStlc3RjX2xhbmd1YWdlOkVuZ2xpc2gmdGltZW91dD02MCZmaWVsZD1hdXRob3ImZmllbGQ9cHVibGljYXRpb25feWVhciZmaWVsZD10aXRsZVwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLiRodHRwLmdldChcbiAgICAgICAgICAgIFwiaHR0cHM6Ly92bTA4MjQua2FqLnBvdXRhLmNzYy5maS9vY3Rhdm8vYmxuMTgwMC9zZWFyY2g/c25pcHBldExpbWl0PVwiK2wrXCImbGltaXQ9XCIgK1xuICAgICAgICAgICAgICBsICtcbiAgICAgICAgICAgICAgXCImcXVlcnk9XCIgK1xuICAgICAgICAgICAgICB3ICtcbiAgICAgICAgICAgICAgXCIrZGF0ZVN0YXJ0OlsxMDAwMDAwMCUyMFRPJTIwXCIgK1xuICAgICAgICAgICAgICB5ICtcbiAgICAgICAgICAgICAgXCI5OTk5XSZ0aW1lb3V0PTYwJmZpZWxkPWF1dGhvciZmaWVsZD10aXRsZSZmaWVsZD1kYXRlU3RhcnRcIlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHRzOiBJUmVzdWx0W10gPSBbXTtcbiAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gcmVzcG9uc2UuZGF0YVtcInF1ZXJ5TWV0YWRhdGFcIl0uaW5kZXgubmFtZVxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVtcInJlc3VsdHNcIl0uZG9jcy5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgICAgICAgIGxldCBhdXRob3IgPSBkb2MuYXV0aG9yID8gZG9jLmF1dGhvciA6IFwiP1wiXG4gICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvYy50aXRsZSA/IGRvYy50aXRsZSA6IFwiP1wiXG4gICAgICAgICAgICAgIGxldCB5ZWFyID0gZG9jLnB1YmxpY2F0aW9uX3llYXIgPyBkb2MucHVibGljYXRpb25feWVhciA6IChkb2MuZGF0ZVN0YXJ0ID8gZG9jLmRhdGVTdGFydCA6IFwiP1wiKVxuICAgICAgICAgICAgICBkb2Muc25pcHBldHMuZm9yRWFjaChzbmlwcGV0ID0+XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgZnVsbHRleHQ6IG5hbWUrXCI6IFwiK2F1dGhvcitcIjogXCIreWVhcitcIjogXCIrdGl0bGUrXCI6IFwiK3NuaXBwZXQuc25pcHBldC5yZXBsYWNlKC88XFwvP2I+L2csIFwiXCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMucHJvY2Vzc1Jlc3VsdHMobGltaXQsIHJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgT2N0YXZvQ29uY29yZENvbXBvbmVudCBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnMge1xuICAgIHB1YmxpYyBjb250cm9sbGVyOiBGdW5jdGlvbiA9IE9jdGF2b0NvbmNvcmRDb21wb25lbnRDb250cm9sbGVyO1xuICAgIHB1YmxpYyBiaW5kaW5nczogeyBbcGFyYW06IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICAgd29yZDogXCI8XCIsXG4gICAgICB5ZWFyOiBcIjxcIlxuICAgIH07XG4gICAgcHVibGljIHRlbXBsYXRlVXJsOiBzdHJpbmcgPSBcInBhcnRpYWxzL2NvbmNvcmQuaHRtbFwiO1xuICB9XG59XG4iXX0=

var app;
(function (app) {
    'use strict';
    var Sheet = (function () {
        function Sheet(name) {
            this.name = name;
            this.data = [];
            this.active = false;
        }
        return Sheet;
    }());
    var SelectSheetService = (function () {
        function SelectSheetService($uibModal, $q, $rootScope) {
            this.$uibModal = $uibModal;
            this.$q = $q;
            this.$rootScope = $rootScope;
        }/*<auto_generate>*/SelectSheetService.$inject = ['$uibModal','$q','$rootScope']; SelectSheetService.$componentName = 'selectSheetService'/*</auto_generate>*/
        SelectSheetService.prototype.selectSheet = function (file) {
            var _this = this;
            if (!file)
                return;
            var deferred = this.$q.defer();
            var $scope = this.$rootScope.$new();
            $scope.firstRowIsHeader = true;
            $scope.loadSheet = function () {
                $scope.sheets.filter(function (s) { return s.active; }).forEach(function (s) {
                    if (!$scope.firstRowIsHeader)
                        s.data.splice(0, ($scope.skipRows ? $scope.skipRows : 0), s.data[0].map(function (column, index) { return 'Column ' + (index + 1); }));
                    else
                        s.data.splice(0, ($scope.skipRows ? $scope.skipRows : 0));
                    deferred.resolve(s.data);
                });
            };
            if (file.type.indexOf('text/') === 0)
                Papa.parse(file, { complete: function (csv) {
                        if (csv.errors.length !== 0)
                            deferred.reject(csv.errors.map(function (e) { return e.message; }).join('\n'));
                        else {
                            $scope.sheets = [new Sheet('Table')];
                            $scope.firstRowIsHeader = true;
                            $scope.sheets[0].data = csv.data;
                            $scope.sheets[0].active = true;
                            _this.$uibModal.open({
                                templateUrl: 'partials/selectSheet.html',
                                scope: $scope,
                                size: 'lg'
                            });
                        }
                    },
                    error: function (error) { return deferred.reject(error.message); } });
            else {
                var reader_1 = new FileReader();
                reader_1.onload = function () {
                    try {
                        var workBook_1 = XLSX.read(reader_1.result, { type: 'binary' });
                        $scope.sheets = [];
                        workBook_1.SheetNames.forEach(function (sn) {
                            var sheet = new Sheet(sn);
                            var sheetJson = XLSX.utils.sheet_to_json(workBook_1.Sheets[sn]);
                            sheet.data = [[]];
                            for (var header in sheetJson[0])
                                if (header.indexOf('__') !== 0)
                                    sheet.data[0].push(header);
                            XLSX.utils.sheet_to_json(workBook_1.Sheets[sn]).forEach(function (row) {
                                var row2 = [];
                                sheet.data[0].forEach(function (h) { return row2.push(row[h]); });
                                sheet.data.push(row2);
                            });
                            $scope.sheets.push(sheet);
                        });
                        $scope.firstRowIsHeader = true;
                        $scope.sheets[0].active = true;
                        _this.$uibModal.open({
                            templateUrl: 'partials/selectSheet.html',
                            scope: $scope,
                            size: 'lg'
                        });
                    }
                    catch (err) {
                        deferred.reject(err.message);
                    }
                };
                reader_1.readAsBinaryString(file);
            }
            return deferred.promise;
        };
        return SelectSheetService;
    }());/*<auto_generate>*/angular.module('app').service('selectSheetService',SelectSheetService);/*</auto_generate>*/
    app.SelectSheetService = SelectSheetService;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvc2VsZWN0U2hlZXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FxRlo7QUFyRkQsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNiLFlBQVksQ0FBQTtJQUVaO1FBR0UsZUFBbUIsSUFBWTtZQUFaLFNBQUksR0FBSixJQUFJLENBQVE7WUFGeEIsU0FBSSxHQUFlLEVBQUUsQ0FBQTtZQUNyQixXQUFNLEdBQVksS0FBSyxDQUFBO1FBQ0ksQ0FBQztRQUNyQyxZQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFXRDtRQUVFLDRCQUFvQixTQUE2QyxFQUFVLEVBQXFCLEVBQVUsVUFBcUM7WUFBM0gsY0FBUyxHQUFULFNBQVMsQ0FBb0M7WUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtZQUFVLGVBQVUsR0FBVixVQUFVLENBQTJCO1FBQUcsQ0FBQztRQUM1SSx3Q0FBVyxHQUFsQixVQUFtQixJQUFVO1lBQTdCLGlCQThEQztZQTdEQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNLENBQUE7WUFDakIsSUFBSSxRQUFRLEdBQWtDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDN0QsSUFBSSxNQUFNLEdBQXlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDekUsTUFBTSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQTtZQUM5QixNQUFNLENBQUMsU0FBUyxHQUFHO2dCQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztvQkFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7d0JBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRyxDQUFD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Q0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUE7UUFDekIsQ0FBQztRQUNILHlCQUFDO0lBQUQsQ0FsRUEsQUFrRUMsSUFBQTtJQWxFWSxzQkFBa0IscUJBa0U5QixDQUFBO0FBQ0gsQ0FBQyxFQXJGUyxHQUFHLEtBQUgsR0FBRyxRQXFGWiIsImZpbGUiOiJzY3JpcHRzL3NlbGVjdFNoZWV0LXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYXBwIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgY2xhc3MgU2hlZXQge1xuICAgIHB1YmxpYyBkYXRhOiBzdHJpbmdbXVtdID0gW11cbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2VcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKcKge31cbiAgfVxuXG4gIGludGVyZmFjZSBJU2VsZWN0U2hlZXRTY29wZSBleHRlbmRzIGFuZ3VsYXIuSVNjb3BlIHtcbiAgICBmaXJzdFJvd0lzSGVhZGVyOiBib29sZWFuXG4gICAgbG9hZFNoZWV0OiAoKSA9PiB2b2lkXG4gICAgc2hlZXRzOiBTaGVldFtdXG4gICAgc2tpcFJvd3M6IG51bWJlclxuICB9XG5cbiAgZGVjbGFyZSB2YXIgWExTWDogYW55XG5cbiAgZXhwb3J0IGNsYXNzIFNlbGVjdFNoZWV0U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICR1aWJNb2RhbDogYW5ndWxhci51aS5ib290c3RyYXAuSU1vZGFsU2VydmljZSwgcHJpdmF0ZSAkcTogYW5ndWxhci5JUVNlcnZpY2UsIHByaXZhdGUgJHJvb3RTY29wZTogYW5ndWxhci5JUm9vdFNjb3BlU2VydmljZSkge31cbiAgICBwdWJsaWMgc2VsZWN0U2hlZXQoZmlsZTogRmlsZSk6IGFuZ3VsYXIuSVByb21pc2U8c3RyaW5nW11bXT4ge1xuICAgICAgaWYgKCFmaWxlKSByZXR1cm5cbiAgICAgIGxldCBkZWZlcnJlZDogYW5ndWxhci5JRGVmZXJyZWQ8c3RyaW5nW11bXT4gPSB0aGlzLiRxLmRlZmVyKClcbiAgICAgIGxldCAkc2NvcGU6IElTZWxlY3RTaGVldFNjb3BlID0gPElTZWxlY3RTaGVldFNjb3BlPnRoaXMuJHJvb3RTY29wZS4kbmV3KClcbiAgICAgICRzY29wZS5maXJzdFJvd0lzSGVhZGVyID0gdHJ1ZVxuICAgICAgJHNjb3BlLmxvYWRTaGVldCA9ICgpID0+IHtcbiAgICAgICAgJHNjb3BlLnNoZWV0cy5maWx0ZXIocyA9PiBzLmFjdGl2ZSkuZm9yRWFjaChzID0+IHtcbiAgICAgICAgICBpZiAoISRzY29wZS5maXJzdFJvd0lzSGVhZGVyKVxuICAgICAgICAgICAgcy5kYXRhLnNwbGljZSgwLCAgKCRzY29wZS5za2lwUm93cyA/ICRzY29wZS5za2lwUm93cyA6IDApLCBzLmRhdGFbMF0ubWFwKChjb2x1bW4sIGluZGV4KSA9PiAnQ29sdW1uICcgKyAoaW5kZXggKyAxKSkpXG4gICAgICAgICAgZWxzZSBzLmRhdGEuc3BsaWNlKDAsICAoJHNjb3BlLnNraXBSb3dzID8gJHNjb3BlLnNraXBSb3dzIDogMCkpXG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShzLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAoZmlsZS50eXBlLmluZGV4T2YoJ3RleHQvJykgPT09IDApXG4gICAgICAgIFBhcGEucGFyc2UoZmlsZSwgeyBjb21wbGV0ZTogKGNzdik6IHZvaWQgPT4ge1xuICAgICAgICAgIGlmIChjc3YuZXJyb3JzLmxlbmd0aCAhPT0gMClcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChjc3YuZXJyb3JzLm1hcChlID0+IGUubWVzc2FnZSkuam9pbignXFxuJykpXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkc2NvcGUuc2hlZXRzID0gWyBuZXcgU2hlZXQoJ1RhYmxlJykgXVxuICAgICAgICAgICAgJHNjb3BlLmZpcnN0Um93SXNIZWFkZXIgPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuc2hlZXRzWzBdLmRhdGEgPSBjc3YuZGF0YVxuICAgICAgICAgICAgJHNjb3BlLnNoZWV0c1swXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLiR1aWJNb2RhbC5vcGVuKHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9zZWxlY3RTaGVldC5odG1sJyxcbiAgICAgICAgICAgICAgc2NvcGU6ICRzY29wZSxcbiAgICAgICAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLCBlcnJvcjogKGVycm9yOiBQYXBhUGFyc2UuUGFyc2VFcnJvcik6IHZvaWQgPT4gZGVmZXJyZWQucmVqZWN0KGVycm9yLm1lc3NhZ2UpfSlcbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgd29ya0Jvb2s6IGFueSA9IFhMU1gucmVhZChyZWFkZXIucmVzdWx0LCB7dHlwZTogJ2JpbmFyeSd9KVxuICAgICAgICAgICAgJHNjb3BlLnNoZWV0cyA9IFtdXG4gICAgICAgICAgICB3b3JrQm9vay5TaGVldE5hbWVzLmZvckVhY2goc24gPT4ge1xuICAgICAgICAgICAgICBsZXQgc2hlZXQ6IFNoZWV0ID0gbmV3IFNoZWV0KHNuKVxuICAgICAgICAgICAgICBsZXQgc2hlZXRKc29uOiB7fVtdID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdvcmtCb29rLlNoZWV0c1tzbl0pXG4gICAgICAgICAgICAgIHNoZWV0LmRhdGEgPSBbW11dXG4gICAgICAgICAgICAgIGZvciAobGV0IGhlYWRlciBpbiBzaGVldEpzb25bMF0pIGlmIChoZWFkZXIuaW5kZXhPZignX18nKSAhPT0gMCkgc2hlZXQuZGF0YVswXS5wdXNoKGhlYWRlcilcbiAgICAgICAgICAgICAgWExTWC51dGlscy5zaGVldF90b19qc29uKHdvcmtCb29rLlNoZWV0c1tzbl0pLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93Mjogc3RyaW5nW10gPSBbXVxuICAgICAgICAgICAgICAgIHNoZWV0LmRhdGFbMF0uZm9yRWFjaChoID0+IHJvdzIucHVzaChyb3dbaF0pKVxuICAgICAgICAgICAgICAgIHNoZWV0LmRhdGEucHVzaChyb3cyKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAkc2NvcGUuc2hlZXRzLnB1c2goc2hlZXQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgJHNjb3BlLmZpcnN0Um93SXNIZWFkZXIgPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuc2hlZXRzWzBdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuJHVpYk1vZGFsLm9wZW4oe1xuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3NlbGVjdFNoZWV0Lmh0bWwnLFxuICAgICAgICAgICAgICBzY29wZTogJHNjb3BlLFxuICAgICAgICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVyci5tZXNzYWdlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpXG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZVxuICAgIH1cbiAgfVxufVxuIl19

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/concord.html',
    '\n' +
    '<script type="text/ng-template" id="popover.html">\n' +
    '  <div class="small black" ng-bind-html="row.fulltext"></div>\n' +
    '</script>\n' +
    '<table class="table table-striped table-condensed">\n' +
    '  <tr class="small">\n' +
    '    <th class="text-right" ng-click="$ctrl.setSortBy(0)"><span ng-if="$ctrl.sortBy === 0" ng-class="$ctrl.sortDesc ? \'glyphicon glyphicon-chevron-up\' : \'glyphicon glyphicon-chevron-down\'"></span></th>\n' +
    '    <th ng-click="$ctrl.setSortBy(1)"><span ng-if="$ctrl.sortBy === 1" ng-class="$ctrl.sortDesc ? \'glyphicon glyphicon-chevron-up\' : \'glyphicon glyphicon-chevron-down\'"></span></th>\n' +
    '    <th ng-click="$ctrl.setSortBy(2)"><span ng-if="$ctrl.sortBy === 2" ng-class="$ctrl.sortDesc ? \'glyphicon glyphicon-chevron-up\' : \'glyphicon glyphicon-chevron-down\'"></span></th>\n' +
    '  </tr>\n' +
    '  <tr ng-repeat="row in $ctrl.concordances track by $index">\n' +
    '    <td class="text-right" popover-append-to-body="true" ng-bind-html="row.before" uib-popover-template="\'popover.html\'" popover-trigger="mouseenter" popover-placement="bottom" ng-click="$ctrl.open(row.id,row.beforeString,$event)"></td>\n' +
    '    <th popover-append-to-body="true" uib-popover-template="\'popover.html\'" popover-trigger="mouseenter" popover-placement="bottom" ng-click="$ctrl.open(row.id,row.match,$event)">&nbsp;{{row.match}}&nbsp;</th>\n' +
    '    <td ng-bind-html="row.after" ng-click="$ctrl.open(row.id,row.afterString,$event)"></td>\n' +
    '  </tr>\n' +
    '  <tr class="danger" ng-show="$ctrl.more" ng-click="$ctrl.update(false)">\n' +
    '    <td colspan="3" style="text-align: center">...</td>\n' +
    '  </tr>\n' +
    '</table>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/main.html',
    '\n' +
    '<div class="row" style="height:100%">\n' +
    '  <div class="col-xs-6" style="overflow:auto;height:100%">\n' +
    '    <table class="table table-condensed table-bordered">\n' +
    '      <tr>\n' +
    '        <th ng-repeat="heading in $ctrl.state.headings track by $index" ng-click="$ctrl.setSortBy($index)">{{heading}}<span ng-if="$ctrl.totalBlanks[$index] != 0"> ({{$ctrl.totalBlanks[$index] != $ctrl.filteredBlanks[$index] ? $ctrl.filteredBlanks[$index] + \'/\' + $ctrl.totalBlanks[$index] : $ctrl.totalBlanks[$index]}})</span><span ng-if="$ctrl.state.sortBy == $index" ng-class="$ctrl.state.sortDesc ? \'glyphicon glyphicon-chevron-up\' : \'glyphicon glyphicon-chevron-down\'"></span></th>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <th ng-repeat="heading in $ctrl.state.headings track by $index">\n' +
    '          <input class="form-control" ng-model="$ctrl.state.filters[$index]" ng-change="$ctrl.updateGroupedData()" ng-model-options="{ debounce: 500 }"/>\n' +
    '        </th>\n' +
    '      </tr>\n' +
    '      <tr ng-attr-tabindex="{{row.row &amp;&amp; row.memberRows.length !=1 ? \'0\' : \'\'}}" ng-class="$ctrl.selectedRows[$ctrl.state.currentPageOffset + $index] !== undefined ? \'info\': row.class" focus-on="row{{$ctrl.state.currentPageOffset + $index}}" ng-click="$ctrl.mouseFocus($ctrl.state.currentPageOffset+$index,$event.altKey)" ng-repeat="row in $ctrl.groupedData | limitTo : $ctrl.config.pageSize : $ctrl.state.currentPageOffset track by $index">\n' +
    '        <!-- plain row-->\n' +
    '        <td ng-repeat="column in (row.row ? [] : row) track by $index">\n' +
    '          <input class="form-control" select-on-focus="select-on-focus" focus-on="row{{$ctrl.state.currentPageOffset + $parent.$parent.$index}}" ng-style="{\'min-width\': row[0].length+\'rem\'}" ng-if="$index==0" ng-model="row[0]" ng-model-options="{ debounce: 500 }" ng-change="$ctrl.dirty=true"/>\n' +
    '          <input class="form-control" select-on-focus="select-on-focus" ng-if="$index!=0" ng-model="row[$index]" ng-model-options="{ debounce: 500 }" ng-change="$ctrl.dirty=true"/>\n' +
    '        </td>\n' +
    '        <!-- grouping row column that participates in grouping-->\n' +
    '        <th ng-if="column" ng-repeat-start="column in (row.row ? row.row : []) track by $index"><span ng-if="column">\n' +
    '            <input class="form-control" select-on-focus="select-on-focus" focus-on="row{{$ctrl.state.currentPageOffset + $parent.$parent.$parent.$parent.$index}}" ng-style="{\'min-width\': row[0].length+\'rem\'}" ng-if="row.memberRows.length == 1 &amp;&amp; $index==0" ng-model="row.memberRows[0][0]" ng-model-options="{ debounce: 500 }" ng-change="$ctrl.dirty=true"/><span ng-if="$index==0 &amp;&amp; row.memberRows.length &gt; 1" tabindex="0">{{column}}<span>&nbsp;({{row.memberRows.length}})</span></span>\n' +
    '            <input class="form-control" select-on-focus="select-on-focus" ng-if="row.memberRows.length == 1 &amp;&amp; $index!=0" ng-model="row.memberRows[0][$index]" ng-model-options="{ debounce: 500 }" ng-change="$ctrl.dirty=true"/><span ng-if="$index!=0 &amp;&amp; row.memberRows.length != 1">{{column}}<span ng-if="row.memberRows.length!=1">&nbsp;({{row.memberRows.length}})</span></span></span></th>\n' +
    '        <!-- grouping row column that doesn\'t participate in grouping-->\n' +
    '        <td ng-if="!column" ng-repeat-end="ng-repeat-end"><span ng-if="row.memberRows.length==1">\n' +
    '            <input class="form-control" select-on-focus="select-on-focus" focus-on="row{{$ctrl.state.currentPageOffset + $parent.$parent.$parent.$parent.$index}}" ng-style="{\'min-width\': row[0].length+\'rem\'}" ng-if="$index==0" ng-model="row.memberRows[0][0]" ng-model-options="{ debounce: 500 }" ng-change="$ctrl.dirty=true"/>\n' +
    '            <input class="form-control" select-on-focus="select-on-focus" ng-if="$index!=0" ng-model="row.memberRows[0][$index]" ng-model-options="{ debounce: 500 }" ng-change="$ctrl.dirty=true"/></span></td>\n' +
    '      </tr>\n' +
    '    </table>\n' +
    '    <uib-pagination class="pagination-sm" ng-model="$ctrl.currentPage" ng-change="$ctrl.setRow(($ctrl.currentPage - 1) * $ctrl.config.pageSize)" items-per-page="$ctrl.config.pageSize" max-size="20" total-items="$ctrl.groupedData.length" boundary-links="true" previous-text="‹" next-text="›" first-text="«" last-text="»"></uib-pagination>\n' +
    '    <h4>Groupings</h4><span ng-repeat="grouping in $ctrl.state.groupings">\n' +
    '      <select ng-model="$ctrl.state.groupings[$index]" ng-change="$ctrl.groupingsUpdated()" ng-options="index-0 as heading for (index,heading) in $ctrl.state.headings"></select>\n' +
    '      <button class="btn btn-sm btn-danger" ng-click="$ctrl.removeGrouping($index)">X</button></span> Add grouping:\n' +
    '    <select ng-model="newGrouping" ng-options="index-0 as heading for (index,heading) in $ctrl.state.headings" ng-change="$ctrl.addNewGrouping(newGrouping);newGrouping=undefined">\n' +
    '      <option></option>\n' +
    '    </select>\n' +
    '    <h4>Import/Export</h4>\n' +
    '    <button class="btn btn-success" ngf-select="ngf-select" ngf-change="$ctrl.loadFile($files[0])" ngf-multiple="false">Load File</button>\n' +
    '    <button class="btn btn-danger" ng-click="$ctrl.save()" ng-show="$ctrl.dirty">Save State</button>\n' +
    '    <button class="btn btn-danger" ng-click="$ctrl.groupingsUpdated()" ng-show="$ctrl.dirty || $ctrl.groupingsDirty">Update Groupings</button>\n' +
    '    <button class="btn btn-warning" ng-click="$ctrl.saveCSVFile()">Export CSV</button>\n' +
    '    <div>{{error}}</div>\n' +
    '  </div>\n' +
    '  <div class="col-xs-6" style="height:100%">\n' +
    '    <div ng-repeat="context in $ctrl.contexts" bind-html-compile="context" style="{{!$last ? \'max-height:\'+(100/$ctrl.contexts.length)+\'%\' : \'height:100%\'}};overflow:auto"></div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/selectSheet.html',
    '\n' +
    '<div class="modal-header">\n' +
    '  <h3 class="modal-title">Preview</h3>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '  <uib-tabset>\n' +
    '    <uib-tab ng-repeat="sheet in sheets" heading="{{sheet.name}}" active="sheet.active">\n' +
    '      <div style="overflow:scroll;max-height:500px">\n' +
    '        <table class="table table-bordered table-striped">\n' +
    '          <tr>\n' +
    '            <th ng-if="firstRowIsHeader" ng-repeat="header in sheet.data[0] track by $index">{{header}}</th>\n' +
    '            <th ng-if="!firstRowIsHeader" ng-repeat="header in sheet.data[0] track by $index">Column {{$index + 1}}</th>\n' +
    '          </tr>\n' +
    '          <tr ng-repeat="row in sheet.data | limitTo:10:(skipRows+(firstRowIsHeader ? 1 : 0)) track by $index">\n' +
    '            <td ng-repeat="column in row track by $index">{{column}}</td>\n' +
    '          </tr>\n' +
    '        </table>\n' +
    '      </div>\n' +
    '    </uib-tab>\n' +
    '  </uib-tabset>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '  <div class="checkbox">\n' +
    '    <label>\n' +
    '      <input type="checkbox" ng-model="firstRowIsHeader"/>Use first row as header\n' +
    '    </label>\n' +
    '  </div>\n' +
    '  <input type="number" ng-model="$parent.skipRows" placeholder="skip rows"/>\n' +
    '  <button class="btn btn-success" ng-click="$close();loadSheet()">Load</button>\n' +
    '</div>');
}]);
})();
