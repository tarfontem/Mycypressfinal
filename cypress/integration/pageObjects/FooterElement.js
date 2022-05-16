class FooterElement{

    getFindACar() {
        return cy.get('a[data-linkname="footer-find-a-car"]')
    }

    getFindADealer() {
        return cy.get('a[data-linkname="dealer-search-results"]')
    }

    getListingsByCity() {
        return cy.get('a[data-linkname="sitemap-city-listings"]')
    }

    getCertifiedPreOwned() {
        return cy.get('a[data-linkname="shop-cpo-index"]')
    }

    getCarPaymentsCalculators() {
        return cy.get('a[data-linkname="calculate-payment"]')
    }

    getCarReviewsAndRatings() {
        return cy.get('a[data-linkname="consumer-reviews"]')
    }

    getCompareSideBySide() {
        return cy.get('a[data-linkname="research-compare"]')
    }

    getFraudAwareness() {
        return cy.get('a[data-linkname="fraud-awareness"]')
    }

    getSaleYourCar() {
        return cy.get('li a[data-linkname="sell"]')
    }

    getGrowWithCars() {
        return cy.get('a[data-linkname="footer-grow-with-cars"]')
    }

    getDelearLogin() {
        return cy.get('a[data-linkname="footer-dealer-login"]')
    }

    getDealerInspire() {
        return cy.get('a[data-linkname="footer-dealer-inspire"]')
    }

    getDealerRater() {
        return cy.get('a[data-linkname="footer-dealerrater"]')
    }

    getFuel() {
        return cy.get('a[data-linkname="footer-fuel"]')
    }

    getAuto() {
        return cy.get('a[data-linkname="footer-autocom"]')
    }

    getNewCars() {
        return cy.get('a[data-linkname="footer-newcarscom"]')
    }

    getPickUpTrucks() {
        return cy.get('a[data-linkname="footer-pickuptruckscom"]')
    }

    getAboutCars() {
        return cy.get('a[data-linkname="footer-about-cars"]')
    }

    getContactCars() {
        return cy.get('a[data-linkname="footer-contact-cars"]')
    }

    getInvestorRelationships() {
        return cy.get('a[data-linkname="footer-investor-relations"]')
    }

    getCareers() {
        return cy.get('a[data-linkname="footer-careers"]')
    }

    getLicensingAndReprints() {
        return cy.get('a[data-linkname="footer-licensing-reprints"]')
    }

    getSiteMap() {
        return cy.get('a[data-linkname="footer-site-map"]')
    }

    getFeedBack() {
        return cy.get('a[data-linkname="footer-feedback"]')
    }

    getDownloadAppToday() {
        return cy.get('a[data-linkname="footer-mobile-apps"]')
    }

    getFindAppStoreButton() {
        return cy.get('.app-store-button')
    }

    getGooglePlayBotton() {
        return cy.get('.google-play-button')
    }

    getTwitterIcon() {
        return cy.get('.social-link:nth-child(1)')
    }

    getFacebookIcon() {
        return cy.get('.social-link:nth-child(2)')
    }

    getYouTubeIcon() {
        return cy.get('.social-link:nth-child(3)')
    }

    getInstagramIcon() {
        return cy.get('.social-link:nth-child(4)')
    }

    getLinkedInIcon() {
        return cy.get('.social-link:nth-child(5)')

    }

    getTermsOfService() {
        return cy.get('a[data-linkname="footer-tos"]')
    }

    getPrivacyStatement() {
        return cy.get('a[data-linkname="footer-privacy-statement"]')
    }

    getDoNotSellMyPersonalInfo() {
        return cy.get('a[data-linkname="footer-personal-information"]')
    }

    getAccessibilityStatement() {
        return cy.get('a[data-linkname="footer-accessibility"]')
    }

    getAdChoices() {
        return cy.get('a[data-linkname="footer-ad-choices"]')
    }


} export default FooterElement