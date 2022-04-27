import {Then} from "@wdio/cucumber-framework";
import homePage from "../pageObjects/home.js";
import loginPage from "../pageObjects/login.js"
import facebook from "../pageObjects/facebookPage.js"

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
    driver.pause(5000)
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
    driver.pause(5000)
})

Then(/^The user "(.*)" is changed$/, (pageAddress)=>{
    loginPage.checkPageAddress(pageAddress)
})

Then(/^The user checks if the password textbox type and see that is "(.*)"$/, (type)=>{
    loginPage.checkPasswordBox(type)
})