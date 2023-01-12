Feature: Check for number
  I want to check if string is number

  @ExternalId=1
  Scenario: Random string
    Given String 'random'
    When I execute number check function
    Then Result should be false
  @ExternalId=2
  Scenario: Number string
    Given String '123'
    When I execute number check function
    Then Result should be true
  @ExternalId=3
  Scenario: Empty string
    Given String ''
    When I execute number check function
    Then Result should be false