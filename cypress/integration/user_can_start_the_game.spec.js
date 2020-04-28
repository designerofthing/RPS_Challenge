describe('User can start the game', () => {
  it('Allows the user to start the RPS game', () => {
  cy.visit('/');
  cy.get('button#start').click();
  cy.get('body').should('contain', 'Please choose your weapon, rock, paper or scissors')
  })
  })