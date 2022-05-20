class HeaderElements{

getCarsForSale() {
    return cy.get('a[data-linkname="header-buy"]')
}

getResearchAndReviews() {

    return cy.get('a[data-linkname="header-research"]')
}
getNewsAndVideos() {

    return cy.get('a[data-linkname="header-news"]')
}

getSellYourCar() {

    return cy.get('a[data-linkname="header-sell-your-car"]')
}

getServiceAndRepair() {

    return cy.get('a[data-linkname="header-service"]')
}
getSignIn() {

    return cy.get('a.header-signin')
}

getSignUp() {

    return cy.get('a.header-signup')
}



} export default HeaderElements