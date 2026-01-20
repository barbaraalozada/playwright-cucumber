@bookstore
Feature: User authentication for the Book Store

  Background:
    Given the user accesses the 'Book Store Application' page
    And the user navigates to the 'Login' page

  @smoke
  Scenario: User can login with valid credentials
    When the user logs in with valid credentials
    Then the user can see its profile page

  @sanity
  Scenario Outline: Login fails due to invalid credentials
    When the user attempts to log in with an <type> username and a valid password
    Then an authentication error message is displayed

    Examples:
      | type         |
      | invalid      |
      | non-existent |

  @sanity
  Scenario: Login fails when username is empty
    When the user attempts to log in with an empty username and a valid password
    Then the username field shows validation error

  @sanity
  Scenario: Login fails due to deleted account
    When the user attempts to log in with a deleted account
    Then an authentication error message is displayed

  @sanity
  Scenario: User can navigate back to login from registration page
    When the user navigates to the registration page
    And the user clicks on the 'Back to Login' button
    Then the login page is displayed
