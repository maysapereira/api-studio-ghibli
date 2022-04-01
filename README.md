<br />
<p align="center">
  <h1 align="center">API - Filmes do Studio Ghibli</h1>
 <br />
  <p align="center">SUMÁRIO<p align="center">
    <a href="#sobre-a-aplicação"> Sobre </a> |
    <a href="#ferramentas-utilizadas">Ferramentas utilizadas</a> |
    <a href="#dependências"> Dependências </a> |
    <a href="#inicialização-da-aplicação"> Inicialização </a> |
    <a href="#rotas-da-aplicação"> Rotas</a>
       <br />
    <br />
  </p>
</p>

![365-Filmes-Magia-Studio-Ghibli-Hayao-Miyazaki](https://user-images.githubusercontent.com/93635431/161331620-4f87f6aa-9ccd-45ff-86ca-e1884eb0c0ee.jpg)

#### ⚠️  IMPORTANTE ⚠️ 

A API está totalmente funcional e você pode testa-la seguindo os passos a seguir, mas ela não está finalizada. A API está em construção e será refatorada em breve.

# Sobre a aplicação:

API criada para fins de estudos, para a fixação dos conhecimentos sobre API REST, métodos HTTP, banco de bandos e padrão MVC.

Nessa API são encontrados todos os filmes de longa metragem do estúdio de animação japonês *Studio Ghibli*.

#### Informações disponíveis:

- **Nome original do filme (em japonês)**
- **Nome do filme em português**
- **Ano de lançamento**
- **Gênero**
- **Direção**
- **Produção**
- **Roteiro**



# Ferramentas utilizadas

Para o desenvolvimento foi utilizado **JavaScript** com **NodeJS** como linguagem da aplicação e o **Express** como framework.Como bando de dados foi utilizado o **SQLite**.

O editor de código utilizado foi o **VSCode Studio** e para testes durante o desenvolvimento foram utilizadas o framework **nodemon** e o API Design Tool **Insomnia**.

O **Gitemoji** também foi utilizado para uma melhor organização e compreensão dos commits.

# Dependências


```.json
 "dependencies": {
    "express": "^4.17.3",
    "sqlite": "^4.0.25",
    "sqlite3": "^5.0.2"
  },
  ```

As dependências podem ser encontradas [neste arquivo](https://github.com/maysapereira/api-studio-ghibli/blob/main/package.json) e para instalar basta rodar o comando abaixo e colar no terminal. Isso criará um clone deste repositório e instalar as dependencias necessárias.

```.shell
  git clone https://github.com/maysapereira/api-studio-ghibli.git && cd api-studio-ghibli && npm install
  ```

# Dependências de desenvolvimento

As dependências de desenvolvimento podem ser encontradas [neste arquivo](https://github.com/maysapereira/api-studio-ghibli/blob/main/package.json). Caso deseje instala-las rode o comando abaixo e cole no terminal logo após o comando das dependencias obrigatórias.

```.shell
npm install --save-dev nodemon
```
# Inicialização da aplicação:

Para iniciar a aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.

```.shell
npm start
```

# Rotas da aplicação:

**[GET]** /filmes - A rota exibirá todos os filmes <br>
**[GET]** /filme/:id - Busca apenas um filme baseado em seu ID  <br>
**[POST]** /filmes - A rota adiciona um novo filme com base nas informações passadas no corpo da requisição. <br>
**[PUT]** /filmes/:id - A rota atualizará um filme com as informações passadas no corpo da requisição <br>
**[DELETE]** /filmes/:id - A rota deletará um pedido baseado em seu ID.
