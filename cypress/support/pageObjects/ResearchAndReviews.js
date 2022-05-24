class ResearchAndReviews{

    getByModelOption()
    {
        return cy.get('#by-search')
    }
    getMakeBox()
    {
        return cy.get('#make-select')
    }

    getModelBox()
    {
        return cy.get('#model-select')
    }

    getYearsBox()
    {
        return cy.get('#year-select')
    }

    getResearchButton()
    {
        return cy.get('.sds-button')
    }

    getTitle()
    {
        return cy.title()
    }

    getHeaderLine()
    {
        return cy.get('.header-container > h1')
    }

    getViewLocalInventory()
    {
       return cy.get('.button-container > .sds-button')
    }

    getWriteReview()
    {
        return cy.get('.write-a-review')
    }

    getAllFieldsRequired()
    {
        return cy.get('#form-hint')
    }

    getOverAllRating()
    {
        return cy.get('#rate_overall-anchor .flex-stars input')
    }


    getComfortRating()
    {
        return cy.get('#rate_comfort-anchor .flex-stars input')
    }



    getInteriorDesignRating()
    {
        return cy.get('#rate_interior_design-anchor .flex-stars input')
    }

    getPerformanceRating()
    {
        return cy.get('#rate_performance-anchor .flex-stars input')
    }


    getValueforMoneyRating()
    {
        return cy.get('#rate_price-anchor .flex-stars input')
    }


    getStyleExteriorRating()
    {
        return cy.get('#rate_exterior_styling-anchor .flex-stars input')
    }


    getReliabilityRating()
    {
        return cy.get('#rate_reliability-anchor .flex-stars input')
    }


    getYourRecommendation()
    {
        return cy.get('#user_recommends-anchor input')
    }


    getDescribebox()
    {
        return cy.contains('Your review')
    }

    getDescribebox2()
    {
        return cy.contains('Your review').siblings()
    }

    getDescribeboxhidden()
    {
        cy.get('#vehicle_review_form_body:hidden')
    }

    getDescribeboxdiv()
    {
        cy.get('div.sds-field:nth-child(4)').find('..sds-input-container--textarea')
    }

    getVehicleReviewFormTitle()
    {
        return cy.get('#title-anchor').find('.sds-label')
    }

    getStateOfPurchase()
    {
        return cy.get('#purchased_new-anchor .sds-radio')
    }

    getPrimaryUse()
    {
        return cy.get('#primary_use-anchor .sds-radio')
    }

    getOwnerOrFormer()
    {
        return cy.get('#scope-anchor .sds-radio')
    }

    getDisplayNameBox()
    {
        return cy.get('#username-anchor .sds-label')
    }

    getDisplayLocationBox()
    {
        return cy.get('#user_location-anchor .sds-label')
    }

    getDisplayEmailBox()
    {
        return cy.get('#email-anchor .sds-label')
    }

    getSubmitButton()
    {
        return cy.get('.sds-button')
    }

    getErrorMessage()
    {
        return cy.get('.sds-notification__title')
    }

    getSearchByType()
    {
        return cy.get('#by-type')
    }

    getModelTypes()
    {
        return cy.get('#by-type')
    }

    getPageTitle()
    {
        return cy.title()
    }

    getSearchByType()
    {
        return cy.get('.desktop-link-pack .sds-link-pack .sds-list li')
    }

    getSedanCars()
    {
        return cy.get('.sds-container--card-actions')
    }

    getCarMoreDetails()
    {
        return cy.get('.sds-container__actions a')
    }

    getSedanCheckbox()
    {
        return cy.get('#sedan-desktop')
    }

    getByMakeOption()
    {
        return cy.get('#by-make')
    }

    getPopularcars()
    {
        return cy.get('.sds-link-pack li a')
    }


    getAcura()
    {
        return cy.get('.sds-heading--1')
    }

    getMoreDetailsLinks()
    {
        return cy.get('.sds-container__actions .sds-button--fluid:nth-child(1)')
    }

    getShopNowLinks()
    {
        return cy.get('.sds-container__actions .sds-button--fluid:nth-child(2)')
    }

    


    
}export default ResearchAndReviews