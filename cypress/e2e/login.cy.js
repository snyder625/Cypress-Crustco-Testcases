describe('Login Functionality', () => {
    beforeEach(() => {
      cy.visit('https://creepy-bell-bottoms-crow.cyclic.app/login'); // Replace with the URL of your web app's login page
    });
  
    const validUsers = [
      { email: 'rizwan625@gmail.com', password: 'rizwan' },
      { email: 'admin@gmail.com', password: 'password' },
    ];

    const invalidUsers = [
        { email: ' ', password: 'rizwan' },
        { email: 'rizwan625@gmail.com', password: ' ' },
        { email: 'user3@example.com', password: 'password3' },
      ];
  
    it('should log in successfully with valid credentials', () => {
      validUsers.forEach(user => {
        cy.get('[type="text"]').type(user.email);
        cy.get('[type="password"]').type(user.password);
        cy.get('.btn').click({force: true});
        cy.get('._listItem_d6hpd_58').should('exist');
      });
    });
  
    it('should display an error message with invalid credentials', () => {
      invalidUsers.forEach(user => {
        cy.get('[type="text"]').type(user.email);
        cy.get('[type="password"]').type(user.password);
        cy.get('.btn').click();
        cy.get('.Toastify__toast-body').should('exist');
        cy.reload(); // Clear the form for the next iteration
      });
    });
});
  