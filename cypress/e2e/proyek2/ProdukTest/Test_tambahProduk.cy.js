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
      cy.get(':nth-child(5) > .dropdown-menu > :nth-child(1) > .nav-link > span').click()
      cy.get('.card-header > .btn').click()
      cy.get(':nth-child(2) > :nth-child(1) > .input-group > .form-control').type("A1B2C3")
      cy.get('.row > :nth-child(3) > :nth-child(1) > .input-group > .form-control').type("10")
      cy.get(':nth-child(2) > :nth-child(2) > .input-group > .form-control').type("Test Produk")
      cy.get(':nth-child(3) > :nth-child(2) > .input-group > .form-control').type("15000")
      cy.get(':nth-child(3) > :nth-child(3) > .input-group > .form-control').type("20000")
      cy.get('.card-footer > .btn').click()
      cy.get('h1').should("have.text", "Product List")
      cy.get('[aria-label="Photo: activate to sort column ascending"]').should("have.text", "Photo")
      cy.get('[aria-label="Kode Produk: activate to sort column ascending"]').should("have.text", "Kode Produk")
      cy.get('[aria-label="Nama: activate to sort column ascending"]').should("have.text", "Nama")
      cy.get('[aria-label="Harga Beli: activate to sort column ascending"]').should("have.text", "Harga Beli")
      cy.get('[aria-label="Harga Jual: activate to sort column ascending"]').should("have.text", "Harga Jual")
      cy.get('[aria-label="Stok: activate to sort column ascending"]').should("have.text", "Stok")
      cy.get('[aria-label="Kategori: activate to sort column ascending"]').should("have.text", "Kategori")
      cy.get('.text-center.sorting').should("have.text", "Aksi")
    })
})