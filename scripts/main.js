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
            this.link = function (scope, element, attr) {
                element.on('mouseup', function (event) { event.preventDefault(); });
                element.on('focus', function (event) { this.select(); });
            };
        }/*<auto_generate>*/SelectOnFocusDirective.$inject = []; SelectOnFocusDirective.$componentName = 'selectOnFocus'/*</auto_generate>*/
        return SelectOnFocusDirective;
    }());/*<auto_generate>*/angular.module('app').directive('selectOnFocus',[function(){return new (Function.prototype.bind.apply(SelectOnFocusDirective,[null].concat(Array.prototype.slice.call(arguments))));}]);/*</auto_generate>*/
    app.SelectOnFocusDirective = SelectOnFocusDirective;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQWtDWjtBQWxDRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ2IsWUFBWSxDQUFBO0lBQ1osSUFBSSxDQUFDLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVOLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxjQUF5QyxFQUFFLGtCQUFpRDtRQUNwRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDM0IsR0FBRyxFQUFFLEdBQUc7WUFDUixRQUFRLEVBQUUsZUFBZTtTQUMxQixDQUFDLENBQUE7UUFDRixjQUFjLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUNuQyxHQUFHLEVBQUUscUJBQXFCO1lBQzFCLFFBQVEsRUFBRSwrQkFBK0I7U0FDMUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFDRixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMscUJBQXFCO1FBQzdCLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM3QyxDQUFDLENBQUMsQ0FBQTtJQUNGLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQywyQkFBMkI7UUFDbkMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ0YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBUyxJQUF5QjtZQUNqRSxNQUFNLENBQUMsVUFBUyxRQUFnQjtnQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDbkMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVIO1FBQUE7WUFDUyxhQUFRLEdBQVcsR0FBRyxDQUFBO1lBQ3RCLFNBQUksR0FBcUIsVUFBQyxLQUFxQixFQUFFLE9BQWUsRUFBRSxJQUF5QjtnQkFDaEcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxLQUF3QixJQUFVLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUM1RixPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQXdCLElBQVUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbkYsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztRQUFELDZCQUFDO0lBQUQsQ0FOQSxBQU1DLElBQUE7SUFOWSwwQkFBc0IseUJBTWxDLENBQUE7QUFFSCxDQUFDLEVBbENTLEdBQUcsS0FBSCxHQUFHLFFBa0NaIiwiZmlsZSI6InNjcmlwdHMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGFwcCB7XG4gICd1c2Ugc3RyaWN0J1xuICBsZXQgbTogYW5ndWxhci5JTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsgJ2h0dHAtYXV0aC1pbnRlcmNlcHRvcicsICd1aS5yb3V0ZXInLCAnbmdGaWxlVXBsb2FkJywgJ3VpLmJvb3RzdHJhcCcsICd1aS5ib290c3RyYXAudHBscycsICduZ1N0b3JhZ2UnLCAnTG9jYWxTdG9yYWdlTW9kdWxlJywgJ2ZpLnNlY28uc3BhcnFsJywgJ2NmcC5ob3RrZXlzJywgJ2ZvY3VzT24nIF0pXG4gIG0uY29uZmlnKCgkc3RhdGVQcm92aWRlcjogYW5ndWxhci51aS5JU3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyOiBhbmd1bGFyLnVpLklVcmxSb3V0ZXJQcm92aWRlcikgPT4ge1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKVxuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdtYWluJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICB0ZW1wbGF0ZTogJzxtYWluPjwvbWFpbj4nXG4gICAgfSlcbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnY2VlYy1jb25jb3JkJywge1xuICAgICAgdXJsOiAnL2NlZWMtY29uY29yZC86d29yZCcsXG4gICAgICB0ZW1wbGF0ZTogJzxjZWVjLWNvbmNvcmQ+PC9jZWVjLWNvbmNvcmQ+J1xuICAgIH0pXG4gIH0pXG4gIG0uY29uZmlnKCgkbG9jYWxTdG9yYWdlUHJvdmlkZXIpID0+IHtcbiAgICAkbG9jYWxTdG9yYWdlUHJvdmlkZXIuc2V0S2V5UHJlZml4KCdmaWNhLicpXG4gIH0pXG4gIG0uY29uZmlnKChsb2NhbFN0b3JhZ2VTZXJ2aWNlUHJvdmlkZXIpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlUHJvdmlkZXIuc2V0UHJlZml4KCdmaWNhLXEnKVxuICB9KVxuICBtLmZpbHRlcigndHJ1c3RBc0h0bWwnLCBbJyRzY2UnLCBmdW5jdGlvbigkc2NlOiBhbmd1bGFyLklTQ0VTZXJ2aWNlKTogKGh0bWxDb2RlOiBzdHJpbmcpID0+IGFueSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGh0bWxDb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwoaHRtbENvZGUpXG4gICAgfVxuICB9XSlcblxuICBleHBvcnQgY2xhc3MgU2VsZWN0T25Gb2N1c0RpcmVjdGl2ZSB7XG4gICAgcHVibGljIHJlc3RyaWN0OiBzdHJpbmcgPSAnQSdcbiAgICBwdWJsaWMgbGluazogKC4uLmFueSkgPT4gdm9pZCA9IChzY29wZTogYW5ndWxhci5JU2NvcGUsIGVsZW1lbnQ6IEpRdWVyeSwgYXR0cjogYW5ndWxhci5JQXR0cmlidXRlcykgPT4ge1xuICAgICAgZWxlbWVudC5vbignbW91c2V1cCcsIGZ1bmN0aW9uIChldmVudDogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSlcbiAgICAgIGVsZW1lbnQub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2ZW50OiBKUXVlcnlFdmVudE9iamVjdCk6IHZvaWQgeyB0aGlzLnNlbGVjdCgpOyB9KVxuICAgIH1cbiAgfVxuXG59XG4iXX0=

