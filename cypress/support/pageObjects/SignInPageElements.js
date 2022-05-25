class SignInPageElements{

    getEmailBox() {
        return cy.get('[for="email"]')
    }

    getPasswordBox() {
        return cy.get('[for="password"]')
    }

    getSignInWithFacebook() {
        return cy.get('.sds-button.facebook-button')
    }

    getSignInWithGoogle() {
        return cy.get('.sds-button.google-button')
    }

    getSignInWithApple() {
        return cy.get('.sds-button.apple-button')
    }

    getSignInbutton() {
        return cy.get('button.sds-button')
    }

    getUserAreaName() {
        return cy.get('.desktop-nav-user-name')
    }

    getWrongNotification()
    {
        return cy.get('.sds-notification__title')
    }

    getPageTitle()
    {
        return cy.url()
    }

    getFacebookUserName()
    {
        return cy.get('#email')
    }

    getFacebookPassword()
    {
        return cy.get('#pass')
    }

    getFacebookLoginButton()
    {
        return cy.get('#loginbutton')
    }

    getPageUrl()
    {
        return cy.url()
    }

    getSignOutButton()
    {
        return cy.get('.header-signout').invoke('show')
    }




} export default SignInPageElements