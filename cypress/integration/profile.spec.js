// const setUp = () => {
//   cy.login(Cypress.env("UID_JOHN_DOE_TEST"))
//
//   cy.visit("http://localhost:3000/profile")
// }
describe("On profile page, user", function () {
  // it('should display email', function () {
  //   setUp()
  //   cy.get(".headline").contains(Cypress.env("EMAIL_JOHN_DOE_TEST"))
  //
  //   cy.logout()
  // });
  //
  // it('should display snackbar when the user enter wrong password', function () {
  //   setUp()
  //   cy.get('.v-stepper__wrapper > .v-btn').click()
  //
  //   cy.get("input[type=password]").type("123")
  //
  //   cy.get('.v-stepper__content:nth-child(2) .v-form > .v-btn').should("be.disabled")
  //
  //   cy.get("input[type=password]").type("123000")
  //
  //   cy.get('.v-stepper__content:nth-child(2) .v-form > .v-btn').click()
  //
  //   cy.get(".v-snack__content").should("be.visible")
  //
  //   cy.logout()
  // });
  //
  // it('should can access to form to modify his profile', function () {
  //   setUp()
  //   cy.get('.v-stepper__wrapper > .v-btn').click()
  //
  //   cy.get("input[type=password]").type("123456")
  //
  //   cy.get('.v-stepper__content:nth-child(2) .v-form > .v-btn').click()
  //
  //   cy.get("#email").should('have.value', Cypress.env("EMAIL_JOHN_DOE_TEST"))
  //
  //   cy.get("#email").clear().type(Cypress.env("EMAIL_JOHN_DOE_TEST_UPDATED"))
  //
  //   cy.get(".v-stepper__content:nth-child(3) .v-form > .v-btn").click()
  //
  //   cy.get('.v-stepper__content:nth-child(1)').should('be.visible')
  //
  //   cy.get(".headline").contains(Cypress.env("EMAIL_JOHN_DOE_TEST_UPDATED"))
  //
  //   cy.get(".v-snack__content").should("be.visible")
  //
  //   cy.logout()
  // });
  //
  // it('should reset default test email', function () {
  //   cy.login(Cypress.env("EMAIL_JOHN_DOE_TEST_UPDATED"))
  //
  //   cy.visit("http://localhost:3000/profile")
  //
  //   cy.get('.v-stepper__wrapper > .v-btn').click()
  //
  //   cy.get("input[type=password]").type("123456")
  //
  //   cy.get('.v-stepper__content:nth-child(2) .v-form > .v-btn').click()
  //
  //   cy.get("#email").clear().type(Cypress.env("EMAIL_JOHN_DOE_TEST"))
  //
  //   cy.get(".v-stepper__content:nth-child(3) .v-form > .v-btn").click()
  //
  //   cy.get(".headline").contains(Cypress.env("EMAIL_JOHN_DOE_TEST"))
  //
  //   cy.get(".v-snack__content").should("be.visible")
  //
  //   cy.logout()
  // });
})
