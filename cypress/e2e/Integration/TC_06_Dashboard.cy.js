const Locators = require('../../support/pages/Locators');

describe('Validate Dashboard', () => {
    beforeEach(() => {
        cy.viewport(1500, 720);
        cy.fixture('user.json').then((user) => {
            cy.login(user.email, user.password); // Assuming cy.login is a custom command
        });
    });

    it('Validation Dashboard page after login', function () {
        cy.log('Checking Header title for dashboard');
        cy.get(Locators.headertitle).should('exist').and('have.text', 'DASHBOARD');

        cy.log('Checking Right panel');
        cy.get(Locators.rightpanel).should('exist');

        cy.log('Checking Project by status');
        cy.get(Locators.projectstatus).should('exist').and('have.text', Locators.projectstatustext);
        
        cy.log('Checking Project by types');
        cy.get(Locators.projecttype).should('exist').and('have.text', Locators.projecttypetext);

        cy.log('Checking Project by estimator');
        cy.get(Locators.ProjectEstimator).should('exist').and('have.text', Locators.ProjectEstimatortext);

        cy.log('Checking Project by margin');
        cy.get(Locators.Projectmargin).should('exist').and('have.text', Locators.Projectmargintext);

        cy.log('Checking Revenue panel');
        cy.get(Locators.RevenuePanel).should('exist');

        cy.log('Checking Revenue panel title');
        cy.get(Locators.RevenueTitle).should('exist').and('have.text', Locators.RevenueTitletext);

        cy.log('Checking Revenue boxes');
        cy.get(Locators.revenuebox1).should('exist').and('have.text', Locators.revenuebox1text);
        cy.get(Locators.revenuebox2).should('exist').and('have.text', Locators.revenuebox2text);
        cy.get(Locators.revenuebox3).should('exist').and('have.text', Locators.revenuebox3text);
        cy.get(Locators.revenuebox4).should('exist').and('have.text', Locators.revenuebox4text);

        cy.log('Checking Type Chart');
        cy.get(Locators.TypeChart).should('exist');

        cy.log('Checking Type Chart Header');
        cy.get(Locators.TypeHeader).should('exist').and('have.text', Locators.TypeHeadertext);

        cy.log('Checking Estimator Chart');
        cy.get(Locators.EstimatorChart).should('exist');

        cy.log('Checking Estimator Chart Header');
        cy.get(Locators.EstimatorHeader).should('exist').and('have.text', Locators.EstimatorHeadertext);

        cy.log('Checking Task panel');
        cy.get(Locators.TaskPanel).should('exist');

        cy.log('Checking Task panel title');
        cy.get(Locators.TaskPanelTitle).should('exist').and('have.text', Locators.TaskPanelTitletext);

        cy.log('Checking Task List');
        cy.get(Locators.Task1).should('exist');
        cy.get(Locators.Task2).should('exist');

        cy.log('Checking Activity panel');
        cy.get(Locators.ActivityPanel).should('exist');

        cy.log('Checking Activity panel title');
        cy.get(Locators.ActivityPanelTitle).should('exist').and('have.text', Locators.ActivityTitletext);

        cy.log('Checking Header row');
        cy.get(Locators.HeaderRow).should('exist');

        cy.log('Checking Header cells and its text');
        cy.get(Locators.HeaderCell).then((cells) => {
            expect(cells.eq(0)).to.contain.text('#');
            expect(cells.eq(1)).to.contain.text('Subject');
            expect(cells.eq(2)).to.contain.text('Description');
            expect(cells.eq(3)).to.contain.text('Project');
            expect(cells.eq(4)).to.contain.text('Section');
            expect(cells.eq(5)).to.contain.text('Created On');
            expect(cells.eq(6)).to.contain.text('Action');
        });

        cy.log('Checking First row of Activity Panel');
        cy.get(Locators.Firstrow).should('exist');
    });
});