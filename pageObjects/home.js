import {expect} from "chai"
import {config} from "../wdio.conf"
import waitPage from "./waitUntil";

class homePage extends waitPage{
    accountInfo(){
        let info = $('li.user-menu__item.user-menu__item--account.user-process-hover.hidden-xs > a > span.user-menu__title')
        info.waitForDisplayed()
        expect(info.getText()).contain('My Account')        
    }

    turnToHomepage(){
        browser.switchWindow(config.baseUrl)
        console.log(browser.getUrl())        
    }

    checkUrlForResult(keyword){
        expect(browser.getUrl()).contains(keyword)
    }

    checkResults(result){
        let resultList = $$("div[class*='products__item js-category-item-hover']")
        for(var i=0;i<resultList.length;i++){
            expect(resultList[i].getHTML()).contains(result)
        }
    }

    pageTitle(){
        super.waitUntilAction(browser.getTitle(),('Mizu - International Flower & Gift Delivery Service'))
        //expect(browser.getTitle()).equals('Mizu - International Flower & Gift Delivery Service')
    }
}

module.exports = new homePage();