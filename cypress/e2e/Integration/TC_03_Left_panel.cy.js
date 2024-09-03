const Locators = require('../../support/pages/Locators');

describe('Left panel tabs', () => {
    beforeEach(() => {
        cy.viewport(1500, 720);
        cy.intercept('GET', '**/*', { log: false });
        cy.intercept('POST', '**/*', { log: false });
        cy.fixture('user.json').then((user) => {
            cy.login(user.email, user.password); // Assuming cy.login is a custom command
        });
    });

    it('Validation of Left Panel Tabs', function () {
        const menuItems = [
            { name: 'Dashboard', url: 'dashboard' },
            { name: 'Planroom', url: 'planroom' },
            { name: 'Projects', url: 'projects' },
            { name: 'Directory', url: 'directory' },
            { name: 'Admin', url: 'admin/project-templates' },
            { name: 'Help', url: 'help' },
            { name: 'Setup', url: 'admin/setup' }
        ];

        cy.log('Opening the main menu');
        cy.get(Locators.MainMenu).should('exist').click();

        // Validate each tab item in the left panel and check their URLs
        menuItems.forEach(item => {
            cy.log(`Clicking on the ${item.name} tab`);
            cy.get(Locators.Menudrawer).contains(item.name).should('be.visible').click();
            cy.url().should('include', item.url);
            cy.wait(1000); // Wait for navigation
        });
    });
});
