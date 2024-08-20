
# Controle de Estado em React

Este projeto demonstra diferentes abordagens para gerenciamento de estado em React, incluindo `Context API`, `Redux`, `Zustand`, e `React Query`. Cada abordagem é implementada em uma pasta separada, com exemplos práticos e explicações de como cada técnica funciona.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js
- npm (ou yarn)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/gerps2/controle-estado-react.git
   cd controle-estado-react
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

## Bibliotecas Utilizadas

- **React**: Biblioteca para criação de interfaces de usuário.
- **React DOM**: Pacote de renderização para React na web.
- **React Router DOM**: Utilizado para gerenciamento de rotas.
- **Redux**: Biblioteca para gerenciamento de estado global.
- **React Redux**: Integração do Redux com React.
- **Zustand**: Biblioteca leve para gerenciamento de estado global.
- **React Query**: Biblioteca para gerenciamento de estado assíncrono e requisições HTTP.
- **Vite**: Ferramenta de build para desenvolvimento rápido de projetos frontend.

## Estrutura de Pastas

- **/src**: Contém todo o código fonte do projeto.
  - **/paginas**: Contém as diferentes implementações de gerenciamento de estado.
    - **/EstadoGlobalContextApi**: Exemplo de gerenciamento de estado global usando Context API.
    - **/EstadoGlobalRedux**: Exemplo de gerenciamento de estado global usando Redux.
    - **/EstadoGlobalZustand**: Exemplo de gerenciamento de estado global usando Zustand.
    - **/EstadoHttp**: Exemplo de gerenciamento de estado HTTP usando React Query.
    - **/EstadoLocal**: Exemplo de gerenciamento de estado local usando React Hooks.

## Explicação das Abordagens

### Context API

A Context API permite o gerenciamento de estado global sem a necessidade de passar props manualmente para cada componente. No exemplo, utilizamos um contexto para alternar entre temas claro e escuro.

### Redux

Redux é uma biblioteca popular para gerenciamento de estado global em aplicações React. No exemplo, o Redux é utilizado para gerenciar o estado do tema, permitindo alternância entre temas claro e escuro de forma centralizada.

### Zustand

Zustand é uma alternativa leve ao Redux para gerenciamento de estado global. No exemplo, Zustand é utilizado para controlar o tema da aplicação, proporcionando uma API simples e intuitiva.

### React Query

React Query é utilizado para gerenciamento de estado assíncrono e requisições HTTP. No exemplo, utilizamos React Query para buscar repositórios de um usuário no GitHub, mostrando como o estado é gerenciado em requisições HTTP.

### Estado Local com React Hooks

O estado local é gerenciado dentro de um componente específico usando React Hooks, como `useState` e `useReducer`. No exemplo, criamos uma calculadora que utiliza esses hooks para gerenciar o estado da aplicação.

## Contribuindo

Sinta-se à vontade para abrir issues e pull requests para melhorias no projeto.

## Licença

Este projeto está licenciado sob a licença MIT.
