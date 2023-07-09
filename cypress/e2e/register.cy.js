describe('Register Functionality', () => {
    beforeEach(() => {
      cy.visit('https://creepy-bell-bottoms-crow.cyclic.app/register'); // Replace with the URL of your web app's registration page
    });
  
    const validUsers = [
      { name: 'John Doe', email: 'johndoe@example.com', password: 'password123' },
      { name: 'Jane Smith', email: 'janesmith@example.com', password: 'qwerty456' },
    ];

    const invalidUsers = [
        { name: ' ', email: 'johndoe@example.com', password: 'password123' },
        { name: 'Jane Smith', email: 'janesmith@example.com', password: ' ' },
        { name: 'Jane Smith', email: 'janesmith', password: 'password234' },
        { name: 'Jane Smith', email: ' ', password: 'qwerty456' },
    ];
  
    it('should register multiple users successfully', () => {
      validUsers.forEach(user => {
        cy.get('[type="text"]').type(user.name);
        cy.get('[type="email"]').type(user.email);
        cy.get('[placeholder="Password"]').type(user.password);
        cy.get('.btn-reg').click();
        cy.wait(3000);
        cy.url().should('eq', 'https://creepy-bell-bottoms-crow.cyclic.app/cart');
        cy.visit('https://creepy-bell-bottoms-crow.cyclic.app/register');
      });
    });
    
    it('should not register any user', () => {
        invalidUsers.forEach(user => {
          cy.get('[type="text"]').type(user.name);
          cy.get('[type="email"]').type(user.email);
          cy.get('[placeholder="Password"]').type(user.password);
          cy.get('.btn-reg').click();
          cy.url().should('not.eq', 'https://creepy-bell-bottoms-crow.cyclic.app/cart');
          cy.visit('https://creepy-bell-bottoms-crow.cyclic.app/register');
        });
    });
  });
  