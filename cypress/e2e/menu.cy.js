describe('Menu Page Functionality', () => {
    beforeEach(() => {
        cy.visit('https://creepy-bell-bottoms-crow.cyclic.app/menu'); // Replace with the URL of your web app's menu page
    });

    it('should filter menu items based on search, price range, and categories', () => {
        // Perform search
        cy.get('._searchBox_1c69a_195').type('Chicken');
        cy.wait(5000);
        cy.get('._cartButton_178l9_45').should('have.length', 3);

        // Select categories
        cy.get('._searchBox_1c69a_195 > input').clear();
        cy.get(':nth-child(2) > input').click();
        cy.wait(3000);
        cy.get('._cartButton_178l9_45').should('have.length', 11);

        cy.get(':nth-child(5) > :nth-child(3) > input').click();
        cy.wait(1000);
        cy.get('._cartButton_178l9_45').should('have.length', 4);

        cy.get(':nth-child(5) > :nth-child(4) > input').click();
        cy.wait(1000);
        cy.get('._cartButton_178l9_45').should('have.length', 2);

        cy.get(':nth-child(5) > input').click();
        cy.wait(1000);
        cy.get('._cartButton_178l9_45').should('have.length', 2);

        cy.get(':nth-child(6) > input').click();
        cy.wait(1000);
        cy.get('._cartButton_178l9_45').should('have.length', 1);
    });
});
