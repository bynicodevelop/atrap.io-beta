const gotTo = (visit, selector, expected) => {
  cy.visit(visit)

  if(selector !== null) {
    cy.get(selector).click()
  }

  cy.location().should((loc) => {
    expect(loc.href).to.eq(expected)
  })
}

describe("Guest Navigation", function () {
  it("Should automatically redirected to Signin", function () {
    gotTo("http://localhost:3000", null, "http://localhost:3000/auth/signin")
  })

  it("Should navigate to go Sign up page", function () {
    gotTo("http://localhost:3000/auth/signin", ".v-toolbar__content > .v-btn", "http://localhost:3000/auth/signup")
  })

  it("Should navigate to go Sign in page", function () {
    gotTo("http://localhost:3000/auth/signup", ".v-toolbar__content > .v-btn", "http://localhost:3000/auth/signin")
  })

  it("Should navigate to go Reset password page", function () {
    gotTo("http://localhost:3000/auth/signin", ".flex > a", "http://localhost:3000/auth/reset")
  })
})
