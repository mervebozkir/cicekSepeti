import { Given } from "@wdio/cucumber-framework";
import loginPage from "../pageObjects/login.js"

Given(/^The user is on login page$/, () =>{
    loginPage.goToLoginPage()
})