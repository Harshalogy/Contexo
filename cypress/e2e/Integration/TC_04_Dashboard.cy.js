const Locators = require('../../support/pages/Locators');
const URLs = require('../../support/URLs');
const { baseUrl } = require('../../support/URLs');

describe('Validate Dashboard', () => {
    // Set viewport size and mock API requests before each test
    before(() => {
        cy.viewport(1500, 720);
        cy.intercept('GET', '**/*', { log: false });
        cy.intercept('POST', '**/*', { log: false });
    });

    beforeEach(() => {
        // Use cy.session to cache the user session
        cy.session('userSession', () => {
            // Setup function for logging in
            cy.fixture('user.json').then((user) => {
                cy.login(user.email, user.password); 
            });
        });
        // Visit the dashboard after restoring the session
        cy.visit(URLs.Dashboard);
    });

    it('Verify the dashboard page Url and heading', function () {
        // Check that the URL contains '/dashboard'
        cy.url().should('include', '/dashboard');
        cy.log('Checking Header title for dashboard');
        // Check that the header title is 'DASHBOARD'
        cy.get(Locators.headertitle).should('exist').and('have.text', 'DASHBOARD');
    });

    it('Verify the Projects By Status Chart box should exist', function () {
        // Log and check that the project status box exists and has the expected text
        cy.log('Checking Project by status');
        cy.get(Locators.projectstatus).should('exist').and('have.text', Locators.projectstatustext);
        // Ensure the chart container is visible
        cy.get(Locators.PieChart).should('be.visible');
    });

    it('Verify the Projects By Type Chart box should exist', function () {
        // Log and check that the project type box exists and has the expected text
        cy.log('Checking Project by types');
        cy.get(Locators.projecttype).should('exist').and('have.text', Locators.projecttypetext);
        // Ensure the chart container is visible
        cy.get(Locators.PieChart).should('be.visible');
    });

    it('Verify the Projects By Estimator Chart box should exist', function () {
        // Log and check that the project estimator box exists and has the expected text
        cy.log('Checking Project by estimator');
        cy.get(Locators.ProjectEstimator).should('exist').and('have.text', Locators.ProjectEstimatortext);
        // Ensure the chart container is visible
        cy.get(Locators.PieChart).should('be.visible');
    });

    it('Verify the Projects By Stage Chart box should exist', function () {
        // Log and check that the project margin box exists and has the expected text
        cy.log('Checking Project by margin');
        cy.get(Locators.Projectmargin).should('exist').and('have.text', Locators.Projectmargintext);
        // Ensure the chart container is visible
        cy.get(Locators.PieChart).should('be.visible');
    });

    it('Verify the Revenue panel and it should exist', function () {
        // Log and check that the revenue panel exists
        cy.log('Checking Revenue panel');
        cy.get(Locators.RevenuePanel).should('exist');
        // Check that the revenue panel title has the expected text
        cy.log('Checking Revenue panel title');
        cy.get(Locators.RevenueTitle).should('exist').and('have.text', Locators.RevenueTitletext);
    });

    it('Verify the Revenue panel Boxes should exist', function () {
        // Log and check that each revenue box exists
        cy.log('Checking Revenue boxes');
        cy.get(Locators.revenuebox1).should('exist');
        cy.get(Locators.revenuebox2).should('exist');
        cy.get(Locators.revenuebox3).should('exist');
        cy.get(Locators.revenuebox4).should('exist');
    });

    it('Verify the Type chart and its headings should exist', function () {
        // Log and check that the type chart exists
        cy.log('Checking Type Chart');
        cy.get(Locators.TypeChart).should('exist');
        // Check that the type chart header has the expected text
        cy.log('Checking Type Chart Header');
        cy.get(Locators.TypeHeader).should('exist').and('have.text', Locators.TypeHeadertext);
        // Log and check that the estimator chart exists
        cy.log('Checking Estimator Chart');
        cy.get(Locators.EstimatorChart).should('exist');
        // Check that the estimator chart header has the expected text
        cy.log('Checking Estimator Chart Header');
        cy.get(Locators.EstimatorHeader).should('exist').and('have.text', Locators.EstimatorHeadertext);
    });

    it('Verify the Task and Events table and its heading should exist', function () {
        // Log and check that the task panel exists
        cy.log('Checking Task panel');
        cy.get(Locators.TaskPanel).should('exist');
        // Check that the task panel title has the expected text
        cy.log('Checking Task panel title');
        cy.get(Locators.TaskPanelTitle).should('exist').and('have.text', Locators.TaskPanelTitletext);
        // Log and check that task list items exist
        cy.log('Checking Task List');
        cy.get(Locators.Task1).should('exist');
        cy.get(Locators.Task2).should('exist');
    });

    it('Verify the Activity log and its heading should exist', function () {
        // Log and check that the activity panel exists
        cy.log('Checking Activity panel');
        cy.get(Locators.ActivityPanel).should('exist');
        // Check that the activity panel title has the expected text
        cy.log('Checking Activity panel title');
        cy.get(Locators.ActivityPanelTitle).should('exist').and('have.text', Locators.ActivityTitletext);
    });

    it('Verify the Activity log table row exists', function () {
        // Log and check that the header row exists
        cy.log('Checking Header row');
        cy.get(Locators.HeaderRow).should('exist');
        // Check that each header cell has the expected text
        cy.log('Checking Header cells and its text');
        cy.get(Locators.HeaderCell).then((cells) => {
            expect(cells.eq(0)).to.contain.text('#');
            expect(cells.eq(1)).to.contain.text('Subject');
            expect(cells.eq(2)).to.contain.text('Description');
            expect(cells.eq(3)).to.contain.text('Project');
            expect(cells.eq(4)).to.contain.text('Module');
            expect(cells.eq(5)).to.contain.text('Created At');
            expect(cells.eq(6)).to.contain.text('Archive');

            // Check that the first row of the activity panel exists
            cy.log('Checking First row of Activity Panel');
            cy.get(Locators.Firstrow).should('exist');
        });
    });

    it('Verify the user profile page', function () {
        // Log and check that the user menu exists and open it
        cy.log('Checking User menu');
        cy.get(Locators.UserMenu).should('exist').click({ force: true });
        // Check that the profile option exists and navigate to it
        cy.log('Checking Profile Option in User Menu');
        cy.get(Locators.UserProfile).should('exist').click();
        cy.url().should('include', '/userprofile');
    });

    it('Verify the change password page', function () {
        // Log and check that the user menu exists and open it
        cy.log('Checking User menu');
        cy.get(Locators.UserMenu).should('exist').click({ force: true });
        // Check that the change password option exists and navigate to it
        cy.log('Checking Change Password Option in User Menu');
        cy.get(Locators.ChangePassword).should('exist').click();
        cy.url().should('include', '/changepassword');
    });

    it('Verify the logout functionality', function () {
        // Log and check that the user menu exists and open it
        cy.log('Checking User menu');
        cy.get(Locators.UserMenu).should('exist').click({ force: true });
        // Check that the logout option exists and click to log out
        cy.log('Checking Logout Option in User Menu');
        cy.get(Locators.Logout).should('exist').click();
        cy.url().should('eq', baseUrl); // Verify URL after logout
    });
});
