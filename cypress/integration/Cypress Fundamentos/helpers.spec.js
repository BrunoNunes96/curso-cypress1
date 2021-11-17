/// <reference types="cypress"/>

describe("Esperas...",()=>{
    it('Wrap',()=>{
        const obj = {nome: 'user', idade: 20}
        expect(obj).to.have.property('nome');
        cy.wrap(obj).should('have.property', 'nome') //encapsulando obj

        cy.visit('https://wcaquino.me/cypress/componentes.html')

       // cy.get('#formNome').then($el =>{
            
        // cy.wrap($el).type('VAI FUNCIONAR VIA CYPRESS')
       // })

       const promise = new Promise((resolve, reject) =>{
           setTimeout(() =>{
               resolve(10)
           },500)
       })

       cy.get('#buttonSimple').then(() => console.log('Encontrei o  primeiro botao'))
      // promise.then(num => console.log(num))
       cy.wrap(promise).then(ret => console.log(ret))
       cy.get('#buttonList').then(() => console.log('Encontrei o  segundo botao'))
       
       cy.wrap(1).then(num =>{
           return 2
       }).should('be.equal', 2)

      
       
        
    })   
    it('Its..',()=>{
        const obj = {nome: 'user', idade: 20}
        cy.wrap(obj).should('have.property', 'nome','user')
        cy.wrap(obj).its('nome').should('be.equal', 'user')

        const obj2 = {nome: 'user', idade: 20, endereco: { rua: 'dos bobos'}}       
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')
       })
    it('Invoke',()=>{
        const getValue = () => 1;
        const soma = (a,b) => a + b;

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn',2, 5).should('be.equal', 7)
        
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val','texto via invoque')

        cy.window().invoke('alert','da pra ver')
        cy.get('#resultado')

        
    })
    // pegando o titulo de uma pagina colocando em um campo
    it.only('Titulo',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        let syncTitle
        cy.title().then(title =>{
            console.log(title)
    
            cy.get('#formNome').type(title)
            syncTitle = title
        })
        cy.get('[data-cy=dataSobrenome]').then($el =>{
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el =>{
            cy.wrap($el).type(syncTitle)
        })
    
})
})