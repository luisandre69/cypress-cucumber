import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import purchase from '../../integration/page-objects/purchase.page'
import users from '../../fixtures/users.json'

Given('I am on the Swag Labs page', () => {
  cy.visit('/')
  cy.title().should('eq', purchase.text.homeTitle)
})

Given('I login as a {string} user account', (userType) => {
  purchase.attemptLogin(users.username[userType], users.password)
  cy.url().should('include', purchase.urls.inventory)
})

When('I sort the products by high to low', () => {
  purchase.sortByHigh()
})

When('Add the cheapest and costtiest products to the basket', () => {
  purchase.addtoCartFirstLast()
})

Then('I should open the basket and checkout', () => {
  purchase.openBasket()
})

Then('Enter details to finish the purchase', () => {
  purchase.checkoutForm(users.firstName, users.lastName, users.postCode)
  purchase.finishCheckout()
})
