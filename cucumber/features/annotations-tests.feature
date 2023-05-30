Feature: AnnotationTests

  Scenario: Without annotation success
    Then return true

  Scenario: Without annotation failed
    Then return false

  @ExternalId=With_external_id_annotation_success
  Scenario: With external id annotation success
    Then return true

  @ExternalId=With_external_id_annotation_failed
  Scenario: With external id annotation failed
    Then return false

  @ExternalId=With_display_name_annotation_success
  @DisplayName=With_display_name_annotation_success_display_name
  Scenario: With display name annotation success
    Then return true

  @ExternalId=With_display_name_annotation_failed
  @DisplayName=With_display_name_annotation_failed_display_name
  Scenario: With display name annotation failed
    Then return false

  @ExternalId=With_title_annotation_success
  @Title=With_title_annotation_success_title
  Scenario: With title annotation success
    Then return true

  @ExternalId=With_title_annotation_failed
  @Title=With_title_annotation_failed_title
  Scenario: With title annotation failed
    Then return false

  @ExternalId=With_description_annotation_success
  @Description=With_description_annotation_success
  Scenario: With description annotation success
    Then return true

  @ExternalId=With_description_annotation_failed
  @Description=With_description_annotation_failed
  Scenario: With description annotation failed
    Then return false

  @ExternalId=With_labels_annotation_success
  @Labels=Label1,Label2
  Scenario: With labels annotation success
    Then return true

  @ExternalId=With_labels_annotation_failed
  @Labels=Label1,Label2
  Scenario: With labels annotation failed
    Then return false

  @ExternalId=With_links_annotation_success
  @Links={"url":"https://test01.example","title":"Example01","description":"Example01_description","type":"Issue"}
  @Links={"url":"https://test02.example","title":"Example02","description":"Example02_description","type":"Issue"}
  Scenario: With links annotation success
    Then return true

  @ExternalId=With_links_annotation_failed
  @Links={"url":"https://test01.example","title":"Example01","description":"Example01_description","type":"Issue"}
  @Links={"url":"https://test02.example","title":"Example02","description":"Example02_description","type":"Issue"}
  Scenario: With links annotation failed
    Then return false

  @ExternalId=With_workitem_ids_annotation_success
  @WorkItemIds=123,321
  Scenario: With workitemids annotation success
    Then return true

  @ExternalId=With_workitem_ids_annotation_failed
  @WorkItemIds=123,321
  Scenario: With workitemids annotation failed
    Then return false

  @ExternalId=With_all_annotations_success
  @DisplayName=With_all_annotations_success_display_name
  @Title=With_all_annotations_success_title
  @Description=With_all_annotations_success
  @Labels=Label1,Label2
  @Links={"url":"https://test01.example","title":"Example01","description":"Example01_description","type":"Issue"}
  @Links={"url":"https://test02.example","title":"Example02","description":"Example02_description","type":"Issue"}
  @WorkItemIds=123,321
  Scenario: With all annotations success
    Then return true

  @ExternalId=With_all_annotations_failed
  @DisplayName=With_all_annotations_failed_display_name
  @Title=With_all_annotations_failed_title
  @Description=With_all_annotations_failed
  @Labels=Label1,Label2
  @Links={"url":"https://test01.example","title":"Example01","description":"Example01_description","type":"Issue"}
  @Links={"url":"https://test02.example","title":"Example02","description":"Example02_description","type":"Issue"}
  @WorkItemIds=123,321
  Scenario: With all annotations failed
    Then return false

  @ExternalId=parametrized_test_success
  @DisplayName=parametrized_test_success_display_name
  @Title=parametrized_test_success_title
  @Description=parametrized_test_success
  Scenario Outline: Parametrized test success
    When get parameters <number> <value>
    Then return true

    Examples:
      | number | value      |
      | 1      | 'string01' |
      | 2      | 'string02' |
      | 3      | 'string03' |

  @ExternalId=parametrized_test_failed
  @DisplayName=parametrized_test_failed_display_name
  @Title=parametrized_test_failed_title
  @Description=parametrized_test_failed
  Scenario Outline: Parametrized test failed
    When get parameters <number> <value>
    Then return false

    Examples:
      | number | value      |
      | 1      | 'string01' |
      | 2      | 'string02' |
      | 3      | 'string03' |
