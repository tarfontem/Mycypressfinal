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
        return cy.get('button[data-linkname="search-all-bodystyle"]')
    }

    getPageTitle()
    {
        return cy.title()
    }

    getMakeResult()
    {
        return cy.get('.vehicle-details')
    }



}export default HomePageElements