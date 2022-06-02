/// <reference types="Cypress" />

import HomePageElements from "../../support/pageObjects/HomePageElements"
import HeaderElements from "../../support/pageObjects/HeaderElements"
import ResearchAndReviews from "../../support/pageObjects/ResearchAndReviews"


//const headerElement = new HeaderElements() //instantiate the HeaderElement class
//const signInPage = new SignInPageElements()  //instantiate the SignInPageElements

const headerElement = new HeaderElements()
const researchAndReviews = new ResearchAndReviews()

describe('Research By Make Test Case', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    

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


    it('Validate Selection By Make Page', function() {

        headerElement.getSignIn().click({force:true})
        cy.login(this.data.email,this.data.password)
        headerElement.getResearchAndReviews().click({force:true})

        researchAndReviews.getByMakeOption().click({force:true})
        researchAndReviews.getPageTitle().should('contain','Car Research')
        researchAndReviews.getPopularcars().should('have.length','110')




    })

    it('Validate Single Car Selection My Make', function() {

        researchAndReviews.getPopularcars().eq(0).click({force: true})
        researchAndReviews.getAcura().click({force: true})
        researchAndReviews.getPageTitle().should('contain','Sedans - Pricing')
        researchAndReviews.getMoreDetailsLinks().should('contain','Model details')
        researchAndReviews.getShopNowLinks().should('contain','Shop now')

       


    })


    
    

})