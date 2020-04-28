describe('User can choose a weapon', () => {
    it('Selects a weapon from the menu', () => {
    cy.visit('/');
    cy.get('button#start').click();
    cy.contains('Show Weapons').click();
    cy.contains('Rock').click('left','Rock');
    cy.get('body').should('contain', 'Your weapon of choice is Rock');
    cy.get('img').should('contain', 'rock')
  })
})