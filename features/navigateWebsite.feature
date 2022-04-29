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

@cartIcon
Scenario: Cart icon controls
    When The user clicks cart icon
    Then The user see cart page
    When The user clicks Continue Shopping button
    Then The user see homepage

@trackOrder
Scenario: Checking that when the Track Order option is clicked, it is directed to the tracking page
    When The user clicks Track Order item
    Then The user see order page

@searchBar
Scenario: Search bar controls
    When The user inputs "chocolates" on search bar
    And The user clicks search button
    Then The user see page title contains "chocolates"
    And The user see "chocolates" related results in the page

@signInWithGoogle
Scenario: Controls for Sign In with Google flow
    When The user clicks sign in with Google button
    Then The user see Google account page
    When The user inputs mail information
    And The user clicks next button
    # Then The user see next page
    # When The user inputs password information
    # And The user clicks next button on second page
    # Then The user see that successfully logged in