describe("Registration use case", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/auth/signup")
    cy.setCookie("cookies", "true")
  })

  it("Should expected nominal case", function () {
    cy.get(".v-card__text > .v-btn").should("be.disabled")

    cy.get("#name").focus().blur()

    cy.get(".v-messages__message").should("be.visible")

    cy.get(".v-card__text .v-btn").should("be.disabled")

    cy.get("#name").type("name")

    cy.get("input[type=file]").attachFile("images/profile.jpg")

    cy.get(".v-card__text > .v-btn").click()

    cy.scrollTo("bottom")

    cy.get(".v-card__text > .v-btn").click()

    cy.get("#email").focus().blur()

    cy.get(
      ":nth-child(1) > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
    ).should("be.visible")

    cy.get("#email").type("john.do")

    cy.get(
      ":nth-child(1) > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
    ).should("be.visible")

    cy.get("#password").focus().blur()

    cy.get(
      ":nth-child(2) > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
    ).should("be.visible")

    cy.get("#email").clear().type("john.doe@domain.tld")
    cy.get("#password").type("123456")

    cy.get("#next").click()

    cy.location({ timeout: 30000 }).should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/")
    })
  })

  it("Could not register with already email exist", function () {
    cy.get("#name").type("name")
    cy.get("input[type=file]").attachFile("images/profile.jpg")

    cy.get(".v-card__text > .v-btn").click()
    cy.scrollTo("bottom")
    cy.get(".v-card__text > .v-btn").click()

    cy.get("#email").clear().type("john.doe.test@domain.tld")
    cy.get("#password").type("123456")

    cy.get(".v-card__text > .v-btn").click()

    cy.get(".v-snack__content").should("be.visible")
  })
})
