describe('User can choose a weapon', () => {
  it('Selects a weapon from the menu', function() {
    cy.visit('http://localhost:3000'), 
    cy.window().then(win => {
    cy.stub(win, 'prompt').returns('rock')
    cy.get('button#start').click();
    cy.get('button#weapon').click();
    cy.window().its('prompt').should('be.called');
    cy.get('#text-weapon').should('contain', 'Rock');
  })
})
})
