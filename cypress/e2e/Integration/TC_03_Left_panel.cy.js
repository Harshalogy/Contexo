const Locators = require('../../support/pages/Locators');

describe('Left panel tabs', () => {
    beforeEach(() => {
        cy.viewport(1500, 720);
        cy.fixture('user.json').then((user) => {
            cy.login(user.email, user.password); // Assuming cy.login is a custom command
        });
    });

    it('should click each tab and assert url', () => {
        const menuItems = [
            { name: 'Dashboard', url: 'dashboard'},
            { name: 'Planroom', url: 'planroom'},
            { name: 'Projects', url: 'projects'},
            { name: 'Directory', url: 'directory/project-users'},
            { name: 'Admin', url: 'admin/project-templates'},
            { name: 'Help', url: 'help'},
            { name: 'Setup', url: 'admin/setup'}
        ];

        // Click the button to make the menu, it's not visible by default
        cy.get(Locators.MainMenu).click();

        menuItems.forEach(item => {
            // Ensure the menu is visible before each click
            cy.get(Locators.Menudrawer,{setTimeout:3000}).should('be.visible').click();

            // Log which menu item is being clicked
            cy.log(`Clicking on the ${item.name} tab`);
            
            // Check the presence of the menu item and its text, then click it
            cy.contains(Locators.Menudrawer, item.name,{setTimeout:30000}).should('be.visible').click();

            // Assert the URL after clicking the menu item
            cy.url().should('include', item.url);

             // Ensure the menu is visible again after navigation
             cy.get(Locators.MainMenu,{setTimeout:3000}).click();
        });
    });
});