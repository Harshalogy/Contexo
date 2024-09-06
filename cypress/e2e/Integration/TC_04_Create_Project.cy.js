const Locators = require('../../support/pages/Locators');

describe('Create Project', () => {
    beforeEach(() => {
        cy.viewport(1500, 720);
        cy.fixture('user.json').then((user) => {
            cy.login(user.email, user.password); // Assuming cy.login is a custom command
        });
    });

    it('Create a new project', () => {
        cy.wait(5000);

        // Log action: Open the menu
        cy.log('Opening the menu...');
        cy.get(Locators.MainMenu).click();

        // Log action: Click on Project menu
        cy.log('Clicking on Project menu...');
        cy.get(Locators.ProjectMenu).click();

        cy.wait(5000);

        // Log action: Click on Add Project button
        cy.log('Clicking on Add Project button...');
        cy.get(Locators.AddProjectButton).click();

        // Generate and log a random project name
        const randomProjectName = `Project_${Math.random().toString(36).substr(2, 8)}`;
        cy.log(`Generated Project Name: ${randomProjectName}`);

        // Log action: Enter project name
        cy.log('Entering project name...');
        cy.get(Locators.ProjectNameinput).type(randomProjectName);

        // Log action: Select "Commercial" from dropdown
        cy.log('Selecting "Commercial" from the dropdown...');
        cy.get(Locators.SelectProjectType).click();
        cy.contains('Commercial').click();

        // Log action: Enter project description
        cy.log('Entering project description...');
        cy.get(Locators.ProjectDiscInput).type('Test Project');

        // Log action: Choose regional office
        cy.log('Choosing regional office...');
        cy.get(Locators.SelectRegOffice).click();
        cy.get(Locators.RegOffAddress).click();

        // Log action: Choose owner
        cy.log('Choosing owner...');
        cy.get(Locators.SelectOwner).click();
        cy.contains('Max Builders').click();

        // Log action: Choose owner contact
        cy.log('Choosing owner contact...');
        cy.get(Locators.OwnerContact).click();
        cy.wait(1000);
        cy.contains('James Smith').click();

        // Log action: Choose lead estimator
        cy.log('Choosing lead estimator...');
        cy.get(Locators.LeadEstimator).click();
        cy.contains('Jane Doe').click();

        // Log action: Enter bid amount
        cy.log('Entering bid amount...');
        cy.get(Locators.BidAmountInput).type('500');

        // Log action: Enter gross square footage
        cy.log('Entering gross square footage...');
        cy.get(Locators.GrossSquareFootage).type('300');

        // Log action: Enter bid number
        cy.log('Entering bid number...');
        cy.get(Locators.BidNumberInput).type('12345');

        // Log action: Enter bid due date
        cy.log('Entering bid due date...');
        cy.get(Locators.BidDueDateInput).type('30/12/2025');

        // Log action: Enter submission date
        cy.log('Entering submission date...');
        cy.get(Locators.SubmissionDateInput).type('30/12/2025');

        // Log action: Enter final contract execution date
        cy.log('Entering final contract execution date...');
        cy.get(Locators.ContExecDateInput).type('30/12/2025');

        // Log action: Enter award amount
        cy.log('Entering award amount...');
        cy.get(Locators.AwardAmountInput).type('500');

        // Log action: Enter address line 1
        cy.log('Entering address line 1...');
        cy.get(Locators.Address1input).type('Line1');

        // Log action: Enter address line 2
        cy.log('Entering address line 2...');
        cy.get(Locators.Address2input).type('Line2');
        
        // Log action: Enter city
        cy.log('Entering city...');
        cy.get(Locators.CityInput).type('New City');

        // Log action: Select state
        cy.log('Selecting state...');
        cy.get(Locators.SelectState).click();
        cy.contains('Alabama - AL').click();

        // Log action: Enter ZIP code
        cy.log('Entering ZIP code...');
        cy.get(Locators.ZipCodeInput).type('010203');

        // Log action: Enter notes
        cy.log('Entering notes...');
        cy.get(Locators.NotesInput).type('Test Note');

        // Log action: Select trades
        cy.log('Selecting trades...');
        cy.get(Locators.SelectTrade).click();
        cy.get(Locators.MatOption).contains('02 00 00 - Existing Conditions').click();
        
        // Log action: Add items from available to selected list
        cy.log('Adding items to selected list...');
        cy.get(Locators.TradeItem1).click();
        cy.get(Locators.TradeItem2).click();
        cy.get(Locators.TradeItem3).click();
        // add button
        cy.get(Locators.AddTradeButton).click();
        
        // Log action: Select user trades
        cy.log('Selecting user trades...');
        cy.get(Locators.SelectUserTrade).click();
        cy.get(Locators.MatOption).contains('00 00 00 - Procurement & Contracting Requirements').click();
       
        // Log action: Add user trades items to selected list
        cy.log('Adding user trades items to selected list...');
        cy.get(Locators.UserTradeItem1).click();
        cy.get(Locators.UserTradeItem2).click();
        cy.get(Locators.UserTradeItem3).click();
        // add button 
        cy.get(Locators.AddUserTradeButton).click();
        
        // Log action: Assert Save button presence
        cy.log('Asserting Save button presence...');
        cy.get(Locators.SaveButton).should('exist');
        
        // Log action: Assert Cancel button presence
        cy.log('Asserting Cancel button presence...');
        cy.get(Locators.CancelButton).should('exist');
    });
});