/// <reference types="Cypress" />

import HomePageElements from "../../support/pageObjects/HomePageElements"
import HeaderElements from "../../support/pageObjects/HeaderElements"


//const headerElement = new HeaderElements() //instantiate the HeaderElement class
//const signInPage = new SignInPageElements()  //instantiate the SignInPageElements
const homepage = new HomePageElements()
const headerElement = new HeaderElements()

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
        
        headerElement.getSignIn().click()

        cy.login(this.data.email,this.data.password)
        homepage.getPageTitle().should('eq','New Cars, Used Cars, Car Dealers, Prices & Reviews | Cars.com')
        cy.searchByMake('New cars','Jeep','All models','$30,000','20 miles',this.data.zip)//custom command
        homepage.getPageTitle().should('include','Jeep')//assure that the page title contains the make searched
       
        homepage.getMakeResultHeading().each(($el,index,$list) =>
        
          {
             const headertext = $el.text() 
             for(index=1;index<$list.length;index++){

                if(headertext){
                    expect(headertext).to.contain('Jeep')
                }

             }

        homepage.getMakeStockType().each(($el,index,$list) =>
        
          {
             
            const stocktext = $el.text() 
            for(index=1;index<$list.length;index++){

               if(stocktext){
                   expect(stocktext).to.contain('New')
               }
           }


          })

        homepage.getMakePrice().each(($el,index,$list) =>
        {

            const stockprice = $el.text()
            for(index=1;index<$list.length;index++){

               if(stocktext){
                   expect(stocktext).to.contain('New')
               }
           }

        

        })

       


            
          })

        


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
        homepage.getLinkBoxLocalInventory().should('have.attr','href')
        homepage.getLinkBoxMoreDetails().should('have.attr','href')
        homepage.getTryAgainButton().invoke('attr','class').should('equal','sds-button--secondary')
    
        
        







    })
    
    

})