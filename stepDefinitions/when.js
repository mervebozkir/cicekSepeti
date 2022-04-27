import {When} from "@wdio/cucumber-framework"
import loginPage from "../pageObjects/login.js"
import facebook from "../pageObjects/facebookPage.js"

When(/^The user input valid credentials$/, ()=>{
    loginPage.credentials()
})

When(/^The user click Sign In button$/, () =>{
    loginPage.signInButton()
})

When(/^The user inputs "(.*)" and "(.*)"$/, (mail,passwrd)=>{
    loginPage.incompleteCredentials(mail,passwrd)
})

When(/^The user clicks forgot password button$/, () =>{
    loginPage.forgotPassword()
})

When(/^The user clicks Send button$/, () =>{
    loginPage.sendButton()
})

When(/^The user clicks sign in with Facebook button$/, () =>{
    loginPage.facebookButton()
    driver.pause(5000)
})

When(/^The user clicks Sign In button on Facebook page$/, () =>{
    facebook.signIn()
    driver.pause(8000)
})

When(/^The user selects "(.*)"$/, (language) =>{
    loginPage.changeLanguage(language)
})

When(/^The user clicks eye icon on password textbox$/, () =>{
    loginPage.clickEyeIcon()
})

When(/^The user changes mail information$/, ()=>{
    loginPage.changeMailToMaxValue()
})

When(/^The user changes password information$/, ()=>{
    loginPage.changePasswordToMaxValue()
})