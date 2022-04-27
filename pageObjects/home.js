import {expect} from "chai"
import {config} from "../wdio.conf"

class homePage{
    accountInfo(){
        let info = $('li.user-menu__item.user-menu__item--account.user-process-hover.hidden-xs > a > span.user-menu__title')
        info.waitForDisplayed()
        var accInfo = expect(info.getText()).contain('My Account')
        return accInfo;
    }

    turnToHomepage(){
        browser.switchWindow(config.baseUrl)
        console.log(browser.getUrl())        
    }
}

module.exports = new homePage();