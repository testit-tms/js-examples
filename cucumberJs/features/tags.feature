Feature: Tags
  @DisplayName=GoogiliGoogle
  @Description=Cannot_Write_With_Spaces
  @ExternalId=344
  @Link=http://google.com
  @Link=http://vk.com
  @Label=Maths
  @Label=School
  Scenario: Scenario with links
    When 2+2
    Then Result is 4
  @Title=LINKS
  @ExternalId=343
  @Link={"url":"http://google.com","hasInfo":true,"description":"GoogleDescription","title":"Google","type":"Defect"}
  Scenario: Scenario with link obj
    When 2+2
    Then Result is 4
