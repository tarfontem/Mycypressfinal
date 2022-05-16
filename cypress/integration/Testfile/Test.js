/// <reference types="Cypress" />

import HeaderElement from "../pageObjects/HeaderElement"

describe('First Test Suite', function(){


    it('My First Test Case', function() {

        const headerElement = new HeaderElement() //instantiate the HeaderElement class

        cy.visit(Cypress.env('url'));
        headerElement.getCarsForSale().click()
        

        



        
    })
   
    

})