/// <reference types="Cypress" />

import HeaderElements from "../../support/pageObjects/HeaderElements"
import SignInPageElements from "../../support/pageObjects/SignInPageElements"
import HomePageElements from "../../support/pageObjects/HomePageElements"

describe('First Test Suite', function(){

    beforeEach(function() {

        cy.fixture('example').then(function(data)
        {
            this.data = data // data has to be initialized to be available in this whole script, if not 
            //the data will be available only in this block.
        })


    })
    


    it('My First Test Case', function() {

        const headerElement = new HeaderElements() //instantiate the HeaderElement class
        const signInPage = new SignInPageElements()  //instantiate the SignInPageElements
        const homepage = new HomePageElements()

        cy.visit(Cypress.env('url'));
        

        cy.login(this.data.email,this.data.password)
        cy.searchByMake('New cars','Jeep','All models','$30,000','20 miles',' ')
        homepage.getPageTitle().should('include','Jeep')//assure that the page title contains the make searched
       
        //homepage.getMakeResultHeading().first().nextAll().then(function(otherelements)
        homepage.getMakeResultHeading().first().scrollIntoView().within(() => {
            // by default, "a" returns all 3 elements
            
               cy.get('h2.title').should('include.text', 'Jeep')
            
            //cy.get('h2.title').should('include.text', 'Jeep')
            // select "a" elements with "href" attribute
           // cy.get('a:link').should('have.length', 2)
            // which is equivalent to
            //cy.get('a[href]').should('have.length', 2)
          })

          
///
          homepage.getMakeResultHeading().each(($el,index,$list) =>
        
          {
            const headertext = $el.text() 
             for(index=1;index<$list.length;index++){

                if(headertext){
                    expect(headertext).to.contain('Jeep')
                }
            }
          })

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

            const stocksplit = $el.text()
            cy.log(stocksplit)
            const stockpricestring = stocksplit.substring(1,stocksplit.length)
            cy.log(stockpricestring)
            const stockprice = parseInt(stockpricestring.split(',').join('')) 
            cy.log(stockprice)
            for(index=1;index<$list.length;index++){

               if(stockprice){
                   expect(stockprice).to.be.lessThan(30001)
               }
           }


           
        })
        homepage.getCheckAvailabilityButton().each(($el,index,$list) =>
           {
   
               const checkavailability = $el.text()
               for(index=1;index<$list.length;index++){
   
                  if(checkavailability){
                      expect(checkavailability).to.contain('Check availability')
                  }
              }
   
           })
    })
})