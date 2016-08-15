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
    'use strict';
    var Snippet = (function () {
        function Snippet(before, match, after, fulltext, id) {
            this.before = before;
            this.match = match;
            this.after = after;
            this.fulltext = fulltext;
            this.id = id;
        }
        return Snippet;
    }());
    var CeecConcordComponentController = (function () {
        function CeecConcordComponentController(sparqlService, $sce, $window) {
            this.sparqlService = sparqlService;
            this.$sce = $sce;
            this.$window = $window;
            this.more = false;
        }/*<auto_generate>*/CeecConcordComponentController.$inject = ['sparqlService','$sce','$window']; CeecConcordComponentController.$componentName = 'CeecConcordComponentController'/*</auto_generate>*/
        CeecConcordComponentController.prototype.open = function (letterId) {
            this.$window.open('http://h89.it.helsinki.fi/ceec/func/letterFunc.jsp?letterID=' + letterId, '_blank');
        };
        CeecConcordComponentController.prototype.$onChanges = function () {
            if (this.word)
                this.update();
        };
        CeecConcordComponentController.prototype.update = function (limit) {
            var _this = this;
            if (limit === void 0) { limit = true; }
            this.more = false;
            var regexS = '((?:\\W|^)' + this.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '(?:\\W|$))';
            this.sparqlService.query('http://ldf.fi/ceec/sparql', CeecConcordComponentController.query.replace(/<REGEXP>/g, this.sparqlService.stringToSPARQLString(regexS)).replace(/<QUERY>/g, this.sparqlService.stringToSPARQLString(this.word)) + (limit ? 'LIMIT 31' : '')).then(function (response) {
                _this.concordances = [];
                _this.more = limit && response.data.results.bindings.length === 31;
                if (_this.more)
                    response.data.results.bindings.splice(0, 1);
                response.data.results.bindings.forEach(function (r) {
                    var tmp = document.createElement('div');
                    tmp.textContent = r['fulltext'].value;
                    var ft = tmp.innerHTML;
                    var regexp = new RegExp(regexS, 'i');
                    var before;
                    var after;
                    var parts = ft.split(regexp);
                    var lastBefore = parts[0].length > 120 ? parts[0].substring(parts[0].length - 120) : parts[0];
                    if (parts[0].length > 1000)
                        ft = parts[0].substring(0, 500) + '<span style="color:red">...</span>' + parts[0].substring(parts[0].length - 500);
                    else
                        ft = parts[0];
                    for (var i = 2; i < parts.length; i += 2) {
                        ft += '<span style="color:blue">';
                        ft += parts[i - 1];
                        ft += '</span>';
                        before = lastBefore;
                        if (parts[i].length > 120) {
                            after = parts[i].substring(0, 120);
                            lastBefore = parts[i].substring(parts[i].length - 120);
                        }
                        else {
                            after = parts[i];
                            lastBefore = parts[i];
                        }
                        if (parts[i].length > 1000)
                            ft += parts[i].substring(0, 500) + '<span style="color:red">...</span>' + parts[i].substring(parts[i].length - 500);
                        else
                            ft += parts[i];
                        _this.concordances.push(new Snippet(_this.$sce.trustAsHtml(before), parts[i - 1], _this.$sce.trustAsHtml(after), _this.$sce.trustAsHtml(ft), r['id'].value.replace('http://ldf.fi/ceec/letter_', '')));
                    }
                });
            });
        };
        CeecConcordComponentController.query = "\nPREFIX text: <http://jena.apache.org/text#>\nPREFIX cs: <http://ldf.fi/ceec-schema#>\nSELECT DISTINCT ?id ?fulltext WHERE {\n  BIND(CONCAT(\"\\\"\",REPLACE(<QUERY>,\"([\\\\+\\\\-\\\\&\\\\|\\\\!\\\\(\\\\)\\\\{\\\\}\\\\[\\\\]\\\\^\\\\\\\"\\\\~\\\\*\\\\?\\\\:\\\\/\\\\\\\\])\",\"\\\\\\\\$1\"),\"\\\"\") AS ?query)\n  ?id text:query (?query 1000000000) .\n  ?id cs:fulltext ?fulltext .\n  FILTER (REGEX(?fulltext, <REGEXP>,\"i\"))\n}";
        return CeecConcordComponentController;
    }());/*<auto_generate>*/angular.module('app').controller('CeecConcordComponentController',CeecConcordComponentController);/*</auto_generate>*/
    app.CeecConcordComponentController = CeecConcordComponentController;
    var CeecConcordComponent = (function () {
        function CeecConcordComponent() {
            this.controller = CeecConcordComponentController;
            this.bindings = {
                'word': '<'
            };
            this.templateUrl = 'partials/ceec-concord.html';
        }/*<auto_generate>*/CeecConcordComponent.$inject = []; CeecConcordComponent.$componentName = 'ceecConcord'/*</auto_generate>*/
        return CeecConcordComponent;
    }());/*<auto_generate>*/angular.module('app').component('ceecConcord',new CeecConcordComponent());/*</auto_generate>*/
    app.CeecConcordComponent = CeecConcordComponent;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvY2VlYy1jb25jb3JkLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FpRlo7QUFqRkQsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNiLFlBQVksQ0FBQTtJQUlaO1FBQ0UsaUJBQW1CLE1BQVcsRUFBUyxLQUFhLEVBQVMsS0FBVSxFQUFTLFFBQWEsRUFBUyxFQUFVO1lBQTdGLFdBQU0sR0FBTixNQUFNLENBQUs7WUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQVMsVUFBSyxHQUFMLEtBQUssQ0FBSztZQUFTLGFBQVEsR0FBUixRQUFRLENBQUs7WUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQUcsQ0FBQztRQUN0SCxjQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFFRDtRQW1CRSx3Q0FBb0IsYUFBOEIsRUFBVSxJQUF5QixFQUFVLE9BQStCO1lBQTFHLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtZQUFVLFNBQUksR0FBSixJQUFJLENBQXFCO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7WUFQdkgsU0FBSSxHQUFZLEtBQUssQ0FBQTtRQU9xRyxDQUFDO1FBTjNILDZDQUFJLEdBQVgsVUFBWSxRQUFnQjtZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw4REFBOEQsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDeEcsQ0FBQztRQUNNLG1EQUFVLEdBQWpCO1lBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDOUIsQ0FBQztRQUdNLCtDQUFNLEdBQWIsVUFBYyxLQUFxQjtZQUFuQyxpQkF3Q0M7WUF4Q2EscUJBQXFCLEdBQXJCLFlBQXFCO1lBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO1lBQ2pCLElBQUksTUFBTSxHQUFXLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFD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QUFDLENBQUE7WUFDSixDQUFDLENBQ0YsQ0FBQTtRQUNILENBQUM7UUE1RGMsb0NBQUssR0FBVyxpYkFRakMsQ0FBQTtRQXNEQSxxQ0FBQztJQUFELENBL0RBLEFBK0RDLElBQUE7SUEvRFksa0NBQThCLGlDQStEMUMsQ0FBQTtJQUVEO1FBQUE7WUFDUyxlQUFVLEdBQWEsOEJBQThCLENBQUE7WUFDckQsYUFBUSxHQUE4QjtnQkFDM0MsTUFBTSxFQUFFLEdBQUc7YUFDWixDQUFBO1lBQ00sZ0JBQVcsR0FBVyw0QkFBNEIsQ0FBQTtRQUMzRCxDQUFDO1FBQUQsMkJBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLHdCQUFvQix1QkFNaEMsQ0FBQTtBQUNILENBQUMsRUFqRlMsR0FBRyxLQUFILEdBQUcsUUFpRloiLCJmaWxlIjoic2NyaXB0cy9jZWVjLWNvbmNvcmQtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGFwcCB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIGltcG9ydCBzID0gZmkuc2Vjby5zcGFycWxcblxuICBjbGFzcyBTbmlwcGV0IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYmVmb3JlOiBhbnksIHB1YmxpYyBtYXRjaDogc3RyaW5nLCBwdWJsaWMgYWZ0ZXI6IGFueSwgcHVibGljIGZ1bGx0ZXh0OiBhbnksIHB1YmxpYyBpZDogc3RyaW5nKSB7fVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENlZWNDb25jb3JkQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcXVlcnk6IHN0cmluZyA9IGBcblBSRUZJWCB0ZXh0OiA8aHR0cDovL2plbmEuYXBhY2hlLm9yZy90ZXh0Iz5cblBSRUZJWCBjczogPGh0dHA6Ly9sZGYuZmkvY2VlYy1zY2hlbWEjPlxuU0VMRUNUIERJU1RJTkNUID9pZCA/ZnVsbHRleHQgV0hFUkUge1xuICBCSU5EKENPTkNBVChcIlxcXFxcIlwiLFJFUExBQ0UoPFFVRVJZPixcIihbXFxcXFxcXFwrXFxcXFxcXFwtXFxcXFxcXFwmXFxcXFxcXFx8XFxcXFxcXFwhXFxcXFxcXFwoXFxcXFxcXFwpXFxcXFxcXFx7XFxcXFxcXFx9XFxcXFxcXFxbXFxcXFxcXFxdXFxcXFxcXFxeXFxcXFxcXFxcXFxcXCJcXFxcXFxcXH5cXFxcXFxcXCpcXFxcXFxcXD9cXFxcXFxcXDpcXFxcXFxcXC9cXFxcXFxcXFxcXFxcXFxcXSlcIixcIlxcXFxcXFxcXFxcXFxcXFwkMVwiKSxcIlxcXFxcIlwiKSBBUyA/cXVlcnkpXG4gID9pZCB0ZXh0OnF1ZXJ5ICg/cXVlcnkgMTAwMDAwMDAwMCkgLlxuICA/aWQgY3M6ZnVsbHRleHQgP2Z1bGx0ZXh0IC5cbiAgRklMVEVSIChSRUdFWCg/ZnVsbHRleHQsIDxSRUdFWFA+LFwiaVwiKSlcbn1gXG4gICAgcHVibGljIHdvcmQ6IHN0cmluZ1xuICAgIHB1YmxpYyBjb25jb3JkYW5jZXM6IFNuaXBwZXRbXVxuICAgIHB1YmxpYyBtb3JlOiBib29sZWFuID0gZmFsc2VcbiAgICBwdWJsaWMgb3BlbihsZXR0ZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLiR3aW5kb3cub3BlbignaHR0cDovL2g4OS5pdC5oZWxzaW5raS5maS9jZWVjL2Z1bmMvbGV0dGVyRnVuYy5qc3A/bGV0dGVySUQ9JyArIGxldHRlcklkLCAnX2JsYW5rJylcbiAgICB9XG4gICAgcHVibGljICRvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy53b3JkKSB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BhcnFsU2VydmljZTogcy5TcGFycWxTZXJ2aWNlLCBwcml2YXRlICRzY2U6IGFuZ3VsYXIuSVNDRVNlcnZpY2UsIHByaXZhdGUgJHdpbmRvdzogYW5ndWxhci5JV2luZG93U2VydmljZSkge31cblxuICAgIHB1YmxpYyB1cGRhdGUobGltaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICB0aGlzLm1vcmUgPSBmYWxzZVxuICAgICAgbGV0IHJlZ2V4Uzogc3RyaW5nID0gJygoPzpcXFxcV3xeKScgKyB0aGlzLndvcmQucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJykgKyAnKD86XFxcXFd8JCkpJ1xuICAgICAgdGhpcy5zcGFycWxTZXJ2aWNlLnF1ZXJ5KCdodHRwOi8vbGRmLmZpL2NlZWMvc3BhcnFsJywgQ2VlY0NvbmNvcmRDb21wb25lbnRDb250cm9sbGVyLnF1ZXJ5LnJlcGxhY2UoLzxSRUdFWFA+L2csIHRoaXMuc3BhcnFsU2VydmljZS5zdHJpbmdUb1NQQVJRTFN0cmluZyhyZWdleFMpKS5yZXBsYWNlKC88UVVFUlk+L2csIHRoaXMuc3BhcnFsU2VydmljZS5zdHJpbmdUb1NQQVJRTFN0cmluZyh0aGlzLndvcmQpKSArIChsaW1pdCA/ICdMSU1JVCAzMScgOiAnJykpLnRoZW4oXG4gICAgICAgIChyZXNwb25zZTogYW5ndWxhci5JSHR0cFByb21pc2VDYWxsYmFja0FyZzxzLklTcGFycWxCaW5kaW5nUmVzdWx0PHtbaWQ6IHN0cmluZ106IHMuSVNwYXJxbEJpbmRpbmd9Pj4pID0+IHtcbiAgICAgICAgICB0aGlzLmNvbmNvcmRhbmNlcyA9IFtdXG4gICAgICAgICAgdGhpcy5tb3JlID0gbGltaXQgJiYgcmVzcG9uc2UuZGF0YS5yZXN1bHRzLmJpbmRpbmdzLmxlbmd0aCA9PT0gMzFcbiAgICAgICAgICBpZiAodGhpcy5tb3JlKSByZXNwb25zZS5kYXRhLnJlc3VsdHMuYmluZGluZ3Muc3BsaWNlKDAsIDEpXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5yZXN1bHRzLmJpbmRpbmdzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICBsZXQgdG1wOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0bXAudGV4dENvbnRlbnQgPSByWydmdWxsdGV4dCddLnZhbHVlXG4gICAgICAgICAgICBsZXQgZnQ6IHN0cmluZyA9IHRtcC5pbm5lckhUTUxcbiAgICAgICAgICAgIGxldCByZWdleHA6IFJlZ0V4cCA9IG5ldyBSZWdFeHAocmVnZXhTLCAnaScpXG4gICAgICAgICAgICBsZXQgYmVmb3JlOiBzdHJpbmdcbiAgICAgICAgICAgIGxldCBhZnRlcjogc3RyaW5nXG4gICAgICAgICAgICBsZXQgcGFydHM6IHN0cmluZ1tdID0gZnQuc3BsaXQocmVnZXhwKVxuICAgICAgICAgICAgbGV0IGxhc3RCZWZvcmU6IHN0cmluZyA9IHBhcnRzWzBdLmxlbmd0aCA+IDEyMCA/IHBhcnRzWzBdLnN1YnN0cmluZyhwYXJ0c1swXS5sZW5ndGggLSAxMjApIDogcGFydHNbMF1cbiAgICAgICAgICAgIGlmIChwYXJ0c1swXS5sZW5ndGggPiAxMDAwKVxuICAgICAgICAgICAgICBmdCA9IHBhcnRzWzBdLnN1YnN0cmluZygwLCA1MDApICsgJzxzcGFuIHN0eWxlPVwiY29sb3I6cmVkXCI+Li4uPC9zcGFuPicgKyBwYXJ0c1swXS5zdWJzdHJpbmcocGFydHNbMF0ubGVuZ3RoIC0gNTAwKVxuICAgICAgICAgICAgZWxzZSBmdCA9IHBhcnRzWzBdXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAyOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgZnQgKz0gJzxzcGFuIHN0eWxlPVwiY29sb3I6Ymx1ZVwiPidcbiAgICAgICAgICAgICAgZnQgKz0gcGFydHNbaSAtIDFdXG4gICAgICAgICAgICAgIGZ0ICs9ICc8L3NwYW4+J1xuICAgICAgICAgICAgICBiZWZvcmUgPSBsYXN0QmVmb3JlXG4gICAgICAgICAgICAgIGlmIChwYXJ0c1tpXS5sZW5ndGggPiAxMjApIHtcbiAgICAgICAgICAgICAgICBhZnRlciA9IHBhcnRzW2ldLnN1YnN0cmluZygwLCAxMjApXG4gICAgICAgICAgICAgICAgbGFzdEJlZm9yZSA9IHBhcnRzW2ldLnN1YnN0cmluZyhwYXJ0c1tpXS5sZW5ndGggLSAxMjApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWZ0ZXIgPSBwYXJ0c1tpXVxuICAgICAgICAgICAgICAgIGxhc3RCZWZvcmUgPSBwYXJ0c1tpXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwYXJ0c1tpXS5sZW5ndGggPiAxMDAwKVxuICAgICAgICAgICAgICAgIGZ0ICs9IHBhcnRzW2ldLnN1YnN0cmluZygwLCA1MDApICsgJzxzcGFuIHN0eWxlPVwiY29sb3I6cmVkXCI+Li4uPC9zcGFuPicgKyBwYXJ0c1tpXS5zdWJzdHJpbmcocGFydHNbaV0ubGVuZ3RoIC0gNTAwKVxuICAgICAgICAgICAgICBlbHNlIGZ0ICs9IHBhcnRzW2ldXG4gICAgICAgICAgICAgIHRoaXMuY29uY29yZGFuY2VzLnB1c2gobmV3IFNuaXBwZXQodGhpcy4kc2NlLnRydXN0QXNIdG1sKGJlZm9yZSksIHBhcnRzW2kgLSAxXSwgdGhpcy4kc2NlLnRydXN0QXNIdG1sKGFmdGVyKSwgdGhpcy4kc2NlLnRydXN0QXNIdG1sKGZ0KSwgclsnaWQnXS52YWx1ZS5yZXBsYWNlKCdodHRwOi8vbGRmLmZpL2NlZWMvbGV0dGVyXycsICcnKSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENlZWNDb25jb3JkQ29tcG9uZW50IGltcGxlbWVudHMgYW5ndWxhci5JQ29tcG9uZW50T3B0aW9ucyB7XG4gICAgcHVibGljIGNvbnRyb2xsZXI6IEZ1bmN0aW9uID0gQ2VlY0NvbmNvcmRDb21wb25lbnRDb250cm9sbGVyXG4gICAgcHVibGljIGJpbmRpbmdzOiB7W3BhcmFtOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgICAgJ3dvcmQnOiAnPCdcbiAgICB9XG4gICAgcHVibGljIHRlbXBsYXRlVXJsOiBzdHJpbmcgPSAncGFydGlhbHMvY2VlYy1jb25jb3JkLmh0bWwnXG4gIH1cbn1cbiJdfQ==

