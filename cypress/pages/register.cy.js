export class registerPage{

    weblocators={

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continueButton: '.btn.btn-primary'
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(firstName){

        cy.get(this.weblocators.firstName).type(firstName)
    }
    enterLastName(lastName){

        cy.get(this.weblocators.lastName).type(lastName)
    }
    enterEmail(email){

        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(PhoneNo){

        cy.get(this.weblocators.telephone).type(PhoneNo)
    }
    enterPassword(password){

        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }
    selectCheckbox(){
        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickOnContinue(){
        cy.get(this.weblocators.continueButton).click()
    }
}