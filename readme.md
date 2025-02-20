# Projeto de testes automatizados para Narwal

## Descrição

- Teste Front-end

Este é um projeto simples que contém dois testes automatizados realizados no site da Narwal Sistemas, utilizando o Cypress:

- Teste 1: Acessando o site e navegando pelo cabeçalho.

Feature: Navegando pela página principal
Scenario: Realizar acesso em todos os itens do cabeçalho
Given que acessei a página principal do site "Narwal Sistemas"

When eu clico no item "Clientes" no cabeçalho
Then eu devo acessar a página do site Narwal "/clientes"

When eu clico no item "Soluções" no cabeçalho
Then eu devo acessar a página do site Narwal "/solucoes"

When eu clico eu passo o mouse sob o item "Módulos" no cabeçalho
Then o submenu deve ser exibido
When eu clico no item "Trading" do submenu
Then eu devo acessar a página do site Narwal "/trading"

When eu clico no item "Inteligência Artificial" no cabeçalho
Then eu devo acessar a página do site Narwal "/inteligenciaartificial"

When eu clico no item "Becomex" no cabeçalho
Then eu devo acessar a página do site Narwal "/becomex"

When eu clico no item "Blog" no cabeçalho
Then eu devo acessar a página do site Narwal "/blog"
  
- Teste 2: Acessando o formulário de contato e preenchendo os campos.

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

Não realizei o envio para não estar enviando formularios mas num ambiente interno de teste estaria realizando normalmente
Scenario: Enviar o formulário com sucesso
Given o usuário está na página do formulário de contato
When o usuário clica no botão "Enviar" com os campos obrigatórios preenchidos
Then o sistema deve exibir mensagens de sucesso

## Requisitos

- Node.js
- Cypress (Instalado com `npm install cypress`)

## Como Executar

- Rodar 'npx Cypress run'

## Porque ter escolhido o Cypress?

Eu escolhi o framework Cypress pois é o framework que possuo mais facilidade e conhecimento, além de ser um framework muito popular e recomendado para automações de testes. 

## Contato

- Qualquer duvida ou sugestão, entrar em contato com Marcela Morales
