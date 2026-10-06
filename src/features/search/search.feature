@KAN-3
Feature: Book store
  As a user
  I want to search the book
  So that I can find relevant book

  @smoke
  Scenario: Visit books page
    Given I am on the homepage
    When I click the Book Store Application
    Then the page title should contain "demosite"

  @smoke
  Scenario: Successful page load
    Given I am on the homepage
    Then the page title should contain "demosite"

  @regression
  Scenario Outline: Searching for a term
    Given I am on the homepage
    When I click the Book Store Application
    And I search for "<term>"
    Then I should see results related to "<term>"

    Examples:
      | term       |
      | Git        |
      | JavaScript |