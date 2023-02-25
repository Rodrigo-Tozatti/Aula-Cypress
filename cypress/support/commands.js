// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Cadastro-usuario', (usuario, senha) => {
    it('Cadastrar usuario com sucesso', () => {
        cy.get('#reg_email').type(usuario)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
    
        cy.get('.page-title').should('contain', 'Minha conta')
      });
    

})
