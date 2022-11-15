Feature: Herokuapp key presses
    Test for key press feature
Background: 
    Given I am on the "key_presses" page

@keyPresses
    Scenario Outline: As a user, I can press <Keys>
        When I press "<Keys>"
        Then I see - You entered: "<Output>"

        Examples:
        | Keys | Output |
        | Enter |   ENTER |
        | Q |   Q |
        | W |   W |
        | E |   E |
        | R |   R |
        | T |   T |
