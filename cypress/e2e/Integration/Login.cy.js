const urls = require('../../support/URLs');
const login_page = require('../../support/pages/Login_Page');
describe('User Login', () => {
  beforeEach(() => {
    cy.fixture('user.json').as('user');
  });

  it('should log in with the credentials saved in user.json', function () {


    cy.visit(urls.baseUrl, { timeout: 30000 });// website taking time to load

    // Find and click the Signin link 
    cy.get(login_page.loginlink).click();

    cy.get(login_page.emailInput).type(this.user.email);
    cy.get(login_page.passwordInput).type(this.user.password);
    cy.get(login_page.signinbutton).click();

    // we should be redirected to /dashboard
    cy.url().should('include', '/dashboard')

  });
});