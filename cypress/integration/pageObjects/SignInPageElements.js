class SignInPageElements{

    getEmailBox() {
        return cy.get('#email')
    }

    getPasswordBox() {
        return cy.get('#password')
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


} export default SignInPageElements