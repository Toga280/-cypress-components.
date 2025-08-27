describe('Bouton scroll-to-top (Alpine.js)', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/pages/scroll-to-top.html')
  })

  it('2. Affiche le bouton "scroll-to-top" lorsqu’on scrolle vers le bas', () => {
    cy.get('div.fixed.bottom-3.right-3').should('not.be.visible')
    cy.scrollTo('bottom', { ensureScrollable: true })
    cy.get('div.fixed.bottom-3.right-3').should('be.visible')
  })

  it('3. Clique sur "scroll-to-top" => remonte en haut + bouton disparaît', () => {
    cy.scrollTo('bottom', { ensureScrollable: true })
    cy.get('div.fixed.bottom-3.right-3').should('be.visible')
    cy.get('div.fixed.bottom-3.right-3 button').click()
    cy.window().its('scrollY').should('equal', 0)
    cy.get('div.fixed.bottom-3.right-3').should('not.be.visible')
  })
})
