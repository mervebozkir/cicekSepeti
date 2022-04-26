import {Then} from "@wdio/cucumber-framework";
import homePage from "../pageObjects/home.js";
import loginPage from "../pageObjects/login.js"

Then(/^The user see that successfully logged in$/, ()=>{
    homePage.accountInfo()
})

Then(/^The user see warning pop up$/, ()=>{
    loginPage.warning()
})