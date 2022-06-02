/// <reference types="Cypress" />

import HomePageElements from "../../support/pageObjects/HomePageElements"
import HeaderElements from "../../support/pageObjects/HeaderElements"
import ResearchAndReviews from "../../support/pageObjects/ResearchAndReviews"


//const headerElement = new HeaderElements() //instantiate the HeaderElement class
//const signInPage = new SignInPageElements()  //instantiate the SignInPageElements

const headerElement = new HeaderElements()
const researchAndReviews = new ResearchAndReviews()

describe('Research By Type Test Case', function(){

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


    it('Validate Selection By Type Page', function() {

        headerElement.getSignIn().click()
        cy.login(this.data.email,this.data.password)
        headerElement.getResearchAndReviews().click()
        researchAndReviews.getModelTypes().click()
        researchAndReviews.getModelTypes().should('have.attr','aria-selected','true')
        researchAndReviews.getByMakeOption().should('have.attr','aria-selected','false')
        researchAndReviews.getByModelOption().should('have.attr','aria-selected','false')
        researchAndReviews.getPageTitle().should('contain','Car Research')
        researchAndReviews.getUrl().should('contain','research')
        researchAndReviews.getSedanCars().should('have.length','12')


     


    })

    it('Validate Single Car Selection', function() {
        headerElement.getSignIn().click()
        cy.login(this.data.email,this.data.password)
        headerElement.getResearchAndReviews().click()

        researchAndReviews.getSearchByType().click({force:true})
        researchAndReviews.getSedanCars().eq(0).click()
        researchAndReviews.getCarResults().should('have.length','20')
        researchAndReviews.getCarMoreDetails().should('contain','Model details')
        researchAndReviews.getCarMoreDetails().should('contain','Shop now')
        researchAndReviews.getSedanCheckbox().should('be.checked')


    })


    
    

})