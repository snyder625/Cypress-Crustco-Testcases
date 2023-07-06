describe('Order Tracking', () => {
    const values = [' ', '64a2ac83bd48a84685db5f22', '64a2ac88a84685db5f22'];
  
    beforeEach(() => {
      cy.visit('https://creepy-bell-bottoms-crow.cyclic.app/track');
    });
  
    values.forEach((value) => {
      it(`should test functionality for value ${value}`, () => {
        cy.get('input').type(value);
        cy.get('button').click();
        if (value.length !== 24 ) {
            cy.url()
            .should('not.include', '/orders');
        } else {
            cy.url()
            .should('include', '/orders')
        }
      });
    });
  });
  