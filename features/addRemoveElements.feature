Feature: Herokuapp add remove elements
    Test add and remove elements cases
Background: 
    Given I am on the "add_remove_elements/" page

@addElement
    Scenario: As a user, I can add element
        When I click on Add Element button
        Then I see button Delete 

@removeElement
    Scenario: As a user, I can remove element
    Given I have clicked on Add Element
        When I click on delete button
        Then I don't see delete button

@checkElementText
    Scenario: As a user, I can see text on button
        When I have clicked on add element button
        Then I see text on button - Delete

