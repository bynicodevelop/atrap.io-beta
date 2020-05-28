/* global Cypress, cy */

describe("Preloader", function () {
  it("should be display when the page loading", function () {
    cy.login(Cypress.env("UID_JOHN_DOE_TEST"))

    cy.visit("http://localhost:3000/")

    cy.get(".loading-page").should("be.visible")

    cy.get(".loading-page").should("not.be.visible")
  })
})
