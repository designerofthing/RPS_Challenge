describe('User sees a loser message', () => {
  before (() => {
    let opponent = 'paper';
  })
  it('shows a loser message if the user loses the game', () => {
    cy.visit('http://localhost:3000'), 
    cy.window().then(win => {
    cy.stub(win, 'prompt').returns('rock')
    cy.get('button#start').click();
    cy.get('button#weapon').click();
    cy.window().its('prompt').should('be.called');
    cy.get('button#play').click();
    cy.contains('Rock').click('left','Rock');
    cy.get('#outcome').should('contain', 'You lose!')
  })
  })
})