/// <reference types="cypress"/>

describe('Trabalhando com locators',() => {
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()
    })

    it('teste usando jquery selector',()=>{
        cy.get("[onclick*='Francisco']").click()
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input")
       
    })

    it.only('usando o xpath',()=>{
        cy.xpath("//input[contains(@onclick, 'Francisco')]")
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco')]/..//input[@type='text']")
        cy.xpath("//*[@data-test='data2']")

    })
})