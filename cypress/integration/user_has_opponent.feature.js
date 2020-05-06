describe('User has opponent', () => {
  it('Allows the user to play the game against opponent', () => {
  cy.get('button#play').click();
    cy.contains('Weapons').click();
    cy.contains('Rock').click('left','Rock');
    cy.get('button#play').click();
    cy.get('body').should('contain', 'Opponent')
  })
  })