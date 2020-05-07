describe('User has opponent', () => {
  it('Allows the user to play the game against opponent', () => {
    cy.visit('http://localhost:3000'), 
    cy.window().then(win => {
    cy.stub(win, 'prompt').returns('rock')
    cy.get('button#start').click();
    cy.get('button#weapon').click();
    cy.window().its('prompt').should('be.called');
    cy.get('button#play').click();
    cy.contains('Rock').click('left','Rock');
    cy.get('button#play').click();
    cy.get('#opponent-weapon').should('contain', 'Opponent')
  })
  })
})