import angular from 'angular';
import uiRouter from 'angular-ui-router';
import siteInfoComponent from './siteInfo.component';

let siteInfoModule = angular.module('siteInfo', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('siteInfo', {
      url: '/',
      component: 'siteInfo'
    });
})

.component('siteInfo', siteInfoComponent)
  
.name;

export default siteInfoModule;
