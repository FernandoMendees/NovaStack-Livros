# 📚 NovaStack Livros

Aplicação web para gerenciamento de livros com autenticação de usuário, desenvolvida com **HTML, CSS e JavaScript puro**, consumindo uma **API REST**.

---

## 🚀 Sobre o projeto

O NovaStack Livros é uma aplicação front-end estruturada para simular um fluxo real de sistema com autenticação e consumo de API.

O projeto foca em:

- Manipulação do DOM  
- Organização de código em múltiplos arquivos  
- Separação de responsabilidades (pages, styles, utils, API)  
- Consumo de API REST  
- Controle de autenticação no cliente  

---

## 🧠 Funcionalidades

- Sistema de autenticação (login e cadastro)  
- Consumo de API para operações da aplicação  
- Armazenamento de token no navegador  
- Navegação entre páginas  
- Manipulação de dados com JavaScript  
- Tratamento de erros reutilizável  

---

## 🏗️ Estrutura do projeto
BIBLIO/
│
├── API/
│ ├── auth.js
│ └── token.js
│
├── js/
│ └── script.js
│
├── pages/
│ ├── cadastro.html
│ ├── livros.html
│ └── login.html
│
├── styles/
│ ├── livros.css
│ ├── login.css
│ └── style.css
│
├── utils/
│ ├── menu.js
│ ├── resetButton.js
│ └── showError.js
│
├── index.html
└── README.md


---

## 🧩 Organização do código

### 📁 API/
Responsável pela comunicação com o backend:

- `auth.js` → requisições de autenticação  
- `token.js` → gerenciamento do token no navegador  

---

### 📁 js/
Responsável pela lógica da aplicação:

- Integração com a API  
- Manipulação do DOM  
- Controle do fluxo da aplicação  

---

### 📁 pages/
Contém as páginas da aplicação:

- `login.html` → autenticação  
- `cadastro.html` → criação de conta  
- `livros.html` → área principal  

---

### 📁 styles/
Arquivos de estilização:

- `style.css` → estilos globais  
- `login.css` → estilos de autenticação  
- `livros.css` → estilos da página de livros  

---

### 📁 utils/
Funções reutilizáveis:

- `menu.js` → controle de menu  
- `resetButton.js` → controle de estado de botões  
- `showError.js` → exibição de erros  

---

## 🔐 Autenticação

A aplicação utiliza autenticação baseada em token:

- O token é retornado pela API após login/cadastro  
- O token é armazenado no **LocalStorage**  
- O uso do LocalStorage é exclusivo para manter o usuário autenticado  

---

## 🌐 Consumo de API

A aplicação consome uma API REST para:

- Autenticação de usuários  
- Operações da aplicação  

As requisições são organizadas em módulos para melhor manutenção.

---

- Este projeto reflete meu nível atual de conhecimento, sendo construído com foco na aplicação prática dos conceitos estudados e na evolução contínua como desenvolvedor.

## ▶️ Como executar

```bash
git clone https://github.com/FernandoMendees/NovaStack-Livros.git
