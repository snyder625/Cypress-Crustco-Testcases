import 'cypress-file-upload';

describe('Add Product Feature', () => {
    beforeEach(() => {
      cy.visit('https://creepy-bell-bottoms-crow.cyclic.app');
    });
  
    const productData = {
      image: 'side.jpg',
      title: 'Breadsticks',
      category: 'side',
      description: 'Made from our fresh dough. Shaped into breadsticks and baked to a golden brown. Served with Ranch sauce ',
      prices: [349, 349, 349],
      extraItems: [
        { name: 'Ketchup', price: 0 },
        { name: 'Special Garlic Sauce', price: 69 }
      ],
    };
  
    it('should add a product with all details', () => {
        cy.get('[href="/login"] > ._listItem_d6hpd_58').click();
        cy.get('[type="text"]').type('rizwan625@gmail.com');
        cy.get('[type="password"]').type('rizwan');
        cy.get('.btn').click();
        cy.wait(3000)
        .then(() => {
          cy.visit('https://creepy-bell-bottoms-crow.cyclic.app/admin');
          cy.get('._sidebar_rbo01_7 > ul > :nth-child(2)')
            .click();

          cy.get('._mainAddButton_3ch2l_39').click();

          cy.get(':nth-child(3) > input').attachFile({
            filePath: productData.image,
            mimeType: 'image/jpg',
            });

          cy.get(':nth-child(4) > ._input_3ch2l_61')
            .type(productData.title);

          cy.get(':nth-child(5) > ._input_3ch2l_61')
            .type(productData.category);

          cy.get('textarea')
            .type(productData.description);

          cy.get('[placeholder="Small"]')
            .type(productData.prices[0]);
          cy.get('[placeholder="Medium"]')
            .type(productData.prices[1]);
          cy.get('[placeholder="Large"]')
            .type(productData.prices[2]);

          productData.extraItems.forEach(item=> {
            cy.get('._extra_3ch2l_76 > [type="text"]').clear()
              .type(item.name);
            cy.get('._extra_3ch2l_76 > [type="number"]').clear()
              .type(item.price);

            cy.get('._extraButton_3ch2l_98')
              .click();

            })

            cy.get('._addButton_3ch2l_106').click();
            cy.wait(1000);

            cy.get('._addButton_3ch2l_106').should('not.exist')
        });  
    });
});
  