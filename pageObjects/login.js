import {expect} from "chai"

class loginPage{
    goToLoginPage(){
        browser.maximizeWindow()
        return browser.url('/login');
    }

    get eMail(){
        let mail = $('#EmailLogin')
        return mail;
    }

    get password(){
        let password = $('#Password')
        return password
    }

    credentials(){
        this.eMail.setValue('mrvbzkrtest@hotmail.com')+this.password.setValue('BzkrTest1234*')
    }

    signInButton(){
        const button = $('.login__btn.js-login-button')
        return button.click()
    }

    incompleteCredentials(mail,passwrd){
        this.eMail.setValue(mail)+this.password.setValue(passwrd)
    }

    warning(){
        const popUp = $('#modalBox div.modal-body')
        return expect(popUp.getText()).contains('E-mail address or password is incorrect. Please check your information and try again.');
    }
}

module.exports = new loginPage();