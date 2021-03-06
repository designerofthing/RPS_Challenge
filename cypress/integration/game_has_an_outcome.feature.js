describe('Game has an outcome', () => {
  it('Allows the user to play the game against opponent and have an outcome', () => {
    cy.visit('http://localhost:3000'), 
    cy.window().then(win => {
    cy.stub(win, 'prompt').returns('rock')
    cy.get('button#start').click();
    cy.get('button#weapon').click();
    cy.window().its('prompt').should('be.called');
    cy.get('button#play').click();
    cy.contains('Rock').click('left','Rock');
    cy.get('button#play').click();
    cy.get('#outcome').should('contain', 'You')
  })
  })
})