import accounts from './social.json'

class SiteInfoController {
  constructor () {
    this.name = 'siteInfo'
    this.accounts = accounts
  }
}

console.log(accounts)

export default SiteInfoController
