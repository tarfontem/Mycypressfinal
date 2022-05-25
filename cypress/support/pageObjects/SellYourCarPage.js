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
        return cy.get('#license_plate_number').invoke('show')
    }

    

    getStateDropDown()
    {
        return cy.get('#license_plate_state').invoke('show')
    }

    getStateValueOptions()
    {
        return cy.get('#license_plate_state').invoke('show').find('option')
    }


    getByVinOption()
    {
        return cy.get('#by-vin').invoke('show')
    }

    getVinNumberBox()
    {
        return cy.get('#vin').invoke('show')
    }

    getStartedButton()
    {
        return cy.get('.find-car-details').invoke('show')
    }


    getInputAreas()
    {
        return cy.get('#by-plate-tab').invoke('show').find('.sds-label')
    }

    getInstantOfferZip()
    {
        return cy.get('#zip-form').invoke('show')
    }

    getNumberPlateErrorMessage()
    {
        return cy.get('span.error').invoke('show')
    }

    getVinErrorMessage()
    {
        return cy.get('span.sds-helper-text').invoke('show')
    }

    getPlateStateError()
    {
        return cy.get('span.sds-helper-text').invoke('show')
    }


    getPageLink()
    {
        return cy.url()
    }

    getUserFirstNameBox()
    {
        return cy.get('#user_vehicle_user_first_name').invoke('show')
    }

    
    getUserLastNameBox()
    {
        return cy.get('#user_vehicle_user_last_name').invoke('show')
    }

    getUserPhoneBox()
    {
        return cy.get('#user_vehicle_user_phone_number').invoke('show')
    }

    getNextButton()
    {
        return cy.get('button[data-click-intent-id="sell-car-details-features"]').invoke('show')
    }

    getOriginalOwner()
    {
        return cy.get('.owner-selection-options').invoke('show')
    }

    getStyle()
    {
        return cy.get('#user_vehicle_chrome_style_id').invoke('show')
    }

    getMileage()
    {
        return cy.get('#user_vehicle_mileage').invoke('show')
    }

    getZipCode()
    {
        return cy.get('input[name="user_vehicle[mileage]"]').invoke('show')
    }


    getExteriorColor()
    {
        return cy.get('#user_vehicle_exterior_color_id').invoke('show')
    }

    getInteriorColor()
    {
        return cy.get('#user_vehicle_interior_color_id').invoke('show')
    }
   
    getPageHeading()
    {
        return cy.get('.sds-heading--1').invoke('show')
    }
    
   

} export default SellYourCarPage