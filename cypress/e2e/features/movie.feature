Feature: Cadastro de Conteúdo
    As a usuário
    I want to adicionar novos filmes e séries ao catálogo
    So that os demais usuários possam fazer reviews ligados a esses filmes ou séries

Scenario: Acessar a página de cadastrar novo filme
    Given que o usuário com email "polita@email.com" e senha "12345678" está logado no sistema 
    And ele está na página de visualização de filmes
    When seleciona o botão de cadastrar filmes
    Then ele é redirecionado para a página de cadastro de filme

Scenario: Cadastrar um filme inexistente no banco de dados
    Given que o usuário com email "polita@email.com" e senha "12345678" está logado no sistema 
    And ele está na página de cadastro de filme
    When preenche a coluna "movieTitle" com "Lilo e Stitch"
    And preenche a coluna "movieGenre" com "Animação"
    And marca a opção "12" para "movieRating"
    And seleciona o botão "foto"
    And preenche o formulário de imagem com "https://m.media-amazon.com/images/I/81bvz45J54L._AC_UF1000,1000_QL80_.jpg" 
    And seleciona o botão da esquerda "Salvar"
    And seleciona o botão "env"
    Then aparece uma mensagem de confirmação que o filme foi cadastrado com sucesso

Scenario: Cadastrar um filme já existente no banco de dados
    Given que o usuário com email "polita@email.com" e senha "12345678" está logado no sistema 
    And ele está na página de cadastro de filme
    When preenche a coluna "movieTitle" com "Lilo e Stitch"
    And preenche a coluna "movieGenre" com "Animação"
    And marca a opção "10" para "movieRating"
    And seleciona o botão "foto"
    And preenche o formulário de imagem com "https://m.media-amazon.com/images/I/81bvz45J54L._AC_UF1000,1000_QL80_.jpg" 
    And seleciona o botão da esquerda "Salvar"
    And seleciona o botão "env"
    Then aparece uma mensagem de erro avisando que o filme não foi cadastrado

Scenario: Cadastrar um filme com dados insuficientes
    Given que o usuário com email "polita@email.com" e senha "12345678" está logado no sistema 
    And ele está na página de cadastro de filme
    When preenche a coluna "movieTitle" com "Lilo e Stitch"
    And preenche a coluna "movieGenre" com "Animação"
    And marca a opção "10" para "movieRating"
    And seleciona o botão "env"
    Then aparece uma mensagem de erro avisando que o filme não foi cadastrado