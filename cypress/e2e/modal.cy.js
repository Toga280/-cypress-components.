describe('Test ouverture modale', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/pages/modal.html')
  })

  it('2. Tester l’ouverture de la fenêtre modale au clic sur Display', () => {
    cy.get('div[x-show="isModalVisible"]').should('not.be.visible')
    cy.contains('button', 'Display').click()
    cy.get('div[x-show="isModalVisible"]').should('be.visible')
  })

  it('3. Tester la fermeture de la fenêtre modale au clic en dehors de la modale', () => {
    cy.contains('button', 'Display').click()
    cy.get('div[x-show="isModalVisible"]').should('be.visible')
    cy.get('div[x-show="isModalVisible"]').click('topLeft')
    cy.get('div[x-show="isModalVisible"]').should('not.be.visible')
  })

  it('4. Tester que la fenêtre modale contient un <h2> contenant "Lorem Ipsum"', () => {
    cy.contains('button', 'Display').click()
    cy.get('div[x-show="isModalVisible"]').should('be.visible')
    cy.get('div[x-show="isModalVisible"] h2').should(
      'contain.text',
      'Lorem Ipsum'
    )
  })
})
