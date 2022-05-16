/// <reference types="Cypress" />

import HeaderElement from "../pageObjects/HeaderElement"
import SignInPageElements from "../pageObjects/SignInPageElements"

describe('Sign In Test Suite', function(){

    

    before(function() {

        cy.visit(Cypress.env('url'));


    })

    before(function() {

        cy.fixture('example').then(function(data)
        {
            this.data = data // data has to be initialized to be available in this whole script, if not 
            //the data will be available only in this block.
        })


    })


    it('Login in with valid user input', function() {

        const headerElement = new HeaderElement() //instantiate the HeaderElement class
        const signInPage = new SignInPageElements()  //instantiate the SignInPageElements

        
        headerElement.getSignIn().click()
        //assert that we are in the login page
        //assert that login page contains the email and password box
        
        signInPage.getEmailBox().should('include.text','Email') ///should('have.class','.sds-label','Email')
        
        signInPage.getPasswordBox().should('include.text','Password')
        signInPage.getEmailBox().type(this.data.email)
        signInPage.getPasswordBox().type(this.data.password)
        signInPage.getSignInbutton().click()
        signInPage.getUserAreaName().should('include.text',this.data.name)

    })
   
    

})