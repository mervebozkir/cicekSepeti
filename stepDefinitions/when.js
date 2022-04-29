import {When} from "@wdio/cucumber-framework"
import loginPage from "../pageObjects/login.js"
import facebook from "../pageObjects/facebookPage.js"
import google from "../pageObjects/googlePage.js"
import cartPage from "../pageObjects/cart.js"

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
})

When(/^The user clicks Sign In button on Facebook page$/, () =>{
    facebook.signIn()
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

When(/^The user inputs "(.*)" on search bar$/, (keyword)=>{
    loginPage.inputSearch(keyword)
})

When(/^The user clicks search button$/, ()=>{
    loginPage.clickSearch()
})

When(/^The user clicks cart icon$/, ()=>{
    loginPage.clickCart()
})

When(/^The user clicks Continue Shopping button$/, ()=>{
    cartPage.continueShop()
})

When(/^The user clicks Track Order item$/, ()=>{
    loginPage.clickTrackOrder()
})

When(/^The user clicks sign in with Google button$/, () =>{
    loginPage.googleButton()
})

When(/^The user inputs mail information$/, ()=>{
    google.mailInformation()
})

When(/^The user clicks next button$/, ()=>{
    google.nextButton()
})

When(/^The user inputs password information$/, ()=>{
    google.passwordInformation()
})

When(/^The user clicks next button on second page$/, ()=>{
    google.secondNextButton()
})