// Aula 30 - Alert
/// <reference types="cypress"/>


describe('Trabalhando com alerts',() =>{
    // Before executa a ação antes do primeiro teste
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
   // beforeEach executa a ação antes de cada teste 
    beforeEach(()=>{
        cy.reload()
        // teste
        beforeEach(()=>{
            cy.reload()
            
        })
    })
    // trabalhando com alert em msg e fazendo uma acertiva no texto
    it('alert',()=>{
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })
    // aula 31 - usando stub para substituir o metodo acima 
    it('alert com mock',()=>{
        const stub= cy.stub ().as('Alerta') // dando nome aos metodos com AS
        cy.on('window:alert',stub)
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
       
    })

    // aula 33 - confirma
    it('Confirme',()=>{
        cy.get('#confirm').click()

        cy.on('window:confirm', msg => {        
            expect(msg).to.be.equal('Confirm Simples')
        })

        cy.on('window:alert', msg => {        
            expect(msg).to.be.equal('Confirmado')
        })
    })

    it('negando',()=>{
        cy.get('#confirm').click()

        cy.on('window:confirm', msg => {        
            expect(msg).to.be.equal('Confirm Simples')
            return false // usando o return para negar o confirm
        })
        
        cy.on('window:alert', msg => {        
            expect(msg).to.be.equal('Negado')
        })
    })

// aula 34 - prompt
    it('Prompt',()=>{
        cy.window().then(win =>{
            cy.stub(win, 'prompt').returns('41')
        })

     /  cy.on('window:confirm', msg => {        
           expect(msg).to.be.equal('Era 41?')
         })

       cy.on('window:alert', msg => {        
            expect(msg).to.be.equal(':D')
       })

     cy.get('#prompt').click()
    })

    it("Desafio do cadastrar",()=>{
        cy.get('#formCadastrar').click()

        cy.on('windows:alert', msg=>{
            expect(msg).to.be.equal('Nome eh obrigatorio')
        })
        cy.get('#formNome').type('Bruno')      
        
        
        cy.get('#formCadastrar').click()
    

        cy.on('windows:alert', msg1=>{
            expect(msg1).to.be.equal('Sobre')
        })
        
    
    })

})