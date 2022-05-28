/// <reference types="Cypress" />

import HomePageElements from "../../support/pageObjects/HomePageElements"
import HeaderElements from "../../support/pageObjects/HeaderElements"


//const headerElement = new HeaderElements() //instantiate the HeaderElement class
//const signInPage = new SignInPageElements()  //instantiate the SignInPageElements
const homepage = new HomePageElements()
const headerElement = new HeaderElements()

describe('Sign In Test Suite', function(){

    

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

    it('Style and Search Options On default home page', function() { 
        headerElement.getSignIn().click()

        cy.login(this.data.email,this.data.password)
        homepage.getMakeOption().should('have.attr','aria-selected','true')//by default, this attribute is selected
        homepage.getBodyStyleOption().should('have.attr','aria-selected','false')
        homepage.getPageTitle().should('contain','New Cars, Used Cars, Car Dealers, Prices & Reviews')
        homepage.getNewUsedMakesDropDown().next().should('contain','New/used')
        homepage.getMakesMakesDropDown().next().should('contain','Make')
        homepage.getModelMakesDropDown().next().should('contain','Model')
        homepage.getPriceMakesDropDown().next().should('contain','Price')
        homepage.getDistanceMakesDropDown().next().should('contain','Distance')
        homepage.getZipMakesBox().next().should('contain','ZIP')
        homepage.getSearchMakesBotton().should('contain','Search')
        homepage.getBodyStyleOption().click({force:true})
        homepage.getBodyStyleOption().should('have.attr','aria-selected','true')
        homepage.getBodyStyleOption().should('contain','Body style')
        homepage.getMakeOption().should('have.attr','aria-selected','false')
        homepage.getNewUsedBodyStyle().next().should('contain','New/used')
        homepage.getBodyStyleDropDown().next().should('contain','Body style')
        homepage.getPriceBodyStyleDropDown().next().should('contain','Price')
        homepage.getDistanceBodyStyleDropDown().next().should('contain','Distance')
        homepage.getZipBodyStyleBox().next().should('contain','ZIP')
        homepage.getSearchBodyStyleBotton().should('contain','Search')

    })

    it('Search by Make function', function() { 
        headerElement.getSignIn().click()

        cy.login(this.data.email,this.data.password)
        homepage.getMakeOption().click({force:true})
        
        cy.searchByMake('New cars', 'Jeep','Wrangler','$30,000','30 miles',this.data.zip)
        homepage.getActiveFilterTags().should('contain','New').and('contain','Jeep')
        .and('contain','Wrangler').and('contain','Max price: $30,000')
        homepage.getPageTitle().should('contain','New Jeep Wrangler for Sale Near Me')



    })
    

    
    it('Search by Body Style', function() { 
        headerElement.getSignIn().click()

        cy.login(this.data.email,this.data.password)
        cy.searchByBodyType('New cars','Pickup truck','$30,000','20 miles',this.data.zip)
        homepage.getPageTitle().should('include','New vehicles for Sale Near Me')
        homepage.getLocationDistanceBodyStyle().should('have.value','20')
        homepage.getMaxPriceBodyStyle().should('have.value','30000')
        homepage.getNewUsedBodyStyle().should('have.value','new')
        homepage.getMakeBodyStyle().should('contain','All makes')
        homepage.getPickupCheckBox().should('be.checked')
        homepage.getZipInputBodyStyle().should('have.value',this.data.zip)
    })
    

    it('Verify Search By What you love', function() { 
        headerElement.getSignIn().click()

        cy.login(this.data.email,this.data.password) 
        homepage.getBodyStyleTypeDropDown().select('SUV')
        homepage.getPriceTypesDropDown().select('$50,000')
        homepage.getNextButton().click()
        homepage.getSearchHeading().should('contain','Cars.com Matchmaker')
        homepage.getRoomness().should('have.attr', 'max','10').and('have.attr','min','0')
        homepage.getCargoArea().should('have.attr', 'max','10').and('have.attr','min','0')
        homepage.getRideComfortVeryCheckbox1().should('not.be.checked')
        homepage.getRideComfortImportantCheckbox2().should('not.be.checked')
        homepage.getRideComfortDontCareCheckbox3().should('not.be.checked')
        homepage.getTechnology().should('have.attr', 'max','10').and('have.attr','min','0')
        homepage.getGasMileage().should('have.attr', 'max','10').and('have.attr','min','0')
        homepage.getOffRoadCapability().should('have.attr', 'max','10').and('have.attr','min','0')
        homepage.getVisibility().should('have.attr', 'max','10').and('have.attr','min','0')
        homepage.getTowingCheckBox1().should('not.be.checked')
        homepage.getTowingCheckBox2().should('not.be.checked')
        homepage.getTowingCheckBox3().should('not.be.checked')
        homepage.getRideComfortVeryCheckbox1().check({force: true}).should('be.be.checked')
        homepage.getRideComfortImportantCheckbox2().check({force: true}).should('be.checked')
        homepage.getRideComfortDontCareCheckbox3().check({force: true}).should('be.checked')
        homepage.getTowingCheckBox1().check({force: true}).should('be.checked')
        homepage.getTowingCheckBox2().check({force: true}).should('be.checked')
        homepage.getTowingCheckBox3().check({force: true}).should('be.checked')
        homepage.getTryAgainButton().should('contain','Try again')
    
        
        







    })
    
    

})