class HomePage{

    getFindACar() {
        return cy.get('a[data-linkname="footer-find-a-car"]')
    }


} export default HomePage