Feature: Check for word
  I want to check if string is word

  @ExternalId=4
  Scenario: Empty string
    Given String ''
    When I execute word check function
    Then Result should be false
  @ExternalId=5
  Scenario: Number string
    Given String '123'
    When I execute word check function
    Then Result should be false
  @ExternalId=6
  Scenario: Word string
    Given String 'word'
    When I execute word check function
    Then Result should be true
  @ExternalId=7
  Scenario: Word string with number
    Given String 'word1'
    When I execute word check function
    Then Result should be false
  @ExternalId=8
  Scenario: Multiple words
    Given String 'word word'
    When I execute word check function
    Then Result should be false