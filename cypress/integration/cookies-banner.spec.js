describe("Cookies banner", function () {
  it("Should display cookies banner", function () {
    cy.visit("http://localhost:3000/auth/signup")

    cy.get(".v-alert")
  })

  it("Should hidden cookies banner", function () {
    cy.visit("http://localhost:3000/auth/signup")

    cy.get(".v-alert__dismissible > .v-btn__content > .v-icon").click()

    cy.get(".v-alert").should("not.be.visible")
  })

  it("Should hidden cookies banner (by default)", function () {
    cy.visit("http://localhost:3000/auth/signup")

    cy.setCookie("cookies", "true")

    cy.get(".v-alert").should("not.be.visible")
  })
})