var app;
(function (app) {
    'use strict';
    var Snippet = (function () {
        function Snippet(before, match, after) {
            this.before = before;
            this.match = match;
            this.after = after;
        }
        return Snippet;
    }());
    var CeecConcordComponentController = (function () {
        function CeecConcordComponentController(sparqlService, $sce, $stateParams) {
            var _this = this;
            this.sparqlService = sparqlService;
            this.$sce = $sce;
            this.$stateParams = $stateParams;
            sparqlService.query('http://ldf.fi/ceec/sparql', CeecConcordComponentController.query.replace(/<QUERY>/g, sparqlService.stringToSPARQLString($stateParams['word']))).then(function (response) {
                _this.concordances = [];
                response.data.results.bindings.forEach(function (r) {
                    var tmp = document.createElement('div');
                    tmp.textContent = r['fulltext'].value;
                    var ft = tmp.innerHTML;
                    var regexp = new RegExp('(' + $stateParams['word'].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + ')');
                    var before;
                    var after;
                    var parts = ft.split(regexp);
                    var lastBefore = parts[0].length > 60 ? parts[0].substring(parts[0].length - 60) : parts[0];
                    for (var i = 2; i < parts.length; i += 2) {
                        before = lastBefore;
                        if (parts[i].length > 60) {
                            after = parts[i].substring(0, 60);
                            lastBefore = parts[i].substring(parts[i].length - 60);
                        }
                        else {
                            after = parts[i];
                            lastBefore = parts[i];
                        }
                        _this.concordances.push(new Snippet(_this.$sce.trustAsHtml(before), $stateParams['word'], _this.$sce.trustAsHtml(after)));
                    }
                });
            });
        }/*<auto_generate>*/CeecConcordComponentController.$inject = ['sparqlService','$sce','$stateParams']; CeecConcordComponentController.$componentName = 'CeecConcordComponentController'/*</auto_generate>*/
        CeecConcordComponentController.query = "\nPREFIX text: <http://jena.apache.org/text#>\nPREFIX cs: <http://ldf.fi/ceec-schema#>\nSELECT DISTINCT ?id ?fulltext WHERE {\n  BIND(CONCAT(\"\\\"\",REPLACE(<QUERY>,\"([\\\\+\\\\-\\\\&\\\\|\\\\!\\\\(\\\\)\\\\{\\\\}\\\\[\\\\]\\\\^\\\\\\\"\\\\~\\\\*\\\\?\\\\:\\\\/\\\\\\\\])\",\"\\\\\\\\$1\"),\"\\\"\") AS ?query)\n  ?id text:query ?query .\n  ?id cs:fulltext ?fulltext .\n}\nLIMIT 30";
        return CeecConcordComponentController;
    }());/*<auto_generate>*/angular.module('app').controller('CeecConcordComponentController',CeecConcordComponentController);/*</auto_generate>*/
    app.CeecConcordComponentController = CeecConcordComponentController;
    var CeecConcordComponent = (function () {
        function CeecConcordComponent() {
            this.controller = CeecConcordComponentController;
            this.templateUrl = 'partials/ceec-concord.html';
        }/*<auto_generate>*/CeecConcordComponent.$inject = []; CeecConcordComponent.$componentName = 'ceecConcord'/*</auto_generate>*/
        return CeecConcordComponent;
    }());/*<auto_generate>*/angular.module('app').component('ceecConcord',new CeecConcordComponent());/*</auto_generate>*/
    app.CeecConcordComponent = CeecConcordComponent;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvY2VlYy1jb25jb3JkLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FzRFo7QUF0REQsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNiLFlBQVksQ0FBQTtJQUlaO1FBQ0UsaUJBQW1CLE1BQVcsRUFBUyxLQUFhLEVBQVMsS0FBVTtZQUFwRCxXQUFNLEdBQU4sTUFBTSxDQUFLO1lBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtZQUFTLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBRyxDQUFDO1FBQzdFLGNBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUVEO1FBV0Usd0NBQW9CLGFBQThCLEVBQVUsSUFBeUIsRUFBVSxZQUE0QztZQVg3SSxpQkF1Q0M7WUE1QnFCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtZQUFVLFNBQUksR0FBSixJQUFJLENBQXFCO1lBQVUsaUJBQVksR0FBWixZQUFZLENBQWdDO1lBQ3pJLGFBQWEsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3ZLLFVBQUMsUUFBbUc7Z0JBQ2xHLEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFBO2dCQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztvQkFDdEMsSUFBSSxHQUFHLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ3ZELEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQTtvQkFDckMsSUFBSSxFQUFFLEdBQVcsR0FBRyxDQUFDLFNBQVMsQ0FBQTtvQkFDOUIsSUFBSSxNQUFNLEdBQVcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7b0JBQzdHLElBQUksTUFBYyxDQUFBO29CQUNsQixJQUFJLEtBQWEsQ0FBQTtvQkFDakIsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDdEMsSUFBSSxVQUFVLEdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDbkcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDakQsTUFBTSxHQUFHLFVBQVUsQ0FBQTt3QkFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7NEJBQ2pDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUE7d0JBQ3ZELENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTs0QkFDaEIsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDdkIsQ0FBQzt3QkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUN4SCxDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUNGLENBQUE7UUFDSCxDQUFDO1FBckNjLG9DQUFLLEdBQVcsaVlBUTFCLENBQUE7UUE4QlAscUNBQUM7SUFBRCxDQXZDQSxBQXVDQyxJQUFBO0lBdkNZLGtDQUE4QixpQ0F1QzFDLENBQUE7SUFFRDtRQUFBO1lBQ1MsZUFBVSxHQUFhLDhCQUE4QixDQUFBO1lBQ3JELGdCQUFXLEdBQVcsNEJBQTRCLENBQUE7UUFDM0QsQ0FBQztRQUFELDJCQUFDO0lBQUQsQ0FIQSxBQUdDLElBQUE7SUFIWSx3QkFBb0IsdUJBR2hDLENBQUE7QUFDSCxDQUFDLEVBdERTLEdBQUcsS0FBSCxHQUFHLFFBc0RaIiwiZmlsZSI6InNjcmlwdHMvY2VlYy1jb25jb3JkLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBhcHAge1xuICAndXNlIHN0cmljdCdcblxuICBpbXBvcnQgcyA9IGZpLnNlY28uc3BhcnFsXG5cbiAgY2xhc3MgU25pcHBldCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGJlZm9yZTogYW55LCBwdWJsaWMgbWF0Y2g6IHN0cmluZywgcHVibGljIGFmdGVyOiBhbnkpIHt9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ2VlY0NvbmNvcmRDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBxdWVyeTogc3RyaW5nID0gYFxuUFJFRklYIHRleHQ6IDxodHRwOi8vamVuYS5hcGFjaGUub3JnL3RleHQjPlxuUFJFRklYIGNzOiA8aHR0cDovL2xkZi5maS9jZWVjLXNjaGVtYSM+XG5TRUxFQ1QgRElTVElOQ1QgP2lkID9mdWxsdGV4dCBXSEVSRSB7XG4gIEJJTkQoQ09OQ0FUKFwiXFxcXFwiXCIsUkVQTEFDRSg8UVVFUlk+LFwiKFtcXFxcXFxcXCtcXFxcXFxcXC1cXFxcXFxcXCZcXFxcXFxcXHxcXFxcXFxcXCFcXFxcXFxcXChcXFxcXFxcXClcXFxcXFxcXHtcXFxcXFxcXH1cXFxcXFxcXFtcXFxcXFxcXF1cXFxcXFxcXF5cXFxcXFxcXFxcXFxcIlxcXFxcXFxcflxcXFxcXFxcKlxcXFxcXFxcP1xcXFxcXFxcOlxcXFxcXFxcL1xcXFxcXFxcXFxcXFxcXFxdKVwiLFwiXFxcXFxcXFxcXFxcXFxcXCQxXCIpLFwiXFxcXFwiXCIpIEFTID9xdWVyeSlcbiAgP2lkIHRleHQ6cXVlcnkgP3F1ZXJ5IC5cbiAgP2lkIGNzOmZ1bGx0ZXh0ID9mdWxsdGV4dCAuXG59XG5MSU1JVCAzMGBcbiAgICBwdWJsaWMgY29uY29yZGFuY2VzOiBTbmlwcGV0W11cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwYXJxbFNlcnZpY2U6IHMuU3BhcnFsU2VydmljZSwgcHJpdmF0ZSAkc2NlOiBhbmd1bGFyLklTQ0VTZXJ2aWNlLCBwcml2YXRlICRzdGF0ZVBhcmFtczogYW5ndWxhci51aS5JU3RhdGVQYXJhbXNTZXJ2aWNlKSB7XG4gICAgICBzcGFycWxTZXJ2aWNlLnF1ZXJ5KCdodHRwOi8vbGRmLmZpL2NlZWMvc3BhcnFsJywgQ2VlY0NvbmNvcmRDb21wb25lbnRDb250cm9sbGVyLnF1ZXJ5LnJlcGxhY2UoLzxRVUVSWT4vZywgc3BhcnFsU2VydmljZS5zdHJpbmdUb1NQQVJRTFN0cmluZygkc3RhdGVQYXJhbXNbJ3dvcmQnXSkpKS50aGVuKFxuICAgICAgICAocmVzcG9uc2U6IGFuZ3VsYXIuSUh0dHBQcm9taXNlQ2FsbGJhY2tBcmc8cy5JU3BhcnFsQmluZGluZ1Jlc3VsdDx7W2lkOiBzdHJpbmddOiBzLklTcGFycWxCaW5kaW5nfT4+KSA9PiB7XG4gICAgICAgICAgdGhpcy5jb25jb3JkYW5jZXMgPSBbXVxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEucmVzdWx0cy5iaW5kaW5ncy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgbGV0IHRtcDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG1wLnRleHRDb250ZW50ID0gclsnZnVsbHRleHQnXS52YWx1ZVxuICAgICAgICAgICAgbGV0IGZ0OiBzdHJpbmcgPSB0bXAuaW5uZXJIVE1MXG4gICAgICAgICAgICBsZXQgcmVnZXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKCcoJyArICRzdGF0ZVBhcmFtc1snd29yZCddLnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJykgKyAnKScpXG4gICAgICAgICAgICBsZXQgYmVmb3JlOiBzdHJpbmdcbiAgICAgICAgICAgIGxldCBhZnRlcjogc3RyaW5nXG4gICAgICAgICAgICBsZXQgcGFydHM6IHN0cmluZ1tdID0gZnQuc3BsaXQocmVnZXhwKVxuICAgICAgICAgICAgbGV0IGxhc3RCZWZvcmU6IHN0cmluZyA9IHBhcnRzWzBdLmxlbmd0aCA+IDYwID8gcGFydHNbMF0uc3Vic3RyaW5nKHBhcnRzWzBdLmxlbmd0aCAtIDYwKSA6IHBhcnRzWzBdXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAyOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgYmVmb3JlID0gbGFzdEJlZm9yZVxuICAgICAgICAgICAgICBpZiAocGFydHNbaV0ubGVuZ3RoID4gNjApIHtcbiAgICAgICAgICAgICAgICBhZnRlciA9IHBhcnRzW2ldLnN1YnN0cmluZygwLCA2MClcbiAgICAgICAgICAgICAgICBsYXN0QmVmb3JlID0gcGFydHNbaV0uc3Vic3RyaW5nKHBhcnRzW2ldLmxlbmd0aCAtIDYwKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFmdGVyID0gcGFydHNbaV1cbiAgICAgICAgICAgICAgICBsYXN0QmVmb3JlID0gcGFydHNbaV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmNvbmNvcmRhbmNlcy5wdXNoKG5ldyBTbmlwcGV0KHRoaXMuJHNjZS50cnVzdEFzSHRtbChiZWZvcmUpLCAkc3RhdGVQYXJhbXNbJ3dvcmQnXSwgdGhpcy4kc2NlLnRydXN0QXNIdG1sKGFmdGVyKSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDZWVjQ29uY29yZENvbXBvbmVudCBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnMge1xuICAgIHB1YmxpYyBjb250cm9sbGVyOiBGdW5jdGlvbiA9IENlZWNDb25jb3JkQ29tcG9uZW50Q29udHJvbGxlclxuICAgIHB1YmxpYyB0ZW1wbGF0ZVVybDogc3RyaW5nID0gJ3BhcnRpYWxzL2NlZWMtY29uY29yZC5odG1sJ1xuICB9XG59XG4iXX0=

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
        function MainComponentController($uibModal, $localStorage, localStorageService, $http, $sce, selectSheetService, hotkeys, focus) {
            this.$uibModal = $uibModal;
            this.$localStorage = $localStorage;
            this.localStorageService = localStorageService;
            this.$http = $http;
            this.$sce = $sce;
            this.selectSheetService = selectSheetService;
            this.hotkeys = hotkeys;
            this.focus = focus;
            this.totalBlanks = [];
            this.filteredBlanks = [];
            this.dirty = false;
            this.selectedRows = {};
            this.altKeyDown = false;
            this.data = [];
        }/*<auto_generate>*/MainComponentController.$inject = ['$uibModal','$localStorage','localStorageService','$http','$sce','selectSheetService','hotkeys','focus']; MainComponentController.$componentName = 'MainComponentController'/*</auto_generate>*/
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
            this.setRow(row);
        };
        MainComponentController.prototype.save = function () {
            this.localStorageService.set('data', this.data);
            this.dirty = false;
        };
        MainComponentController.prototype.$onInit = function () {
            var _this = this;
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
                    _this.altKeyDown = false;
                    var lastRow = 0;
                    for (var row in _this.selectedRows) {
                        if (_this.groupedData[row] instanceof GroupRow) {
                            var grow = _this.groupedData[row];
                            grow.row[1] = 'yes';
                            grow.memberRows.forEach(function (row) {
                                if (row[1] === '') {
                                    _this.totalBlanks[1]--;
                                    _this.filteredBlanks[1]--;
                                }
                                row[1] = 'yes';
                            });
                        }
                        else {
                            if (_this.groupedData[row][1] === '') {
                                _this.totalBlanks[1]--;
                                _this.filteredBlanks[1]--;
                            }
                            _this.groupedData[row][1] = 'yes';
                        }
                        if (lastRow < _this.selectedRows[row])
                            lastRow = _this.selectedRows[row];
                    }
                    while (!_this.groupedData[lastRow] && lastRow < _this.groupedData.length - 2)
                        lastRow++;
                    _this.dirty = true;
                    _this.setRow(lastRow + 1);
                    event.preventDefault();
                }
            });
            this.hotkeys.add({
                combo: 'ctrl+2',
                allowIn: ['INPUT', 'TD'],
                callback: function (event, hotkey) {
                    _this.altKeyDown = false;
                    var lastRow = 0;
                    for (var row in _this.selectedRows) {
                        if (_this.groupedData[row] instanceof GroupRow) {
                            var grow = _this.groupedData[row];
                            grow.row[1] = 'no';
                            grow.memberRows.forEach(function (row) {
                                if (row[1] === '') {
                                    _this.totalBlanks[1]--;
                                    _this.filteredBlanks[1]--;
                                }
                                row[1] = 'no';
                            });
                        }
                        else {
                            if (_this.groupedData[row][1] === '') {
                                _this.totalBlanks[1]--;
                                _this.filteredBlanks[1]--;
                            }
                            _this.groupedData[row][1] = 'no';
                        }
                        if (lastRow < _this.selectedRows[row])
                            lastRow = _this.selectedRows[row];
                    }
                    while (!_this.groupedData[lastRow] && lastRow < _this.groupedData.length - 2)
                        lastRow++;
                    _this.dirty = true;
                    _this.setRow(lastRow + 1);
                    event.preventDefault();
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
        };
        MainComponentController.prototype.$onDestroy = function () {
            this.hotkeys.del('ctrl+1');
            this.hotkeys.del('ctrl+2');
            this.hotkeys.del('tab');
            this.hotkeys.del('shift+tab');
            this.save();
        };
        MainComponentController.prototype.next = function () {
            if (this.state.currentRow === this.groupedData.length - 1)
                this.setRow(0);
            else
                this.setRow(this.state.currentRow + 1);
        };
        MainComponentController.prototype.prev = function () {
            if (this.state.currentRow === 0)
                this.setRow(this.groupedData.length - 1);
            else
                this.setRow(this.state.currentRow - 1);
        };
        MainComponentController.prototype.updateGroupedData = function () {
            var _this = this;
            var currentGroups = this.state.groupings.map(function (v) { return new GroupRow(); });
            this.groupedData = [];
            this.selectedRows = {};
            this.state.currentRow = undefined;
            this.currentPage = 1;
            this.state.currentPageOffset = 0;
            for (var i = 0; i < this.state.headings.length; i++) {
                this.totalBlanks[i] = 0;
                this.filteredBlanks[i] = 0;
            }
            this.data.forEach(function (row, index) {
                var allowed = true;
                _this.state.filters.forEach(function (filter, columnIndex) {
                    if (filter !== null && filter !== '') {
                        if (filter.indexOf('!') === 0) {
                            if (row[columnIndex].indexOf(filter.substring(1)) === 0)
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
        MainComponentController.prototype.setRow = function (row) {
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
            this.contextURLs = [];
            if (crow[5])
                this.contextURLs.push(this.$sce.trustAsResourceUrl('#/ceec-concord/' + crow[5]));
            if (crow[0])
                this.contextURLs.push(this.$sce.trustAsResourceUrl('http://www.oed.com/search?searchType=dictionary&q=' + crow[0]));
            this.focus('row' + row);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvbWFpbi1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBaVNaO0FBalNELFdBQVUsR0FBRyxFQUFDLENBQUM7SUFDYixZQUFZLENBQUE7SUFFWjtRQUFBO1lBQ1MsYUFBUSxHQUFXLEdBQUcsQ0FBQTtRQUMvQixDQUFDO1FBQUQsYUFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRUQ7UUFBQTtZQUNTLGVBQVUsR0FBZSxFQUFFLENBQUE7WUFFM0IsUUFBRyxHQUFhLEVBQUUsQ0FBQTtRQUUzQixDQUFDO1FBQUQsZUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBRUQ7UUFBQTtZQUNTLGFBQVEsR0FBYSxFQUFFLENBQUE7WUFDdkIsY0FBUyxHQUFhLEVBQUUsQ0FBQTtZQUV4QixzQkFBaUIsR0FBVyxDQUFDLENBQUE7WUFDN0IsZUFBVSxHQUFXLENBQUMsQ0FBQTtZQUN0QixXQUFNLEdBQVcsQ0FBQyxDQUFBO1lBQ2xCLGFBQVEsR0FBWSxLQUFLLENBQUE7WUFDekIsWUFBTyxHQUFhLEVBQUUsQ0FBQTtRQUMvQixDQUFDO1FBQUQsWUFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBRUQ7UUFtRkUsaUNBQW9CLFNBQTZDLEVBQVUsYUFBa0IsRUFBVSxtQkFBd0IsRUFBVSxLQUEyQixFQUFVLElBQXlCLEVBQVUsa0JBQXNDLEVBQVUsT0FBd0MsRUFBVSxLQUFVO1lBQXpTLGNBQVMsR0FBVCxTQUFTLENBQW9DO1lBQVUsa0JBQWEsR0FBYixhQUFhLENBQUs7WUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQUs7WUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFzQjtZQUFVLFNBQUksR0FBSixJQUFJLENBQXFCO1lBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlDO1lBQVUsVUFBSyxHQUFMLEtBQUssQ0FBSztZQTNFdFQsZ0JBQVcsR0FBYSxFQUFFLENBQUE7WUFD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TSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7d0JBQzFFLENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDckMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7d0JBQzVFLENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDckMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7d0JBQzNFLENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7b0JBQ3BFLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FB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UUEvUGMsdUNBQWUsR0FBYSxDQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFFLENBQUE7UUFpUS9FLDhCQUFDO0lBQUQsQ0FsUUEsQUFrUUMsSUFBQTtJQWxRWSwyQkFBdUIsMEJBa1FuQyxDQUFBO0lBRUQ7UUFBQTtZQUNXLGVBQVUsR0FBYSx1QkFBdUIsQ0FBQTtZQUM5QyxnQkFBVyxHQUFXLG9CQUFvQixDQUFBO1FBQ3JELENBQUM7UUFBRCxvQkFBQztJQUFELENBSEEsQUFHQyxJQUFBO0lBSFksaUJBQWEsZ0JBR3pCLENBQUE7QUFDSCxDQUFDLEVBalNTLEdBQUcsS0FBSCxHQUFHLFFBaVNaIiwiZmlsZSI6InNjcmlwdHMvbWFpbi1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYXBwIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgY2xhc3MgQ29uZmlnIHtcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDIwMFxuICB9XG5cbiAgY2xhc3MgR3JvdXBSb3cge1xuICAgIHB1YmxpYyBtZW1iZXJSb3dzOiBzdHJpbmdbXVtdID0gW11cbiAgICBwdWJsaWMgbGFzdFJvdzogbnVtYmVyXG4gICAgcHVibGljIHJvdzogc3RyaW5nW10gPSBbXVxuICAgIHB1YmxpYyBjbGFzczogc3RyaW5nXG4gIH1cblxuICBjbGFzcyBTdGF0ZSB7XG4gICAgcHVibGljIGhlYWRpbmdzOiBzdHJpbmdbXSA9IFtdXG4gICAgcHVibGljIGdyb3VwaW5nczogbnVtYmVyW10gPSBbXVxuICAgIHB1YmxpYyBmaWxlTmFtZTogc3RyaW5nXG4gICAgcHVibGljIGN1cnJlbnRQYWdlT2Zmc2V0OiBudW1iZXIgPSAwXG4gICAgcHVibGljIGN1cnJlbnRSb3c6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgc29ydEJ5OiBudW1iZXIgPSAwXG4gICAgcHVibGljIHNvcnREZXNjOiBib29sZWFuID0gZmFsc2VcbiAgICBwdWJsaWMgZmlsdGVyczogc3RyaW5nW10gPSBbXVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnRDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBncm91cGluZ0NsYXNzZXM6IHN0cmluZ1tdID0gWyAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlcicgXVxuXG4gICAgcHVibGljIGVycm9yOiBzdHJpbmdcbiAgICBwdWJsaWMgZ3JvdXBlZERhdGE6IChHcm91cFJvd3xhbnlbXSlbXVxuXG4gICAgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXJcblxuICAgIHB1YmxpYyB0b3RhbEJsYW5rczogbnVtYmVyW10gPSBbXVxuICAgIHB1YmxpYyBmaWx0ZXJlZEJsYW5rczogbnVtYmVyW10gPSBbXVxuXG4gICAgcHVibGljIHN0YXRlOiBTdGF0ZVxuICAgIHB1YmxpYyBjb25maWc6IENvbmZpZ1xuICAgIHB1YmxpYyBjb250ZXh0VVJMczogc3RyaW5nW11cblxuICAgIHB1YmxpYyBkaXJ0eTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRSb3dzOiB7W2lkOiBudW1iZXJdOiBudW1iZXJ9ID0ge31cblxuICAgIHByaXZhdGUgYWx0S2V5RG93bjogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBwcml2YXRlIGRhdGE6IGFueVtdW10gPSBbXVxuXG4gICAgcHVibGljIGxvYWRGaWxlKGZpbGU6IEZpbGUpOiB2b2lkIHtcbiAgICAgIGlmICghZmlsZSkgcmV0dXJuXG4gICAgICB0aGlzLnN0YXRlLmZpbGVOYW1lID0gZmlsZS5uYW1lXG4gICAgICB0aGlzLnNlbGVjdFNoZWV0U2VydmljZS5zZWxlY3RTaGVldChmaWxlKS50aGVuKFxuICAgICAgICAoZGF0YTogc3RyaW5nW11bXSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RhdGUuaGVhZGluZ3MgPSBkYXRhLnNoaWZ0KClcbiAgICAgICAgICBpZiAoZGF0YVtkYXRhLmxlbmd0aCAtIDFdLmxlbmd0aCA9PT0gMSAmJiBkYXRhW2RhdGEubGVuZ3RoIC0gMSBdWzBdID09PSAnJykgZGF0YS5wb3AoKVxuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICAgICBsZXQgaXNOdW1iZXI6IGJvb2xlYW5bXSA9IHRoaXMuc3RhdGUuaGVhZGluZ3MubWFwKGggPT4gdHJ1ZSlcbiAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goKGNvbHVtbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7aWYgKCEoJycgKyBwYXJzZUludChjb2x1bW4sIDEwKSA9PT0gY29sdW1uKSkgaXNOdW1iZXJbaW5kZXhdID0gZmFsc2V9KSlcbiAgICAgICAgICBpc051bWJlci5mb3JFYWNoKCh0aGlzSXNOdW1iZXI6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzSXNOdW1iZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHJvd1tpbmRleF0gPSBwYXJzZUludChyb3dbaW5kZXhdLCAxMCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdkYXRhJywgZGF0YSlcbiAgICAgICAgICB0aGlzLmdyb3VwaW5nc1VwZGF0ZWQoKVxuICAgICAgICB9LFxuICAgICAgICAoZXJyTWVzc2FnZSkgPT4gdGhpcy5lcnJvciA9IGVyck1lc3NhZ2UpXG4gICAgfVxuICAgIHB1YmxpYyBzYXZlQ1NWRmlsZSgpOiB2b2lkIHtcbiAgICAgIGxldCBkYXRhOiBzdHJpbmdbXVtdID0gW3RoaXMuc3RhdGUuaGVhZGluZ3NdLmNvbmNhdCh0aGlzLmRhdGEpXG4gICAgICBsZXQgZm46IHN0cmluZyA9ICdmaWNhLScgKyB0aGlzLnN0YXRlLmZpbGVOYW1lLnJlcGxhY2UoL1xcLi4qPyQvLCAnLmNzdicpXG4gICAgICBzYXZlQXMobmV3IEJsb2IoW1BhcGEudW5wYXJzZShkYXRhKV0sIHt0eXBlOiAndGV4dC9jc3YnfSksIGZuKVxuICAgIH1cbiAgICBwdWJsaWMgc2V0U29ydEJ5KGhlYWRpbmdJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0QnkgPT09IGhlYWRpbmdJbmRleCkgdGhpcy5zdGF0ZS5zb3J0RGVzYyA9ICF0aGlzLnN0YXRlLnNvcnREZXNjXG4gICAgICB0aGlzLnN0YXRlLnNvcnRCeSA9IGhlYWRpbmdJbmRleFxuICAgICAgdGhpcy5ncm91cGluZ3NVcGRhdGVkKClcbiAgICB9XG4gICAgcHVibGljIGdyb3VwaW5nc1VwZGF0ZWQoKTogdm9pZCB7XG4gICAgICB0aGlzLmRhdGEuc29ydCgoYTogc3RyaW5nW10sIGI6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmdyb3VwaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBncm91cEluZGV4OiBudW1iZXIgPSB0aGlzLnN0YXRlLmdyb3VwaW5nc1tpXVxuICAgICAgICAgIGlmIChhW2dyb3VwSW5kZXhdIDwgYltncm91cEluZGV4XSkgcmV0dXJuIC0xXG4gICAgICAgICAgaWYgKGJbZ3JvdXBJbmRleF0gPCBhW2dyb3VwSW5kZXhdKSByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIGlmIChhW3RoaXMuc3RhdGUuc29ydEJ5XSA8IGJbdGhpcy5zdGF0ZS5zb3J0QnldKSByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0RGVzYyA/IDEgOiAtMVxuICAgICAgICBpZiAoYlt0aGlzLnN0YXRlLnNvcnRCeV0gPCBhW3RoaXMuc3RhdGUuc29ydEJ5XSkgcmV0dXJuIHRoaXMuc3RhdGUuc29ydERlc2MgPyAtMSA6IDFcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH0pXG4gICAgICB0aGlzLnNhdmUoKVxuICAgICAgdGhpcy51cGRhdGVHcm91cGVkRGF0YSgpXG4gICAgfVxuICAgIHB1YmxpYyBhZGROZXdHcm91cGluZyhuZXdHcm91cGluZ0luZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuc3RhdGUuZ3JvdXBpbmdzLnB1c2gobmV3R3JvdXBpbmdJbmRleClcbiAgICAgIHRoaXMuZ3JvdXBpbmdzVXBkYXRlZCgpXG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVHcm91cGluZyhpbmRleE9mR3JvdXBpbmc6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5zdGF0ZS5ncm91cGluZ3Muc3BsaWNlKGluZGV4T2ZHcm91cGluZywgMSlcbiAgICAgIHRoaXMuZ3JvdXBpbmdzVXBkYXRlZCgpXG4gICAgfVxuICAgIHB1YmxpYyBtb3VzZUZvY3VzKHJvdzogbnVtYmVyLCBhbHRLZXk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuYWx0S2V5RG93biA9IGFsdEtleVxuICAgICAgdGhpcy5zZXRSb3cocm93KVxuICAgIH1cbiAgICBwdWJsaWMgc2F2ZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2RhdGEnLCB0aGlzLmRhdGEpXG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2VcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkdWliTW9kYWw6IGFuZ3VsYXIudWkuYm9vdHN0cmFwLklNb2RhbFNlcnZpY2UsIHByaXZhdGUgJGxvY2FsU3RvcmFnZTogYW55LCBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IGFueSwgcHJpdmF0ZSAkaHR0cDogYW5ndWxhci5JSHR0cFNlcnZpY2UsIHByaXZhdGUgJHNjZTogYW5ndWxhci5JU0NFU2VydmljZSwgcHJpdmF0ZSBzZWxlY3RTaGVldFNlcnZpY2U6IFNlbGVjdFNoZWV0U2VydmljZSwgcHJpdmF0ZSBob3RrZXlzOiBhbmd1bGFyLmhvdGtleXMuSG90a2V5c1Byb3ZpZGVyLCBwcml2YXRlIGZvY3VzOiBhbnkpIHt9XG4gICAgcHVibGljICRvbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMuJGxvY2FsU3RvcmFnZS5zdGF0ZSkgdGhpcy4kbG9jYWxTdG9yYWdlLnN0YXRlID0gbmV3IFN0YXRlKClcbiAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLiRsb2NhbFN0b3JhZ2Uuc3RhdGVcbiAgICAgIGlmICghdGhpcy4kbG9jYWxTdG9yYWdlLmNvbmZpZykgdGhpcy4kbG9jYWxTdG9yYWdlLmNvbmZpZyA9IG5ldyBDb25maWcoKVxuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLiRsb2NhbFN0b3JhZ2UuY29uZmlnXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gTWF0aC5mbG9vcih0aGlzLnN0YXRlLmN1cnJlbnRQYWdlT2Zmc2V0IC8gdGhpcy5jb25maWcucGFnZVNpemUpICsgMVxuICAgICAgdGhpcy5kYXRhID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnZGF0YScpXG4gICAgICBpZiAoIXRoaXMuZGF0YSkgdGhpcy5kYXRhID0gW11cbiAgICAgIHRoaXMudXBkYXRlR3JvdXBlZERhdGEoKVxuICAgICAgdGhpcy5ob3RrZXlzLmFkZCh7XG4gICAgICAgIGNvbWJvOiAnY3RybCsxJyxcbiAgICAgICAgYWxsb3dJbjogWydJTlBVVCcsICdURCddLFxuICAgICAgICBjYWxsYmFjazogKGV2ZW50OiBFdmVudCwgaG90a2V5OiBhbmd1bGFyLmhvdGtleXMuSG90a2V5KTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5hbHRLZXlEb3duID0gZmFsc2VcbiAgICAgICAgICBsZXQgbGFzdFJvdzogbnVtYmVyID0gMFxuICAgICAgICAgIGZvciAobGV0IHJvdyBpbiB0aGlzLnNlbGVjdGVkUm93cykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXBlZERhdGFbcm93XSBpbnN0YW5jZW9mIEdyb3VwUm93KSB7XG4gICAgICAgICAgICAgIGxldCBncm93OiBHcm91cFJvdyA9ICg8R3JvdXBSb3c+dGhpcy5ncm91cGVkRGF0YVtyb3ddKVxuICAgICAgICAgICAgICBncm93LnJvd1sxXSA9ICd5ZXMnXG4gICAgICAgICAgICAgIGdyb3cubWVtYmVyUm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJvd1sxXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxCbGFua3NbMV0tLVxuICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZEJsYW5rc1sxXS0tXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvd1sxXSA9ICd5ZXMnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodGhpcy5ncm91cGVkRGF0YVtyb3ddWzFdID09PSAnJykgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQmxhbmtzWzFdLS1cbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkQmxhbmtzWzFdLS1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmdyb3VwZWREYXRhW3Jvd11bMV0gPSAneWVzJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhc3RSb3cgPCB0aGlzLnNlbGVjdGVkUm93c1tyb3ddKSBsYXN0Um93ID0gdGhpcy5zZWxlY3RlZFJvd3Nbcm93XVxuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAoIXRoaXMuZ3JvdXBlZERhdGFbbGFzdFJvd10gJiYgbGFzdFJvdyA8IHRoaXMuZ3JvdXBlZERhdGEubGVuZ3RoIC0gMilcbiAgICAgICAgICAgIGxhc3RSb3crK1xuICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlXG4gICAgICAgICAgdGhpcy5zZXRSb3cobGFzdFJvdyArIDEpXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5ob3RrZXlzLmFkZCh7XG4gICAgICAgIGNvbWJvOiAnY3RybCsyJyxcbiAgICAgICAgYWxsb3dJbjogWydJTlBVVCcsICdURCddLFxuICAgICAgICBjYWxsYmFjazogKGV2ZW50OiBFdmVudCwgaG90a2V5OiBhbmd1bGFyLmhvdGtleXMuSG90a2V5KTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5hbHRLZXlEb3duID0gZmFsc2VcbiAgICAgICAgICBsZXQgbGFzdFJvdzogbnVtYmVyID0gMFxuICAgICAgICAgIGZvciAobGV0IHJvdyBpbiB0aGlzLnNlbGVjdGVkUm93cykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXBlZERhdGFbcm93XSBpbnN0YW5jZW9mIEdyb3VwUm93KSB7XG4gICAgICAgICAgICAgIGxldCBncm93OiBHcm91cFJvdyA9ICg8R3JvdXBSb3c+dGhpcy5ncm91cGVkRGF0YVtyb3ddKVxuICAgICAgICAgICAgICBncm93LnJvd1sxXSA9ICdubydcbiAgICAgICAgICAgICAgZ3Jvdy5tZW1iZXJSb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm93WzFdID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbEJsYW5rc1sxXS0tXG4gICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkQmxhbmtzWzFdLS1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByb3dbMV0gPSAnbm8nXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodGhpcy5ncm91cGVkRGF0YVtyb3ddWzFdID09PSAnJykgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQmxhbmtzWzFdLS1cbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkQmxhbmtzWzFdLS1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZ3JvdXBlZERhdGFbcm93XVsxXSA9ICdubydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0Um93IDwgdGhpcy5zZWxlY3RlZFJvd3Nbcm93XSkgbGFzdFJvdyA9IHRoaXMuc2VsZWN0ZWRSb3dzW3Jvd11cbiAgICAgICAgICB9XG4gICAgICAgICAgd2hpbGUgKCF0aGlzLmdyb3VwZWREYXRhW2xhc3RSb3ddICYmIGxhc3RSb3cgPCB0aGlzLmdyb3VwZWREYXRhLmxlbmd0aCAtIDIpXG4gICAgICAgICAgICBsYXN0Um93KytcbiAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuc2V0Um93KGxhc3RSb3cgKyAxKVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe2NvbWJvOiAnYWx0K3RhYicsIGFsbG93SW46IFsnSU5QVVQnLCAnVEQnXSwgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmFsdEtleURvd24gPSB0cnVlXG4gICAgICAgIGlmICh0aGlzLmdyb3VwZWREYXRhW3RoaXMuc3RhdGUuY3VycmVudFJvd10gaW5zdGFuY2VvZiBHcm91cFJvdylcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRSb3cgPSAoPEdyb3VwUm93PnRoaXMuZ3JvdXBlZERhdGFbdGhpcy5zdGF0ZS5jdXJyZW50Um93XSkubGFzdFJvd1xuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9fSlcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe2NvbWJvOiAndGFiJywgYWxsb3dJbjogWydJTlBVVCcsICdURCddLCBjYWxsYmFjazogKGV2ZW50OiBFdmVudCwgaG90a2V5OiBhbmd1bGFyLmhvdGtleXMuSG90a2V5KTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuYWx0S2V5RG93biA9IGZhbHNlXG4gICAgICAgIHRoaXMubmV4dCgpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH19KVxuICAgICAgdGhpcy5ob3RrZXlzLmFkZCh7Y29tYm86ICdzaGlmdCt0YWInLCBhbGxvd0luOiBbJ0lOUFVUJywgJ1REJ10sIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50LCBob3RrZXk6IGFuZ3VsYXIuaG90a2V5cy5Ib3RrZXkpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5hbHRLZXlEb3duID0gZmFsc2U7IHRoaXMucHJldigpOyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9fSlcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe2NvbWJvOiAnYWx0K3NoaWZ0K3RhYicsIGFsbG93SW46IFsnSU5QVVQnLCAnVEQnXSwgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmFsdEtleURvd24gPSB0cnVlOyB0aGlzLnByZXYoKTsgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfX0pXG4gICAgfVxuICAgIHB1YmxpYyAkb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3RrZXlzLmRlbCgnY3RybCsxJylcbiAgICAgIHRoaXMuaG90a2V5cy5kZWwoJ2N0cmwrMicpXG4gICAgICB0aGlzLmhvdGtleXMuZGVsKCd0YWInKVxuICAgICAgdGhpcy5ob3RrZXlzLmRlbCgnc2hpZnQrdGFiJylcbiAgICAgIHRoaXMuc2F2ZSgpXG4gICAgfVxuICAgIHByaXZhdGUgbmV4dCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRSb3cgPT09IHRoaXMuZ3JvdXBlZERhdGEubGVuZ3RoIC0gMSkgdGhpcy5zZXRSb3coMClcbiAgICAgIGVsc2UgdGhpcy5zZXRSb3codGhpcy5zdGF0ZS5jdXJyZW50Um93ICsgMSlcbiAgICB9XG4gICAgcHJpdmF0ZSBwcmV2KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFJvdyA9PT0gMCkgdGhpcy5zZXRSb3codGhpcy5ncm91cGVkRGF0YS5sZW5ndGggLSAxKVxuICAgICAgZWxzZSB0aGlzLnNldFJvdyh0aGlzLnN0YXRlLmN1cnJlbnRSb3cgLSAxKVxuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUdyb3VwZWREYXRhKCk6IHZvaWQge1xuICAgICAgbGV0IGN1cnJlbnRHcm91cHM6IEdyb3VwUm93W10gPSB0aGlzLnN0YXRlLmdyb3VwaW5ncy5tYXAodiA9PiBuZXcgR3JvdXBSb3coKSlcbiAgICAgIHRoaXMuZ3JvdXBlZERhdGEgPSBbXVxuICAgICAgdGhpcy5zZWxlY3RlZFJvd3MgPSB7fVxuICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Um93ID0gdW5kZWZpbmVkXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMVxuICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UGFnZU9mZnNldCA9IDBcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmhlYWRpbmdzLmxlbmd0aDsgaSsrKSAge1xuICAgICAgICB0aGlzLnRvdGFsQmxhbmtzW2ldID0gMFxuICAgICAgICB0aGlzLmZpbHRlcmVkQmxhbmtzW2ldID0gMFxuICAgICAgfVxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGFsbG93ZWQ6IGJvb2xlYW4gPSB0cnVlXG4gICAgICAgIHRoaXMuc3RhdGUuZmlsdGVycy5mb3JFYWNoKChmaWx0ZXI6IHN0cmluZywgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChmaWx0ZXIgIT09IG51bGwgJiYgZmlsdGVyICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKGZpbHRlci5pbmRleE9mKCchJykgPT09IDApIHtcbiAgICAgICAgICAgICAgaWYgKHJvd1tjb2x1bW5JbmRleF0uaW5kZXhPZihmaWx0ZXIuc3Vic3RyaW5nKDEpKSA9PT0gMCkgYWxsb3dlZCA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlci5pbmRleE9mKCc+JykgPT09IDApIHtcbiAgICAgICAgICAgICAgaWYgKHJvd1tjb2x1bW5JbmRleF0gPD0gcGFyc2VJbnQoZmlsdGVyLnN1YnN0cmluZygxKSwgMTApKSBhbGxvd2VkID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLmluZGV4T2YoJzwnKSA9PT0gMCkge1xuICAgICAgICAgICAgICBpZiAocm93W2NvbHVtbkluZGV4XSA+IHBhcnNlSW50KGZpbHRlci5zdWJzdHJpbmcoMSksIDEwKSkgYWxsb3dlZCA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJvd1tjb2x1bW5JbmRleF0uaW5kZXhPZihmaWx0ZXIpICE9PSAwKSBhbGxvd2VkID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmhlYWRpbmdzLmxlbmd0aDsgaSsrKSBpZiAocm93W2ldID09PSAnJykgdGhpcy50b3RhbEJsYW5rc1tpXSsrXG4gICAgICAgIGlmIChhbGxvd2VkKSB7XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RhdGUuaGVhZGluZ3MubGVuZ3RoOyBpKyspIGlmIChyb3dbaV0gPT09ICcnKSB0aGlzLmZpbHRlcmVkQmxhbmtzW2ldKytcbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zdGF0ZS5ncm91cGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBncm91cEluZGV4OiBudW1iZXIgPSB0aGlzLnN0YXRlLmdyb3VwaW5nc1tpXVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRHcm91cHNbaV0ucm93W2dyb3VwSW5kZXhdICE9PSByb3dbZ3JvdXBJbmRleF0gJiYgY3VycmVudEdyb3Vwc1tpXS5tZW1iZXJSb3dzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgdGhpcy5ncm91cGVkRGF0YS5wb3AoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zdGF0ZS5ncm91cGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBncm91cEluZGV4OiBudW1iZXIgPSB0aGlzLnN0YXRlLmdyb3VwaW5nc1tpXVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRHcm91cHNbaV0ucm93W2dyb3VwSW5kZXhdICE9PSByb3dbZ3JvdXBJbmRleF0pIHtcbiAgICAgICAgICAgICAgY3VycmVudEdyb3Vwc1tpXS5sYXN0Um93ID0gdGhpcy5ncm91cGVkRGF0YS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgIGN1cnJlbnRHcm91cHNbaV0gPSBuZXcgR3JvdXBSb3coKVxuICAgICAgICAgICAgICBjdXJyZW50R3JvdXBzW2ldLnJvd1tyb3cubGVuZ3RoIC0gMV0gPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgY3VycmVudEdyb3Vwc1tpXS5jbGFzcyA9IE1haW5Db21wb25lbnRDb250cm9sbGVyLmdyb3VwaW5nQ2xhc3Nlc1tpXVxuICAgICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgaTsgaisrKSBjdXJyZW50R3JvdXBzW2ldLnJvd1t0aGlzLnN0YXRlLmdyb3VwaW5nc1tqXV0gPSBjdXJyZW50R3JvdXBzW2pdLnJvd1t0aGlzLnN0YXRlLmdyb3VwaW5nc1tqXV1cbiAgICAgICAgICAgICAgY3VycmVudEdyb3Vwc1tpXS5yb3dbZ3JvdXBJbmRleF0gPSByb3dbZ3JvdXBJbmRleF1cbiAgICAgICAgICAgICAgdGhpcy5ncm91cGVkRGF0YS5wdXNoKGN1cnJlbnRHcm91cHNbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50R3JvdXBzW2ldLm1lbWJlclJvd3MucHVzaChyb3cpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZ3JvdXBlZERhdGEucHVzaChyb3cpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zdGF0ZS5ncm91cGluZ3MubGVuZ3RoOyBpKyspIGN1cnJlbnRHcm91cHNbaV0ubGFzdFJvdyA9IHRoaXMuZ3JvdXBlZERhdGEubGVuZ3RoXG4gICAgfVxuICAgIHByaXZhdGUgc2V0Um93KHJvdzogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLnN0YXRlLmN1cnJlbnRSb3cgPSByb3dcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUuY3VycmVudFJvdyAvIHRoaXMuY29uZmlnLnBhZ2VTaXplICsgMSlcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudFBhZ2VPZmZzZXQgPSAodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5jb25maWcucGFnZVNpemVcbiAgICAgIGlmICghdGhpcy5hbHRLZXlEb3duKSB0aGlzLnNlbGVjdGVkUm93cyA9IHt9XG4gICAgICB0aGlzLnNlbGVjdGVkUm93c1tyb3ddID0gcm93XG4gICAgICBpZiAodGhpcy5ncm91cGVkRGF0YVtyb3ddIGluc3RhbmNlb2YgR3JvdXBSb3cgJiYgKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd10pLm1lbWJlclJvd3MubGVuZ3RoICE9PSAxKVxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSByb3cgKyAxOyBpIDw9ICg8R3JvdXBSb3c+dGhpcy5ncm91cGVkRGF0YVtyb3ddKS5sYXN0Um93OyBpKyspIHRoaXMuc2VsZWN0ZWRSb3dzW2ldID0gaVxuICAgICAgbGV0IGNyb3c6IHN0cmluZ1tdID0gdGhpcy5ncm91cGVkRGF0YVtyb3ddIGluc3RhbmNlb2YgR3JvdXBSb3cgPyAoKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd10pLm1lbWJlclJvd3MubGVuZ3RoID09PSAxID8gKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd10pLm1lbWJlclJvd3NbMF0gOiAoPEdyb3VwUm93PnRoaXMuZ3JvdXBlZERhdGFbcm93XSkucm93KSA6IDxzdHJpbmdbXT50aGlzLmdyb3VwZWREYXRhW3Jvd11cbiAgICAgIHRoaXMuY29udGV4dFVSTHMgPSBbXVxuICAgICAgaWYgKGNyb3dbNV0pIHRoaXMuY29udGV4dFVSTHMucHVzaCh0aGlzLiRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKCcjL2NlZWMtY29uY29yZC8nICsgY3Jvd1s1XSkpXG4gICAgICBpZiAoY3Jvd1swXSkgdGhpcy5jb250ZXh0VVJMcy5wdXNoKHRoaXMuJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoJ2h0dHA6Ly93d3cub2VkLmNvbS9zZWFyY2g/c2VhcmNoVHlwZT1kaWN0aW9uYXJ5JnE9JyArIGNyb3dbMF0pKVxuICAgICAgdGhpcy5mb2N1cygncm93JyArIHJvdylcbiAgICB9XG5cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgYW5ndWxhci5JQ29tcG9uZW50T3B0aW9ucyB7XG4gICAgICBwdWJsaWMgY29udHJvbGxlcjogRnVuY3Rpb24gPSBNYWluQ29tcG9uZW50Q29udHJvbGxlclxuICAgICAgcHVibGljIHRlbXBsYXRlVXJsOiBzdHJpbmcgPSAncGFydGlhbHMvbWFpbi5odG1sJ1xuICB9XG59XG4iXX0=

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
    '<table>\n' +
    '  <tr ng-repeat="row in $ctrl.concordances">\n' +
    '    <td class="pull-right" ng-bind-html="row.before"></td>\n' +
    '    <th>&nbsp;{{row.match}}&nbsp;</th>\n' +
    '    <td ng-bind-html="row.after"></td>\n' +
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
    '          <input class="form-control" select-on-focus="select-on-focus" focus-on="row{{$ctrl.state.currentPageOffset + $parent.$parent.$index}}" ng-style="{\'min-width\': row[0].length+\'rem\'}" ng-if="$index==0" ng-model="row[0]" ng-model-options="{ debounce: 500 }" ng-change="$ctrl.dirty=true"/><span ng-if="$index!=0">{{column}}</span>\n' +
    '        </td>\n' +
    '        <!-- grouping row column that participates in grouping-->\n' +
    '        <th ng-if="column" ng-repeat-start="column in (row.row ? row.row : []) track by $index"><span ng-if="column">\n' +
    '            <input class="form-control" select-on-focus="select-on-focus" focus-on="row{{$ctrl.state.currentPageOffset + $parent.$parent.$parent.$parent.$index}}" ng-style="{\'min-width\': row[0].length+\'rem\'}" ng-if="row.memberRows.length == 1 &amp;&amp; $index==0" ng-model="row.memberRows[0][0]" ng-model-options="{ debounce: 500 }" ng-change="$ctrl.dirty=true"/><span ng-if="$index==0 &amp;&amp; row.memberRows.length &gt; 1" tabindex="0">{{column}}<span>&nbsp;({{row.memberRows.length}})</span></span><span ng-if="$index!=0">{{column}}<span ng-if="row.memberRows.length!=1">&nbsp;({{row.memberRows.length}})</span></span></span></th>\n' +
    '        <!-- grouping row column that doesn\'t participate in grouping-->\n' +
    '        <td ng-if="!column" ng-repeat-end="ng-repeat-end"><span ng-if="row.memberRows.length==1">\n' +
    '            <input class="form-control" select-on-focus="select-on-focus" focus-on="row{{$ctrl.state.currentPageOffset + $parent.$parent.$parent.$parent.$index}}" ng-style="{\'min-width\': row[0].length+\'rem\'}" ng-if="$index==0" ng-model="row.memberRows[0][0]" ng-model-options="{ debounce: 500 }" ng-change="$ctrl.dirty=true"/><span ng-if="$index!=0">{{row.memberRows[0][$index]}}</span></span></td>\n' +
    '      </tr>\n' +
    '    </table>\n' +
    '    <uib-pagination class="pagination-sm" ng-model="$ctrl.currentPage" ng-change="$ctrl.setRow(($ctrl.currentPage - 1) * $ctrl.config.pageSize)" items-per-page="$ctrl.config.pageSize" max-size="10" total-items="$ctrl.groupedData.length" boundary-links="true" previous-text="‹" next-text="›" first-text="«" last-text="»"></uib-pagination>\n' +
    '  </div>\n' +
    '  <div class="col-xs-6" style="height:100%">\n' +
    '    <iframe style="width:100%;height:300px" ng-repeat="contextURL in $ctrl.contextURLs" ng-src="{{contextURL}}"></iframe>\n' +
    '    <div style="position:absolute;bottom:0">\n' +
    '      <h4>Groupings</h4><span ng-repeat="grouping in $ctrl.state.groupings">\n' +
    '        <select ng-model="$ctrl.state.groupings[$index]" ng-change="$ctrl.groupingsUpdated()" ng-options="index-0 as heading for (index,heading) in $ctrl.state.headings"></select>\n' +
    '        <button class="btn btn-sm btn-danger" ng-click="$ctrl.removeGrouping($index)">X</button></span> Add grouping:\n' +
    '      <select ng-model="newGrouping" ng-options="index-0 as heading for (index,heading) in $ctrl.state.headings" ng-change="$ctrl.addNewGrouping(newGrouping);newGrouping=undefined">\n' +
    '        <option></option>\n' +
    '      </select>\n' +
    '      <h4>Import/Export</h4>\n' +
    '      <button class="btn btn-success" ngf-select="ngf-select" ngf-change="$ctrl.loadFile($files[0])" ngf-multiple="false">Load File</button>\n' +
    '      <button class="btn btn-danger" ng-click="$ctrl.save()" ng-show="$ctrl.dirty">Save State</button>\n' +
    '      <button class="btn btn-warning" ng-click="$ctrl.saveCSVFile()">Export CSV</button>\n' +
    '      <div>{{error}}</div>\n' +
    '    </div>\n' +
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
