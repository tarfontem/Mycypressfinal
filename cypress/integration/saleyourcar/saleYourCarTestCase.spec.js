/// <reference types="Cypress" />


import HeaderElements from "../../support/pageObjects/HeaderElements.js"
import SellYourCarPage from "../../support/pageObjects/SellYourCarPage.js"


//const headerElement = new HeaderElements() //instantiate the HeaderElement class
//const signInPage = new SignInPageElements()  //instantiate the SignInPageElements

const headerElement = new HeaderElements()
const sellYourCarPage = new SellYourCarPage()


describe('Verify the functionality of Sales Page (Sell Your Car)', function(){
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

    it('Validate Licence Plate Entry Options', function() {


        headerElement.getSignIn().click({ force: true })
        cy.login(this.data.email,this.data.password)
        headerElement.getSellYourCar().click({ force: true })
        sellYourCarPage.getByPlateOption().should('contain','License plate').click()
        sellYourCarPage.getPageTitle().should('contains','Cars.com')
        sellYourCarPage.getStartedButton().should('contain','Get started').and('be.visible')
        sellYourCarPage.getByVinOption().should('contain','VIN').and('be.visible')
        sellYourCarPage.getInputAreas().should('contain','License plate number').and('have.length','2')
        sellYourCarPage.getStateValueOptions().should('have.length','53')
     
    })

    it('Validate Licence  Vin Entry Page Options', function() {

        headerElement.getSignIn().click({ force: true })
        cy.login(this.data.email,this.data.password)
        headerElement.getSellYourCar().click({ force: true })
        sellYourCarPage.getByVinOption().click({force: true})
        sellYourCarPage.getByVinOption().should('contain','VIN').and('be.visible')
        sellYourCarPage.getVinNumberBox().next().should('contain','VIN').and('be.visible')
        sellYourCarPage.getStartedButton().should('contain','Get started').and('be.visible')
        

    })

    it('Validate Wrong Plate Number Entry', function() {
        headerElement.getSignIn().click({ force: true })
        cy.login(this.data.email,this.data.password)
        headerElement.getSellYourCar().click({ force: true })

        sellYourCarPage.getByPlateOption().click({force: true})
        sellYourCarPage.getLicencePlateNumberBox().type(this.data.license_Number,{force: true})
        sellYourCarPage.getStateDropDown().select('CA')
        sellYourCarPage.getStartedButton().first().click({force: true})
        sellYourCarPage.getNumberPlateErrorMessage().should('contain','Try searching by VIN')
        sellYourCarPage.getPageLink().should('contain','license_plate[number]')
    
    })
   
    

    it('Validate No State Entry Failure', function() {
        headerElement.getSignIn().click({ force: true })
        cy.login(this.data.email,this.data.password)
        headerElement.getSellYourCar().click({ force: true })


        sellYourCarPage.getByPlateOption().click({ force: true })
        sellYourCarPage.getLicencePlateNumberBox().type(this.data.license_Number,{ force: true })
        sellYourCarPage.getStateDropDown().select('')
        sellYourCarPage.getStartedButton().first().click({ force: true })
        sellYourCarPage.getPlateStateError().should('contain','Choose a state')
        sellYourCarPage.getPageLink().should('contain','license_plate[number]')

    })

    it('Validate Wrong VIN Entry', function() {
        headerElement.getSignIn().click({ force: true })
        cy.login(this.data.email,this.data.password)
        headerElement.getSellYourCar().click({ force: true })


        sellYourCarPage.getByVinOption().click({ force: true })
        sellYourCarPage.getVinNumberBox().type(this.data.Wrong_VIN)
        sellYourCarPage.getStartedButton().last().click({ force: true })
        sellYourCarPage.getVinErrorMessage().should('contain','Try searching by license plate')
        sellYourCarPage.getPageLink().should('contain','vin')
    
    })
    

    it('Validate Correct VIN Entry', function() {
        headerElement.getSignIn().click({ force: true })
        cy.login(this.data.email,this.data.password)
        headerElement.getSellYourCar().click({ force: true })

        sellYourCarPage.getByVinOption().click({ force: true })
        sellYourCarPage.getVinNumberBox().type(this.data.VIN_Number)
        sellYourCarPage.getStartedButton().last().click({ force: true })
        sellYourCarPage.getPageLink().should('contain',this.data.VIN_Number)
        sellYourCarPage.getPageHeading().should('contain','List your car')
        sellYourCarPage.getStyle().should('contain','Choose a style').and('be.visible')
        sellYourCarPage.getUserFirstNameBox().should('have.value',this.data.FirstName).and('be.disabled').and('be.visible')
        sellYourCarPage.getUserLastNameBox().should('have.value',this.data.LastName).and('be.disabled').and('be.visible')
        sellYourCarPage.getNextButton().should('contain','Next').and('be.visible')
        


    
    })
    

})