/// reference types="cypress" />

describe('Selecionar bot', () => {
    it('Selciona bot Burguer Fiction', () => {
        cy.visit('https://take-caramelo.blip.ai/application')

        cy.get('#email').should('be.visible')
    
        cy.get('#email').type('lourena@take.net')
    
        cy.get('#password').type('particula')
    
        cy.get('#blip-login').click()
    
        cy.xpath("//span[contains(., 'Burguer Fiction')]", {timeout: 7000}).should('be.visible')
    
        cy.xpath("//span[contains(., 'Burguer Fiction')]").click()

        cy.xpath("//span[contains(., 'Id: burguerfiction')]", {timeout: 7000}).should('be.visible')
    })
})