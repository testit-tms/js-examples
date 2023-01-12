Feature: Rule
  Tests that use Rule
  @ExternalId=999
  Scenario: Summing
    When <left>+<right>
    Then Result is <result>

    Examples: Options
      Examples show different options
      | left | right | result |
      | 1    | 1     | 3      |
      | 9    | 9     | 18     |
