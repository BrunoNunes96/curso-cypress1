/// <reference types="cypress"/>

describe("Esperas...",()=>{
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
   // beforeEach executa a ação antes de cada teste 
    beforeEach(()=>{
        cy.reload()
    })

    it('Deve aguardar o elemento ficar disponivel',()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').type('Funciona')

    })

    it('Deve fazer retrys',()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('not.exist')
            .should('exist')
            
    })
    // usando o find para buscar itens com o mesmo caminho
    it('Usando o fynd',()=>{
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
      //  cy.get('#lista li')
        //    .find('span')
          // .should('contain', 'Item 2')
       cy.get('#lista li span')
            .should('contain', 'Item 2')
    })


    it('Uso do timeout',()=>{
       // cy.get('#buttonDelay').click()
        //cy.get('#novoCampo','{timeout:1000').should('exist')
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
    })

    // comandos que alteram o html não são retentados
    it('Click retry',()=>{
        cy.get('#buttonCount').click()
            .should('have.value', 11)        
    })


    // then: não faz retentativas de consultas
    // should: fica retentando consultas de elementos
    it.only('Should vs then',()=>{
        cy.get('#buttonListDOM').should($el =>{
          //  console.log($el)
            expect($el).to.have.length(1)
        })

    })

})

