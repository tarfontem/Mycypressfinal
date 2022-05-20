/// <reference types="Cypress" />

import HeaderElements from "../../support/pageObjects/HeaderElements"
import SignInPageElements from "../../support/pageObjects/SignInPageElements"
import HomePageElements from "../../support/pageObjects/HomePageElements"

describe('First Test Suite', function(){

    beforeEach(function() {

        cy.fixture('example').then(function(data)
        {
            this.data = data // data has to be initialized to be available in this whole script, if not 
            //the data will be available only in this block.
        })


    })
    


    it('My First Test Case', function() {

        const headerElement = new HeaderElements() //instantiate the HeaderElement class
        const signInPage = new SignInPageElements()  //instantiate the SignInPageElements
        const homepage = new HomePageElements()

        cy.visit(Cypress.env('url'));
        

        cy.login(this.data.email,this.data.password)
        cy.searchByMake('New cars','Jeep','All models','$30,000','20 miles',' ')
        homepage.getPageTitle().should('include','Jeep')//assure that the page title contains the make searched
        homepage.getMakeResult().find('[data-linkname=vehicle-listing]').first().nextAll().should('include','Jeep')
        



        
    })
   
    

})