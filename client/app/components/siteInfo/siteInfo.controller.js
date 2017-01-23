import accounts from './social.json'

class SiteInfoController {
  constructor () {
    this.name = 'siteInfo'
    this.accounts = accounts
    this.iconsActive = false
  }
  setIconsActive () {
    this.iconsActive = true
    console.log(this.iconsActive)
  }
  setIconsInactive () {
    this.iconsActive = false
    console.log(this.iconsActive)
  }
}

export default SiteInfoController
