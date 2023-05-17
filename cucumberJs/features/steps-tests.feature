Feature: StepsTests

  @ExternalId=Steps_without_annotations_success
  Scenario: Steps without annotations success
    When step01
    Then return true

  @ExternalId=Steps_without_annotations_failed
  Scenario: Steps without annotations failed
    When step01
    Then return false
