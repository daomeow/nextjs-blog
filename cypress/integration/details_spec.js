describe('Details page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .get('a').eq(2).click()
  });

  //check URL 

  it('should display a title with that specific person\'s name', () => {
    cy.get('section > h2')
      .should('have.text', 'All About Bea!')
  });

  it('should not display a title with another family member\'s name', () => {
    cy.get('section > h2')
      .should('not.contain', 'All About Craig!')
  });
  
  it('should have a paragraph about that family memeber', () => {
    cy.get('div > p')      
      .contains('foo')
  });
});