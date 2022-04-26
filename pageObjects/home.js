import {expect} from "chai"

class homePage{
    accountInfo(){
        let info = $('li.user-menu__item.user-menu__item--account.user-process-hover.hidden-xs > a > span.user-menu__title')
        info.waitForDisplayed()
        var accInfo = expect(info.getText()).contain('My Account')
        return accInfo;
    }
}

module.exports = new homePage();