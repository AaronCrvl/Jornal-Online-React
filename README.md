# Jornal-Online-React
 
Esta é uma single page application que utiliza um api que retorna dados sobre notícias, estes dados são utilizados para construir a composição e o flow da página. O projeto foi feito utilizando JS, HTML e CSS assim como a biblioteca do React e algumas de suas features.

Segue link para consulta abaixo:
https://newsapi.org/  


## Detalhes Técnicos
Futuramente o projeto será adaptado para que o próprio usuário entre com uma chave da API. Atualmente o mesmo utiliza a biblioteca do Express - https://www.react.express/ -  para executar a aplicação na porta 3000 e o Axios -https://www.npmjs.com/package/axios- para realizar as requisições da API.

A montagem dos blocos de notícia é feita de forma dinâmica conforme a busca ou seleção do usuário.

Existe uma limitação no texto da notícia retornado pela API, desta forma, a aplicação permite que o usuário veja uma preview da notícia ou abra o link da notícia completo em uma nova janela, isso o redireciona para o site que publicou a notícia.

## Funcionamento
O conceito utilizado aqui foi dar prioridade aos "Controles", estes ficam responsáveis por todas as alterações no grid de notícias em tela, desta forma, nenhum outro grupo pode ou deve fazer essas alterações. Os "Componentes" ficam responsáveis por responder a todas as ações nativas e em sua estrutura, como clique em um botão ou seleção de opção.

## Prints
Tela 1: https://github.com/AaronCrvl/Jornal-Online-React/blob/main/prints/Tela1.png

Tela 2: https://github.com/AaronCrvl/Jornal-Online-React/blob/main/prints/Tela2.png

## Autor
- [@AaronCrvl](https://www.github.com/AaronCrvl)
