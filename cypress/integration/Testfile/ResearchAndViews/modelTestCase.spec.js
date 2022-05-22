/// <reference types="Cypress" />

import HomePageElements from "../../support/pageObjects/HomePageElements"
import HeaderElements from "../../support/pageObjects/HeaderElements"
import ResearchAndReviews from "../../support/pageObjects/ResearchAndReviews"


//const headerElement = new HeaderElements() //instantiate the HeaderElement class
//const signInPage = new SignInPageElements()  //instantiate the SignInPageElements

const headerElement = new HeaderElements()
const researchAndReviews = new ResearchAndReviews()

describe('Model Test Case Research And Reviews', function(){

    

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
 /* 
    it('By Model Home Scenario Default Mode', function() {

        
        headerElement.getSignIn().click()
        cy.login(this.data.email,this.data.password)
        headerElement.getResearchAndReviews().click()
        researchAndReviews.getByModelOption().click()
        researchAndReviews.getMakeBox().should('have.attr','name', 'make')
        researchAndReviews.getModelBox().should('contain','All models')
        researchAndReviews.getYearsBox().should('contain','All years')
        researchAndReviews.getResearchButton().should('contain','Research')
        researchAndReviews.getTitle().should('contain','Car Research, Specs & Compare New Cars')

    })
    */

    it('Validate Selection By Model', function() {

        headerElement.getSignIn().click()
        cy.login(this.data.email,this.data.password)
        headerElement.getResearchAndReviews().click()
        
        researchAndReviews.getByModelOption().click()
        researchAndReviews.getMakeBox().select('Jeep')
        researchAndReviews.getModelBox().select('Wrangler')
        researchAndReviews.getYearsBox().select('2020')
        researchAndReviews.getResearchButton().click({force: true})
        researchAndReviews.getHeaderLine().should('contain','2020 Jeep Wrangler')
        researchAndReviews.getViewLocalInventory().should('contain','View local inventory')
        .and('have.attr','href')
        researchAndReviews.getWriteReview().should('contain','Write a review')
        .and('have.attr','href','/research/jeep-wrangler-2020/write-a-review/')
        researchAndReviews.getTitle().should('contain','2020 Jeep Wrangler Specs')

        

    })

    it('Inspect Review Page', function() {

        
        researchAndReviews.getWriteReview().click()
        researchAndReviews.getTitle().should('contain','Cars.com')
        researchAndReviews.getAllFieldsRequired().should('contain','All fields are required')
        researchAndReviews.getOverAllRating().should('have.length','5')
        researchAndReviews.getComfortRating().should('have.length','5')
        researchAndReviews.getInteriorDesignRating().should('have.length','5')
        researchAndReviews.getPerformanceRating().should('have.length','5')
        researchAndReviews.getValueforMoneyRating().should('have.length','5')
        researchAndReviews.getStyleExteriorRating().should('have.length','5')
        researchAndReviews.getReliabilityRating().should('have.length','5')
        researchAndReviews.getYourRecommendation().should('have.length','2')
        researchAndReviews.getDescribebox().should('contain','Your review')
        researchAndReviews.getVehicleReviewFormTitle().should('contain','Your review headline')
        researchAndReviews.getStateOfPurchase().should('have.length','2').and('not.be.checked')
        researchAndReviews.getPrimaryUse().should('have.length','3').and('not.be.checked')
        researchAndReviews.getOwnerOrFormer().should('have.length','2').and('not.be.checked')
        researchAndReviews.getDisplayNameBox().should('contain','Your display name').and('have.length','1')
        researchAndReviews.getDisplayLocationBox().should('contain','Your city, state')
        researchAndReviews.getSubmitButton().should('contain','Submit review')



        

    })

    it('Submit Error Without Filling Any Field', function() {
        cy.wait(4000)
        researchAndReviews.getOverAllRating().eq(1).click({force: true})
        researchAndReviews.getComfortRating().eq(2).click({force: true})
        researchAndReviews.getInteriorDesignRating().eq(3).click({force: true})
        researchAndReviews.getPerformanceRating().eq(4).click({force: true})
        researchAndReviews.getValueforMoneyRating().eq(5).click({force: true})
        researchAndReviews.getStyleExteriorRating().eq(1).click({force: true})
        researchAndReviews.getReliabilityRating().eq(3).click({force: true})
        researchAndReviews.getYourRecommendation().eq(1).check({force: true})
        researchAndReviews.getVehicleReviewFormTitle().type('My confirmation and review')
        researchAndReviews.getDescribebox().type(this.data.description)
        researchAndReviews.getStateOfPurchase().eq(1).check({force: true})
      
        
        researchAndReviews.getPrimaryUse().eq(2).click({force: true})
        researchAndReviews.getOwnerOrFormer().eq(1).click({force: true})
        researchAndReviews.getDisplayNameBox().type(this.data.name)
        researchAndReviews.getDisplayLocationBox().type(this.data.location)
        researchAndReviews.getPrimaryUse().eq(1).click({force: true})
        





        researchAndReviews.getSubmitButton().click({force: true})
        cy.wait(4000)
        
        researchAndReviews.getErrorMessage().should('contain','We were unable to submit your review')

        cy.wait(4000)
        
        

    })

    it('Submit less than 25 words in Review Box', function() {

        
        researchAndReviews.getOverAllRating().eq(1).click()
        researchAndReviews.getComfortRating().eq(2).click()
        researchAndReviews.getInteriorDesignRating().eq(3).click()
        researchAndReviews.getPerformanceRating().eq(4).click()
        researchAndReviews.getValueforMoneyRating().eq(5).click()
        researchAndReviews.getStyleExteriorRating().eq(1).click()
        researchAndReviews.getReliabilityRating().eq(3).click()
        researchAndReviews.getYourRecommendation().as('checkboxes').check()
        researchAndReviews.getDescribebox().should('contain','Your review')
        researchAndReviews.getVehicleReviewFormTitle().should('contain','Your review headline')
        researchAndReviews.getStateOfPurchase().should('have.length','2').and('not.be.checked')
        researchAndReviews.getPrimaryUse().should('have.length','3').and('not.be.checked')
        researchAndReviews.getOwnerOrFormer().should('have.length','2').and('not.be.checked')
        researchAndReviews.getDisplayNameBox().should('contain','Your display name').and('have.length','1')
        researchAndReviews.getDisplayLocationBox().should('contain','Your city, state')
        researchAndReviews.getSubmitButton().should('contain','Submit review')
        
        

    })
    
    
    

})