import cypress from "cypress"

class SellYourCarPage{

    getPageTitle()
    {
        return cy.title()
    }

    getByPlateOption()
    {
        cy.get('#by-plate')
    }

    getLicencePlateNumberBox()
    {
        cy.get('#license_plate_number')
    }

    getStateDropDown()
    {
        cy.get('#license_plate_state')
    }

    getByVinOption()
    {
        cy.get('#by-vin')
    }

    getVinNumberBox()
    {
        cy.get('#vin')
    }

    getStartedButton()
    {
        cy.get('button.find-car-details').contains('Get started')
    }

} export default SellYourCarPage