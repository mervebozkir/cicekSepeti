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