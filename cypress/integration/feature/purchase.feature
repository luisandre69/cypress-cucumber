Feature: Login and make a transactions on Swag Labs
    As a standard user
    I want to login, add items to the basket and finish a purchase

    Scenario: Login and make a transactions
        Given I am on the Swag Labs page
        And I login as a "standard" user account
        When I sort the products by high to low
        And Add the cheapest and costtiest products to the basket
        Then I should open the basket and checkout
        And Enter details to finish the purchase