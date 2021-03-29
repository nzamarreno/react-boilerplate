describe('Homepage', () => {
  beforeEach(function () {
    cy.visit('http://localhost:9000');
    cy.fixture('research').then((data) => {
      this.data = data;
    });
  });

  it('Enter research in input', function () {
    // Act
    cy.get('button')
      .should('contain', 'Search!');

    // Assert
    cy.get('.input')
      .type(this.data.search)
      .should('have.value', this.data.search);
  });

  it('Enter research and navigate to search page', () => {
    // Arrange
    const SEARCH = 'beef';

    // Act
    cy.get('.input')
      .type(SEARCH);
    cy.get('button').click();
    cy.get('.search', { timeout: 3000 }).should('be.visible');

    // Assert
    cy.url().should('include', `/search/${SEARCH}`);
    cy.get('.search-panel__term').should('contain', SEARCH);
  });
});
