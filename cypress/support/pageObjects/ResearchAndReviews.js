class ResearchAndReviews{

    getByModelOption()
    {
        return cy.get('#by-search')
    }
    getMakeBox()
    {
        return cy.get('#make-select').invoke('show')
    }

    getModelBox()
    {
        return cy.get('#model-select').invoke('show')
    }

    getYearsBox()
    {
        return cy.get('#year-select').invoke('show')
    }

    getResearchButton()
    {
        return cy.get('button.sds-button').invoke('show')
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
        return cy.get('#vehicle_review_form_body').invoke('show')
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
        return cy.get('#purchased_new-anchor').invoke('show').find('input')
    }

    getPrimaryUse()
    {
        return cy.get('#primary_use-anchor').invoke('show').find('input')
    }

    getOwnerOrFormer()
    {
        return cy.get('#scope-anchor').invoke('show').find('input')
    }

    getDisplayNameBox()
    {
        return cy.get('#vehicle_review_form_username').invoke('show')
    }

    getDisplayLocationBox()
    {
        return cy.get('#vehicle_review_form_user_location').invoke('show')
    }

    getDisplayEmailBox()
    {
        return cy.get('#vehicle_review_form_email').invoke('show')
    }

    getSubmitButton()
    {
        return cy.get('.sds-button').invoke('show')
    }

    getErrorMessage()
    {
        return cy.get('.sds-notification__title')
    }

    getSearchByType()
    {
        return cy.get('a#by-type').invoke('show')
    }

    getModelTypes()
    {
        return cy.get('#by-type').invoke('show')
    }

    getPageTitle()
    {
        return cy.title()
    }

    getSedanCars()
    {
        return cy.get('div.type-link-container:visible').invoke('show')
    }

    getUrl()
    {
        return cy.url()
    }
    
    getCarResults()
    {
        return cy.get('.sds-container--card-actions').invoke('show')
    }

    getCarMoreDetails()
    {
        return cy.get('.sds-container__actions a').invoke('show')
    }

    getSedanCheckbox()
    {
        return cy.get('#sedan-desktop').focus()
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