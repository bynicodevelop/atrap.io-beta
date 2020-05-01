describe("Login", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/auth/signin")
  })

  it("should redirect user to dashboard (nominal case)", function () {
    cy.get("#email").type("john.doe.test@domain.tld")
    cy.get("#password").type("123456")

    cy.get(".v-form > .v-btn").click()

    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/")
    })
  })

  it("should return error when email is wrong", function () {
    cy.get("#email").type("wrong.john.doe.test@domain.tld")
    cy.get("#password").type("123456")

    cy.get(".v-form > .v-btn").click()

    cy.get(".v-snack__content").should("be.visible")
  })

  it("should return error when password is wrong", function () {
    cy.get("#email").type("john.doe.test@domain.tld")
    cy.get("#password").type("wrong-password")

    cy.get(".v-form > .v-btn").click()

    cy.get(".v-snack__content").should("be.visible")
  })
})
