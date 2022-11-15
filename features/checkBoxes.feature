Feature: Herokuapp checkboxes
    Test add and remove checkbox feature
Background: 
    Given I am on the "checkboxes" page

@addCheckbox
    Scenario: As a user, I can select checkbox
        When I click on checkbox
        Then I see checkmark appear

@removeCheckbox
    Scenario: As a user, I can deselect checkbox
        When I remove checkmark
        Then I don't see checkmark