describe('Checkout Functionality', () => {
  beforeEach(() => {
    cy.visit('https://creepy-bell-bottoms-crow.cyclic.app/menu');
  });

  it('should add item to cart and complete checkout', () => {
    cy.get('._cartButton_178l9_45')
      .first()
      .click({ force: true });

    cy.get('#Sauce')
      .click()

    cy.get('._quantity_1lxwy_90')
      .clear()
      .type('2');

    cy.get('._cartbtn_1lxwy_95')
      .click()

    cy.get('._counter_d6hpd_74')
      .should('contain', '1');

    cy.get('._cart_d6hpd_69')
      .click()
    
    cy.url()
      .should('include', '/cart');
    
    cy.get('._button_hg8bq_58')
      .click()
    
    cy.get('button._payButton_hg8bq_72')
      .should('not.exist')

      //Sign In
    cy.get('[href="/login"] > ._listItem_d6hpd_58')
      .click()

    cy.get('[type="text"]')
      .type('rizwan625@gmail.com')

    cy.get('[type="password"]')
      .type('rizwan')

    cy.get('.btn')
      .click()

    cy.wait(3000)

    cy.visit('https://creepy-bell-bottoms-crow.cyclic.app/cart');

    cy.get('._button_hg8bq_58')
      .click()
        
    cy.get('button._payButton_hg8bq_72')
      .click()

    cy.get(':nth-child(3) > ._input_1ooly_42')
      .type('NED University Main Campus')

    //Order Button
    cy.get('._button_1ooly_46')
      .click()

    cy.url()
      .should('include', '/orders');
  });
})