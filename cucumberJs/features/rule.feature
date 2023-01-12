Feature: Rule
  Tests that use Rule
  Rule: Some rule
    @ExternalId=224
    Scenario: 2+2=4
      When 2+2
      Then Result is 4
    @ExternalId=336
    Scenario: 3+3=6
      When 3+3
      Then Result is 6
