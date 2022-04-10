describe('groundups-react: GroundupsReact component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=groundupsreact--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to GroundupsReact!');
    });
});
