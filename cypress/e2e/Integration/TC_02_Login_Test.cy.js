const urls = require('../../support/URLs');
const Locators = require('../../support/pages/Locators');

describe('Home Page Validation', () => {
    beforeEach(() => {
        cy.viewport(1500, 720);
        cy.fixture('user.json').as('user');
        cy.visit(urls.baseUrl, { timeout: 25000 }); // website taking time to load   
    });

    it('Verify Login with Wrong email and password', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();
        // Input wrong Email
        cy.get(Locators.emailInput).type('jane.do@contexo.io');
        // Input wrong Password
        cy.get(Locators.passwordInput).type("Text");
        // click on sign in button
        cy.get(Locators.signinbutton).click();
        // Check error message
        cy.get(Locators.ErrorMessage).should('exist')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\u00a0/g, ' ').trim(); 
                expect(normalizedText).to.equal('Bad credentials!');
            });
    });

    it('Verify Login with Wrong Email but Correct Password', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();

        // Input wrong Email
        cy.get(Locators.emailInput).type('jane.do@contexo.io');

        // Input correct Password
        cy.get(Locators.passwordInput).type("Test");

        // Click on sign in button
        cy.get(Locators.signinbutton).click();

        // Check error message
        cy.get(Locators.ErrorMessage).should('exist')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\u00a0/g, ' ').trim(); 
                expect(normalizedText).to.equal('Bad credentials!');
            });
    });

    it('Verify Login with Correct email but Wrong Password', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();
        // Input wrong Email
        cy.get(Locators.emailInput).type('jane.doe@contexo.io');
        // Input wrong Password
        cy.get(Locators.passwordInput).type("Text");
        // click on sign in button
        cy.get(Locators.signinbutton).click();
        // Check error message
        cy.get(Locators.ErrorMessage).should('exist')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\u00a0/g, ' ').trim(); 
                expect(normalizedText).to.equal('Bad credentials!');
            });
    });

    it('Verify Login with Empty Email and Password', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();
        // Leave Email and Password fields empty
        cy.get(Locators.signinbutton).click();
        // Check error message for empty fields
        cy.get(Locators.EmailRequiredMessage).should('exist')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\u00a0/g, ' ').trim(); 
                expect(normalizedText).to.equal('Email is required');
            });
        cy.get(Locators.PasswordRequiredMessage).should('exist')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\u00a0/g, ' ').trim(); 
                expect(normalizedText).to.equal('Password is required');
            });
    });

    it('Verify Login with Empty Email and Correct Password', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();
        // Leave Email empty and input correct Password
        cy.get(Locators.passwordInput).type("Test");
        cy.get(Locators.signinbutton).click();
        // Check error message for empty email
        cy.get(Locators.EmailRequiredMessage).should('exist')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\u00a0/g, ' ').trim(); 
                expect(normalizedText).to.equal('Email is required');
            });
    });

    it('Verify Login with Correct Email and Empty Password', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();
        // Input correct Email and leave Password empty
        cy.get(Locators.emailInput).type('jane.doe@contexo.io');
        cy.get(Locators.signinbutton).click();
        // Check error message for empty password
        cy.get(Locators.PasswordRequiredMessage).should('exist')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\u00a0/g, ' ').trim(); 
                expect(normalizedText).to.equal('Password is required');
            });
    });

    it('Verify Login with Invalid Email Format', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();
        // Input invalid Email format and correct Password
        cy.get(Locators.emailInput).type('janedoecontexo.io'); // Missing '@'
        cy.get(Locators.passwordInput).type("Test");
        cy.get(Locators.signinbutton).click();
        // Check error message for invalid email format
        cy.get(Locators.ValidEmailAddressMessage).should('exist')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\u00a0/g, ' ').trim(); 
                expect(normalizedText).to.equal('Enter a valid email address');
            });
    });


    it('Verify Login with Correct email and Password', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();
        // Input Correct Email for user
        cy.get(Locators.emailInput).type(this.user.email);
        // Input Correct Password for user
        cy.get(Locators.passwordInput).type(this.user.password);
        // Click on sign in button
        cy.get(Locators.signinbutton).click();
        // we should be redirected to /dashboard
        cy.url().should('include', '/dashboard')
    });

    it('Verify Forgot Password with Empty Email', function () {
        // Find and click the Signin link 
        cy.get(Locators.loginlink).click();

        // Click on the "Forgot Password" link or button
        cy.get(Locators.forgotPasswordLink).click();

        // Leave the Email Address field empty and click on the "Reset Password" button
        cy.get(Locators.resetPasswordButton).click();

        // Assert the error message for empty email field
        cy.get(Locators.ValidEmailAddressMessage).should('exist')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\u00a0/g, ' ').trim(); 
                expect(normalizedText).to.equal('Email is required');
            });
    });

});