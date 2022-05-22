/// <reference types="Cypress" />


import HeaderElements from "../../support/pageObjects/HeaderElements"
import SellYourCarPage from "../../support/pageObjects/SellYourCarPage"


//const headerElement = new HeaderElements() //instantiate the HeaderElement class
//const signInPage = new SignInPageElements()  //instantiate the SignInPageElements

const headerElement = new HeaderElements()
const sellYourCarPage = new SellYourCarPage()


describe('Verify the functionality of Sale your Car Page', function(){

    

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

    it('Validate Licence Plate And Vin Entry Options', function() {

        headerElement.getSignIn().click()
        cy.login(this.data.email,this.data.password)
        headerElement.getSellYourCar().click()


        sellYourCarPage.getByPlateOption().click()
        sellYourCarPage.getPageTitle().should('contains','Cars.com')
        sellYourCarPage.getLicencePlateNumberBox().next().should('contain','License plate number')




        

        

    })

   

    
    

})