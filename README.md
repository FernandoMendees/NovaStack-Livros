# 📚 NovaStack Livros

Aplicação web simples para gerenciamento de livros, desenvolvida com **HTML, CSS e JavaScript puro**, com navegação entre páginas e persistência de dados no navegador.

---

## 🚀 Sobre o projeto

O **NovaStack Livros** é um projeto focado na prática de conceitos fundamentais do desenvolvimento front-end, incluindo:

- Manipulação do DOM
- Organização de código em múltiplos arquivos
- Separação de responsabilidades (pages, styles, utils)
- Persistência de dados com LocalStorage

---

## 🧠 Funcionalidades atuais

-  Página principal (`index.html`)
-  Página dedicada para livros (`pages/livros.html`)
-  Organização modular do JavaScript
-  Uso de LocalStorage para armazenamento de dados
-  Manipulação de dados estruturados (provavelmente objetos/arrays)
-  Menu reutilizável (`utils/menu.js`)

---

## 🏗️ Estrutura do projeto

BIBLIOTECA/

│

├── index.html

│

├── pages/

│ └── livros.html

│

├── js/

│ └── script.js

│

├── styles/

│ ├── style.css

│ └── livros.css

│

└── utils/

└── menu.js


---

## 🧩 Organização do código

### 📁 `pages/`
Contém páginas secundárias da aplicação, como a área de livros.

### 📁 `js/`
Responsável pela lógica principal da aplicação:
- Manipulação de dados
- Interação com o DOM
- Integração com LocalStorage

### 📁 `styles/`
Arquivos de estilização separados por contexto:
- `style.css` → estilos globais (mais focado no index.html)
- `livros.css` → estilos específicos da página de livros

### 📁 `utils/`
Funções reutilizáveis:
- `menu.js` → controle de menu

---

## ▶️ Como executar

1. Clone o repositório:
```bash
git clone https://github.com/FernandoMendees/NovaStack-Livros.git
