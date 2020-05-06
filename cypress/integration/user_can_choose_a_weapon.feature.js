describe('User can choose a weapon', () => {
    it('Selects a weapon from the menu', () => {
    cy.visit('/');
    cy.get('button#start').click();
    cy.contains('Weapons').click();
    cy.contains('#rock').click('left','Rock');
    cy.get('img').should('contain', '#rock')
  })
})