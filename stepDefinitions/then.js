import {Then} from "@wdio/cucumber-framework";
import homePage from "../pageObjects/home.js";
import loginPage from "../pageObjects/login.js";
import facebook from "../pageObjects/facebookPage.js"
import google from "../pageObjects/googlePage.js"
import cartPage from "../pageObjects/cart.js"
import trackOrder from "../pageObjects/orderPage.js"

Then(/^The user see that successfully logged in$/, ()=>{
    homePage.accountInfo()
})

Then(/^The user see warning pop up$/, ()=>{
    loginPage.warning()
})

Then(/^The user see the textbox for mail$/, ()=>{
    loginPage.infoForMail()
})

Then(/^The user inputs mail information on textbox$/, ()=>{
    loginPage.inputMailForReset()
})

Then(/^The user see info for resetting password$/, ()=>{
    loginPage.resetConfirmation()
})

Then(/^The user see "(.*)"$/, (errors)=>{
    loginPage.errorMessage(errors)
})

Then(/^The user see "(.*)" for password$/, (errors)=>{
    loginPage.errorMessageforPassword(errors)
})

Then(/^The user inputs credentials on Facebook page$/, ()=>{
    facebook.credentials()
})

Then(/^The user turns to homepage$/, ()=>{
    homePage.turnToHomepage()
})

Then(/^The user see Facebook window opens$/, ()=>{
    facebook.page()
})

Then(/^The user "(.*)" is changed$/, (pageAddress)=>{
    loginPage.checkPageAddress(pageAddress)
})

Then(/^The user checks if the password textbox type and see that is "(.*)"$/, (type)=>{
    loginPage.checkPasswordBox(type)
})

Then(/^The user see page title contains "(.*)"$/, (keyword)=>{
    homePage.checkUrlForResult(keyword)
})

Then(/^The user see "(.*)" related results in the page$/, (result)=>{
    homePage.checkResults(result)
})

Then(/^The user see cart page$/, ()=>{
    cartPage.checkTitle()
})

Then(/^The user see homepage$/, ()=>{
    homePage.pageTitle()
})

Then(/^The user see order page$/, ()=>{
    trackOrder.pageTitle()
})

Then(/^The user see Google account page$/, ()=>{
    google.pageHeader()
})

Then(/^The user see next page$/, ()=>{
    google.secondPage()
})