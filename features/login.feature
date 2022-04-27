Feature: login process

Background: 
    Given The user is on login page

@login1
Scenario: Successfull login with valid credentials    
    When The user input valid credentials
    And The user click Sign In button
    Then The user see that successfully logged in

@login2
Scenario Outline: Checking that it gives a warning when the e-mail/password is incomplete/wrong
    When The user inputs "<e-mail>" and "<password>"
    And The user click Sign In button
    Then The user see warning pop up
Examples:
    | e-mail                  | password     |
    | mrvbzkrtest@hotmail.co  | BzkrTest1234*|
    | mrvbzkrtest@hotmail.com | Bzkr1234*    |
    | mrvbzkr@outlook.com     | BzkrTest1234*|
    | mrvbzkrtest@hotmail.com | BzkrTest1234/|

@login3
Scenario Outline: Validation controls for e-mail
    When The user inputs "<e-mail>" and "<password>"
    And The user click Sign In button
    Then The user see "<error message>"
Examples: 
    | e-mail             | password     | error message                               |
    | mrvbzkrş@gmail.com | BzkrTest1234*| Please enter a valid e-mail address.        |
    |                    | BzkrTest1234*| Required field.                             |

@login4
Scenario Outline: Validation controls for password
    When The user inputs "<e-mail>" and "<password>"
    And The user click Sign In button
    Then The user see "<error message>" for password
Examples: 
    | e-mail                  | password     | error message                                    |
    | mrvbzkrtest@hotmail.com | Bz           | Please enter minimum 3 and maximum 20 characters.|
    | mrvbzkrtest@hotmail.com |              | Required field.                                  |

@login5
Scenario: The eye icon controls on password textbox
    When The user input valid credentials
    Then The user checks if the password textbox type and see that is "password"
    When The user clicks eye icon on password textbox
    Then The user checks if the password textbox type and see that is "text"

@login6
Scenario: Maximum character control for e-mail
    When The user inputs "mrvbzkrtest" and "BzkrTest1234*"
    And The user changes mail information
    Then The user see "'Email' must be between 0 and 100 characters."

@login7
Scenario: Maximum character control for password
    When The user inputs "mrvbzkrtest@hotmail.com" and "BzkrTest1234*"
    And The user changes password information
    And The user click Sign In button
    Then The user see "Please enter minimum 3 and maximum 20 characters." for password