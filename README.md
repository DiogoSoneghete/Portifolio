# 💻 Portfólio Profissional - Diogo Soneghete de Almeida

Portfólio web profissional, moderno, acessível e responsivo desenvolvido para **Diogo Soneghete de Almeida**, Desenvolvedor Full-Stack especialista em React, TypeScript, Node.js, Python, Supabase e Infraestrutura de TI.

---

## 🌟 Recursos do Projeto

- **HTML5 Semântico**: Tags semânticas (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`) otimizadas para motores de busca e leitores de tela.
- **Tailwind CSS**: Estilização moderna e responsiva baseada no Tailwind CSS CDN com suporte a tema escuro/claro nativo.
- **Vanilla JavaScript**: Lógica leve sem dependências pesadas, cobrindo menu mobile, filtros em tempo real, modais acessíveis e busca.
- **Acessibilidade WCAG 2.1 AA**: Suporte a teclado (`Tab`/`Esc`), atributo `skip-link`, labels semânticos, foco visível e respeito a `prefers-reduced-motion`.
- **Modo Escuro & Claro**: Alternância com persistência de preferência no `localStorage`.
- **SEO Completo**: Metatags Open Graph, Twitter Cards, Canonical URL e Dados Estruturados Schema.org (`Person`).
- **Performance de Elite**: Imagens otimizadas, carregamento rápido e zero dependências desnecessárias.

---

## 📁 Estrutura de Pastas

```text
Portifolio/
├── index.html               # Estrutura principal da aplicação
├── styles.css               # Estilos complementares e animações
├── script.js                # Lógica interativa em Vanilla JS
├── README.md                # Documentação completa do projeto
└── assets/
    ├── images/              # Imagens (foto-perfil.jpg, etc.)
    └── documents/           # Currículo em formato PDF/DOC
```

---

## 🚀 Como Executar Localmente

### Opção 1: Direto no Navegador
Como o projeto utiliza Tailwind CSS via CDN e Vanilla JS puro, basta dar um duplo clique no arquivo `index.html` ou abri-lo em qualquer navegador moderno.

### Opção 2: Com VS Code Live Server (Recomendado)
1. Abra a pasta `Portifolio` no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito sobre o `index.html` e selecione **"Open with Live Server"**.

---

## ✏️ Guia de Personalização

### 1. Como alterar os dados pessoais
Abra o arquivo `index.html` e modifique os textos nas seções correspondentes:
- **Nome e Cargo**: Edite a tag `<h1>` e `<p>` na seção `#home`.
- **Sobre Mim**: Edite os parágrafos dentro da seção `#sobre`.
- **Habilidades**: Adicione ou remova badges dentro do contêiner `#skills-container`.

### 2. Como trocar a foto profissional
1. Substitua a imagem existente em `assets/images/foto-perfil.jpg` por uma nova imagem de sua preferência.
2. Certifique-se de salvar a nova imagem com o mesmo nome (`foto-perfil.jpg`) ou atualize a tag `<img>` no `index.html`.

### 3. Como adicionar novos projetos
1. No `index.html`, copie a estrutura de um `<article>` dentro de `#projects-grid` e modifique os atributos `data-project-id` e `data-tags`.
2. No `script.js`, adicione o id correspondente ao objeto `projectsData`:
```javascript
meuNovoProjeto: {
  category: "Minha Categoria",
  title: "Nome do Novo Projeto",
  description: "Descrição completa...",
  problem: "Desafio resolvido...",
  result: "Resultado obtido...",
  techs: ["React", "Node.js"]
}
```

### 4. Como adicionar uma seção de Clientes (Opcional)
Caso queira exibir depoimentos ou logotipos de clientes atendidos, descomente ou crie uma nova seção `<section id="clientes">` com a permissão prévia do cliente.

### 5. Como alterar a paleta de cores
No início do `index.html`, altere o script de configuração do Tailwind CSS:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#06b6d4', // Altere a cor primária aqui
        }
      }
    }
  }
}
```

### 6. Como configurar o formulário de contato (Envio Real de E-mails)
O formulário de contato já possui validação nativa e animações. Para conectar a um serviço gratuito de recebimento de e-mails:

#### Opção A: Formspree
1. Crie uma conta gratuita em [formspree.io](https://formspree.io/).
2. Adicione os atributos ao formulário no `index.html`:
```html
<form id="contact-form" action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
```

#### Opção B: FormSubmit
1. Substitua a tag `<form>` por:
```html
<form id="contact-form" action="https://formsubmit.co/diogosonegueti@gmail.com" method="POST">
```

---

## 🌐 Guia de Publicação (Deploy)

### 1. Publicar no GitHub Pages
1. Crie um repositório no GitHub chamado `portifolio` ou `diogosoneghete.github.io`.
2. Envie seus arquivos via terminal:
```bash
git init
git add .
git commit -m "Initial commit - Portfólio Diogo Soneghete"
git branch -M main
git remote add origin https://github.com/DiogoSoneghete/portifolio.git
git push -u origin main
```
3. Vá em **Settings > Pages** no seu repositório no GitHub e selecione a branch `main`.

### 2. Publicar na Vercel
1. Acesse [vercel.com](https://vercel.com/) e faça login com seu GitHub.
2. Clique em **"Add New Project"** e selecione o repositório do portfólio.
3. Clique em **"Deploy"**.

### 3. Publicar no Netlify
1. Acesse [netlify.com](https://netlify.com/).
2. Arraste a pasta `Portifolio` diretamente para a área de deploy do Netlify.

### 4. Conectar Domínio Próprio
Nas configurações da Vercel/Netlify/GitHub Pages, acesse a aba **"Domains"** e adicione seu domínio personalizado (ex: `diogosoneghete.dev`), inserindo os apontamentos DNS CNAME/A no seu provedor de domínio.

---

## 🔒 Privacidade e SEO

- O portfólio inclui apenas contatos autorizados publicamente.
- Para atualizar metatags SEO (OpenGraph e Twitter Cards), modifique o cabeçalho `<head>` do `index.html`.

---

## 📜 Licença
Projeto desenvolvido para uso profissional de **Diogo Soneghete de Almeida**. Todos os direitos reservados.
