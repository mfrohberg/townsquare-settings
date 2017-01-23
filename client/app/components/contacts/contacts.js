import angular from 'angular'
import uiRouter from 'angular-ui-router'
import contactsComponent from './contacts.component'

let contactsModule = angular.module('contacts', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject'

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('contacts', {
      url: '/business-contacts',
      component: 'contacts'
    })
})

.component('contacts', contactsComponent)

.name

export default contactsModule
