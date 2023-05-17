Feature: MethodsTests

  @ExternalId=Add_links_success
  Scenario: Add links success
    When add links
    Then return true

  @ExternalId=Add_links_failed
  Scenario: Add links failed
    When add links
    Then return false

  @ExternalId=Add_attachments_success
  Scenario: Add attachments success
    When add attachments
    Then return true

  @ExternalId=Add_attachments_failed
  Scenario: Add attachments failed
    When add attachments
    Then return false

  @ExternalId=Add_message_success
  Scenario: Add message success
    When add message
    Then return true

  @ExternalId=Add_message_failed
  Scenario: Add message failed
    When add message
    Then return false

  @ExternalId=Add_all_methods_success
  Scenario: Add all methods success
    When add all methods
    Then return true

  @ExternalId=Add_all_methods_failed
  Scenario: Add all methods failed
    When add all methods
    Then return false