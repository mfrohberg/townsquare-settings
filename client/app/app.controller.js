class AppController {
  constructor () {
    this.name = 'app'
    this.pages = [
      {id: 1, name: 'Site Info', url: '/site-info', sref: 'siteInfo', icon: 'fa-globe'},
      {id: 2, name: 'Business Contacts', url: '/business-contacts', sref: 'contacts', icon: 'fa-phone'},
      {id: 3, name: 'Dashboard Info', url: '/dashboard-info', sref: 'dashboard', icon: 'fa-tachometer'}
    ]
    this.activePage = 1
  }
  setActivePage (page) {
    this.activePage = page.id
  }
}

export default AppController
