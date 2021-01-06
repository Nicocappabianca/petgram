describe('Petgram', function () { 
  it('Check if app works', function(){ 
    cy.visit('/')
  })

  it('Navigate categories and view photos', function(){ 
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Use navbar for navigate to home', function(){ 
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('eq', 'https://petgram-navy-alpha.vercel.app/')
  })

  it('Not registered user redirect to signUp form', function(){ 
    cy.visit('/favs')
    cy.get('form')
  })
})