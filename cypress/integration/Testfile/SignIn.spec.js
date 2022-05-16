/// <reference types="Cypress" />

import HeaderElement from "../pageObjects/HeaderElement"
import SignInPageElements from "../pageObjects/SignInPageElements"

describe('Sign In Test Suite', function(){

    before(function() {

        cy.visit(Cypress.env('url'));


    })


    it('Login in with valid user input', function() {

        const headerElement = new HeaderElement() //instantiate the HeaderElement class
        const signInPage = new SignInPageElements()  //instantiate the SignInPageElements

        
        headerElement.getSignIn().click()
        //assert that we are in the login page
        //assert that login page contains the email and password box
        //assert that login page contains, login with facebook, login with google and login with apple
        signInPage.getEmailBox().contains('.sds-label').should('include.text','Email') ///should('have.class','.sds-label','Email')
        signInPage.getPasswordBox().should('include','Password')
        signInPage.getSignInWithFacebook().should('include','Sign in with Facebook')
        signInPage.getSignInWithGoogle().should('include','Sign in with Google')
        signInPage.getSignInWithApple().should('include','Sign in with Apple')



        

        



        
    })
   
    

})