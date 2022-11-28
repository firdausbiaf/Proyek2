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
      cy.get(':nth-child(5) > .has-dropdown > span').click()
      cy.get(':nth-child(10) > .has-dropdown > span').click()
      cy.get(':nth-child(10) > .dropdown-menu > :nth-child(1) > .nav-link > span').click()
      cy.get('.col-lg-3 > .card > .card-body > :nth-child(1) > .input-group > .form-control').type("A1B2C3")
      cy.get('.col-lg-3 > .card > .card-body > :nth-child(2) > .input-group > .form-control').type("1")
      cy.get('.card-footer > .btn').click()
      cy.get('.col-lg > :nth-child(1) > .input-group > .form-control').type("50000")
      cy.get('#createTransaction').click()
    })
})