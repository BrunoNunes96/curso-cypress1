/// <reference types="cypress"/>

describe('Testar a nivel funcional',() => {

    // acessando o link da aplicação e ja fazendo login
    before(() =>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control').type('bruno_nunes96@outlook.com')
        cy.get(':nth-child(2) > .form-control').type('bruno36532121')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')

    })
// enserindo a conta apenas uma vez
    it('Inserir conta',()=>{
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta de teste')
        cy.get('.btn').click()
        cy.get('.toast').should('contain', 'inserida com sucesso')
        
    })

    it.only('Deve alterar uma conta',()=>{
       cy.xpath("//table//td[contains(.,'Conta de teste')]/..//i[@class='far fa-edit']").click()
    })
})
