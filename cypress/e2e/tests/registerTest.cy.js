import { registerPage } from "../../pages/register.cy.js"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'

describe('test automation', ()=>{


    it('Register flow', ()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
    })
})