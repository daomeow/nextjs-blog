describe('Home page', () => {
  beforeEach(() => {
    cy.visit('https://nextjs-blog-roan-seven.vercel.app/');
  });

  it('should display the blog\'s owner\'s name and profile picture', () => {
    cy.get('h1').contains('Melanie')
      .get('img').eq(0).should('be.visible', 'have.attr', 'src', 'profile')
  });

  it('should not display a random person\'s name', () => {
    cy.get('h1').should('not.contain', 'Ashish')
  });

  it('should have an introduction, blog and family memeber section', () => {
    cy.get('.utils_aboutMe__1Q4Mc').contains('I am a first-generation American')
      .get('h2').eq(0).contains('Blog')
      .get('h2').eq(1).contains('Family Members')
  });

  it('should display the blog\'s title and date', () => {
    cy.get('h2').eq(1).get('a').eq(0).contains('When to Use Static Generation v.s. Server-side Rendering')
      .get('h2').eq(1).get('time').eq(0).contains('January 2, 2020')
      .get('h2').eq(1).get('a').eq(1).contains('Two Forms of Pre-rendering')
      .get('h2').eq(1).get('time').eq(1).contains('January 1, 2020')
  });

  it('should display all five family members', () => {
    cy.get('section').eq(2).find('li').should('be.visible', 'have.length', 5)
      .get('a').eq(2).contains('Bea')
      .get('a').eq(3).contains('Charles')
      .get('a').eq(4).contains('Craig')
      .get('a').eq(5).contains('Patti')
      .get('a').eq(6).contains('Rebecca')
  });

  it('should display an error page for an invalid path', () => {
    cy.visit('https://nextjs-blog-roan-seven.vercel.app/gloo', {failOnStatusCode: false}).get('body').contains('404')
  });
});