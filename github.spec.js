context('Cypress github login',() => {
    

    it('signup to signout',() =>{
      cy.screenshot()
      cy.visit('https://github.com/')
      cy.contains('Sign up').click()
      cy.go('back')
      cy.contains('Username').type('sindhu0000000')
      cy.contains('Email').type('adavallisunitha@gmail.com')
      cy.contains('Password').type('sertoo#%&1')
      cy.wait(2000)
      cy.contains('Sign up for GitHub').click()
    
      cy.visit('https://github.com/')
      cy.get('button').first().click()
      cy.screenshot()
      cy.contains('Sign in').click()
      cy.contains('Username').type('SindhuB25')
      cy.contains('Password').type('Github#21')
      //cy.get('.btn').click()
      cy.get('form').submit()
      
      cy.wait(2000)
      cy.get('form').first('js-site-search-form').type('react').submit()
      
      cy.get('.dropdown-caret').first().click()
      
      cy.wait(2000)
      cy.contains('New repository').click()
      cy.wait(2000)
      cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar').click()
      cy.get('.dropdown-item').contains('Your profile').click()
      cy.screenshot()
      cy.wait(2000)
      cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar').click()
      cy.wait(2000)
      cy.get('[href="/settings/profile"]').click()
      cy.screenshot()
      cy.contains('Bio').type('I am a Automation Tester')
      cy.contains('Update profile').click()
      cy.wait(2000)
      cy.screenshot()
      cy.get('.js-feature-preview-indicator-container > .Header-link > .avatar').click()
      cy.wait(2000)
      cy.contains('Sign out').click()
      cy.screenshot()
    
    })
  
    
})

