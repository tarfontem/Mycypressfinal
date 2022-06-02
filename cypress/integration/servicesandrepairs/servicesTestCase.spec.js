/// <reference types="Cypress" />


import HeaderElements from "../../support/pageObjects/HeaderElements.js"
import ServicesAndRepairs from "../../support/pageObjects/ServicesAndRepairs.js"


//const headerElement = new HeaderElements() //instantiate the HeaderElement class
//const signInPage = new SignInPageElements()  //instantiate the SignInPageElements

const headerElement = new HeaderElements()
const servicesAndRepairs = new ServicesAndRepairs()


describe('Verify the function of Services & Repairs page', function(){
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

    it('Verify the Service page options', function() {

        headerElement.getSignIn().click({ force: true })
        cy.login(this.data.email,this.data.password)
        headerElement.getServiceAndRepair().click({ force: true })


        servicesAndRepairs.getMakeDropdown().should('be.visible')
        servicesAndRepairs.getModelDropdown().should('be.visible')
        servicesAndRepairs.getYearDropdown().should('be.visible')
        servicesAndRepairs.getPageTitle().should('contain','Vehicle Service & Repair Center')
        servicesAndRepairs.getAdviceAndRecalls().should('have.length','2')
        servicesAndRepairs.getAdviceAndRecalls().first().should('contain','Car safety & recalls')
        servicesAndRepairs.getAdviceAndRecalls().last().should('contain','Service & repair advice')
        servicesAndRepairs.getRecallLayout().should('have.length','1')
        

    })
 

    it('Verify Search for recalls', function() {
        
        cy.searchRecall('Jeep','Wrangler','2022')
        servicesAndRepairs.getPageTitle().should('contain','2022 Jeep Wrangler Recalls')
        servicesAndRepairs.getPagelink().should('contain','recalls')
        

        

    })

   

    
    

})