class HomePageElements{

    getMakeOption() 
    {
        return cy.get('#by-make')
    }

    getNewUsedMakesDropDown() 
    {
        return cy.get('#make-model-search-stocktype')
    }

    getMakesMakesDropDown() 
    {
        return cy.get('#makes')
    }

    getModelMakesDropDown() 
    {
        return cy.get('#models')
    }

    getPriceMakesDropDown() 
    {
        return cy.get('#make-model-max-price')
    }

    getDistanceMakesDropDown() 
    {
        return cy.get('#make-model-maximum-distance')
    }

    getZipMakesBox() 
    {
        return cy.get('#make-model-zip')
    }

    getSearchMakesBotton() 
    {
        return cy.get('#by-make-tab > .sds-field-group > .sds-home-search__submit > .sds-button')
    }

    getBodyStyleOption() 
    {
        return cy.get('#by-body-style')
    }

    getNewUsedBodyStyleDropDown() 
    {
        return cy.get('#bodystyle-search-stocktype')
    }


    getBodyStyleDropDown() 
    {
        return cy.get('#style')
    }

    getPriceBodyStyleDropDown() 
    {
        return cy.get('#bodystyle-max-price')
    }

    getDistanceBodyStyleDropDown() 
    {
        return cy.get('#bodystyle-maximum-distance')
    }

    getZipBodyStyleBox() 
    {
        return cy.get('#bodystyle-zip')
    }

    getSearchBodyStyleBotton() 
    {
        return cy.get('button.sds-button:visible').contains('Search')
    }

    getPageTitle()
    {
        return cy.title()
    }

    getMakeResultHeading()
    {
        return cy.get('[data-linkname=vehicle-listing]')
    }

    getMakeStockType()
    {
        return cy.get('.stock-type')
    }

    getMakePrice()
    {
        return cy.get('.primary-price')
    }

    getCheckAvailabilityButton()
    {
        return cy.get('.sds-button.lead-form-modal-button') 
    }

    getLocationDistanceBodyStyle()
    {
        return cy.get('#location-distance')
    }

    getMaxPriceBodyStyle()
    {
        return cy.get('#price_list_price_max_select')
    }

    getNewUsedBodyStyle()
    {
        return cy.get('#stock-type-select')

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

    








}export default HomePageElements