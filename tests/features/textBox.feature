@textbox @forms
Feature: Text Box form submission

  Background:
    Given I am on the 'Elements' page
    And I navigate to 'Text Box'

  Scenario Outline: Submit form with valid personal information
    When I submit the form with valid personal information
      | name   | email   | currentAddress | permanentAddress |
      | <name> | <email> | <currentAddr>  | <permanentAddr>  |
    Then I should see my submitted information displayed

    Examples:
      | name         | email             | currentAddr          | permanentAddr          |
      | John Doe     | john.doe@test.com |      123 Main Street |         456 Oak Avenue |
      | Meryl Streep | meryl@test.com    | Pasadena, California | Salisbury, Connecticut |
