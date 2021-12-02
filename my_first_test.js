/// <reference types="cypress"/>

it('test', function(){
    
    cy.visit("https://staging.directshifts.com/jobs/p/dental-reborn-7000")
    cy.get("#user_first_name").type("Raghul")
    cy.wait(2000)
    cy.get("#user_last_name").type("Adithya")
    cy.wait(2000)
    cy.get("#user_email").type("raghuladithya@hotmail.com")
    cy.wait(2000)
    cy.get("#user_phone").type("23456789")
    cy.wait(2000)
    cy.get("#user_form_submit_container > label > span > span.MuiButton-label").click()

})