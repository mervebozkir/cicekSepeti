Feature: navigate on website and control standards

Background: 
    Given The user is on login page

@forgotPassword
Scenario: Controls for Forgot Password flow    
    When The user clicks forgot password button
    Then The user see the textbox for mail
    And The user inputs mail information on textbox
    When The user clicks Send button
    #Then The user see info for resetting password

@signInWithFacebook
Scenario: Controls for Sign In with Facebook flow
    When The user clicks sign in with Facebook button
    Then The user see Facebook window opens
    And The user inputs credentials on Facebook page
    When The user clicks Sign In button on Facebook page
    Then The user turns to homepage
    And The user see that successfully logged in

@languageOptions
Scenario Outline: Controls for language options
    When The user selects "<language>"
    Then The user "<page address>" is changed
Examples:
    |language|          page address            |
    |   ES   | https://www.mizu.com/es-mx/login |
    |   DE   | https://www.mizu.com/de-mx/login |
    |   VN   | https://www.mizu.com/vi-mx/login |
    |   ENG  | https://www.mizu.com/en-mx/login |