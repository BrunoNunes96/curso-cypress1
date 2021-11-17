/// <reference types="cypress"/>


describe('Testes dinamicos',() =>{
    
    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']

    // rodando o teste dentro de um for para selecionar as comidas aleatoriamente
    foods.forEach(food =>{

        it(`Cadastro com comida ${food}`,() =>{
    
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get(`[name=formSexo][value=F]`).click()  // usando função do jS para marcar a opção
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select('Mestrado')
            cy.get('#formEsportes').select('Corrida')
    
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })

    })
    it.only('Deve selecionar todos usando o EACH',()=>{
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get(`[name=formSexo][value=F]`).click()  // usando função do jS para marcar a opção

            cy.get('[name=formComidaFavorita]').each($el =>{
                if($el.val()!= 'vegetariano');
                cy.wrap($el).click()
                
            })  

            cy.get('#formEscolaridade').select('Mestrado')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
            

    })

   
})