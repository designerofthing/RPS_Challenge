describe('User makes a mistake choosing a weapon', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Selects a weapon that is not one of the correct choices', function() {
    cy.window().then(win => {
    cy.stub(win, 'prompt').returns('turnip')
    cy.get('button#start').click();
    cy.get('button#weapon').click();
    cy.window().its('prompt').should('be.called');
    cy.get('#text-weapon').should('contain', 'Who brings a knife to a gun fight? Choose again.');
  })
})
it('Mispells a weapon that is one of the correct choices', function() {
  cy.window().then(win => {
  cy.stub(win, 'prompt').returns('ROCK')
  cy.get('button#start').click();
  cy.get('button#weapon').click();
  cy.window().its('prompt').should('be.called');
  cy.get('#text-weapon').should('contain', 'Rock');
})
})
})
