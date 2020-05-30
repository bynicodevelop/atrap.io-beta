/* global Cypress, cy */

describe("Registration use case", function () {
  beforeEach(function () {
    cy.logout(Cypress.env("UID_JOHN_DOE_TEST"))
    cy.visit("http://localhost:3000/auth/signup")
    cy.setCookie("cookies", "true")
  })

  it("Should expected nominal case", function () {
    cy.get(".v-card__text > .v-btn").should("be.disabled")

    cy.get("#name").focus().blur()

    cy.get(".v-card__text .v-btn").should("be.disabled")

    cy.get("#name").type("name")

    cy.get("input[type=file]").attachFile("images/profile.png")

    cy.get(".v-card__text > .v-btn").click()

    cy.scrollTo("bottom")

    cy.get(".v-card__text > .v-btn").click()

    cy.get("#email").clear().type("john.doe@domain.tld")
    cy.get("#password").type("123")

    cy.get(".v-messages__message").should("be.visible")

    cy.get("#password").clear().type("123456")

    cy.get("#password").should("have.attr", "type", "password")

    cy.get(".v-input__icon > .v-icon").click()

    cy.get("#password").should("have.attr", "type", "text")

    cy.get("#next").click()

    cy.location({ timeout: 30000 }).should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/")
    })

    cy.logout(Cypress.env("UID_JOHN_DOE_TEST"))
  })

  it("Could not register with already email exist", function () {
    cy.get("#name").type("name")
    cy.get("input[type=file]").attachFile("images/profile.png")

    cy.get(".v-card__text > .v-btn").click()
    cy.scrollTo("bottom")
    cy.get(".v-card__text > .v-btn").click()

    cy.get("#email").clear().type("john.doe.test@domain.tld")
    cy.get("#password").type("123456")

    cy.get(".v-card__text > .v-btn").click()

    global.cy
  })
})
