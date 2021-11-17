/// <reference types="cypress"/>

// titulo da analise/teste
describe(' Validar seção Benefício',()=>{

    // acessando link inicial da aplicação
    before(()=>{
        
        cy.visit('https://afiliados.rdstation.com/affiliates/login.php#login')
    })

    // validando pré-requisito da pagina e logando com usuario afiliado
    it(' Pré- Requisito: Logar com usuario afiliado',()=>{

        cy.get(':nth-child(1) > .FormField > .FormFieldInputContainer > .FormFieldInput > .TextBoxContainer > .TextBox').type('vinilaureto@gmail.com')
        cy.get(':nth-child(2) > .FormField > .FormFieldInputContainer > .FormFieldInput > .TextBoxContainer > .TextBox').type('teste123')
        cy.get('.ImLeButtonMainContent > .ButtonText').click()
        })

    it('Deve validar o texto " Benefício para seus indicados" ',()=>{

        // acessando seção e subseção pelos botos do menu
        cy.get(':nth-child(4) > .MenuBoxLeft > .MenuBoxRight > .MenuBoxContent > .MenuBoxLabel > .SectionMenuEntry > .MenuEntry').click()
        cy.get('.MenuBox-open > .MenuBoxLeft > .MenuBoxRight > .MenuBoxContent > .SubMenuSection > .SubMenuEntries').click()


        // validando os campos de texto
        cy.get('.panel_content > div > :nth-child(1)').should('contain', 'Todo lead que se tornar um cliente RD Station Marketing através de seu link de afiliado ganha um curso da RD University.')
        cy.get('.panel_content > div > :nth-child(2)').should('contain', 'Você não precisa fazer nada para participar: após assinar o RD Station Marketing, seu indicado receberá um e-mail com as instruções para escolher o curso.')
    })      

})  