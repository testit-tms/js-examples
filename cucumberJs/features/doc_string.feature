Feature: Doc String
  @ExternalId=874
  Scenario: Pass lots of rows
    Given Long string
      """
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Sit amet porttitor eget dolor. Feugiat in ante metus dictum at. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Turpis in eu mi bibendum neque egestas congue. Viverra justo nec ultrices dui sapien. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Eu facilisis sed odio morbi quis commodo odio aenean. Diam ut venenatis tellus in metus. Augue lacus viverra vitae congue eu consequat ac felis donec. Quam pellentesque nec nam aliquam sem. Feugiat in fermentum posuere urna nec tincidunt praesent. Non consectetur a erat nam. Vitae congue eu consequat ac felis donec et. Donec adipiscing tristique risus nec feugiat in fermentum.

      Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Mattis enim ut tellus elementum sagittis vitae et leo. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. A pellentesque sit amet porttitor eget dolor morbi. Egestas dui id ornare arcu odio ut sem. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Accumsan tortor posuere ac ut. Arcu dictum varius duis at. Eget gravida cum sociis natoque. At varius vel pharetra vel turpis nunc eget lorem. Nisl nisi scelerisque eu ultrices vitae auctor eu. Duis ultricies lacus sed turpis tincidunt. Eget felis eget nunc lobortis mattis aliquam. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Tristique nulla aliquet enim tortor at. Massa placerat duis ultricies lacus sed turpis.

      Ac turpis egestas integer eget aliquet. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Nulla pellentesque dignissim enim sit amet venenatis. Et molestie ac feugiat sed lectus vestibulum mattis. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Senectus et netus et malesuada. Sed risus pretium quam vulputate dignissim. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Et odio pellentesque diam volutpat commodo sed. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Adipiscing bibendum est ultricies integer quis.

      Nunc lobortis mattis aliquam faucibus purus. Diam ut venenatis tellus in metus. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Viverra nam libero justo laoreet sit. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Massa massa ultricies mi quis hendrerit dolor magna. Purus gravida quis blandit turpis cursus in hac. Tempor nec feugiat nisl pretium fusce id velit. Sed nisi lacus sed viverra tellus in hac habitasse. Rhoncus urna neque viverra justo nec ultrices dui sapien. Aenean vel elit scelerisque mauris pellentesque pulvinar. Magna sit amet purus gravida quis blandit turpis cursus in. Eu tincidunt tortor aliquam nulla facilisi. Volutpat commodo sed egestas egestas. Quam nulla porttitor massa id.

      Amet dictum sit amet justo donec. Sit amet consectetur adipiscing elit. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Ante in nibh mauris cursus mattis molestie a. Sed velit dignissim sodales ut eu sem. Eu facilisis sed odio morbi quis commodo. At tellus at urna condimentum mattis pellentesque id. Tincidunt praesent semper feugiat nibh sed. Sit amet nisl purus in mollis nunc sed id. Eget mauris pharetra et ultrices neque. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus.
      """
    When Check length
    Then Length is not 0
  @ExternalId=875
  Scenario: Pass table
    Given Users data
      | name  | email           |
      | bob   | bob@gmail.com   |
      | job   | job@gmail.com   |
      | tod   | tod@gmail.com   |
    When Check that name, email contains 'bob'
    Then Result should be true
