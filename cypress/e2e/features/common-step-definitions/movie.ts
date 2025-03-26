import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given(("ele está na página de visualização de filmes"), ()=>{
    cy.visit(`http://localhost:3000/pages/movies`);
})

Given(("ele está na página de cadastro de filme"), ()=>{
    cy.visit(`http://localhost:3000/pages/addMovie`);
})

When(("seleciona o botão de cadastrar filmes"), () =>{
    cy.get(`#cadastrar`).click();
})

When(("preenche a coluna {string} com {string}"), (coluna, entrada) =>{
    cy.get(`#${coluna}`).type(`${entrada}`);
})

When (("seleciona o botão {string}"), (button) => {
    cy.get(`#${button}`).click();
})

When(("preenche o formulário de imagem com {string}"),(imagem)=>{
    cy.get('input[placeholder="Cole a URL da imagem aqui"]')
          .type(`#${imagem}`);
})

When(("marca a opção {string} para {string}"), (input, dropdown) =>{
    cy.get(`#${dropdown}`)
    .select(`${input}`)
})

When (("seleciona o botão da esquerda {string}"), (button) => {
    cy.get('#modalButtons button').first().click();
})

Then(("ele é redirecionado para a página de cadastro de filme"), () =>{
    cy.url().should("include", "/pages/addMovie");
})

Then(("aparece uma mensagem de confirmação que o filme foi cadastrado com sucesso"), () =>{
    cy.get('#confirmationNotification') 
          .should('be.visible');
})


Then(("aparece uma mensagem de erro avisando que o filme não foi cadastrado"), () =>{
    cy.get('#errorNotification') 
          .should('be.visible');
})