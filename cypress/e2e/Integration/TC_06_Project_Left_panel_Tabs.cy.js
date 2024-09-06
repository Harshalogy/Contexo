const Locators = require('../../support/pages/Locators');

describe('Create Project and Validate Left Panel Tabs', () => {
  const tabs = [
    { label: 'Home', partialUrl: '/projects/project-home', heading: 'HOME' },
    { label: 'Documents', partialUrl: '/projects/project-home/documents/document', heading: 'DOCUMENTS' },
    { label: 'RFP Terms', partialUrl: '/projects/project-home/rfp-terms', heading: 'RFP TERMS' },
    { label: 'Drawings', partialUrl: '/projects/project-home/home-drawings', heading: 'DRAWINGS' },
    { label: 'Scopes', partialUrl: '/projects/project-home/scopes', heading: 'SCOPES' },
    { label: 'Specification', partialUrl: '/projects/project-home/specification', heading: 'SPECIFICATION' },
    { label: 'Reports', partialUrl: '/projects/project-home/reports', heading: 'REPORTS' },
    { label: 'RFI', partialUrl: '/projects/project-home/rfis', heading: 'RFI' },
    { label: 'Bidding', partialUrl: '/projects/project-home/bidding/packages', heading: 'BIDDING' },
    { label: 'Permits', partialUrl: '/projects/project-home/permits', heading: 'PERMITS' },
  ];

  beforeEach(() => {
    cy.viewport(1500, 720);
    cy.intercept('GET', '**/*', { log: false });
    cy.intercept('POST', '**/*', { log: false });
    cy.fixture('user.json').then((user) => {
      cy.login(user.email, user.password); // Assuming cy.login is a custom command
    });
  });

  it('Select a Project and validate the left panel URLs and headings', () => {
    cy.wait(5000);

    // Log action: Open the menu
    cy.log('Opening the menu...');
    cy.get(Locators.MainMenu).click();

    // Log action: Click on Project menu
    cy.log('Clicking on Project menu...');
    cy.get(Locators.ProjectMenu).click();

    cy.wait(5000);

    // Log action: Select the first project
    cy.log('Click on a particular project...');
    cy.get(Locators.FirstProject).click();

    // Wait for the project home to load
    cy.wait(3000);

    // Validate each tab on the left panel
    tabs.forEach((tab) => {
      cy.log(`Clicking on the ${tab.label} tab and validating the URL...`);

      // Click the tab based on its label
      cy.contains('a', tab.label).click();

      // Assert the URL includes the partial string
      cy.url().should('include', tab.partialUrl);

      // Wait for the page to load the content
      cy.wait(2000);

      // Assert the heading of each page
      cy.get('div.section-style').should('contain.text', tab.heading);
    });
  });
});
