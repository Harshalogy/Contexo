describe('Create Project', () => {
    beforeEach(() => {
        cy.viewport(1500, 720);
        cy.fixture('user.json').then((user) => {
            cy.login(user.email, user.password); // Assuming cy.login is a custom command
        });
    });

    it('Create a new project', () => {
        cy.wait(10000);

        // Log action: Open the menu
        cy.log('Opening the menu...');
        cy.get('.mat-button-wrapper > .mat-icon').click();

        // Log action: Click on Project menu
        cy.log('Clicking on Project menu...');
        cy.get(':nth-child(4) > .mat-list-item-content > .mat-list-text > .mat-line > .vertical-align-title').click();

        cy.wait(5000);

        // Log action: Click on Add Project button
        cy.log('Clicking on Add Project button...');
        cy.get('[fxflex="40%"] > .mat-focus-indicator').click();

        // Generate and log a random project name
        const randomProjectName = `Project_${Math.random().toString(36).substr(2, 8)}`;
        cy.log(`Generated Project Name: ${randomProjectName}`);

        // Log action: Enter project name
        cy.log('Entering project name...');
        cy.get('#mat-input-16').type(randomProjectName);

        // Log action: Select "Commercial" from dropdown
        cy.log('Selecting "Commercial" from the dropdown...');
        cy.get('#mat-select-value-11').click();
        cy.get('mat-option').contains('Commercial').click();
        cy.get('#mat-select-value-11').should('contain', 'Commercial');

        // Log action: Enter project description
        cy.log('Entering project description...');
        cy.get('#mat-input-17').type('Test Project');

        // Log action: Choose regional office
        cy.log('Choosing regional office...');
        cy.get('#mat-select-value-13 > .mat-select-placeholder').click();
        cy.get('.mat-option-text').click();

        // Log action: Choose owner
        cy.log('Choosing owner...');
        cy.get('#mat-select-14 > .mat-select-trigger > .mat-select-arrow-wrapper').click();
        cy.get('mat-option').contains('Max Builders').click();

        // Log action: Choose owner contact
        cy.log('Choosing owner contact...');
        cy.get('#mat-select-16 > .mat-select-trigger > .mat-select-arrow-wrapper').click();
        cy.get('mat-option').contains('James Smith').click();

        // Log action: Choose lead estimator
        cy.log('Choosing lead estimator...');
        cy.get('#mat-select-18 > .mat-select-trigger > .mat-select-arrow-wrapper').click();
        cy.get('mat-option').contains('Jane Doe').click();

        // Log action: Enter bid amount
        cy.log('Entering bid amount...');
        cy.get('#mat-input-18').type('500');

        // Log action: Enter gross square footage
        cy.log('Entering gross square footage...');
        cy.get('#mat-input-19').type('300');

        // Log action: Enter bid number
        cy.log('Entering bid number...');
        cy.get('#mat-input-20').type('12345');

        // Log action: Enter bid due date
        cy.log('Entering bid due date...');
        cy.get('#mat-input-21').type('30/12/2025');

        // Log action: Enter submission date
        cy.log('Entering submission date...');
        cy.get('#mat-input-22').type('30/12/2025');

        // Log action: Enter final contract execution date
        cy.log('Entering final contract execution date...');
        cy.get('#mat-input-23').type('30/12/2025');

        // Log action: Enter award amount
        cy.log('Entering award amount...');
        cy.get('#mat-input-24').type('500');

        // Log action: Enter address line 1
        cy.log('Entering address line 1...');
        cy.get('#mat-input-25').type('Line1');

        // Log action: Enter address line 2
        cy.log('Entering address line 2...');
        cy.get('#mat-input-26').type('Line2');
        
        // Log action: Enter city
        cy.log('Entering city...');
        cy.get('#mat-input-27').type('New City');

        // Log action: Select state
        cy.log('Selecting state...');
        cy.get('#mat-select-value-21 > .mat-select-placeholder').click();
        cy.get('mat-option').contains('Alabama - AL').click();

        // Log action: Enter ZIP code
        cy.log('Entering ZIP code...');
        cy.get('#mat-input-28').type('010203');

        // Log action: Enter notes
        cy.log('Entering notes...');
        cy.get('#mat-input-29').type('Test Note');

        // Log action: Select trades
        cy.log('Selecting trades...');
        cy.get('#mat-select-value-25 > .mat-select-placeholder').click();
        cy.get('mat-option').contains('02 00 00 - Existing Conditions').click();
        
         // Log action: Add items from available to selected list
         cy.log('Adding items to selected list...');
        cy.get('[style="margin-top: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(1)').click();
        cy.get('[style="margin-top: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(2)').click();
        cy.get('[style="margin-top: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(3)').click();
        // add button
        cy.get('[style="margin-top: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .btn-block').click();
        
        // Log action: Select user trades
        cy.log('Selecting user trades...');
        cy.get('#mat-select-value-23').click();
        cy.get('mat-option').contains('00 00 00 - Procurement & Contracting Requirements').click();
       
        // Log action: Add user trades items to selected list
        cy.log('Adding user trades items to selected list...');
        cy.get('[style="margin-top: 10px; margin-bottom: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(1)').click();
        cy.get('[style="margin-top: 10px; margin-bottom: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(2)').click();
        cy.get('[style="margin-top: 10px; margin-bottom: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(3)').click();
        // add button 
        cy.get('[style="margin-top: 10px; margin-bottom: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .btn-block').click();
        
        // Log action: Assert Save button presence
        cy.log('Asserting Save button presence...');
        cy.get('[type="submit"]').should('exist');
        
        // Log action: Assert Cancel button presence
        cy.log('Asserting Cancel button presence...');
        cy.get('[fxlayoutalign="flex-end"] > [tabindex="0"]').should('exist');
    });
});