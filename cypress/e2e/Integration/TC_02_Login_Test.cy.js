const urls = require('../../support/URLs');
const Locators = require('../../support/pages/Locators');

describe('Home Page Validation', () => {
    beforeEach(() => {
        cy.viewport(1500, 720);
        cy.fixture('user.json').as('user');
        cy.visit(urls.baseUrl, { timeout: 25000 });// website taking time to load   
    });

    it('Login Validation with Wrong email and password', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();
        // Input wrong Email
        cy.get(Locators.emailInput).type('jane.do@contexo.io');
        // Input Password
        cy.get(Locators.passwordInput).type("Text");
        // click on sign in button
        cy.get(Locators.signinbutton).click();
        cy.wait(2000);
        // Check error message
        cy.get(Locators.ErrorMessage).should('exist')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\u00a0/g, ' ').trim(); // Replacing &nbsp; with space and trimming
                expect(normalizedText).to.equal('Bad credentials!');
            });
    });

    it('Login Validation with Correct email and Password', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();
        // Input Correct Email for user
        cy.get(Locators.emailInput).type(this.user.email);
        // Input Correct Password for user
        cy.get(Locators.passwordInput).type(this.user.password);
        // Click on sign in button
        cy.get(Locators.signinbutton).click();
        cy.wait(5000);
        // we should be redirected to /dashboard
        cy.url().should('include', '/dashboard')
    });
});