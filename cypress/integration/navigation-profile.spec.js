describe("Navigation admin", function () {
  beforeEach(function () {
    cy.login(Cypress.env("UID_JOHN_DOE_TEST"))

    cy.callRtdb("set", `users/${Cypress.env("UID_JOHN_DOE_TEST")}`, {
      avatar: Cypress.env("IMAGE_PROFILE"),
      username: Cypress.env("USERNAME"),
    })
  })

  it("should user's avatar and name are visible", function () {
    cy.visit("http://localhost:3000/")

    cy.get(".v-image__image").should(
      "have.css",
      "background-image",
      `url("${Cypress.env("IMAGE_PROFILE")}")`
    )
  })

  it("should can open and close menu", function () {})

  it("should can logout", function () {})
})
