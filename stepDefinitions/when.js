import {When} from "@wdio/cucumber-framework"
import loginPage from "../pageObjects/login.js"

When(/^The user input valid credentials$/, ()=>{
    loginPage.credentials()
})

When(/^The user click Sign In button$/, () =>{
    loginPage.signInButton()
})

When(/^The user inputs "(.*)" and "(.*)"$/, (mail,passwrd)=>{
    loginPage.incompleteCredentials(mail,passwrd)
})