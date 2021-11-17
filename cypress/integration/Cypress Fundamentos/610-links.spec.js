/// <reference types="cypress"/>

describe('Link powered-by nos forms embedados de materiais dos blogs/épicas', () =>{
    
 
    it('Validando o link na pagina Budget do marketing',()=>{
       
    cy.visit('https://resdigitaisstg.wpengine.com/blog/budget-do-marketing/')
        
    cy.get('[href="https://materiais.resultadosdigitais.com.br/gerador-de-formularios-para-blog"]').should('exist')
    })
   

    it('Validando o link na pagina CRO (Otimização de Conversão)',()=>{
       
      cy.visit('https://resdigitaisstg.wpengine.com/especiais/o-que-e-cro/')
    
      cy.get('[href="https://materiais.resultadosdigitais.com.br/gerador-de-formularios-para-blog"]').should('exist')
   })
   


   it('Validando o link na pagina De Agencias de resultados',()=>{
     
        cy.visit('https://resdigitaisstg.wpengine.com/agencias/agencia-digital-de-resultados/')
    
        cy.get('[href="https://materiais.resultadosdigitais.com.br/gerador-de-formularios-para-blog"]').should('exist')

})

   
})