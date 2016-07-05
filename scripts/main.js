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
                    var regexp = new RegExp('(' + $stateParams['word'].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + ')', 'i');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvY2VlYy1jb25jb3JkLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FzRFo7QUF0REQsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNiLFlBQVksQ0FBQTtJQUlaO1FBQ0UsaUJBQW1CLE1BQVcsRUFBUyxLQUFhLEVBQVMsS0FBVTtZQUFwRCxXQUFNLEdBQU4sTUFBTSxDQUFLO1lBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtZQUFTLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBRyxDQUFDO1FBQzdFLGNBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUVEO1FBV0Usd0NBQW9CLGFBQThCLEVBQVUsSUFBeUIsRUFBVSxZQUE0QztZQVg3SSxpQkF1Q0M7WUE1QnFCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtZQUFVLFNBQUksR0FBSixJQUFJLENBQXFCO1lBQVUsaUJBQVksR0FBWixZQUFZLENBQWdDO1lBQ3pJLGFBQWEsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3ZLLFVBQUMsUUFBbUc7Z0JBQ2xHLEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFBO2dCQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztvQkFDdEMsSUFBSSxHQUFHLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ3ZELEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQTtvQkFDckMsSUFBSSxFQUFFLEdBQVcsR0FBRyxDQUFDLFNBQVMsQ0FBQTtvQkFDOUIsSUFBSSxNQUFNLEdBQVcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO29CQUNsSCxJQUFJLE1BQWMsQ0FBQTtvQkFDbEIsSUFBSSxLQUFhLENBQUE7b0JBQ2pCLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ3RDLElBQUksVUFBVSxHQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ25HLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ2pELE1BQU0sR0FBRyxVQUFVLENBQUE7d0JBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDekIsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBOzRCQUNqQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFBO3dCQUN2RCxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7NEJBQ2hCLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3ZCLENBQUM7d0JBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDeEgsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FDRixDQUFBO1FBQ0gsQ0FBQztRQXJDYyxvQ0FBSyxHQUFXLGlZQVExQixDQUFBO1FBOEJQLHFDQUFDO0lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtJQXZDWSxrQ0FBOEIsaUNBdUMxQyxDQUFBO0lBRUQ7UUFBQTtZQUNTLGVBQVUsR0FBYSw4QkFBOEIsQ0FBQTtZQUNyRCxnQkFBVyxHQUFXLDRCQUE0QixDQUFBO1FBQzNELENBQUM7UUFBRCwyQkFBQztJQUFELENBSEEsQUFHQyxJQUFBO0lBSFksd0JBQW9CLHVCQUdoQyxDQUFBO0FBQ0gsQ0FBQyxFQXREUyxHQUFHLEtBQUgsR0FBRyxRQXNEWiIsImZpbGUiOiJzY3JpcHRzL2NlZWMtY29uY29yZC1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYXBwIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgaW1wb3J0IHMgPSBmaS5zZWNvLnNwYXJxbFxuXG4gIGNsYXNzIFNuaXBwZXQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBiZWZvcmU6IGFueSwgcHVibGljIG1hdGNoOiBzdHJpbmcsIHB1YmxpYyBhZnRlcjogYW55KSB7fVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENlZWNDb25jb3JkQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcXVlcnk6IHN0cmluZyA9IGBcblBSRUZJWCB0ZXh0OiA8aHR0cDovL2plbmEuYXBhY2hlLm9yZy90ZXh0Iz5cblBSRUZJWCBjczogPGh0dHA6Ly9sZGYuZmkvY2VlYy1zY2hlbWEjPlxuU0VMRUNUIERJU1RJTkNUID9pZCA/ZnVsbHRleHQgV0hFUkUge1xuICBCSU5EKENPTkNBVChcIlxcXFxcIlwiLFJFUExBQ0UoPFFVRVJZPixcIihbXFxcXFxcXFwrXFxcXFxcXFwtXFxcXFxcXFwmXFxcXFxcXFx8XFxcXFxcXFwhXFxcXFxcXFwoXFxcXFxcXFwpXFxcXFxcXFx7XFxcXFxcXFx9XFxcXFxcXFxbXFxcXFxcXFxdXFxcXFxcXFxeXFxcXFxcXFxcXFxcXCJcXFxcXFxcXH5cXFxcXFxcXCpcXFxcXFxcXD9cXFxcXFxcXDpcXFxcXFxcXC9cXFxcXFxcXFxcXFxcXFxcXSlcIixcIlxcXFxcXFxcXFxcXFxcXFwkMVwiKSxcIlxcXFxcIlwiKSBBUyA/cXVlcnkpXG4gID9pZCB0ZXh0OnF1ZXJ5ID9xdWVyeSAuXG4gID9pZCBjczpmdWxsdGV4dCA/ZnVsbHRleHQgLlxufVxuTElNSVQgMzBgXG4gICAgcHVibGljIGNvbmNvcmRhbmNlczogU25pcHBldFtdXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzcGFycWxTZXJ2aWNlOiBzLlNwYXJxbFNlcnZpY2UsIHByaXZhdGUgJHNjZTogYW5ndWxhci5JU0NFU2VydmljZSwgcHJpdmF0ZSAkc3RhdGVQYXJhbXM6IGFuZ3VsYXIudWkuSVN0YXRlUGFyYW1zU2VydmljZSkge1xuICAgICAgc3BhcnFsU2VydmljZS5xdWVyeSgnaHR0cDovL2xkZi5maS9jZWVjL3NwYXJxbCcsIENlZWNDb25jb3JkQ29tcG9uZW50Q29udHJvbGxlci5xdWVyeS5yZXBsYWNlKC88UVVFUlk+L2csIHNwYXJxbFNlcnZpY2Uuc3RyaW5nVG9TUEFSUUxTdHJpbmcoJHN0YXRlUGFyYW1zWyd3b3JkJ10pKSkudGhlbihcbiAgICAgICAgKHJlc3BvbnNlOiBhbmd1bGFyLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPHMuSVNwYXJxbEJpbmRpbmdSZXN1bHQ8e1tpZDogc3RyaW5nXTogcy5JU3BhcnFsQmluZGluZ30+PikgPT4ge1xuICAgICAgICAgIHRoaXMuY29uY29yZGFuY2VzID0gW11cbiAgICAgICAgICByZXNwb25zZS5kYXRhLnJlc3VsdHMuYmluZGluZ3MuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICAgIGxldCB0bXA6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRtcC50ZXh0Q29udGVudCA9IHJbJ2Z1bGx0ZXh0J10udmFsdWVcbiAgICAgICAgICAgIGxldCBmdDogc3RyaW5nID0gdG1wLmlubmVySFRNTFxuICAgICAgICAgICAgbGV0IHJlZ2V4cDogUmVnRXhwID0gbmV3IFJlZ0V4cCgnKCcgKyAkc3RhdGVQYXJhbXNbJ3dvcmQnXS5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpICsgJyknLCAnaScpXG4gICAgICAgICAgICBsZXQgYmVmb3JlOiBzdHJpbmdcbiAgICAgICAgICAgIGxldCBhZnRlcjogc3RyaW5nXG4gICAgICAgICAgICBsZXQgcGFydHM6IHN0cmluZ1tdID0gZnQuc3BsaXQocmVnZXhwKVxuICAgICAgICAgICAgbGV0IGxhc3RCZWZvcmU6IHN0cmluZyA9IHBhcnRzWzBdLmxlbmd0aCA+IDYwID8gcGFydHNbMF0uc3Vic3RyaW5nKHBhcnRzWzBdLmxlbmd0aCAtIDYwKSA6IHBhcnRzWzBdXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAyOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgYmVmb3JlID0gbGFzdEJlZm9yZVxuICAgICAgICAgICAgICBpZiAocGFydHNbaV0ubGVuZ3RoID4gNjApIHtcbiAgICAgICAgICAgICAgICBhZnRlciA9IHBhcnRzW2ldLnN1YnN0cmluZygwLCA2MClcbiAgICAgICAgICAgICAgICBsYXN0QmVmb3JlID0gcGFydHNbaV0uc3Vic3RyaW5nKHBhcnRzW2ldLmxlbmd0aCAtIDYwKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFmdGVyID0gcGFydHNbaV1cbiAgICAgICAgICAgICAgICBsYXN0QmVmb3JlID0gcGFydHNbaV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmNvbmNvcmRhbmNlcy5wdXNoKG5ldyBTbmlwcGV0KHRoaXMuJHNjZS50cnVzdEFzSHRtbChiZWZvcmUpLCAkc3RhdGVQYXJhbXNbJ3dvcmQnXSwgdGhpcy4kc2NlLnRydXN0QXNIdG1sKGFmdGVyKSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDZWVjQ29uY29yZENvbXBvbmVudCBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbXBvbmVudE9wdGlvbnMge1xuICAgIHB1YmxpYyBjb250cm9sbGVyOiBGdW5jdGlvbiA9IENlZWNDb25jb3JkQ29tcG9uZW50Q29udHJvbGxlclxuICAgIHB1YmxpYyB0ZW1wbGF0ZVVybDogc3RyaW5nID0gJ3BhcnRpYWxzL2NlZWMtY29uY29yZC5odG1sJ1xuICB9XG59XG4iXX0=

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
                this.contextURLs = [];
                if (crow[5])
                    this.contextURLs.push(this.$sce.trustAsResourceUrl('#/ceec-concord/' + crow[5]));
                if (crow[0])
                    this.contextURLs.push(this.$sce.trustAsResourceUrl('http://www.oed.com/search?searchType=dictionary&q=' + crow[0]));
                if (focus)
                    this.focus('row' + row);
            }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvbWFpbi1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBc1NaO0FBdFNELFdBQVUsR0FBRyxFQUFDLENBQUM7SUFDYixZQUFZLENBQUE7SUFFWjtRQUFBO1lBQ1MsYUFBUSxHQUFXLEdBQUcsQ0FBQTtRQUMvQixDQUFDO1FBQUQsYUFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRUQ7UUFBQTtZQUNTLGVBQVUsR0FBZSxFQUFFLENBQUE7WUFFM0IsUUFBRyxHQUFhLEVBQUUsQ0FBQTtRQUUzQixDQUFDO1FBQUQsZUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBRUQ7UUFBQTtZQUNTLGFBQVEsR0FBYSxFQUFFLENBQUE7WUFDdkIsY0FBUyxHQUFhLEVBQUUsQ0FBQTtZQUV4QixzQkFBaUIsR0FBVyxDQUFDLENBQUE7WUFDN0IsZUFBVSxHQUFXLENBQUMsQ0FBQTtZQUN0QixXQUFNLEdBQVcsQ0FBQyxDQUFBO1lBQ2xCLGFBQVEsR0FBWSxLQUFLLENBQUE7WUFDekIsWUFBTyxHQUFhLEVBQUUsQ0FBQTtRQUMvQixDQUFDO1FBQUQsWUFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBRUQ7UUFtRkUsaUNBQW9CLFNBQTZDLEVBQVUsYUFBa0IsRUFBVSxtQkFBd0IsRUFBVSxLQUEyQixFQUFVLElBQXlCLEVBQVUsa0JBQXNDLEVBQVUsT0FBd0MsRUFBVSxLQUFVLEVBQVUsT0FBK0I7WUFBbFYsY0FBUyxHQUFULFNBQVMsQ0FBb0M7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBSztZQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBSztZQUFVLFVBQUssR0FBTCxLQUFLLENBQXNCO1lBQVUsU0FBSSxHQUFKLElBQUksQ0FBcUI7WUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUM7WUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFLO1lBQVUsWUFBTyxHQUFQLE9BQU8s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R0FBRyxFQUFFLENBQUE7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzdGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9EQUFvRCxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2hJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUNwQyxDQUFDO1FBQ0gsQ0FBQztRQXBRYyx1Q0FBZSxHQUFhLENBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUUsQ0FBQTtRQXNRL0UsOEJBQUM7SUFBRCxDQXZRQSxBQXVRQyxJQUFBO0lBdlFZLDJCQUF1QiwwQkF1UW5DLENBQUE7SUFFRDtRQUFBO1lBQ1csZUFBVSxHQUFhLHVCQUF1QixDQUFBO1lBQzlDLGdCQUFXLEdBQVcsb0JBQW9CLENBQUE7UUFDckQsQ0FBQztRQUFELG9CQUFDO0lBQUQsQ0FIQSxBQUdDLElBQUE7SUFIWSxpQkFBYSxnQkFHekIsQ0FBQTtBQUNILENBQUMsRUF0U1MsR0FBRyxLQUFILEdBQUcsUUFzU1oiLCJmaWxlIjoic2NyaXB0cy9tYWluLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBhcHAge1xuICAndXNlIHN0cmljdCdcblxuICBjbGFzcyBDb25maWcge1xuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyID0gMjAwXG4gIH1cblxuICBjbGFzcyBHcm91cFJvdyB7XG4gICAgcHVibGljIG1lbWJlclJvd3M6IHN0cmluZ1tdW10gPSBbXVxuICAgIHB1YmxpYyBsYXN0Um93OiBudW1iZXJcbiAgICBwdWJsaWMgcm93OiBzdHJpbmdbXSA9IFtdXG4gICAgcHVibGljIGNsYXNzOiBzdHJpbmdcbiAgfVxuXG4gIGNsYXNzIFN0YXRlIHtcbiAgICBwdWJsaWMgaGVhZGluZ3M6IHN0cmluZ1tdID0gW11cbiAgICBwdWJsaWMgZ3JvdXBpbmdzOiBudW1iZXJbXSA9IFtdXG4gICAgcHVibGljIGZpbGVOYW1lOiBzdHJpbmdcbiAgICBwdWJsaWMgY3VycmVudFBhZ2VPZmZzZXQ6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgY3VycmVudFJvdzogbnVtYmVyID0gMFxuICAgIHB1YmxpYyBzb3J0Qnk6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgc29ydERlc2M6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyBmaWx0ZXJzOiBzdHJpbmdbXSA9IFtdXG4gIH1cblxuICBleHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHByaXZhdGUgc3RhdGljIGdyb3VwaW5nQ2xhc3Nlczogc3RyaW5nW10gPSBbICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJyBdXG5cbiAgICBwdWJsaWMgZXJyb3I6IHN0cmluZ1xuICAgIHB1YmxpYyBncm91cGVkRGF0YTogKEdyb3VwUm93fGFueVtdKVtdXG5cbiAgICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlclxuXG4gICAgcHVibGljIHRvdGFsQmxhbmtzOiBudW1iZXJbXSA9IFtdXG4gICAgcHVibGljIGZpbHRlcmVkQmxhbmtzOiBudW1iZXJbXSA9IFtdXG5cbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlXG4gICAgcHVibGljIGNvbmZpZzogQ29uZmlnXG4gICAgcHVibGljIGNvbnRleHRVUkxzOiBzdHJpbmdbXVxuXG4gICAgcHVibGljIGRpcnR5OiBib29sZWFuID0gZmFsc2VcblxuICAgIHB1YmxpYyBzZWxlY3RlZFJvd3M6IHtbaWQ6IG51bWJlcl06IG51bWJlcn0gPSB7fVxuXG4gICAgcHJpdmF0ZSBhbHRLZXlEb3duOiBib29sZWFuID0gZmFsc2VcblxuICAgIHByaXZhdGUgZGF0YTogYW55W11bXSA9IFtdXG5cbiAgICBwdWJsaWMgbG9hZEZpbGUoZmlsZTogRmlsZSk6IHZvaWQge1xuICAgICAgaWYgKCFmaWxlKSByZXR1cm5cbiAgICAgIHRoaXMuc3RhdGUuZmlsZU5hbWUgPSBmaWxlLm5hbWVcbiAgICAgIHRoaXMuc2VsZWN0U2hlZXRTZXJ2aWNlLnNlbGVjdFNoZWV0KGZpbGUpLnRoZW4oXG4gICAgICAgIChkYXRhOiBzdHJpbmdbXVtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5oZWFkaW5ncyA9IGRhdGEuc2hpZnQoKVxuICAgICAgICAgIGlmIChkYXRhW2RhdGEubGVuZ3RoIC0gMV0ubGVuZ3RoID09PSAxICYmIGRhdGFbZGF0YS5sZW5ndGggLSAxIF1bMF0gPT09ICcnKSBkYXRhLnBvcCgpXG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxuICAgICAgICAgIGxldCBpc051bWJlcjogYm9vbGVhbltdID0gdGhpcy5zdGF0ZS5oZWFkaW5ncy5tYXAoaCA9PiB0cnVlKVxuICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaCgoY29sdW1uOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtpZiAoISgnJyArIHBhcnNlSW50KGNvbHVtbiwgMTApID09PSBjb2x1bW4pKSBpc051bWJlcltpbmRleF0gPSBmYWxzZX0pKVxuICAgICAgICAgIGlzTnVtYmVyLmZvckVhY2goKHRoaXNJc051bWJlcjogYm9vbGVhbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXNJc051bWJlcikge1xuICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4gcm93W2luZGV4XSA9IHBhcnNlSW50KHJvd1tpbmRleF0sIDEwKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2RhdGEnLCBkYXRhKVxuICAgICAgICAgIHRoaXMuZ3JvdXBpbmdzVXBkYXRlZCgpXG4gICAgICAgIH0sXG4gICAgICAgIChlcnJNZXNzYWdlKSA9PiB0aGlzLmVycm9yID0gZXJyTWVzc2FnZSlcbiAgICB9XG4gICAgcHVibGljIHNhdmVDU1ZGaWxlKCk6IHZvaWQge1xuICAgICAgbGV0IGRhdGE6IHN0cmluZ1tdW10gPSBbdGhpcy5zdGF0ZS5oZWFkaW5nc10uY29uY2F0KHRoaXMuZGF0YSlcbiAgICAgIGxldCBmbjogc3RyaW5nID0gJ2ZpY2EtJyArIHRoaXMuc3RhdGUuZmlsZU5hbWUucmVwbGFjZSgvXFwuLio/JC8sICcuY3N2JylcbiAgICAgIHNhdmVBcyhuZXcgQmxvYihbUGFwYS51bnBhcnNlKGRhdGEpXSwge3R5cGU6ICd0ZXh0L2Nzdid9KSwgZm4pXG4gICAgfVxuICAgIHB1YmxpYyBzZXRTb3J0QnkoaGVhZGluZ0luZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRCeSA9PT0gaGVhZGluZ0luZGV4KSB0aGlzLnN0YXRlLnNvcnREZXNjID0gIXRoaXMuc3RhdGUuc29ydERlc2NcbiAgICAgIHRoaXMuc3RhdGUuc29ydEJ5ID0gaGVhZGluZ0luZGV4XG4gICAgICB0aGlzLmdyb3VwaW5nc1VwZGF0ZWQoKVxuICAgIH1cbiAgICBwdWJsaWMgZ3JvdXBpbmdzVXBkYXRlZCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGF0YS5zb3J0KChhOiBzdHJpbmdbXSwgYjogc3RyaW5nW10pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RhdGUuZ3JvdXBpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGdyb3VwSW5kZXg6IG51bWJlciA9IHRoaXMuc3RhdGUuZ3JvdXBpbmdzW2ldXG4gICAgICAgICAgaWYgKGFbZ3JvdXBJbmRleF0gPCBiW2dyb3VwSW5kZXhdKSByZXR1cm4gLTFcbiAgICAgICAgICBpZiAoYltncm91cEluZGV4XSA8IGFbZ3JvdXBJbmRleF0pIHJldHVybiAxXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbdGhpcy5zdGF0ZS5zb3J0QnldIDwgYlt0aGlzLnN0YXRlLnNvcnRCeV0pIHJldHVybiB0aGlzLnN0YXRlLnNvcnREZXNjID8gMSA6IC0xXG4gICAgICAgIGlmIChiW3RoaXMuc3RhdGUuc29ydEJ5XSA8IGFbdGhpcy5zdGF0ZS5zb3J0QnldKSByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0RGVzYyA/IC0xIDogMVxuICAgICAgICByZXR1cm4gMFxuICAgICAgfSlcbiAgICAgIHRoaXMuc2F2ZSgpXG4gICAgICB0aGlzLnVwZGF0ZUdyb3VwZWREYXRhKClcbiAgICB9XG4gICAgcHVibGljIGFkZE5ld0dyb3VwaW5nKG5ld0dyb3VwaW5nSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5zdGF0ZS5ncm91cGluZ3MucHVzaChuZXdHcm91cGluZ0luZGV4KVxuICAgICAgdGhpcy5ncm91cGluZ3NVcGRhdGVkKClcbiAgICB9XG4gICAgcHVibGljIHJlbW92ZUdyb3VwaW5nKGluZGV4T2ZHcm91cGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLnN0YXRlLmdyb3VwaW5ncy5zcGxpY2UoaW5kZXhPZkdyb3VwaW5nLCAxKVxuICAgICAgdGhpcy5ncm91cGluZ3NVcGRhdGVkKClcbiAgICB9XG4gICAgcHVibGljIG1vdXNlRm9jdXMocm93OiBudW1iZXIsIGFsdEtleTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5hbHRLZXlEb3duID0gYWx0S2V5XG4gICAgICB0aGlzLnNldFJvdyhyb3csIGZhbHNlKVxuICAgIH1cbiAgICBwdWJsaWMgc2F2ZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2RhdGEnLCB0aGlzLmRhdGEpXG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2VcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkdWliTW9kYWw6IGFuZ3VsYXIudWkuYm9vdHN0cmFwLklNb2RhbFNlcnZpY2UsIHByaXZhdGUgJGxvY2FsU3RvcmFnZTogYW55LCBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IGFueSwgcHJpdmF0ZSAkaHR0cDogYW5ndWxhci5JSHR0cFNlcnZpY2UsIHByaXZhdGUgJHNjZTogYW5ndWxhci5JU0NFU2VydmljZSwgcHJpdmF0ZSBzZWxlY3RTaGVldFNlcnZpY2U6IFNlbGVjdFNoZWV0U2VydmljZSwgcHJpdmF0ZSBob3RrZXlzOiBhbmd1bGFyLmhvdGtleXMuSG90a2V5c1Byb3ZpZGVyLCBwcml2YXRlIGZvY3VzOiBhbnksIHByaXZhdGUgJHdpbmRvdzogYW5ndWxhci5JV2luZG93U2VydmljZSkge31cbiAgICBwdWJsaWMgJG9uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuJHdpbmRvdy5vbnVubG9hZCA9ICgpID0+IHsgdGhpcy5zYXZlKCkgfVxuICAgICAgaWYgKCF0aGlzLiRsb2NhbFN0b3JhZ2Uuc3RhdGUpIHRoaXMuJGxvY2FsU3RvcmFnZS5zdGF0ZSA9IG5ldyBTdGF0ZSgpXG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy4kbG9jYWxTdG9yYWdlLnN0YXRlXG4gICAgICBpZiAoIXRoaXMuJGxvY2FsU3RvcmFnZS5jb25maWcpIHRoaXMuJGxvY2FsU3RvcmFnZS5jb25maWcgPSBuZXcgQ29uZmlnKClcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy4kbG9jYWxTdG9yYWdlLmNvbmZpZ1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IE1hdGguZmxvb3IodGhpcy5zdGF0ZS5jdXJyZW50UGFnZU9mZnNldCAvIHRoaXMuY29uZmlnLnBhZ2VTaXplKSArIDFcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2RhdGEnKVxuICAgICAgaWYgKCF0aGlzLmRhdGEpIHRoaXMuZGF0YSA9IFtdXG4gICAgICB0aGlzLnVwZGF0ZUdyb3VwZWREYXRhKClcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe1xuICAgICAgICBjb21ibzogJ2N0cmwrMScsXG4gICAgICAgIGFsbG93SW46IFsnSU5QVVQnLCAnVEQnXSxcbiAgICAgICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuYWx0S2V5RG93biA9IGZhbHNlXG4gICAgICAgICAgbGV0IGxhc3RSb3c6IG51bWJlciA9IDBcbiAgICAgICAgICBmb3IgKGxldCByb3cgaW4gdGhpcy5zZWxlY3RlZFJvd3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwZWREYXRhW3Jvd10gaW5zdGFuY2VvZiBHcm91cFJvdykge1xuICAgICAgICAgICAgICBsZXQgZ3JvdzogR3JvdXBSb3cgPSAoPEdyb3VwUm93PnRoaXMuZ3JvdXBlZERhdGFbcm93XSlcbiAgICAgICAgICAgICAgZ3Jvdy5yb3dbMV0gPSAneWVzJ1xuICAgICAgICAgICAgICBncm93Lm1lbWJlclJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyb3dbMV0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQmxhbmtzWzFdLS1cbiAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRCbGFua3NbMV0tLVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByb3dbMV0gPSAneWVzJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXBlZERhdGFbcm93XVsxXSA9PT0gJycpICB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbEJsYW5rc1sxXS0tXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZEJsYW5rc1sxXS0tXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5ncm91cGVkRGF0YVtyb3ddWzFdID0gJ3llcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0Um93IDwgdGhpcy5zZWxlY3RlZFJvd3Nbcm93XSkgbGFzdFJvdyA9IHRoaXMuc2VsZWN0ZWRSb3dzW3Jvd11cbiAgICAgICAgICB9XG4gICAgICAgICAgd2hpbGUgKCF0aGlzLmdyb3VwZWREYXRhW2xhc3RSb3ddICYmIGxhc3RSb3cgPCB0aGlzLmdyb3VwZWREYXRhLmxlbmd0aCAtIDIpXG4gICAgICAgICAgICBsYXN0Um93KytcbiAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuc2V0Um93KGxhc3RSb3cgKyAxKVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe1xuICAgICAgICBjb21ibzogJ2N0cmwrMicsXG4gICAgICAgIGFsbG93SW46IFsnSU5QVVQnLCAnVEQnXSxcbiAgICAgICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuYWx0S2V5RG93biA9IGZhbHNlXG4gICAgICAgICAgbGV0IGxhc3RSb3c6IG51bWJlciA9IDBcbiAgICAgICAgICBmb3IgKGxldCByb3cgaW4gdGhpcy5zZWxlY3RlZFJvd3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwZWREYXRhW3Jvd10gaW5zdGFuY2VvZiBHcm91cFJvdykge1xuICAgICAgICAgICAgICBsZXQgZ3JvdzogR3JvdXBSb3cgPSAoPEdyb3VwUm93PnRoaXMuZ3JvdXBlZERhdGFbcm93XSlcbiAgICAgICAgICAgICAgZ3Jvdy5yb3dbMV0gPSAnbm8nXG4gICAgICAgICAgICAgIGdyb3cubWVtYmVyUm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJvd1sxXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxCbGFua3NbMV0tLVxuICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZEJsYW5rc1sxXS0tXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm93WzFdID0gJ25vJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXBlZERhdGFbcm93XVsxXSA9PT0gJycpICB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbEJsYW5rc1sxXS0tXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZEJsYW5rc1sxXS0tXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmdyb3VwZWREYXRhW3Jvd11bMV0gPSAnbm8nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGFzdFJvdyA8IHRoaXMuc2VsZWN0ZWRSb3dzW3Jvd10pIGxhc3RSb3cgPSB0aGlzLnNlbGVjdGVkUm93c1tyb3ddXG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlICghdGhpcy5ncm91cGVkRGF0YVtsYXN0Um93XSAmJiBsYXN0Um93IDwgdGhpcy5ncm91cGVkRGF0YS5sZW5ndGggLSAyKVxuICAgICAgICAgICAgbGFzdFJvdysrXG4gICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWVcbiAgICAgICAgICB0aGlzLnNldFJvdyhsYXN0Um93ICsgMSlcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLmhvdGtleXMuYWRkKHtjb21ibzogJ2FsdCt0YWInLCBhbGxvd0luOiBbJ0lOUFVUJywgJ1REJ10sIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50LCBob3RrZXk6IGFuZ3VsYXIuaG90a2V5cy5Ib3RrZXkpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5hbHRLZXlEb3duID0gdHJ1ZVxuICAgICAgICBpZiAodGhpcy5ncm91cGVkRGF0YVt0aGlzLnN0YXRlLmN1cnJlbnRSb3ddIGluc3RhbmNlb2YgR3JvdXBSb3cpXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Um93ID0gKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3RoaXMuc3RhdGUuY3VycmVudFJvd10pLmxhc3RSb3dcbiAgICAgICAgdGhpcy5uZXh0KClcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfX0pXG4gICAgICB0aGlzLmhvdGtleXMuYWRkKHtjb21ibzogJ3RhYicsIGFsbG93SW46IFsnSU5QVVQnLCAnVEQnXSwgY2FsbGJhY2s6IChldmVudDogRXZlbnQsIGhvdGtleTogYW5ndWxhci5ob3RrZXlzLkhvdGtleSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmFsdEtleURvd24gPSBmYWxzZVxuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9fSlcbiAgICAgIHRoaXMuaG90a2V5cy5hZGQoe2NvbWJvOiAnc2hpZnQrdGFiJywgYWxsb3dJbjogWydJTlBVVCcsICdURCddLCBjYWxsYmFjazogKGV2ZW50OiBFdmVudCwgaG90a2V5OiBhbmd1bGFyLmhvdGtleXMuSG90a2V5KTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuYWx0S2V5RG93biA9IGZhbHNlOyB0aGlzLnByZXYoKTsgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfX0pXG4gICAgICB0aGlzLmhvdGtleXMuYWRkKHtjb21ibzogJ2FsdCtzaGlmdCt0YWInLCBhbGxvd0luOiBbJ0lOUFVUJywgJ1REJ10sIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50LCBob3RrZXk6IGFuZ3VsYXIuaG90a2V5cy5Ib3RrZXkpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5hbHRLZXlEb3duID0gdHJ1ZTsgdGhpcy5wcmV2KCk7IGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH19KVxuICAgIH1cbiAgICBwdWJsaWMgJG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG90a2V5cy5kZWwoJ2N0cmwrMScpXG4gICAgICB0aGlzLmhvdGtleXMuZGVsKCdjdHJsKzInKVxuICAgICAgdGhpcy5ob3RrZXlzLmRlbCgndGFiJylcbiAgICAgIHRoaXMuaG90a2V5cy5kZWwoJ3NoaWZ0K3RhYicpXG4gICAgICB0aGlzLnNhdmUoKVxuICAgIH1cbiAgICBwcml2YXRlIG5leHQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Um93ID09PSB0aGlzLmdyb3VwZWREYXRhLmxlbmd0aCAtIDEpIHRoaXMuc2V0Um93KDApXG4gICAgICBlbHNlIHRoaXMuc2V0Um93KHRoaXMuc3RhdGUuY3VycmVudFJvdyArIDEpXG4gICAgfVxuICAgIHByaXZhdGUgcHJldigpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRSb3cgPT09IDApIHRoaXMuc2V0Um93KHRoaXMuZ3JvdXBlZERhdGEubGVuZ3RoIC0gMSlcbiAgICAgIGVsc2UgdGhpcy5zZXRSb3codGhpcy5zdGF0ZS5jdXJyZW50Um93IC0gMSlcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVHcm91cGVkRGF0YSgpOiB2b2lkIHtcbiAgICAgIGxldCBjdXJyZW50R3JvdXBzOiBHcm91cFJvd1tdID0gdGhpcy5zdGF0ZS5ncm91cGluZ3MubWFwKHYgPT4gbmV3IEdyb3VwUm93KCkpXG4gICAgICB0aGlzLmdyb3VwZWREYXRhID0gW11cbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzID0ge31cbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudFJvdyA9IHVuZGVmaW5lZFxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDFcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudFBhZ2VPZmZzZXQgPSAwXG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zdGF0ZS5oZWFkaW5ncy5sZW5ndGg7IGkrKykgIHtcbiAgICAgICAgdGhpcy50b3RhbEJsYW5rc1tpXSA9IDBcbiAgICAgICAgdGhpcy5maWx0ZXJlZEJsYW5rc1tpXSA9IDBcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBhbGxvd2VkOiBib29sZWFuID0gdHJ1ZVxuICAgICAgICB0aGlzLnN0YXRlLmZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyOiBzdHJpbmcsIGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsICYmIGZpbHRlciAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuaW5kZXhPZignIScpID09PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChmaWx0ZXIgPT09ICchJykge1xuICAgICAgICAgICAgICAgIGlmIChyb3dbY29sdW1uSW5kZXhdICE9PSAnJykgYWxsb3dlZCA9IGZhbHNlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93W2NvbHVtbkluZGV4XS5pbmRleE9mKGZpbHRlci5zdWJzdHJpbmcoMSkpID09PSAwKSBhbGxvd2VkID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLmluZGV4T2YoJz4nKSA9PT0gMCkge1xuICAgICAgICAgICAgICBpZiAocm93W2NvbHVtbkluZGV4XSA8PSBwYXJzZUludChmaWx0ZXIuc3Vic3RyaW5nKDEpLCAxMCkpIGFsbG93ZWQgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIuaW5kZXhPZignPCcpID09PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChyb3dbY29sdW1uSW5kZXhdID4gcGFyc2VJbnQoZmlsdGVyLnN1YnN0cmluZygxKSwgMTApKSBhbGxvd2VkID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm93W2NvbHVtbkluZGV4XS5pbmRleE9mKGZpbHRlcikgIT09IDApIGFsbG93ZWQgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RhdGUuaGVhZGluZ3MubGVuZ3RoOyBpKyspIGlmIChyb3dbaV0gPT09ICcnKSB0aGlzLnRvdGFsQmxhbmtzW2ldKytcbiAgICAgICAgaWYgKGFsbG93ZWQpIHtcbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zdGF0ZS5oZWFkaW5ncy5sZW5ndGg7IGkrKykgaWYgKHJvd1tpXSA9PT0gJycpIHRoaXMuZmlsdGVyZWRCbGFua3NbaV0rK1xuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmdyb3VwaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGdyb3VwSW5kZXg6IG51bWJlciA9IHRoaXMuc3RhdGUuZ3JvdXBpbmdzW2ldXG4gICAgICAgICAgICBpZiAoY3VycmVudEdyb3Vwc1tpXS5yb3dbZ3JvdXBJbmRleF0gIT09IHJvd1tncm91cEluZGV4XSAmJiBjdXJyZW50R3JvdXBzW2ldLm1lbWJlclJvd3MubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgICB0aGlzLmdyb3VwZWREYXRhLnBvcCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmdyb3VwaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGdyb3VwSW5kZXg6IG51bWJlciA9IHRoaXMuc3RhdGUuZ3JvdXBpbmdzW2ldXG4gICAgICAgICAgICBpZiAoY3VycmVudEdyb3Vwc1tpXS5yb3dbZ3JvdXBJbmRleF0gIT09IHJvd1tncm91cEluZGV4XSkge1xuICAgICAgICAgICAgICBjdXJyZW50R3JvdXBzW2ldLmxhc3RSb3cgPSB0aGlzLmdyb3VwZWREYXRhLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgY3VycmVudEdyb3Vwc1tpXSA9IG5ldyBHcm91cFJvdygpXG4gICAgICAgICAgICAgIGN1cnJlbnRHcm91cHNbaV0ucm93W3Jvdy5sZW5ndGggLSAxXSA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgICBjdXJyZW50R3JvdXBzW2ldLmNsYXNzID0gTWFpbkNvbXBvbmVudENvbnRyb2xsZXIuZ3JvdXBpbmdDbGFzc2VzW2ldXG4gICAgICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBpOyBqKyspIGN1cnJlbnRHcm91cHNbaV0ucm93W3RoaXMuc3RhdGUuZ3JvdXBpbmdzW2pdXSA9IGN1cnJlbnRHcm91cHNbal0ucm93W3RoaXMuc3RhdGUuZ3JvdXBpbmdzW2pdXVxuICAgICAgICAgICAgICBjdXJyZW50R3JvdXBzW2ldLnJvd1tncm91cEluZGV4XSA9IHJvd1tncm91cEluZGV4XVxuICAgICAgICAgICAgICB0aGlzLmdyb3VwZWREYXRhLnB1c2goY3VycmVudEdyb3Vwc1tpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRHcm91cHNbaV0ubWVtYmVyUm93cy5wdXNoKHJvdylcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5ncm91cGVkRGF0YS5wdXNoKHJvdylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0YXRlLmdyb3VwaW5ncy5sZW5ndGg7IGkrKykgY3VycmVudEdyb3Vwc1tpXS5sYXN0Um93ID0gdGhpcy5ncm91cGVkRGF0YS5sZW5ndGhcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRSb3cocm93OiBudW1iZXIsIGZvY3VzOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFJvdyAhPT0gcm93KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFJvdyA9IHJvd1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gTWF0aC5mbG9vcih0aGlzLnN0YXRlLmN1cnJlbnRSb3cgLyB0aGlzLmNvbmZpZy5wYWdlU2l6ZSArIDEpXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFBhZ2VPZmZzZXQgPSAodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5jb25maWcucGFnZVNpemVcbiAgICAgICAgaWYgKCF0aGlzLmFsdEtleURvd24pIHRoaXMuc2VsZWN0ZWRSb3dzID0ge31cbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3Nbcm93XSA9IHJvd1xuICAgICAgICBpZiAodGhpcy5ncm91cGVkRGF0YVtyb3ddIGluc3RhbmNlb2YgR3JvdXBSb3cgJiYgKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd10pLm1lbWJlclJvd3MubGVuZ3RoICE9PSAxKVxuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHJvdyArIDE7IGkgPD0gKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd10pLmxhc3RSb3c7IGkrKykgdGhpcy5zZWxlY3RlZFJvd3NbaV0gPSBpXG4gICAgICAgIGxldCBjcm93OiBzdHJpbmdbXSA9IHRoaXMuZ3JvdXBlZERhdGFbcm93XSBpbnN0YW5jZW9mIEdyb3VwUm93ID8gKCg8R3JvdXBSb3c+dGhpcy5ncm91cGVkRGF0YVtyb3ddKS5tZW1iZXJSb3dzLmxlbmd0aCA9PT0gMSA/ICg8R3JvdXBSb3c+dGhpcy5ncm91cGVkRGF0YVtyb3ddKS5tZW1iZXJSb3dzWzBdIDogKDxHcm91cFJvdz50aGlzLmdyb3VwZWREYXRhW3Jvd10pLnJvdykgOiA8c3RyaW5nW10+dGhpcy5ncm91cGVkRGF0YVtyb3ddXG4gICAgICAgIHRoaXMuY29udGV4dFVSTHMgPSBbXVxuICAgICAgICBpZiAoY3Jvd1s1XSkgdGhpcy5jb250ZXh0VVJMcy5wdXNoKHRoaXMuJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoJyMvY2VlYy1jb25jb3JkLycgKyBjcm93WzVdKSlcbiAgICAgICAgaWYgKGNyb3dbMF0pIHRoaXMuY29udGV4dFVSTHMucHVzaCh0aGlzLiRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKCdodHRwOi8vd3d3Lm9lZC5jb20vc2VhcmNoP3NlYXJjaFR5cGU9ZGljdGlvbmFyeSZxPScgKyBjcm93WzBdKSlcbiAgICAgICAgaWYgKGZvY3VzKSB0aGlzLmZvY3VzKCdyb3cnICsgcm93KVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBhbmd1bGFyLklDb21wb25lbnRPcHRpb25zIHtcbiAgICAgIHB1YmxpYyBjb250cm9sbGVyOiBGdW5jdGlvbiA9IE1haW5Db21wb25lbnRDb250cm9sbGVyXG4gICAgICBwdWJsaWMgdGVtcGxhdGVVcmw6IHN0cmluZyA9ICdwYXJ0aWFscy9tYWluLmh0bWwnXG4gIH1cbn1cbiJdfQ==

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
    '      <button class="btn btn-danger" ng-click="$ctrl.groupingsUpdated()" ng-show="$ctrl.dirty">Save State</button>\n' +
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
