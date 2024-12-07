import {Given,And,Then} from "cypress-cucumber-preprocessor/steps";

Given('open the url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form');
})

And("Enter username and pasword",()=>{
    //first name
    cy.get("#firstName").type('Shubham');
    //last name
    cy.get('#lastName').type('Yetonde');

    //email
    cy.get('#email').type('shubhamyetonde865@gmail.com');
    //number
    cy.get('#number').type('8956545953');
    //Masses
    cy.get('[rows="2"]').type('I am Cypress user')

})

Then('click on button',()=>{
    cy.get('[value="submit"]').click();
})