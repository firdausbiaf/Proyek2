describe('User Can Open Login Page', () => {
    it('Login Page Can be Open and have correct specification', () => {
      cy.visit("http://127.0.0.1:8000/login")
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.get('#email').type("admin@gmail.com")
      cy.get('#password').type("admin123")
      cy.get('.btn').click()
      cy.get(':nth-child(1) > .nav-link > .fas').click()

    })
})