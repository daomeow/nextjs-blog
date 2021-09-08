// import { cy, it } from "date-fns/locale";

// import { it } from "date-fns/locale";

describe('Details page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .get('.utils_list__S7_pe > :nth-child(1) > a').click()
  });

  //check URL 

  it('should display the title of the blog post', () => {
    cy.get('title').contains('When to Use Static Generation')
  });

  it('should display the blog\'s date', () => {
    cy.get('time').should('have.text', 'January 2, 2020')
  });

  it('should not display a random date', () => {
    cy.get('time').should('not.contain', 'January 24, 2020')
  });

  it('should display the blog post', () => {
    cy.get('article > :nth-child(3)').contains('You can use Static Generation for many types of pages, including:')
  });

  it('should give the user the ability to go back home', () => {
    cy.get('.layout_backToHome__1vZsp > a').should('have.text', '← Back to home')
  });
});