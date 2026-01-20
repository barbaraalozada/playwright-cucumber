@textbox
Feature: Text Box form submission

  Background:
    Given the user accesses the 'Elements' page
    And the user navigates to the 'Text Box' page

  @smoke
  Scenario: Submit form with valid user data
    When the user submits the form with validUser data
    Then the submitted information is displayed to the user

  @sanity
  Scenario Outline: Submit form with different data types
    When the user submits the form with <dataType> data
    Then the submitted information is displayed to the user

    Examples:
      | dataType                |
      | longName                |
      | specialCharactersInName |

  @sanity
  Scenario: Submit form with invalid email shows error
    When the user submits the form with invalidEmail data
    Then the email field shows validation error

  @sanity
  Scenario: Submit form with empty current address
    When the user submits the form with emptyCurrentAddress data
    Then the submitted information is displayed to the user
