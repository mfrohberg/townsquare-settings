import angular from 'angular'
import SiteInfo from './siteInfo/siteInfo'
import Contacts from './contacts/contacts'
import Dashboard from './dashboard/dashboard'

let componentModule = angular.module('app.components', [
  SiteInfo,
  Contacts,
  Dashboard
])

.name

export default componentModule
