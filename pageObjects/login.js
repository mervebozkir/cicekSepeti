import {expect} from "chai"
import waitPage from "./waitUntil";

class loginPage extends waitPage{
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

    forgotPassword(){
        let button = $$('#userLogin div')[6].$('a.login__forgot-password').click()
        return button;
    }

    infoForMail(){
        const info = $('form.form-password-recovery.js-password-recovery.is-hidden div.form-group')        
        return expect(info.getText()).contains('Please enter your e-mail address.');
    }

    inputMailForReset(){
        const mail = $('#Mail')
        return mail.setValue('mrvbzkrtest@hotmail.com')
    }

    sendButton(){
        const button = $$('form.form-password-recovery > div')[2].$('button')
        button.scrollIntoView()
        button.waitForClickable()
        return button.click()
    }

    resetConfirmation(){
        const info = $('div.membership__center > div.password-recovery-result > span')
        info.waitForDisplayed()
        expect(info.getText()).contains('You will receive an e-mail from us with instructions for resetting your password.');
    }

    get error(){
        let error = $('#EmailLogin-error')
        return error;
    }

    errorMessage(errors){
        super.waitUntilAction(this.error.getText(),errors)
    }

    errorMessageforPassword(errors){
        const error = $('#Password-error')
        super.waitUntilAction(error.getText(),errors)
    }

    facebookButton(){
        const button = $('div.membership__bottom a.login__facebook')
        button.click()
    }

    changeLanguage(language){
        let item = $('div.header__globalization > div > ul.globalization >li.globalization__item.js-globalization-item.test-selectlanguage > div.globalization__item-head')
        item.click()
        let itemList = $$('li.globalization__item.js-globalization-item.test-selectlanguage.is-active > div.js-globalization-dropdown > ul > li')
        itemList.filter(x=>x.$('span').getText()===(language)).map(y=>y.click())
    }

    checkPageAddress(pageAddress){
        super.waitUntilAction(browser.getUrl(),pageAddress)
    }

    checkPasswordBox(type){
        super.waitUntilAction(this.password.getAttribute('type'),type)
    }

    clickEyeIcon(){
        const icon = $$('#userLogin div')[3].$('span.form-group__show-type')
        icon.click()
    }

    changeMailToMaxValue(){
        this.eMail.getValue()+this.eMail.setValue(this.maxValueFunction+"@hotmail.com")
    }

    changePasswordToMaxValue(){
        this.password.getValue()+this.password.setValue(this.maxValueFunction)
    }

    get maxValueFunction(){
        let firstValue = "";
        let maxValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 100; i++)
          firstValue += maxValue.charAt(Math.floor(Math.random() * maxValue.length));   
        return firstValue;
    }

    get bar(){
        let bar = $('#product-search-0 > div.product-search__inner-container')
        return bar;
    }

    inputSearch(keyword){
        this.bar.$('input').setValue(keyword)
    }

    clickSearch(){
        this.bar.$('button').click()
    }

    clickCart(){
        let icon = $("a[href='/en-mx/cart']")
        icon.click()
    }

    clickTrackOrder(){
        let icon = $("a[href='/en-mx/track-order']")
        icon.click()
    }

    googleButton(){
        const button = $('a[href="/ExternalAuthGoogle/Authenticate?redirectUrl="]')
        button.scrollIntoView()
        button.waitForClickable()
        button.click()
    }
}

module.exports = new loginPage();