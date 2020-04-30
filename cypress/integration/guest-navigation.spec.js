describe("Guest Navigation", function () {
  it("Should automatically redirected to Signin", function () {
    cy.visit("http://localhost:3000")

    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/auth/signin")
    })
  })

  it("Should navigate to go Sign up page", function () {
    cy.visit("http://localhost:3000/auth/signin")

    cy.get(".v-toolbar__content > .v-btn").click()

    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/auth/signup")
    })
  })

  it("Should navigate to go Sign in page", function () {
    cy.visit("http://localhost:3000/auth/signup")

    cy.get(".v-toolbar__content > .v-btn").click()

    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/auth/signin")
    })
  })

  it("Should navigate to go Reset password page", function () {
    cy.visit("http://localhost:3000/auth/signin")

    cy.get(".flex > a").click()

    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/auth/reset")
    })
  })
})
