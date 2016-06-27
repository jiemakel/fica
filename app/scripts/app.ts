namespace app {
  'use strict'
  let m: angular.IModule = angular.module('app', [ 'http-auth-interceptor', 'ui.router', 'ngFileUpload', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ngStorage', 'LocalStorageModule', 'fi.seco.sparql', 'cfp.hotkeys', 'focusOn' ])
  m.config(($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise('/')
    $stateProvider.state('main', {
      url: '/',
      template: '<main></main>'
    })
    $stateProvider.state('ceec-concord', {
      url: '/ceec-concord/:word',
      template: '<ceec-concord></ceec-concord>'
    })
  })
  m.config(($localStorageProvider) => {
    $localStorageProvider.setKeyPrefix('fica.')
  })
  m.config((localStorageServiceProvider) => {
    localStorageServiceProvider.setPrefix('fica-q')
  })
  m.filter('trustAsHtml', ['$sce', function($sce: angular.ISCEService): (htmlCode: string) => any {
    return function(htmlCode: string): any {
      return $sce.trustAsHtml(htmlCode)
    }
  }])

  export class SelectOnFocusDirective {
    public restrict: string = 'A'
    public link: (...any) => void = (scope: angular.IScope, element: JQuery, attr: angular.IAttributes) => {
      element.on('mouseup', function (event: JQueryEventObject): void { event.preventDefault(); })
      element.on('focus', function (event: JQueryEventObject): void { this.select(); })
    }
  }

}
