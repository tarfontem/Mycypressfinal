/// <reference types="Cypress" />

import HomePageElements from "../../support/pageObjects/HomePageElements"
import HeaderElements from "../../support/pageObjects/HeaderElements"
import ResearchAndReviews from "../../support/pageObjects/ResearchAndReviews"


//const headerElement = new HeaderElements() //instantiate the HeaderElement class
//const signInPage = new SignInPageElements()  //instantiate the SignInPageElements

const headerElement = new HeaderElements()
const researchAndReviews = new ResearchAndReviews()

describe('Research By Type Test Case', function(){

    

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


    it('Validate Selection By Model Page', function() {

        headerElement.getSignIn().click()
        cy.login(this.data.email,this.data.password)
        headerElement.getResearchAndReviews().click()
        researchAndReviews.getModelTypes().click()
        researchAndReviews.getTitle().should('contain','Car Research')
        researchAndReviews.getSearchByType().should('have.length','12')


    })

    it('Validate Single Car Selection', function() {

        researchAndReviews.getSearchByType().eq(0).click()
        researchAndReviews.getSedanCars().should('have.length',20)
        researchAndReviews.getCarMoreDetails().should('contain','Model details')
        researchAndReviews.getCarMoreDetails().should('contain','Shop now')
        researchAndReviews.getSedanCheckbox().should('be.checked')


    })


    
    

})