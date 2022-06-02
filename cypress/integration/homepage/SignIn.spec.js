/// <reference types="Cypress" />

import HeaderElements from "../../support/pageObjects/HeaderElements"
import SignInPageElements from "../../support/pageObjects/SignInPageElements"

const headerElement = new HeaderElements() //instantiate the HeaderElement class
const signInPage = new SignInPageElements()  //instantiate the SignInPageElements

describe('Sign In Test Suite', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    

    beforeEach(function() {

        cy.visit(Cypress.env('url'));
        

    })

    beforeEach(function() {

        cy.fixture('example').then(function(data)
        {
            this.data = data // data has to be initialized to be available in this whole script, if not 
            //the data will be available only in this block.
        })


    })


    it('Login in with valid user input And SignOut', function() {




        
        headerElement.getSignIn().click()
        //assert that we are in the login page
        //assert that login page contains the email and password box
        
       
        signInPage.getEmailBox().type(this.data.email)
        signInPage.getPasswordBox().type(this.data.password)
        signInPage.getSignInbutton().click()
        signInPage.getUserAreaName().should('include.text',this.data.name)
        signInPage.getPageUrl().should('include','cars.com')
        signInPage.getSignOutButton().should('contain','Sign out')
        signInPage.getSignOutButton().first().click({ force: true })
        cy.contains(this.data.name).should('not.exist')




    })
   
    it('Login in with invalid username and password', function() { 
        headerElement.getSignIn().click()
        signInPage.getEmailBox().type(this.data.email1)
        signInPage.getPasswordBox().type(this.data.password1)
        signInPage.getSignInbutton().click()
        signInPage.getWrongNotification().should('include.text','We were unable to sign you in')
        

    })

    it('Login in with valid username and invalid password', function() { 
        headerElement.getSignIn().click()
        signInPage.getEmailBox().type(this.data.email)
        signInPage.getPasswordBox().type(this.data.password1)
        signInPage.getSignInbutton().click()
        signInPage.getWrongNotification().should('include.text','We were unable to sign you in')

    })

    it('Verify Login Page Options', function() { 
        headerElement.getSignIn().click()
        signInPage.getEmailBox().should('include.text','Email') ///should('have.class','.sds-label','Email')
        signInPage.getPasswordBox().should('include.text','Password')
        signInPage.getPageUrl().should('include','signin')
        signInPage.getSignInWithFacebook().invoke('attr', 'href').should('eq', '/signin/fb_go/')
        signInPage.getSignInWithGoogle().invoke('attr', 'href').should('eq', '/signin/google_go/')
        signInPage.getSignInWithApple().invoke('attr', 'href').should('eq', '/signin/apple_go/')
        

    })
    
    

})