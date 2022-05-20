/// <reference types="Cypress" />

import HomePageElements from "../../support/pageObjects/HomePageElements"

//const headerElement = new HeaderElements() //instantiate the HeaderElement class
//const signInPage = new SignInPageElements()  //instantiate the SignInPageElements
const homepage = new HomePageElements()

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


    it('Vehicle Search by Make', function() {
        //search a vehicle by it make on home page giving the location, mileage, price, new and make sure all 
        //selected vehicles are from the selected location and their name belongs to the make, and price is 
        //in the range of the price selected

        cy.login(this.data.email,this.data.password)
        homepage.getPageTitle().should('eq','New Cars, Used Cars, Car Dealers, Prices & Reviews | Cars.com')
        cy.searchByMake('New cars','Jeep','All models','$30,000','20 miles',this.data.zip)//custom command
        homepage.getPageTitle().should('include','Jeep')//assure that the page title contains the make searched
        homepage.getMakeResult().each(($el,index,$list) =>
        {
            const first = $el.first()
            const rest = $el.nextAll()
            const headingtext = rest.find('.vehicle-card-link.js-gallery-click-link').text()
            expect(headingtext).to.include('Jeep')
        })

        


    })
   
    it('Search by Body Style', function() { 

        
       

    })

    it('Verify facebook,google And apple login links', function() { 
        

    })
    
    

})