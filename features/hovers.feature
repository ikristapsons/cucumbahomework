Feature: Herokuapp hovers
    Test hover feature on multiple images
Background: 
    Given I am on the "hovers" page

@hoverImages
    Scenario Outline: As a user, I can hover on each image
        When I hover on image nr. - "<images>"
        Then under image nr. - "<imageID>" I see "<imageInfo>" and view profile
    
        Examples:
            | images| imageID |   imageInfo | 
            | 1     |   1     | name: user1 |
            | 2     |   2     | name: user2 |
            | 3     |   3     | name: user3 |