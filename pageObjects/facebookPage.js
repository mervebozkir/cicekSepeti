import facebook from "../testData/facebook.json"
import {expect} from "chai"

class facebookPage{
    page(){
        browser.switchWindow('https://www.facebook.com/login')
        return expect(browser.getUrl()).contains("https://www.facebook.com/login.php")
    }

    get mail(){
        $('#email').waitForDisplayed()
        return $('#email');
    }

    get password(){
        $('#pass').waitForDisplayed()
        return $('#pass');
    }

    credentials(){        
        this.mail.setValue(facebook.email)+this.password.setValue(facebook.password)
    }

    signIn(){
        let button = $('#login_form #loginform #loginbutton')
        button.waitForClickable()
        return button.click()
    }
}

module.exports = new facebookPage()