@KAN-3
Feature: Book search
  As a user
  I want to search the book
  So that I can find relevant book

  Background:
    Given I am on the homepage

  @smoke
  Scenario: Successful page load
    Then the page title should contain "demosite"

  @smoke
  Scenario: Visit books page
    When I click the Book Store Application
    Then the page title should contain "demosite"

@regression
  Scenario Outline: Searching for a term
    When I click the Book Store Application
    And I search for "<term>"
    Then I should see results related to "<term>"

    Examples:
      | term        |
      | Git  |
      | JavaScript  |
