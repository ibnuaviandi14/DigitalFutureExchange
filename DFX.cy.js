/// <reference types = "cypress" />

describe('How to Log In into DFX Website',() =>{
    beforeEach(() => {
    cy.visit('http://laporan.dfx.co.id/')
})

it('Check conformance of the homepage',() =>{
    cy.url().should('contain','signin') // Assertion for the url
    cy.get('p > img').should('be.visible').should('have.attr','src')
    .should('include','/static/dfx_logo.png') // Assertion for the DFX image that visible for the user
    cy.get('input[name="id"]').should('be.visible') // Assertion for the ID that visible for the user
    cy.get('input[name="password"]').should('be.visible') // Assertion for the Password that visible for the user
    cy.get('input[name="captcha"]').should('be.visible') // Assertion for the Captcha that visible for the user
    cy.get('.btn').should('be.visible') // Assertion for the LOGIN that visible for the user
    cy.get('.btn').should('have.attr','type').should('contain','submit') // Assertion for the LOGIN that have correct function
})
})
