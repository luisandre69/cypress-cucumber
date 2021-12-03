module.exports = {
  text: {
    homeTitle: 'Swag Labs',
    highLowOption: 'Price (high to low)',
  },
  urls: {
    inventory: 'inventory.html',
    cart: 'cart.html',
    checkoutPageOne: 'checkout-step-one.html',
    checkoutPageTwo: 'checkout-step-two.html',
    checkoutComplete: 'checkout-complete.html',
  },
  elements: {
    usernameField: '[data-test="username"]',
    passwordField: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    sortDropdown: '[data-test="product_sort_container"]',
    addToCartButton: '[data-test*="add-to-cart"]',
    cartBadge: '.shopping_cart_container',
    checkoutButton: '[data-test="checkout"]',
    firstNameField: '[data-test="firstName"]',
    lastNameField: '[data-test="lastName"]',
    postCodeField: '[data-test="postalCode"]',
    continueButton: '[data-test="continue"]',
    finishButton: '[data-test="finish"]',
  },

  attemptLogin: function (username, password) {
    cy.get(this.elements.usernameField).type(username)
    cy.get(this.elements.passwordField).type(password)
    cy.get(this.elements.loginButton).click()
  },

  sortByHigh: function () {
    cy.get(this.elements.sortDropdown).select(this.text.highLowOption)
  },

  addtoCartFirstLast: function () {
    cy.get(this.elements.addToCartButton).first().click()
    cy.get(this.elements.addToCartButton).last().click()
    cy.scrollTo('top')
  },

  openBasket: function () {
    cy.get(this.elements.cartBadge).click()
    cy.url().should('include', this.urls.cart)
    cy.get(this.elements.checkoutButton).click()
    cy.url().should('include', this.urls.checkoutPageOne)
  },

  checkoutForm: function (firstName, lastName, postCode) {
    cy.get(this.elements.firstNameField).type(firstName)
    cy.get(this.elements.lastNameField).type(lastName)
    cy.get(this.elements.postCodeField).type(postCode)
    cy.get(this.elements.continueButton).click()
    cy.url().should('include', this.urls.checkoutPageTwo)
  },

  finishCheckout: function () {
    cy.get(this.elements.finishButton).click()
    cy.url().should('include', this.urls.checkoutComplete)
  },
}
