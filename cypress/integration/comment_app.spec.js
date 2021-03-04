describe('Comment ', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'nimi',
      username: 'joku',
      password: 'fsfs'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
  })
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Comments')
    cy.contains('Decision as a Service app, Osmo Leppäniemi, Tampere University 2020')
  })

  it('login form can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('login').click()
  })
  it('login fails with wrong password', function() {
    cy.contains('login').click()
    cy.get('#username').type('joku')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()

    cy.get('.error')
      .should('contain', 'wrong credentials')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'nimi logged in')
  })
  it('user can login', function () {
    cy.contains('login').click()
    cy.get('#username').type('joku')
    cy.get('#password').type('fsfs')
    cy.get('#login-button').click()
    cy.contains('nimi logged in')
  })
  describe('when logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'joku', password: 'fsfs' })
    })
    it('a new comment can be created', function() {
      cy.contains('new comment').click()
      cy.get('input').type('a comment created by cypress')
      cy.contains('save').click(  )
      cy.contains('a comment created by cypress')
    })
    describe('and a comment exists', function () {
      beforeEach(function () {
        cy.createComment({
          content: 'another comment cypress',
          important: false
        })
      })

      it('it can be made important', function () {
        cy.contains('another comment cypress')
          .contains('make important')
          .click()

        cy.contains('another comment cypress')
          .contains('make not important')
      })
    })
    describe('and several comments exist', function () {
        beforeEach(function () {
          cy.createComment({ content: 'first comment', important: false })      
          cy.createComment({ content: 'second comment', important: false })      
          cy.createComment({ content: 'third comment', important: false })    
        })
    
        it('one of those can be made important', function () {
          cy.contains('second comment')
            .contains('make important')
            .click()
    
          cy.contains('second comment')
            .contains('make not important')
        })
      })
  })
})