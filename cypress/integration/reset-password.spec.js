/* global cy */

const sendNewPassword = (email) => {
  cy.get("input[type=email]").type(email)

  cy.get(".v-form > .v-btn").click()

  cy.get(".v-snack__content").should("be.visible")
}

describe("Reset page", function () {
  before(function () {
    cy.logout()
  })

  beforeEach(function () {
    cy.visit("http://localhost:3000/auth/reset")
  })

  it("should display a disabled send", function () {
    cy.get(".v-btn").should("be.disabled")

    cy.get("input[type=email]").type("john.doe.change.password.test@domain.tld")

    cy.get(".v-btn").should("not.be.disabled")
  })

  it("should display success message when user enter good mail", function () {
    sendNewPassword("john.doe.change.password.test@domain.tld")
  })

  it("should display success message when user enter wrong message", function () {
    sendNewPassword("john.doe.wrong.test@domain.tld")
  })
})

describe("Password page", function () {
  before(function () {
    cy.logout()
  })

  beforeEach(function () {
    cy.visit("http://localhost:3000/auth/password?oobCode=sample")
  })

  it("should display a disabled button", function () {
    cy.get(".v-form > .v-btn").should("be.disabled")

    cy.get("input[type=password]").type("123456")

    cy.get(".v-form > .v-btn").should("not.be.disabled")

    cy.get(".v-form > .v-btn").click()

    cy.get(".v-snack__content").should("be.visible")
  })
})
