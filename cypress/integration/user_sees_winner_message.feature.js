describe('User sees winner message', () => {
  it('shows a winner message if the user wins the game', () => {
    cy.visit('http://localhost:3000'), 
    cy.window().then(win => {
    cy.stub(win, 'prompt').returns('spock')
    cy.get('button#start').click();
    cy.get('button#weapon').click();
    cy.window().its('prompt').should('be.called');
    cy.get('button#play').click();
    cy.contains('Spock').click('left','Spock');
    cy.get('#outcome').should('contain', 'You win!')
  })
  })
})