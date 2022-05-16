class SignInPageElements{

    getEmailBox() {
        return cy.get('[for="email"]')
    }

    getPasswordBox() {
        return cy.get('[for="password"]')
    }

    getSignInWithFacebook() {
        return cy.get('.facebook-svg-icons')
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


} export default SignInPageElements