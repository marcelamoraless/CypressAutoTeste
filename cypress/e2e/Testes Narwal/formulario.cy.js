/// <reference types="Cypress"/>

/*
Feature: Teste do formulario

Scenario: Acessar o formulário de contato com sucesso
Given o usuário está na página inicial do site
When o usuário clica no link "Contato" no menu
Then o sistema deve exibir o formulário de contato

Scenario: Preencher o formulário de contato sem enviar
Given que acessei a página principal do site "Narwal Sistemas"
When eu clico no botão "Solicite uma demonstração"
Then eu devo acessar a página do site Narwal "/contato"

When o usuário preenche o campo "Nome" com "Marcela Morales"
and o usuário preenche o campo "Email" com "marceladefranceschi@gmail.com"
and o usuário preenche o campo "Cargo" com "Analista de teste"
and o usuário preenche o campo "Telefone" com "(48)991854484"
and o usuário preenche campo "Empresa" com "Narwal Sistemas"
and o usuário seleciona no campo "Qual segmento" com a opção "3"
Then o usuário não deve submeter o formulario (evitando enviar informações, sempre enviar para testes)
and o formulário deve permanecer na página

Não realizei o envio para não estar enviando formularios mas num ambiente interno de teste estaria realizando normalmente
Scenario: Enviar o formulário com sucesso
Given o usuário está na página do formulário de contato
When o usuário clica no botão "Enviar" com os campos obrigatórios preenchidos
Then o sistema deve exibir mensagens de sucesso

Scenario: Preencher o email com um email invalido
Given o usuario esta na pagina do formulário de contato 
And usuario preenche campo de email com um email invalido
When usuario clicar no botao enviar
Then sistema deve acusar erro no campo email
*/

describe('Teste de preenchimento do formulário para contato', () => {
    it('Preencher o formulário de contato sem enviar', () => {
        cy.visit('https://www.narwalsistemas.com.br/')
        cy.viewport(1280, 800)

        cy.contains('SOLICITE UMA DEMONSTRAÇÃO').click()
        cy.url().should('include', '/contato')

        cy.get('#rd-text_field-m4l7psxi').type('Marcela Morales')
        cy.get('#rd-text_field-m4l7psxi').type('marceladefranceschi@gmail.com')
        cy.get('#rd-text_field-m4l7psxk').type('Analista de teste')
        cy.get('#rd-phone_field-m4l7psxl').type('(48)991854484')
        cy.get('#rd-text_field-m4l7psxm').type('Narwal Sistemas')
        cy.get('#rd-select_field-m4l7psxn').select(3)

    });

    it('Preencher o formulario com o email invalido', () => {
        cy.visit('https://www.narwalsistemas.com.br/')
        cy.viewport(1280, 800)

        cy.contains('SOLICITE UMA DEMONSTRAÇÃO').click()
        cy.url().should('include', '/contato')

        cy.get('#rd-text_field-m4l7psxi').type('Marcela Morales')
        cy.get('#rd-email_field-m4l7psxj').type('teste@teste') //email invalido
        cy.get('#rd-text_field-m4l7psxk').type('Analista de teste')
        cy.get('#rd-phone_field-m4l7psxl').type('(48)991854484')
        cy.get('#rd-text_field-m4l7psxm').type('Narwal Sistemas')
        cy.get('#rd-select_field-m4l7psxn').select(3)
        cy.get('#rd-button-m4ikgof1').click()
        cy.get('#rd-email_field-m4l7psxj').should('have.css', 'border-color', 'rgb(255, 0, 0)')

    })
});
