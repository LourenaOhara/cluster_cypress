/// reference types="cypress" />

describe('Cluster Caramelo', () => {
    it('Login na aplicação', () => {
        cy.visit('https://take-caramelo.blip.ai/application')

        cy.get('#email').should('be.visible')

        cy.get('#email').type('lourena@take.net')

        cy.get('#password').type('particula')

        cy.get('#blip-login').click()

        cy.wait(6000)
    })

    it('Login no desk', () => {
        cy.visit('https://take-caramelo.desk.blip.ai/')  

        cy.get('#email').should('be.visible')

        cy.get('#email').type('lourena@take.net')

        cy.get('#password').type('particula')

        cy.get('#blip-login').click()

        cy.get('#set-online-btn').should('be.visible')

        cy.get('#set-online-btn').click()
    })
});