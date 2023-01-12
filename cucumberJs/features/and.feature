Feature: And test
  @ExternalId=778
  Scenario: And scenario
    Given Browser is opened
    And Logged in as admin
    When Click on user profile button
    Then Navigate to user profile page
    But Create modal is not opened