var app;
(function (app) {
    'use strict';
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
                if (data[data.length - 1].length === 1 && data[data.length - 1][0] === '')
                    data.pop();
                _this.data = data;
                var isNumber = _this.state.headings.map(function (h) { return true; });
                _this.data.forEach(function (row) { return row.forEach(function (column, index) { if (!('' + parseInt(column, 10) === column))
                    isNumber[index] = false; }); });
                isNumber.forEach(function (thisIsNumber, index) {
                    if (thisIsNumber) {
                        _this.data.forEach(function (row) { return row[index] = parseInt(row[index], 10); });
                    }
                });
                _this.localStorageService.set('data', data);
                _this.groupingsUpdated();
            }, function (errMessage) { return _this.error = errMessage; });
        };
        MainComponentController.prototype.saveCSVFile = function () {
            var data = [this.state.headings].concat(this.data);
            var fn = 'fica-' + this.state.fileName.replace(/\..*?$/, '.csv');
            saveAs(new Blob([Papa.unparse(data)], { type: 'text/csv' }), fn);
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
            this.localStorageService.set('data', this.data);
            this.groupingsDirty = this.dirty;
            this.dirty = false;
        };
        MainComponentController.prototype.$onInit = function () {
            var _this = this;
            this.$window.onunload = function () { _this.save(); };
            if (!this.$localStorage.state)
                this.$localStorage.state = new State();
            this.state = this.$localStorage.state;
            if (!this.$localStorage.config)
                this.$localStorage.config = new Config();
            this.config = this.$localStorage.config;
            this.currentPage = Math.floor(this.state.currentPageOffset / this.config.pageSize) + 1;
            this.data = this.localStorageService.get('data');
            if (!this.data)
                this.data = [];
            this.updateGroupedData();
            this.hotkeys.add({
                combo: 'ctrl+1',
                allowIn: ['INPUT', 'TD'],
                callback: function (event, hotkey) {
                    _this.setColumnValues(2, 'yes');
                }
            });
            this.hotkeys.add({
                combo: 'ctrl+2',
                allowIn: ['INPUT', 'TD'],
                callback: function (event, hotkey) {
                    _this.setColumnValues(2, 'no');
                }
            });
            this.hotkeys.add({
                combo: 'ctrl+3',
                allowIn: ['INPUT', 'TD'],
                callback: function (event, hotkey) {
                    _this.setColumnValues(2, 'unclear');
                }
            });
            this.hotkeys.add({
                combo: 'ctrl+4',
                allowIn: ['INPUT', 'TD'],
                callback: function (event, hotkey) {
                    _this.setColumnValues(2, 'adj');
                }
            });
            this.hotkeys.add({ combo: 'alt+tab', allowIn: ['INPUT', 'TD'], callback: function (event, hotkey) {
                    _this.altKeyDown = true;
                    if (_this.groupedData[_this.state.currentRow] instanceof GroupRow)
                        _this.state.currentRow = _this.groupedData[_this.state.currentRow].lastRow;
                    _this.next();
                    event.preventDefault();
                } });
            this.hotkeys.add({ combo: 'tab', allowIn: ['INPUT', 'TD'], callback: function (event, hotkey) {
                    _this.altKeyDown = false;
                    _this.next();
                    event.preventDefault();
                } });
            this.hotkeys.add({ combo: 'shift+tab', allowIn: ['INPUT', 'TD'], callback: function (event, hotkey) {
                    _this.altKeyDown = false;
                    _this.prev();
                    event.preventDefault();
                } });
            this.hotkeys.add({ combo: 'alt+shift+tab', allowIn: ['INPUT', 'TD'], callback: function (event, hotkey) {
                    _this.altKeyDown = true;
                    _this.prev();
                    event.preventDefault();
                } });
            this.groupingsUpdated();
        };
        MainComponentController.prototype.$onDestroy = function () {
            this.hotkeys.del('ctrl+1');
            this.hotkeys.del('ctrl+2');
            this.hotkeys.del('ctrl+3');
            this.hotkeys.del('ctrl+4');
            this.hotkeys.del('tab');
            this.hotkeys.del('shift+tab');
            this.save();
        };
        MainComponentController.prototype.next = function () {
            if (this.state.currentRow === this.groupedData.length - 1 || this.state.currentRow === undefined)
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
                    if (filter !== null && filter !== '') {
                        if (filter.indexOf('!') === 0) {
                            if (filter === '!') {
                                if (row[columnIndex] !== '')
                                    allowed = false;
                            }
                            else if (row[columnIndex].indexOf(filter.substring(1)) === 0)
                                allowed = false;
                        }
                        else if (filter.indexOf('>') === 0) {
                            if (row[columnIndex] <= parseInt(filter.substring(1), 10))
                                allowed = false;
                        }
                        else if (filter.indexOf('<') === 0) {
                            if (row[columnIndex] > parseInt(filter.substring(1), 10))
                                allowed = false;
                        }
                        else if (row[columnIndex].indexOf(filter) !== 0)
                            allowed = false;
                    }
                });
                for (var i = 0; i < _this.state.headings.length; i++)
                    if (row[i] === '')
                        _this.totalBlanks[i]++;
                if (allowed) {
                    for (var i = 0; i < _this.state.headings.length; i++)
                        if (row[i] === '')
                            _this.filteredBlanks[i]++;
                    for (var i = 0; i < _this.state.groupings.length; i++) {
                        var groupIndex = _this.state.groupings[i];
                        if (currentGroups[i].row[groupIndex] !== row[groupIndex] && currentGroups[i].memberRows.length === 1)
                            _this.groupedData.pop();
                    }
                    for (var i = 0; i < _this.state.groupings.length; i++) {
                        var groupIndex = _this.state.groupings[i];
                        if (currentGroups[i].row[groupIndex] !== row[groupIndex]) {
                            currentGroups[i].lastRow = _this.groupedData.length - 1;
                            currentGroups[i] = new GroupRow();
                            currentGroups[i].row[row.length - 1] = undefined;
                            currentGroups[i].class = MainComponentController.groupingClasses[i];
                            for (var j = 0; j < i; j++)
                                currentGroups[i].row[_this.state.groupings[j]] = currentGroups[j].row[_this.state.groupings[j]];
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
                this.state.currentPageOffset = (this.currentPage - 1) * this.config.pageSize;
                if (!this.altKeyDown)
                    this.selectedRows = {};
                this.selectedRows[row] = row;
                if (this.groupedData[row] instanceof GroupRow && this.groupedData[row].memberRows.length !== 1)
                    for (var i = row + 1; i <= this.groupedData[row].lastRow; i++)
                        this.selectedRows[i] = i;
                var crow = this.groupedData[row] instanceof GroupRow ? (this.groupedData[row].memberRows.length === 1 ? this.groupedData[row].memberRows[0] : this.groupedData[row].row) : this.groupedData[row];
                this.contexts = [];
                if (crow[1])
                    this.contexts.push(this.$sce.trustAsHtml('<ceec-concord word="\'' + crow[1].replace(/'/g, '\\\'').replace(/\\/g, '\\\\') + '\'"></ceec-concord>'));
                if (crow[0])
                    this.contexts.push(this.$sce.trustAsHtml('<iframe style="width:100%;height:100%" src="http://www.oed.com/search?searchType=dictionary&q=' + encodeURI(crow[0]) + '"></iframe>'));
                if (focus)
                    this.focus('row' + row);
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
                        if (row[index] === '') {
                            _this.totalBlanks[index]--;
                            _this.filteredBlanks[index]--;
                        }
                        row[index] = value;
                    });
                }
                else {
                    if (this.groupedData[row][index] === '') {
                        this.totalBlanks[index]--;
                        this.filteredBlanks[index]--;
                    }
                    this.groupedData[row][index] = value;
                }
                if (lastRow < this.selectedRows[row])
                    lastRow = this.selectedRows[row];
            }
            while (!this.groupedData[lastRow] && lastRow < this.groupedData.length - 2)
                lastRow++;
            this.dirty = true;
            this.setRow(lastRow + 1);
        };
        MainComponentController.groupingClasses = ['success', 'warning', 'danger'];
        return MainComponentController;
    }());/*<auto_generate>*/angular.module('app').controller('MainComponentController',MainComponentController);/*</auto_generate>*/
    app.MainComponentController = MainComponentController;
    var MainComponent = (function () {
        function MainComponent() {
            this.controller = MainComponentController;
            this.templateUrl = 'partials/main.html';
        }/*<auto_generate>*/MainComponent.$inject = []; MainComponent.$componentName = 'main'/*</auto_generate>*/
        return MainComponent;
    }());/*<auto_generate>*/angular.module('app').component('main',new MainComponent());/*</auto_generate>*/
    app.MainComponent = MainComponent;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvbWFpbi1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBaVNaO0FBalNELFdBQVUsR0FBRyxFQUFDLENBQUM7SUFDYixZQUFZLENBQUE7SUFFWjtRQUFBO1lBQ1MsYUFBUSxHQUFXLEdBQUcsQ0FBQTtRQUMvQixDQUFDO1FBQUQsYUFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRUQ7UUFBQTtZQUNTLGVBQVUsR0FBZSxFQUFFLENBQUE7WUFFM0IsUUFBRyxHQUFhLEVBQUUsQ0FBQTtRQUUzQixDQUFDO1FBQUQsZUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBRUQ7UUFBQTtZQUNTLGFBQVEsR0FBYSxFQUFFLENBQUE7WUFDdkIsY0FBUyxHQUFhLEVBQUUsQ0FBQTtZQUV4QixzQkFBaUIsR0FBVyxDQUFDLENBQUE7WUFDN0IsZUFBVSxHQUFXLENBQUMsQ0FBQTtZQUN0QixXQUFNLEdBQVcsQ0FBQyxDQUFBO1lBQ2xCLGFBQVEsR0FBWSxLQUFLLENBQUE7WUFDekIsWUFBTyxHQUFhLEVBQUUsQ0FBQTtRQUMvQixDQUFDO1FBQUQsWUFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBRUQ7UUFxRkUsaUNBQW9CLFNBQTZDLEVBQVUsYUFBa0IsRUFBVSxtQkFBd0IsRUFBVSxLQUEyQixFQUFVLElBQXlCLEVBQVUsa0JBQXNDLEVBQVUsT0FBd0MsRUFBVSxLQUFVLEVBQVUsT0FBK0I7WUFBbFYsY0FBUyxHQUFULFNBQVMsQ0FBb0M7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBSztZQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBSztZQUFVLFVBQUssR0FBTCxLQUFLLENBQXNCO1lBQVUsU0FBSSxHQUFKLElBQUksQ0FBcUI7WUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUM7WUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFLO1lBQVUsWUFBTyxHQUFQLE9BQU8s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LEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7Z0JBQzVFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7Z0JBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFlBQVksUUFBUSxJQUFlLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7b0JBQ3pHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFlLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTt3QkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDN0csSUFBSSxJQUFJLEdBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsWUFBWSxRQUFRLEdBQUcsQ0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFFLENBQUMsR0FBRyxDQUFDLEdBQWEsSUFBSSxDQUFDLFdBQVcsQ0FB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LENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUMxQixDQUFDO1FBaFFjLHVDQUFlLEdBQWEsQ0FBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBRSxDQUFBO1FBaVEvRSw4QkFBQztJQUFELENBbFFBLEFBa1FDLElBQUE7SUFsUVksMkJBQXVCLDBCQWtRbkMsQ0FBQTtJQUVEO1FBQUE7WUFDVyxlQUFVLEdBQWEsdUJBQXVCLENBQUE7WUFDOUMsZ0JBQVcsR0FBVyxvQkFBb0IsQ0FBQTtRQUNyRCxDQUFDO1FBQUQsb0JBQUM7SUFBRCxDQUhBLEFBR0MsSUFBQTtJQUhZLGlCQUFhLGdCQUd6QixDQUFBO0FBQ0gsQ0FBQyxFQWpTUyxHQUFHLEtBQUgsR0FBRyxRQWlTWiIsImZpbGUiOiJzY3JpcHRzL21haW4tY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGFwcCB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIGNsYXNzIENvbmZpZyB7XG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSAyMDBcbiAgfVxuXG4gIGNsYXNzIEdyb3VwUm93IHtcbiAgICBwdWJsaWMgbWVtYmVyUm93czogc3RyaW5nW11bXSA9IFtdXG4gICAgcHVibGljIGxhc3RSb3c6IG51bWJlclxuICAgIHB1YmxpYyByb3c6IHN0cmluZ1tdID0gW11cbiAgICBwdWJsaWMgY2xhc3M6IHN0cmluZ1xuICB9XG5cbiAgY2xhc3MgU3RhdGUge1xuICAgIHB1YmxpYyBoZWFkaW5nczogc3RyaW5nW10gPSBbXVxuICAgIHB1YmxpYyBncm91cGluZ3M6IG51bWJlcltdID0gW11cbiAgICBwdWJsaWMgZmlsZU5hbWU6IHN0cmluZ1xuICAgIHB1YmxpYyBjdXJyZW50UGFnZU9mZnNldDogbnVtYmVyID0gMFxuICAgIHB1YmxpYyBjdXJyZW50Um93OiBudW1iZXIgPSAwXG4gICAgcHVibGljIHNvcnRCeTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyBzb3J0RGVzYzogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIGZpbHRlcnM6IHN0cmluZ1tdID0gW11cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ3JvdXBpbmdDbGFzc2VzOiBzdHJpbmdbXSA9IFsgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInIF1cblxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nXG4gICAgcHVibGljIGdyb3VwZWREYXRhOiAoR3JvdXBSb3d8YW55W10pW11cblxuICAgIHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyXG5cbiAgICBwdWJsaWMgdG90YWxCbGFua3M6IG51bWJlcltdID0gW11cbiAgICBwdWJsaWMgZmlsdGVyZWRCbGFua3M6IG51bWJlcltdID0gW11cblxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGVcbiAgICBwdWJsaWMgY29uZmlnOiBDb25maWdcbiAgICBwdWJsaWMgY29udGV4dHM6IHt9W11cblxuICAgIHB1YmxpYyBkaXJ0eTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIGdyb3VwaW5nc0RpcnR5OiBib29sZWFuID0gZmFsc2VcblxuICAgIHB1YmxpYyBzZWxlY3RlZFJvd3M6IHtbaWQ6IG51bWJlcl06IG51bWJlcn0gPSB7fVxuXG4gICAgcHJpdmF0ZSBhbHRLZXlEb3duOiBib29sZWFuID0gZmFsc2VcblxuICAgIHByaXZhdGUgZGF0YTogYW55W11bXSA9IFtdXG5cbiAgICBwdWJsaWMgbG9hZEZpbGUoZmlsZTogRmlsZSk6IHZvaWQge1xuICAgICAgaWYgKCFmaWxlKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdGUuZmlsZU5hbWUgPSBmaWxlLm5hbWVcbiAgICAgIHRoaXMuc2VsZWN0U2hlZXRTZXJ2aWNlLnNlbGVjdFNoZWV0KGZpbGUpLnRoZW4oXG4gICAgICAgIChkYXRhOiBzdHJpbmdbXVtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5oZWFkaW5ncyA9IGRhdGEuc2hpZnQoKVxuICAgICAgICAgIGlmIChkYXRhW2RhdGEubGVuZ3RoIC0gMV0ubGVuZ3RoID09PSAxICYmIGRhdGFbZGF0YS5sZW5ndGggLSAxIF1bMF0gPT09ICcnKSBkYXRhLnBvcCgpXG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxuICAgICAgICAgIGxldCBpc051bWJlcjogYm9vbGVhbltdID0gdGhpcy5zdGF0ZS5oZWFkaW5ncy5tYXAoaCA9PiB0cnVlKVxuICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaCgoY29sdW1uOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtpZiAoISgnJyArIHBhcnNlSW50KGNvbHVtbiwgMTApID09PSBjb2x1bW4pKSBpc051bWJlcltpbmRleF0gPSBmYWxzZX0pKVxuICAgICAgICAgIGlzTnVtYmVyLmZvckVhY2goKHRoaXNJc051bWJlcjogYm9vbGVhbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXNJc051bWJlcikge1xuICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4gcm93W2luZGV4XSA9IHBhcnNlSW50KHJvd1tpbmRleF0sIDEwKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2RhdGEnLCBkYXRhKVxuICAgICAgICAgIHRoaXMuZ3JvdXBpbmdzVXBkYXRlZCgpXG4gICAgICAgIH0sXG4gICAgICAgIChlcnJNZXNzYWdlKSA9PiB0aGlzLmVycm9yID0gZXJyTWVzc2FnZSlcbiAgICB9XG4gICAgcHVibGljIHNhdmVDU1ZGaWxlKCk6IHZvaWQge1xuICAgICAgbGV0IGRhdGE6IHN0cmluZ1tdW10gPSBbdGhpcy5zdGF0ZS5oZWFkaW5nc10uY29uY2F0KHRoaXMuZGF0YSlcbiAgICAgIGxldCBmbjogc3RyaW5nID0gJ2ZpY2EtJyArIHRoaXMuc3RhdGUuZmlsZU5hbWUucmVwbGFjZSgvXFwuLio/JC8sICcuY3N2JylcbiAgICAgIHNhdmVBcyhuZXcgQmxvYihbUGFwYS51bnBhcnNlKGRhdGEpXSwge3R5cGU6ICd0ZXh0L2Nzdid9KSwgZm4pXG4gICAgfVxuICAgIHB1YmxpYyBzZXRTb3J0QnkoaGVhZGluZ0luZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRCeSA9PT0gaGVhZGluZ0luZGV4KSB0aGlzLnN0YXRlLnNvcnREZXNjID0gIXRoaXMuc3RhdGUuc29ydERlc2NcbiAgICAgIHRoaXMuc3RhdGUuc29ydEJ5ID0gaGVhZGluZ0luZGV4XG4gICAgICB0aGlzLmdyb3VwaW5nc1VwZGF0ZWQoKVxuICAgIH1cbiAgICBwdWJsaWMgZ3JvdXBpbmdzVXBkYXRlZCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGF0YS5zb3J0KChhOiBzdHJpbmdbXSwgYjogc3RyaW5nW10pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RhdGUuZ3JvdXBpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGdyb3VwSW5kZXg6IG51bWJlciA9IHRoaXMuc3RhdGUuZ3JvdXBpbmdzW2ldXG4gICAgICAgICAgaWYgKGFbZ3JvdXBJbmRleF0gPCBiW2dyb3VwSW5kZXhdKSByZXR1cm4gLTFcbiAgICAgICAgICBpZiAoYltncm91cEluZGV4XSA8IGFbZ3JvdXBJbmRleF0pIHJldHVybiAxXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbdGhpcy5zdGF0ZS5zb3J0QnldIDwgYlt0aGlzLnN0YXRlLnNvcnRCeV0pIHJldHVybiB0aGlzLnN0YXRlLnNvcnREZXNjID8gMSA6IC0xXG4gICAgICAgIGlmIChiW3RoaXMuc3RhdGUuc29ydEJ5XSA8IGFbdGhpcy5zdGF0ZS5zb3J0QnldKSByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0RGVzYyA/IC0xIDogMVxuICAgICAgICByZXR1cm4gMFxuICAgICAgfSlcbiAgICAgIHRoaXMuc2F2ZSgpXG4gICAgICB0aGlzLnVwZGF0ZUdyb3VwZWREYXRhKClcbiAgICB9XG4gICAgcHVibGljIGFkZE5ld0dyb3VwaW5nKG5ld0dyb3VwaW5nSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5zdGF0ZS5ncm91cGluZ3MucHVzaChuZXdHcm91cGluZ0luZGV4KVxuICAgICAgdGhpcy5ncm91cGluZ3NVcGRhdGVkKClcbiAgICB9XG4gICAgcHVibGljIHJlbW92ZUdyb3VwaW5nKGluZGV4T2ZHcm91cGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLnN0YXRlLmdyb3VwaW5ncy5zcGxpY2UoaW5kZXhPZkdyb3VwaW5nLCAxKVxuICAgICAgdGhpcy5ncm91cGluZ3NVcGRhdGVkKClcbiAgICB9XG4gICAgcHVibGljIG1vdXNlRm9jdXMocm93OiBudW1iZXIsIGFsdEtleTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5hbHRLZXlEb3duID0gYWx0S2V5XG4gICAgICB0aGlzLnNldFJvdyhyb3csIGZhbHNlKVxuICAgIH1cbiAgICBwdWJsaWMgc2F2ZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2RhdGEnLCB0aGlzLmRhdGEpXG4gICAgICB0aGlzLmdyb3VwaW5nc0RpcnR5ID0gdGhpcy5kaXJ0eVxuICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHVpYk1vZGFsOiBhbmd1bGFyLnVpLmJvb3RzdHJhcC5JTW9kYWxTZXJ2aWNlLCBwcml2YXRlICRsb2NhbFN0b3JhZ2U6IGFueSwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBhbnksIHByaXZhdGUgJGh0dHA6IGFuZ3VsYXIuSUh0dHBTZXJ2aWNlLCBwcml2YXRlICRzY2U6IGFuZ3VsYXIuSVNDRVNlcnZpY2UsIHByaXZhdGUgc2VsZWN0U2hlZXRTZXJ2aWNlOiBTZWxlY3RTaGVldFNlcnZpY2UsIHByaXZhdGUgaG90a2V5czogYW5ndWxhci5ob3RrZXlzLkhvdGtleXNQcm92aWRlciwgcHJpdmF0ZSBmb2N1czogYW55LCBwcml2YXRlICR3aW5kb3c6IGFuZ3VsYXIuSVdpbmRvd1NlcnZpY2UpIHt9XG4gICAgcHVibGljICRvbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLiR3aW5kb3cub251bmxvYWQgPSAoKSA9PiB7IHRoaXMuc2F2ZSgpIH1cbiAgICAgIGlmICghdGhpcy4kbG9jYWxTdG9yYWdlLnN0YXRlKSB0aGlzLiRsb2NhbFN0b3JhZ2Uuc3RhdGUgPSBuZXcgU3RhdGUoKVxuICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuJGxvY2FsU3RvcmFnZS5zdGF0ZVxuICAgICAgaWYgKCF0aGlzLiRsb2NhbFN0b3JhZ2UuY29uZmlnKSB0aGlzLiRsb2NhbFN0b3JhZ2UuY29uZmlnID0gbmV3IENvbmZpZygpXG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuJGxvY2FsU3RvcmFnZS5jb25maWdcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUuY3VycmVudFBhZ2VPZmZzZXQgLyB0aGlzLmNvbmZpZy5wYWdlU2l6ZSkgKyAxXG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdkYXRhJylcbiAgICAgIGlmICghdGhpcy5kYXRhKSB0aGlzLmRhdGEgPSBbXVxuICAgICAgdGhpcy51cGRhdGVHcm91cGVkRGF0YSgpXG4gICAgICB0aGlzLmhvdGtleXMuYWRkKHtcbiAgICAgICAgY29tYm86ICdjdHJsKzEnLFxuICAgICAgICBhbGxvd0luOiBbJ0lOUFVUJywgJ1REJ10sXG4gICAgICAgIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50LCBob3RrZXk6IGFuZ3VsYXIuaG90a2V5cy5Ib3RrZXkpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLnNldENvbHVtblZhbHVlcygyLCAneWVzJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe1xuICAgICAgICBjb21ibzogJ2N0cmwrMicsXG4gICAgICAgIGFsbG93SW46IFsnSU5QVVQnLCAnVEQnXSxcbiAgICAgICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q29sdW1uVmFsdWVzKDIsICdubycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLmhvdGtleXMuYWRkKHtcbiAgICAgICAgY29tYm86ICdjdHJsKzMnLFxuICAgICAgICBhbGxvd0luOiBbJ0lOUFVUJywgJ1REJ10sXG4gICAgICAgIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50LCBob3RrZXk6IGFuZ3VsYXIuaG90a2V5cy5Ib3RrZXkpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLnNldENvbHVtblZhbHVlcygyLCAndW5jbGVhcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLmhvdGtleXMuYWRkKHtcbiAgICAgICAgY29tYm86ICdjdHJsKzQnLFxuICAgICAgICBhbGxvd0luOiBbJ0lOUFVUJywgJ1REJ10sXG4gICAgICAgIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50LCBob3RrZXk6IGFuZ3VsYXIuaG90a2V5cy5Ib3RrZXkpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLnNldENvbHVtblZhbHVlcygyLCAnYWRqJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe2NvbWJvOiAnYWx0K3RhYicsIGFsbG93SW46IFsnSU5QVVQnLCAnVEQnXSwgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmFsdEtleURvd24gPSB0cnVlXG4gICAgICAgIGlmICh0aGlzLmdyb3VwZWREYXRhW3RoaXMuc3RhdGUuY3VycmVudFJvd10gaW5zdGFuY2VvZiBHcm91cFJvdylcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRSb3cgPSAoPEdyb3VwUm93PnRoaXMuZ3JvdXBlZERhdGFbdGhpcy5zdGF0ZS5jdXJyZW50Um93XSkubGFzdFJvd1xuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9fSlcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe2NvbWJvOiAndGFiJywgYWxsb3dJbjogWydJTlBVVCcsICdURCddLCBjYWxsYmFjazogKGV2ZW50OiBFdmVudCwgaG90a2V5OiBhbmd1bGFyLmhvdGtleXMuSG90a2V5KTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuYWx0S2V5RG93biA9IGZhbHNlXG4gICAgICAgIHRoaXMubmV4dCgpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH19KVxuICAgICAgdGhpcy5ob3RrZXlzLmFkZCh7Y29tYm86ICdzaGlmdCt0YWInLCBhbGxvd0luOiBbJ0lOUFVUJywgJ1REJ10sIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50LCBob3RrZXk6IGFuZ3VsYXIuaG90a2V5cy5Ib3RrZXkpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5hbHRLZXlEb3duID0gZmFsc2U7IHRoaXMucHJldigpOyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9fSlcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe2NvbWJvOiAnYWx0K3NoaWZ0K3RhYicsIGFsbG93SW46IFsnSU5QVVQnLCAnVEQnXSwgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmFsdEtleURvd24gPSB0cnVlOyB0aGlzLnByZXYoKTsgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfX0pXG4gICAgICB0aGlzLmdyb3VwaW5nc1VwZGF0ZWQoKVxuICAgIH1cbiAgICBwdWJsaWMgJG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG90a2V5cy5kZWwoJ2N0cmwrMScpXG4gICAgICB0aGlzLmhvdGtleXMuZGVsKCdjdHJsKzInKVxuICAgICAgdGhpcy5ob3RrZXlzLmRlbCgnY3RybCszJylcbiAgICAgIHRoaXMuaG90a2V5cy5kZWwoJ2N0cmwrNCcpXG4gICAgICB0aGlzLmhvdGtleXMuZGVsKCd0YWInKVxuICAgICAgdGhpcy5ob3RrZXlzLmRlbCgnc2hpZnQrdGFiJylcbiAgICAgIHRoaXMuc2F2ZSgpXG4gICAgfVxuICAgIHByaXZhdGUgbmV4dCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRSb3cgPT09IHRoaXMuZ3JvdXBlZERhdGEubGVuZ3RoIC0gMSB8fCB0aGlzLnN0YXRlLmN1cnJlbnRSb3cgPT09IHVuZGVmaW5lZCkgdGhpcy5zZXRSb3coMClcbiAgICAgIGVsc2UgdGhpcy5zZXRSb3codGhpcy5zdGF0ZS5jdXJyZW50Um93ICsgMSlcbiAgICB9XG4gICAgcHJpdmF0ZSBwcmV2KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFJvdyA9PT0gMCB8fCB0aGlzLnN0YXRlLmN1cnJlbnRSb3cgPT09IHVuZGVmaW5lZCkgdGhpcy5zZXRSb3codGhpcy5ncm91cGVkRGF0YS5sZW5ndGggLSAxKVxuICAgICAgZWxzZSB0aGlzLnNldFJvdyh0aGlzLnN0YXRlLmN1cnJlbnRSb3cgLSAxKVxuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUdyb3VwZWREYXRhKCk6IHZvaWQge1xuICAgICAgdGhpcy5ncm91cGluZ3NEaXJ0eSA9IGZhbHNlXG4gICAgICBsZXQgY3VycmVudEdyb3VwczogR3JvdXBSb3dbXSA9IHRoaXMuc3RhdGUuZ3JvdXBpbmdzLm1hcCh2ID0+IG5ldyBHcm91cFJvdygpKVxuICAgICAgdGhpcy5ncm91cGVkRGF0YSA9IFtdXG4gICAgICB0aGlzLnNlbGVjdGVkUm93cyA9IHt9XG4gICAgICB0aGlzLnN0YXRlLmN1cnJlbnRSb3cgPSB1bmRlZmluZWRcbi8vICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDFcbi8vICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UGFnZU9mZnNldCA9IDBcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmhlYWRpbmdzLmxlbmd0aDsgaSsrKSAge1xuICAgICAgICB0aGlzLnRvdGFsQmxhbmtzW2ldID0gMFxuICAgICAgICB0aGlzLmZpbHRlcmVkQmxhbmtzW2ldID0gMFxuICAgICAgfVxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGFsbG93ZWQ6IGJvb2xlYW4gPSB0cnVlXG4gICAgICAgIHRoaXMuc3RhdGUuZmlsdGVycy5mb3JFYWNoKChmaWx0ZXI6IHN0cmluZywgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChmaWx0ZXIgIT09IG51bGwgJiYgZmlsdGVyICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKGZpbHRlci5pbmRleE9mKCchJykgPT09IDApIHtcbiAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PT0gJyEnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvd1tjb2x1bW5JbmRleF0gIT09ICcnKSBhbGxvd2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dbY29sdW1uSW5kZXhdLmluZGV4T2YoZmlsdGVyLnN1YnN0cmluZygxKSkgPT09IDApIGFsbG93ZWQgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIuaW5kZXhPZignPicpID09PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChyb3dbY29sdW1uSW5kZXhdIDw9IHBhcnNlSW50KGZpbHRlci5zdWJzdHJpbmcoMSksIDEwKSkgYWxsb3dlZCA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlci5pbmRleE9mKCc8JykgPT09IDApIHtcbiAgICAgICAgICAgICAgaWYgKHJvd1tjb2x1bW5JbmRleF0gPiBwYXJzZUludChmaWx0ZXIuc3Vic3RyaW5nKDEpLCAxMCkpIGFsbG93ZWQgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyb3dbY29sdW1uSW5kZXhdLmluZGV4T2YoZmlsdGVyKSAhPT0gMCkgYWxsb3dlZCA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zdGF0ZS5oZWFkaW5ncy5sZW5ndGg7IGkrKykgaWYgKHJvd1tpXSA9PT0gJycpIHRoaXMudG90YWxCbGFua3NbaV0rK1xuICAgICAgICBpZiAoYWxsb3dlZCkge1xuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmhlYWRpbmdzLmxlbmd0aDsgaSsrKSBpZiAocm93W2ldID09PSAnJykgdGhpcy5maWx0ZXJlZEJsYW5rc1tpXSsrXG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RhdGUuZ3JvdXBpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBJbmRleDogbnVtYmVyID0gdGhpcy5zdGF0ZS5ncm91cGluZ3NbaV1cbiAgICAgICAgICAgIGlmIChjdXJyZW50R3JvdXBzW2ldLnJvd1tncm91cEluZGV4XSAhPT0gcm93W2dyb3VwSW5kZXhdICYmIGN1cnJlbnRHcm91cHNbaV0ubWVtYmVyUm93cy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgIHRoaXMuZ3JvdXBlZERhdGEucG9wKClcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RhdGUuZ3JvdXBpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBJbmRleDogbnVtYmVyID0gdGhpcy5zdGF0ZS5ncm91cGluZ3NbaV1cbiAgICAgICAgICAgIGlmIChjdXJyZW50R3JvdXBzW2ldLnJvd1tncm91cEluZGV4XSAhPT0gcm93W2dyb3VwSW5kZXhdKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRHcm91cHNbaV0ubGFzdFJvdyA9IHRoaXMuZ3JvdXBlZERhdGEubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICBjdXJyZW50R3JvdXBzW2ldID0gbmV3IEdyb3VwUm93KClcbiAgICAgICAgICAgICAgY3VycmVudEdyb3Vwc1tpXS5yb3dbcm93Lmxlbmd0aCAtIDFdID0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgIGN1cnJlbnRHcm91cHNbaV0uY2xhc3MgPSBNYWluQ29tcG9uZW50Q29udHJvbGxlci5ncm91cGluZ0NsYXNzZXNbaV1cbiAgICAgICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGk7IGorKykgY3VycmVudEdyb3Vwc1tpXS5yb3dbdGhpcy5zdGF0ZS5ncm91cGluZ3Nbal1dID0gY3VycmVudEdyb3Vwc1tqXS5yb3dbdGhpcy5zdGF0ZS5ncm91cGluZ3Nbal1dXG4gICAgICAgICAgICAgIGN1cnJlbnRHcm91cHNbaV0ucm93W2dyb3VwSW5kZXhdID0gcm93W2dyb3VwSW5kZXhdXG4gICAgICAgICAgICAgIHRoaXMuZ3JvdXBlZERhdGEucHVzaChjdXJyZW50R3JvdXBzW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEdyb3Vwc1tpXS5tZW1iZXJSb3dzLnB1c2gocm93KVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmdyb3VwZWREYXRhLnB1c2gocm93KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RhdGUuZ3JvdXBpbmdzLmxlbmd0aDsgaSsrKSBjdXJyZW50R3JvdXBzW2ldLmxhc3RSb3cgPSB0aGlzLmdyb3VwZWREYXRhLmxlbmd0aFxuICAgIH1cbiAgICBwcml2YXRlIHNldFJvdyhyb3c6IG51bWJlciwgZm9jdXM6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Um93ICE9PSByb3cpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Um93ID0gcm93XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUuY3VycmVudFJvdyAvIHRoaXMuY29uZmlnLnBhZ2VTaXplICsgMSlcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UGFnZU9mZnNldCA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLmNvbmZpZy5wYWdlU2l6ZVxuICAgICAgICBpZiAoIXRoaXMuYWx0S2V5RG93bikgdGhpcy5zZWxlY3RlZFJvd3MgPSB7fVxuICAgICAgICB0aGlzLnNlbGVjdGVkUm93c1tyb3ddID0gcm93XG4gICAgICAgIGlmICh0aGlzLmdyb3VwZWREYXRhW3Jvd10gaW5zdGFuY2VvZiBHcm91cFJvdyAmJiAoPEdyb3VwUm93PnRoaXMuZ3JvdXBlZERhdGFbcm93XSkubWVtYmVyUm93cy5sZW5ndGggIT09IDEpXG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gcm93ICsgMTsgaSA8PSAoPEdyb3VwUm93PnRoaXMuZ3JvdXBlZERhdGFbcm93XSkubGFzdFJvdzsgaSsrKSB0aGlzLnNlbGVjdGVkUm93c1tpXSA9IGlcbiAgICAgICAgbGV0IGNyb3c6IHN0cmluZ1tdID0gdGhpcy5ncm91cGVkRGF0YVtyb3ddIGluc3RhbmNlb2YgR3JvdXBSb3cgPyAoKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd10pLm1lbWJlclJvd3MubGVuZ3RoID09PSAxID8gKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd10pLm1lbWJlclJvd3NbMF0gOiAoPEdyb3VwUm93PnRoaXMuZ3JvdXBlZERhdGFbcm93XSkucm93KSA6IDxzdHJpbmdbXT50aGlzLmdyb3VwZWREYXRhW3Jvd11cbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdXG4gICAgICAgIGlmIChjcm93WzFdKSB0aGlzLmNvbnRleHRzLnB1c2godGhpcy4kc2NlLnRydXN0QXNIdG1sKCc8Y2VlYy1jb25jb3JkIHdvcmQ9XCJcXCcnICsgY3Jvd1sxXS5yZXBsYWNlKC8nL2csICdcXFxcXFwnJykucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKSArICdcXCdcIj48L2NlZWMtY29uY29yZD4nKSlcbiAgICAgICAgaWYgKGNyb3dbMF0pIHRoaXMuY29udGV4dHMucHVzaCh0aGlzLiRzY2UudHJ1c3RBc0h0bWwoJzxpZnJhbWUgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDoxMDAlXCIgc3JjPVwiaHR0cDovL3d3dy5vZWQuY29tL3NlYXJjaD9zZWFyY2hUeXBlPWRpY3Rpb25hcnkmcT0nICsgZW5jb2RlVVJJKGNyb3dbMF0pICsgJ1wiPjwvaWZyYW1lPicpKVxuICAgICAgICBpZiAoZm9jdXMpIHRoaXMuZm9jdXMoJ3JvdycgKyByb3cpXG4gICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc2V0Q29sdW1uVmFsdWVzKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuYWx0S2V5RG93biA9IGZhbHNlXG4gICAgICBsZXQgbGFzdFJvdzogbnVtYmVyID0gMFxuICAgICAgZm9yIChsZXQgcm93IGluIHRoaXMuc2VsZWN0ZWRSb3dzKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwZWREYXRhW3Jvd10gaW5zdGFuY2VvZiBHcm91cFJvdykge1xuICAgICAgICAgIGxldCBncm93OiBHcm91cFJvdyA9ICg8R3JvdXBSb3c+dGhpcy5ncm91cGVkRGF0YVtyb3ddKVxuICAgICAgICAgIGdyb3cucm93W2luZGV4XSA9IHZhbHVlXG4gICAgICAgICAgZ3Jvdy5tZW1iZXJSb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGlmIChyb3dbaW5kZXhdID09PSAnJykge1xuICAgICAgICAgICAgICB0aGlzLnRvdGFsQmxhbmtzW2luZGV4XS0tXG4gICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRCbGFua3NbaW5kZXhdLS1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvd1tpbmRleF0gPSB2YWx1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuZ3JvdXBlZERhdGFbcm93XVtpbmRleF0gPT09ICcnKSAge1xuICAgICAgICAgICAgdGhpcy50b3RhbEJsYW5rc1tpbmRleF0tLVxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZEJsYW5rc1tpbmRleF0tLVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmdyb3VwZWREYXRhW3Jvd11baW5kZXhdID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdFJvdyA8IHRoaXMuc2VsZWN0ZWRSb3dzW3Jvd10pIGxhc3RSb3cgPSB0aGlzLnNlbGVjdGVkUm93c1tyb3ddXG4gICAgICB9XG4gICAgICB3aGlsZSAoIXRoaXMuZ3JvdXBlZERhdGFbbGFzdFJvd10gJiYgbGFzdFJvdyA8IHRoaXMuZ3JvdXBlZERhdGEubGVuZ3RoIC0gMilcbiAgICAgICAgbGFzdFJvdysrXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZVxuICAgICAgdGhpcy5zZXRSb3cobGFzdFJvdyArIDEpXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBhbmd1bGFyLklDb21wb25lbnRPcHRpb25zIHtcbiAgICAgIHB1YmxpYyBjb250cm9sbGVyOiBGdW5jdGlvbiA9IE1haW5Db21wb25lbnRDb250cm9sbGVyXG4gICAgICBwdWJsaWMgdGVtcGxhdGVVcmw6IHN0cmluZyA9ICdwYXJ0aWFscy9tYWluLmh0bWwnXG4gIH1cbn1cbiJdfQ==

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
  $templateCache.put('partials/ceec-concord.html',
    '\n' +
    '<script type="text/ng-template" id="popover.html">\n' +
    '  <div class="small black" ng-bind-html="row.fulltext"></div>\n' +
    '</script>\n' +
    '<table class="table table-striped table-condensed">\n' +
    '  <tr ng-repeat="row in $ctrl.concordances" ng-click="$ctrl.open(row.id)">\n' +
    '    <td class="pull-right text-right" popover-append-to-body="true" ng-bind-html="row.before" uib-popover-template="\'popover.html\'" popover-trigger="mouseenter" popover-placement="bottom"></td>\n' +
    '    <th popover-append-to-body="true" uib-popover-template="\'popover.html\'" popover-trigger="mouseenter" popover-placement="bottom">&nbsp;{{row.match}}&nbsp;</th>\n' +
    '    <td ng-bind-html="row.after"></td>\n' +
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
    '    <div ng-repeat="context in $ctrl.contexts" bind-html-compile="context" style="height:{{100/$ctrl.contexts.length}}%;overflow:auto"></div>\n' +
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
