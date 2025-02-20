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

When eu preencho o campo "Nome" com "Marcela Morales"
and eu preencho o campo "Email" com "marceladefranceschi@gmail.com"
and eu preencho o campo "Cargo" com "Analista de teste"
and eu preencho o campo "Telefone" com "(48)991854484"
and eu preencho o campo "Empresa" com "Narwal Sistemas"
and eu seleciono no campo "Qual segmento" com a opção "3"
Then eu não devo submeter o formulario (evitando enviar informações, sempre enviar para testes)
and o formulário deve permanecer na página
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
});
