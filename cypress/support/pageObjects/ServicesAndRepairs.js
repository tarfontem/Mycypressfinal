class ServicesAndRepairs{

    getMakeDropdown()
    {
        return cy.get('#make-select')
    }

    getModelDropdown()
    {
        return cy.get('#model-select')
    }

    getYearDropdown()
    {
        return cy.get('#year-select')
    }

    getPageTitle()
    {
        return cy.title()
    }

    getAdviceAndRecalls()
    {
        return cy.get('div.sds-container--card')
    }

    getRecallLayout()
    {
        return cy.get('.recall-layout')
    }
    

    getSearchRecallsButton()
    {
        return cy.contains('Search recalls')
    }

    getPagelink()
    {
        return cy.url()
    }

   

} export default ServicesAndRepairs