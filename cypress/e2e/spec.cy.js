/// <reference types = "Cypress"/>

describe("DemoQA",()=>{
    let data;
    before("Launch website",()=>{
        cy.visit("https://automationexercise.com/")
        cy.fixture("example.json").then((fdata)=>{
            data = fdata;
        })
    })
    it("Register User",()=>{
        cy.contains("Home").should("have.css",'color','rgb(255, 165, 0)')
        // click on  Signup / Login button
        cy.contains(" Signup / Login").click()
        cy.wait(1000)
        // Verify 'New User Signup!' is visible
        cy.url().should('include','/login')
        // Enter name and email address
        const {name,email} = data.Test-1
        cy.Test(name,email)
        // Click 'Signup' button
        cy.contains("Signup").click()
    })
})
