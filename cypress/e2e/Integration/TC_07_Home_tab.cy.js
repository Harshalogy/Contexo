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
    cy.contains('a','Home').click();
  });

  it('Should display the Home tab and project details', () => {

    // Assert the heading of each page
    cy.get(Locators.Heading).should('contain.text', 'HOME');

    // Check "Projects Details" tab is visible and active
    cy.contains('Projects Details').should('be.visible').parent().should('have.class', 'mat-tab-label-active');

    // Validate button presence
    cy.get('button').contains('Edit').should('be.visible');

  });

  it('Should allow the user to click the Edit button and verify changes', () => {
    // Click the Edit button
    cy.get('button').contains('Edit').click();

    // Assert that the fields are now editable 
    cy.get('input[placeholder="Project Name"]').should('be.enabled');

    // Generate and log a random project name
    const randomProjectName = `Project_${Math.random().toString(36).substr(2, 8)}`;
    cy.log(`Generated Project Name: ${randomProjectName}`);

    // Log action: Enter project name
    cy.log('Entering project name...');
    cy.get(Locators.Edit_Project_Name).type(randomProjectName);// Check if the input is now editable
  });

  it('Should display the dashboard', () => {
    cy.get(Locators.HomeTab_dashboard).click(); // Navigate to Dashboard

    // Verify "Dashboard" is active
    cy.get(Locators.HomeTab_dashboard).should('be.visible').should('have.class', 'mat-tab-label-active');

    // Validate "Invitation By Trade" chart is visible
    cy.contains('Invitation By Trade').should('be.visible');
    cy.get(Locators.Invitation_By_Trade).should('be.visible');

    //Wait for Google chart ot load
    cy.wait(5000);

    // Check the Invite Count and Submission Count labels
    cy.contains('Invite Count').should('be.visible');
    cy.contains('Submission Count').should('be.visible');

    // Validate "SPEC Type By Name" table is visible
    cy.contains('SPEC Type By Name').should('be.visible');
    cy.get(Locators.SPEC_Type_By_Name).within(() => {
      cy.contains('Spec Types').should('be.visible');
      cy.contains('Value').should('be.visible');
    });
  });
});
