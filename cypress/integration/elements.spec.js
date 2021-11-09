/// <reference types="cypress"/>




    // grupo de testes
describe('Trabalhando com os elementos basicos',() =>{
    // Before executa a ação antes do primeiro teste
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
   // beforeEach executa a ação antes de cada teste 
    beforeEach(()=>{
        cy.reload()
    })
    //================trabalhando com os textos ==================================
    it('Text',() =>{      
        cy.get('body')
            .should('contain', 'Cuidado')  // buscando um texto dentro do body
        cy.get('span')
            .should('contain', 'Cuidado') 
        cy.get('.facilAchar')
            .should('contain', 'Cuidado')
        cy.get('.facilAchar')
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...') // com have.text tem que buscar o texto completo
    })

    it('Links', ()=>{
        cy.get('[href="#"]')
            .click()
        cy.get('#resultado')
            .should('have.text', 'Voltou!')

    cy.reload() // recarregou a pagina
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')


    })
    //=====================testando campos de texto ====================
    it('Campo de Texto',()=>{
        cy.get('#formNome').type('Cypress teste')
        cy.get('#formNome').should('have.value', 'Cypress teste')// com have.value consigo verfificar o que foi colocado no campo

        cy.get('#elementosForm\\:sugestoes')  // tratando com \\ os dois pontos
            .type('Area de Texto')
            .should('have.value', 'Area de Texto')
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('????') 
        // inserindo dados e apagando com backspace
        cy.get('[data-cy=dataSobrenome]')
            .type('teste12345{backspace}{backspace}')
            .should('have.value', 'teste123')


        cy.get('#elementosForm\\:sugestoes')
            .clear()// limpando tudo o que tem no campo
            .type('erro{selectall}acerto', {delay:100})  // fazendo um delay 
            .should('have.value', 'acerto')
    })
    //================trabalhando com radio button===================================
    it('RadioButton',()=>{
        cy.get('#formSexoFem')
            .click()
            .should('be.checked') // verificando se esta checado

        cy.get('#formSexoMasc')
            .should('not.be.checked')
        
    })
   // ============== testes de checkbox ================
    it('CheckBox',()=>{
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
        
        cy.get('[name=formComidaFavorita]').click({multiple:true})  // marcando multiplos checkbox
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })
    //================= trabalhando com combobox========================
    it('Combo',()=>{
        cy.get('[data-test=dataEscolaridade]')
            .select('2graucomp')
            .should('have.value', '2graucomp')

        cy.get('[data-test=dataEscolaridade] option')
            .should('have.length', 8)

        cy.get('[data-test=dataEscolaridade] option').then($arr =>{
            const values = []
            $arr.each(function(){
                values.push(this.innerHTML)
            })
        expect(values).to.include.members(["Superior","Mestrado"])

        })
        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp')
    })

    //================usando combos multiplos===================
    it.only('Combos multiplos',()=>{
      
        cy.get('[data-testid=dataEsportes]').then($el =>{
            expect($el.val()).to.be.deep.equal(['natacao', 'corrida', 'nada'])
        })
    })
})