describe('Details page', () => {
  beforeEach(() => {
    cy.visit('https://nextjs-blog-roan-seven.vercel.app')
      .get('a').eq(2).click()
  });

  it('should yield the current URL', () => {
    cy.url().should('include', '/family/Bea')
  });

  it('should not have path to another blog', () => {
    cy.url().should('not.contain', '/family/Patti')
  });

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