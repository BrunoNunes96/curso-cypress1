/// <reference types="cypress" />



describe.only('Cypress Basic',()=>{
    it('Deve acessar uma pagina e fazer uma acertiva no titulo',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

       // pause: serve para parar e executar o teste passo a passo
       // debug: mostra informações do ponto selecionado
       cy.title().should('be.equal','Campo de Treinamento') // fazendo assertivas com should
       cy.title().should('contain', 'Campo')

        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .end('contain', 'Campo')

        cy.title().then(title =>{
            console.log(title)
        })

})
// verificando o botao de uma pagina, realizando click e desencadeando varios shoulds
it('Deve encontrar e interagir com elemento',()=>{
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('#buttonSimple')
    .click()
    .should('have.value', 'Obrigado!')

})


})