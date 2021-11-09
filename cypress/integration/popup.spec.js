/// <reference types="cypress"/>



describe('Trabalhando com popup',() =>{


    it('deve verificar se o popup foi invocado',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win =>{
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called') // verificando se foi invocada
// AULA 38 - popaps
    })
})

describe.only('testando links..',()=>{
    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    it('Checando popup url',()=>{
        cy.contains('Popup2')
            .should('have.prop', 'href') // retornando a propriedade
            .and('equal', 'https://wcaquino.me/cypress/frame.html')
   
        })
        // para acessar o popup de outra pagina por link 
    it('should para acessar o popup ',()=>{
        cy.contains('Popup2').then($a => {
            const href = $a.prop('href')
            cy.visit(href)
            cy.get('#tfield').type('Contexto funciona')
        })

    })

   
})