// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import HeaderElements from "../support/pageObjects/HeaderElements.js"
import SignInPageElements from "../support/pageObjects/SignInPageElements.js"
import HomePageElements from "./pageObjects/HomePageElements.js"
import ServicesAndRepairs from "./pageObjects/ServicesAndRepairs.js"

const headerElement = new HeaderElements() //instantiate the HeaderElement class
const signInPage = new SignInPageElements()  //instantiate the SignInPageElements
const homepage = new HomePageElements()
const servicesAndRepairs = new ServicesAndRepairs()
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
        homepage.getMakeOption().trigger(click())
        homepage.getNewUsedMakesDropDown().trigger(select(NewOrUsed)) //select New Car
        homepage.getMakesMakesDropDown().trigger(select(Make)) // select Jeep make
        homepage.getModelMakesDropDown().trigger(select(Model))//select all models
        homepage.getPriceMakesDropDown().trigger(select(Price))//select a maximum price of $30,000
        homepage.getDistanceMakesDropDown().trigger(select(Distance)) // select a mileage of 20 miles
        homepage.getZipMakesBox().type(zip,{force: true}) // type the zip code from fixtures folder
        homepage.getSearchMakesBotton().trigger(click({force: true}))
        
         })


    Cypress.Commands.add('searchByBodyType', (NewOrUsed,BodyType,Price,Distance,zip) => { 

        homepage.getBodyStyleOption().click({force: true}).then(function()
        {

        homepage.getNewUsedBodyStyleDropDown().trigger(select(NewOrUsed))
        homepage.getBodyStyleDropDown().select(BodyType)
        homepage.getPriceBodyStyleDropDown().select(Price)
        homepage.getZipBodyStyleBox().type(zip)
        homepage.getDistanceBodyStyleDropDown().select(Distance)
        homepage.getSearchBodyStyleBotton().click({force: true})

        })
    })

        Cypress.Commands.add('searchRecall', (Make,Model,Year) => { 

            
           servicesAndRepairs.getMakeDropdown().select(Make)
           servicesAndRepairs.getModelDropdown().select(Model)
           servicesAndRepairs.getYearDropdown().select(Year)
           servicesAndRepairs.getSearchRecallsButton().click({force: true})
            
        
            
        })

        Cypress.Commands.add('logOut', () => { 
 
            signInPage.getUserAreaName().click({force:true})
            
             })
