describe('Todolist (Alpine.js)', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/pages/todolist.html')
  })

  it('Ajouter 4 todos, supprimer la deuxième, vérifier qu’il reste 3 todos', () => {
    const todos = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4']

    todos.forEach((todo) => {
      cy.get('input[x-model="newTodo"]').type(todo)
      cy.get('button[type="submit"]').click()
    })

    cy.get('div[x-text]').should('have.length', 4)
    cy.get('div[x-text]').eq(0).should('contain.text', 'Todo 1')
    cy.get('div[x-text]').eq(1).should('contain.text', 'Todo 2')
    cy.get('div[x-text]').eq(2).should('contain.text', 'Todo 3')
    cy.get('div[x-text]').eq(3).should('contain.text', 'Todo 4')

    cy.get('button > i.fas.fa-times').eq(1).click()

    cy.get('div[x-text]').should('have.length', 3)
    cy.get('div[x-text]').eq(0).should('contain.text', 'Todo 1')
    cy.get('div[x-text]').eq(1).should('contain.text', 'Todo 3')
    cy.get('div[x-text]').eq(2).should('contain.text', 'Todo 4')
  })
})
