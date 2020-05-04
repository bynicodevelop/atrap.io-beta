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

    cy.get(".loading-page").should("be.visible")

    cy.get(".v-image__image").should(
      "have.css",
      "background-image",
      `url("${Cypress.env("IMAGE_PROFILE")}")`
    )
  })

  it("should can open navigation and see avatar with user name", function () {
    cy.visit("http://localhost:3000/")

    cy.get(".v-navigation-drawer__content").should("not.be.visible")

    cy.get(".v-toolbar__content .v-btn").click()

    cy.get(".v-navigation-drawer__content")

    cy.get(".v-navigation-drawer__content .v-image__image").should(
      "have.css",
      "background-image",
      `url("${Cypress.env("IMAGE_PROFILE")}")`
    )

    cy.get(".v-list-item__title").contains(Cypress.env("USERNAME"))

    cy.get("body").type("{esc}")

    cy.get(".v-navigation-drawer__content").should("not.be.visible")
  })

  it("should can got to profile page", function () {
    cy.visit("http://localhost:3000/")

    cy.get(".v-toolbar__content .v-btn").click()

    cy.get("#profile").click()

    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/profile")
    })
  })

  it("should can logout", function () {
    cy.visit("http://localhost:3000/")

    cy.get(".v-toolbar__content .v-btn").click()

    cy.get("#logout").click()

    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/auth/signin")
    })
  })
})
