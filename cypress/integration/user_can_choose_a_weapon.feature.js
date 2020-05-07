describe('User can choose a weapon', () => {
    it('Selects a weapon from the menu', () => {
    cy.visit('/');
    cy.get('button#start').click();
    cy.contains('Weapon').click();
    cy.contains('Prompt').type('rock');
    cy.get('p').should('contain', '#rock')
  })
})