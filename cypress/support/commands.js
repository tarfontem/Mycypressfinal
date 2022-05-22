// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import HeaderElements from "../support/pageObjects/HeaderElements"
import SignInPageElements from "../support/pageObjects/SignInPageElements"
import HomePageElements from "./pageObjects/HomePageElements"

const headerElement = new HeaderElements() //instantiate the HeaderElement class
const signInPage = new SignInPageElements()  //instantiate the SignInPageElements
const homepage = new HomePageElements()
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => { 
 
    signInPage.getEmailBox().type(email)
    signInPage.getPasswordBox().type(password)
    signInPage.getSignInbutton().click()
    
     })




     Cypress.Commands.add('searchByMake', (NewOrUsed, Make,Model,Price,Distance,zip) => { 
        homepage.getMakeOption().click()
        homepage.getNewUsedMakesDropDown().select(NewOrUsed) //select New Car
        homepage.getMakesMakesDropDown().select(Make) // select Jeep make
        homepage.getModelMakesDropDown().select(Model)//select all models
        homepage.getPriceMakesDropDown().select(Price)//select a maximum price of $30,000
        homepage.getDistanceMakesDropDown().select(Distance) // select a mileage of 20 miles
        homepage.getZipMakesBox().type(zip,{force: true}) // type the zip code from fixtures folder
        homepage.getSearchMakesBotton().click({force: true})
        
         })


    Cypress.Commands.add('searchByBodyType', (NewOrUsed,BodyType,Price,Distance,zip) => { 

        homepage.getBodyStyleOption().click({force: true}).then(function()
        {

        homepage.getNewUsedBodyStyleDropDown().select(NewOrUsed)
        homepage.getBodyStyleDropDown().select(BodyType)
        homepage.getPriceBodyStyleDropDown().select(Price)
        homepage.getZipBodyStyleBox().type(zip)
        homepage.getDistanceBodyStyleDropDown().select(Distance)
        homepage.getSearchBodyStyleBotton().click({force: true})

        })
        
            
        })

            
