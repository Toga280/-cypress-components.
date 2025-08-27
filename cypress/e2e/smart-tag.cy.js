describe('Smart tag (Alpine.js)', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/pages/smart-tag.html')
  })

  it('2. Affiche le tag au survol du bouton "See more"', () => {
    cy.get('div[x-show="isActive"]').should('not.be.visible')
    cy.contains('See more').trigger('mouseover')
    cy.get('div[x-show="isActive"]').should('be.visible')
  })

  it('3. Fait disparaître le tag en sortant du survol du bouton "See more"', () => {
    cy.contains('See more').trigger('mouseover')
    cy.get('div[x-show="isActive"]').should('be.visible')
    cy.get('h1').trigger('mouseover')
    cy.get('div[x-show="isActive"]').should('not.be.visible')
  })
})
