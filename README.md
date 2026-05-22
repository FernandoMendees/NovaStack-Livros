📚 NovaStack Livros

Aplicação web para gerenciamento de livros com autenticação de usuário, desenvolvida com HTML, CSS e JavaScript puro, consumindo uma API REST.

🚀 Sobre o projeto

O NovaStack Livros é uma aplicação front-end estruturada para simular um sistema real com autenticação e múltiplos módulos organizados.

O projeto foca em:

- Manipulação do DOM
- Organização escalável de código
- Separação de responsabilidades
- Consumo de API REST
- Controle de autenticação no cliente

🧠 Funcionalidades

- Sistema de autenticação (login e cadastro)
- Armazenamento de token no navegador (LocalStorage)
- Consumo de API para diferentes recursos
- Navegação entre páginas
- Manipulação dinâmica de dados
- Tratamento de erros reutilizável
- Estrutura modular para crescimento

🏗️ Estrutura do projeto

BIBLIOTECA/
│
├── API/
│   ├── request/
│   │   ├── auth.js
│   │   ├── books.js
│   │   ├── clients.js
│   │   └── token.js
│   │
│   └── js/
│       ├── clientes.js
│       └── script.js
│
├── pages/
│   ├── dashboard/
│   │   ├── catalogo.html
│   │   ├── clientes.html
│   │   ├── emprestimos.html
│   │   └── itens.html
│   │
│   ├── cadastro.html
│   └── login.html
│
├── styles/
│   ├── dashboard.css
│   ├── login.css
│   └── style.css
│
├── utils/
│   ├── menu.js
│   ├── resetButton.js
│   └── showError.js
│
├── index.html
└── README.md

🧩 Organização do código

📁 API/request/
Responsável pelas requisições à API:

- auth.js → autenticação de usuários
- books.js → operações relacionadas a livros
- clients.js → operações relacionadas a clientes
- token.js → gerenciamento de token

📁 js/
Responsável pela lógica de integração:

- Manipulação do DOM
- Integração com API
- Controle de fluxo da aplicação

📁 pages/
Estrutura das páginas da aplicação:

- login.html → autenticação
- cadastro.html → criação de conta
- dashboard/ → área principal do sistema
  - catalogo → listagem de livros
  - clientes → gerenciamento de clientes
  - emprestimos → controle de empréstimos
  - itens → itens cadastrados

📁 styles/
Arquivos de estilização:

- style.css → estilos globais
- login.css → autenticação
- dashboard.css → páginas internas

📁 utils/
Funções reutilizáveis:

- menu.js → controle de navegação/menu
- resetButton.js → controle de estado de botões
- showError.js → tratamento e exibição de erros

🔐 Autenticação

A aplicação utiliza autenticação baseada em token:

- Token retornado pela API após login/cadastro
- Armazenamento no LocalStorage
- Uso exclusivo para manter o usuário autenticado

🌐 Consumo de API

A aplicação consome uma API REST para:

- Autenticação de usuários
- Gerenciamento de livros
- Gerenciamento de clientes
- Operações do sistema (empréstimos, itens, etc.)

As requisições são organizadas em módulos para facilitar manutenção e escalabilidade.

💡 Observação

O uso do LocalStorage é apenas para persistência de autenticação, não sendo utilizado como banco de dados da aplicação.

🧠 Sobre o desenvolvimento

Este projeto reflete meu nível atual de conhecimento, sendo desenvolvido com foco em:

- Aplicação prática dos conceitos estudados
- Evolução contínua como desenvolvedor
- Estruturação de projetos reais

▶️ Como executar

```bash
git clone https://github.com/FernandoMendees/NovaStack-Livros.git
