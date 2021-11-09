/// <reference types="cypress"/>


describe('Trabalhando com Iframes',() =>{
    // Before executa a ação antes do primeiro teste
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    // AULA 37 - IFRAME
    it.only('Deve preencher o campo de testo',()=>{
        cy.get('#frame1').then(iframe =>{
            const body = iframe.contents().find('body')  // pegando um item dentro frame com contents e find
            cy.wrap(body).find('#tfield')
                .type('Funciona?')
                .should('have.value', 'Funciona?')

            })
        
    })

    // AULA 37 - IFRAME
    it.only('testando frame diretamente',()=>{
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()       
    
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Click OK!')
                
        })
    })
// AULA 38 - popaps


})
