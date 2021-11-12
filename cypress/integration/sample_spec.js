// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:


// https://on.cypress.io/writing-first-test
describe('Input Functionality', () => {
    const nameInput = () => cy.get("[name='username']")
    const pepperoni = () => cy.get("[name='pepperoni']")
    const onions = () => cy.get("[name='onions']")
    
    it('test that you can add text to the box', () => {
        cy.visit('http://localhost:3000/pizza')
        nameInput()
            .type('text');
        pepperoni()
            .click()
        onions()
            .click()
        cy.get('form')
            .submit()
        
    })
})