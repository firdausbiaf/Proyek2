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
      cy.get(':nth-child(4) > .nav-link > span').click()
      cy.get(':nth-child(3) > :nth-child(7) > .btn-group > form > .btn').click()
      cy.get(':nth-child(2) > .swal-button').click()
      cy.get('h1').should("have.text", "User List")
      cy.get('[aria-label="Foto: activate to sort column ascending"]').should("have.text", "Foto")
      cy.get('[aria-label="Nama: activate to sort column ascending"]').should("have.text", "Nama")
      cy.get('[aria-label="Email: activate to sort column ascending"]').should("have.text", "Email")
      cy.get('[aria-label="Verifikasi: activate to sort column ascending"]').should("have.text", "Verifikasi")
      cy.get('[aria-label="Dibuat: activate to sort column ascending"]').should("have.text", "Dibuat")
      cy.get('.text-center.sorting').should("have.text", "Aksi")
    })
})