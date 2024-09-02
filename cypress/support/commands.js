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
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://contexo.io/');// website taking time to load

  // Find and click the Signin link 
  cy.get('.ms-3 > .mat-button-wrapper').click();

  cy.get('#mat-input-11').type(email);
  cy.get('#mat-input-12').type(password);
  cy.get(':nth-child(9) > [type="submit"]').click();

});
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

// cypress/support/commands.js


