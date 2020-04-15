/// <reference types="Cypress" />

describe("GMAIL LOGIN FUNCTIONALITY" , function(){
    it("My Test Case", function(){
        //opeing gmail page
       var page = cy.visit("http://gmail.com/");
        // Handling exception 
        if(!page){
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('The requested URL was not found on this server.')
            done()
            return true
            // return true to make the test case fail 
          });
        }
        else{
        // Validating Gmail Site by taking the text of Logo
        cy.get('.h-c-header__product-logo-text').contains('Gmail');
        cy.wait(2000)
        // Click on Sign In Tab to open in sam ebrowser session
        cy.get('li.h-c-header__cta-li.g-mail-nav-links--mobile.link--last > a').invoke('removeAttr', 'target').click();
        // Enter Email -  Giving here the dummy gmail id
        cy.get('#identifierId').type('skamjadalixxxxx');
        // Click on Next button
        cy.get('#identifierNext > span > span').click();
        // Eneter the Password - Giving Dummy 
        cy.get('input[type="password"]').type('XXXXXXX');
        // Click on Next Button to Login
        cy.get('#identifierNext > span > span').click();
        }        
    })
})