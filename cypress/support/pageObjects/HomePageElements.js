class HomePageElements{

    getMakeOption() 
    {
        return cy.get('a#by-make').invoke('show')
    }

    getNewUsedMakesDropDown()
    {
        return cy.get('#make-model-search-stocktype').invoke('show')
    }

    getMakesMakesDropDown() 
    {
        return cy.get('#makes').invoke('show')
    }

    getModelMakesDropDown() 
    {
        return cy.get('#models').invoke('show')
    }

    getPriceMakesDropDown() 
    {
        return cy.get('#make-model-max-price').invoke('show')
    }

    getDistanceMakesDropDown() 
    {
        return cy.get('#make-model-maximum-distance').invoke('show')
    }

    getZipMakesBox() 
    {
        return cy.get('#make-model-zip').invoke('show')
    }

    getSearchMakesBotton() 
    {
        return cy.get('button[data-searchtype="make"]').invoke('show')
    }

    getBodyStyleOption() 
    {
        return cy.get('a#by-body-style').invoke('show')
    }

    getNewUsedBodyStyleDropDown() 
    {
        return cy.get('#bodystyle-search-stocktype').invoke('show')
    }


    getBodyStyleDropDown() 
    {
        return cy.get('#style').invoke('show')
    }

    getPriceBodyStyleDropDown() 
    {
        return cy.get('#bodystyle-max-price').invoke('show')
    }

    getDistanceBodyStyleDropDown() 
    {
        return cy.get('#bodystyle-maximum-distance').invoke('show')
    }

    getZipBodyStyleBox() 
    {
        return cy.get('#bodystyle-zip').invoke('show')
    }

    getSearchBodyStyleBotton() 
    {
        return cy.get('button[data-searchtype="bodystyle"]').invoke('show')
    }

    getPageTitle()
    {
        return cy.title()
    }

    getMakeResultHeading()
    {
        return cy.get('[data-linkname=vehicle-listing]').invoke('show')
    }

    getMakeStockType()
    {
        return cy.get('.stock-type').invoke('show')
    }

    getMakePrice()
    {
        return cy.get('.primary-price').invoke('show')
    }

    getCheckAvailabilityButton()
    {
        return cy.get('.sds-button.lead-form-modal-button').invoke('show')
    }

    getLocationDistanceBodyStyle()
    {
        return cy.get('#location-distance').invoke('show')
    }

    getMaxPriceBodyStyle()
    {
        return cy.get('#price_list_price_max_select').invoke('show')
    }

    getNewUsedBodyStyle()
    {
        return cy.get('#bodystyle-search-stocktype').invoke('show')

    }

    getMakeBodyStyle()
    {
        return cy.get('#make_select')
    }

    getPickupCheckBox()
    {
        return cy.get('#body_styles_pickup_truck')
    }

    getZipInputBodyStyle()
    {
        return cy.get('#zip-input')
    }

    getBodyStyleTypeDropDown()
    {
        return cy.get('#body_style')
    }

    getPriceTypesDropDown()
    {
        return cy.get('#max_price')
    }

    getNextButton()
    {
        return cy.get('.sds-button').contains('Next')
    }

    getSearchHeading()
    {
        return cy.get('.sds-heading--1')
    }y

    getRoomness()
    {
        return cy.get('#search_form_roominess')
    }

    getCargoArea()
    {
        return cy.get('#search_form_cargo_area')
    }

   getRideComfortVeryCheckbox1()
    {
        return cy.get('#search_form_ride_comfort_10')
    }

    getRideComfortImportantCheckbox2()
    {
        return cy.get('#search_form_ride_comfort_7')
    }

    getRideComfortDontCareCheckbox3()
    {
        return cy.get('#search_form_ride_comfort_0')
    }

    getTechnology()
    {
        return cy.get('#search_form_technology')
    }

    getGasMileage()
    {
        return cy.get('#search_form_gas_mileage')
    }

    getOffRoadCapability()
    {
        return cy.get('#search_form_off_road_capability')
    }

    getVisibility()
    {
        return cy.get('#search_form_visibility')
    }

    getTowingCheckBox1()
    {
        return cy.get('#search_form_towing_10')
    }

    getTowingCheckBox2()
    {
        return cy.get('#search_form_towing_7')
    }

    getTowingCheckBox3()
    {
        return cy.get('#search_form_towing_0')
    }

    getTryAgainButton()
    {
        return cy.get('.try-again-prompt').invoke('show')
    }

    getLinkBoxLocalInventory()
    {
        return cy.get('.sds-container__actions').invoke('show')
    }

    getLinkBoxMoreDetails()
    {
        return cy.get('.sds-container__actions').contains('Model details')
    }

    getActiveFilterTags()
    {
        return cy.get('active_filter_tags').invoke('show')
    }

    








}export default HomePageElements