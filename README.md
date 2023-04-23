# FIAPNews (React Native)
### _25MOB [343956]_

![react](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

FIAPNews - Aplicativo feito para o trabalho da matéria de React Native lecionada por Adonai Pinheiro, 
onde é possivel por meio de consumo de API a exibição e busca de noticias relacionadas ao que desejar, 
podendo tambem vê-la por inteiro no navegador favorito ao acessar o artigo

## Features

- Exibição das noticias em formato de lista, com imagens e breve descrição
- Função de buscar as noticias de acordo com o termo que desejar
- Possibilidade de ver a noticia completa no navegador ao clicar nela
- Possibilidade de alterar a chamada da API ao seu gosto (explicações abaixo)

## API e Manipulação

A API utilizada nesta aplicação é a [NewsAPI], agregadora de noticias globais com diversos parametros a 
serem escolhidos de acordo com o que é preciso. Alguns parametros como país, linguagem e categorias porem 
ser utilizadas para personalizar a experiência, tornando esta uma das melhores APIs para este fim. 

Para manipular a resposta da API no aplicativo, basta alterar o arquivo newsapi de acordo com a sua 
chave e os parametros que desejar:

![utils](https://i.ibb.co/JtZqgC7/image.png)


## Pacotes


| Pacote | Descrição | Link |
| ------ | ------ | ------ |
| react-native-paper | Necessário para criação de alguns componentes estilizados | [React Native Paper]
| react-navigation | Necessário para criação de recursos de navegação | [React Navigation]

## Exemplos

https://user-images.githubusercontent.com/11656986/233812926-aadfd11d-b95f-48bb-9239-dde7d3189d0e.mp4

<img src="https://i.ibb.co/QJ6RvcP/IMG-20230422-212548.jpg" width="300"> <img src="https://i.ibb.co/6wsRjxD/IMG-20230422-212515.jpg" width="300">

[//]: #
[React Native Paper]: <https://github.com/callstack/react-native-paper>
[React Navigation]: <https://reactnavigation.org/>
[NewsAPI]: <https://newsapi.org/>
