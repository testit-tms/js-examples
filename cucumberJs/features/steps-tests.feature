Feature: StepsTests

  Scenario: Steps without annotations success
    When step01
    Then return true

  Scenario: Steps without annotations failed
    When step01
    Then return false
