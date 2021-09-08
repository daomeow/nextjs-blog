describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should display the blog\'s owner\'s name and profile picture', () => {
    cy.get('h1').contains('Melanie')
    cy.get('img').should('be.visible', 'have.attr', 'src', 'profile')
  });

  it('should have an introduction, blog and family memeber section', () => {
    cy.get('h2').eq(0).contains('Introduction')
    cy.get('h2').eq(1).contains('Blog')
    cy.get('h2').eq(2).contains('Family Members')
  });

  it.only('should display the blog\'s title and date', () => {
    cy.get('h2').eq(1).get('a').eq(0).contains('When to Use Static Generation v.s. Server-side Rendering')
    cy.get('h2').eq(1).get('time').eq(0).contains('January 2, 2020')
    cy.get('h2').eq(1).get('a').eq(1).contains('Two Forms of Pre-rendering')
    cy.get('h2').eq(1).get('time').eq(1).contains('January 1, 2020')
  });


});