/// <reference types="cypress"/>

describe('teste de login do facebook',()=>{
    beforeEach(()=>{
        
    })
    it('Testando widgets',()=>{
        cy.visit('https://resdigitaisstg.wpengine.com/')
        cy.get('#home-sidebar > .widget-signup > .widget-content > #rdm_test > #email').type("bruno_nunes92@outlook.com")
        cy.get('#home-sidebar > .widget-signup > .widget-content > #rdm_test > .btn-base').click()   
        cy.visit('https://app.rdstation.com.br/signup?trial_origin=rds_blog&_ga=2.11434484.1358757707.1636565568-378108872.1636565568')
       // it(' pagina de teste do RD Station',()=>{
       //     cy.visit('https://app.rdstation.com.br/signup?trial_origin=rds_blog&_ga=2.11434484.1358757707.1636565568-378108872.1636565568')
        })

    })      

