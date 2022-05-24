class SellYourCarPage{

    getPageTitle()
    {
        return cy.title()
    }

    getByPlateOption()
    {
       return cy.contains('License plate')
    }

    getLicencePlateNumberBox()
    {
        return cy.get('#license_plate_number')
    }

    

    getStateDropDown()
    {
        return cy.get('#license_plate_state')
    }

    getByVinOption()
    {
        return cy.get('#by-vin')
    }

    getVinNumberBox()
    {
        return cy.get('#vin')
    }

    getStartedButton()
    {
        return cy.contains('Get started')
    }

} export default SellYourCarPage