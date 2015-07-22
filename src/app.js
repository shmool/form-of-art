import angular     from 'angular';
import uiRouter    from 'angular-ui-router';
import ngMessages  from 'angular-messages';
import appStyle    from 'app.less';
import TabsController   from 'tabs/tabs-controller.js';
import basicForm   from 'basicForm/basicForm.js';


export default angular.module('formOfArt', [
  'ui.router',
  basicForm.name,
  ngMessages
])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/basicForm/0");

    $stateProvider
      .state('session', {
        url: '/:sessionName',
        templateUrl: 'tabs/tabs.html',
        controller: 'tabsController',
        controllerAs: 'tabs',
        resolve: {
          sessionName: ($stateParams) => $stateParams.sessionName
        },
        abstract: true
      })
      .state('step', {
        url: '/:step',
        parent: 'session',
        templateUrl: ($stateParams) => $stateParams.sessionName + '/steps/step' + $stateParams.step + '.html',
        controllerProvider: ($stateParams) => $stateParams.sessionName + 'Controller',
        controllerAs: 'demo'
      })
  })
  .controller('tabsController', TabsController);

angular.bootstrap(document, ['formOfArt']);
