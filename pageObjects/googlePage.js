import {expect} from "chai"
import googleAccount from "../testData/google.json"

class googlePage{
    pageHeader(){
        expect(browser.getUrl()).contains('https://accounts.google.com/o/oauth2/auth/identifier')
    }

    mailInformation(){
        let mail = $('#identifierId')
        mail.setValue(googleAccount.email)
    }

    nextButton(){
        const button = $("#identifierNext button[type='button']")
        button.click()
    }

    secondPage(){
        expect(browser.getUrl()).contains('signin/v2')
    }

    passwordInformation(){
        let password = $("input[name='password']")
        password.setValue(googleAccount.password)
    }

    secondNextButton(){
        const button = $("#passwordNext button[type='button']")
        button.click()
    }
}

module.exports = new googlePage();