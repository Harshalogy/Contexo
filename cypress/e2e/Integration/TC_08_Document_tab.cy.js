const Locators = require('../../support/pages/Locators');

describe('Create Project and Validate Left Panel Tabs', () => {
  beforeEach(() => {
    cy.viewport(1500, 720);
    cy.intercept('GET', '**/*', { log: false });
    cy.intercept('POST', '**/*', { log: false });
    cy.fixture('user.json').then((user) => {
      cy.login(user.email, user.password); // Assuming cy.login is a custom command
    });
    cy.log('Opening the menu...');
    cy.get(Locators.MainMenu).click();
    cy.log('Clicking on Project menu...');
    cy.get(Locators.ProjectMenu).click();
    cy.wait(5000);
    cy.log('Click on a particular project...');
    cy.get(Locators.FirstProject).click();
    cy.wait(3000);
    cy.contains('a', 'Documents').click();
  });

  it('Should display the Documents page', () => {
    // Assert the heading of each page
    cy.get(Locators.Heading).should('contain.text', 'DOCUMENTS');
    // Assert the URL includes the partial string
    cy.url().should('include', '/projects/project-home/documents/document');


  });

  it('Should display the search field and the document area dropdown', () => {
    // Validate the search input field
    cy.get(Locators.Search).should('be.visible');

    // Validate the document area dropdown
    cy.get(Locators.Select_Document_area).and('have.text', 'Default Area');

    // Validate the table row headings
    cy.get('.mat-header-row').within(() => {
      cy.contains('Type').should('be.visible');
      cy.contains('Name').should('be.visible');
      cy.contains('Review Status').should('be.visible');
      cy.contains('Reviewed On').should('be.visible');
      cy.contains('Uploaded By').should('be.visible');
      cy.contains('Uploaded On').should('be.visible');
    });

  });
  it('Should validate the upload and AI chatbox Functionality',() =>{

  });


});
