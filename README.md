# 👨‍💻 clodoaldo.dev

<img width="1920" height="1000" alt="screenshot-rocks" src="https://github.com/user-attachments/assets/7e928ff8-d7e0-4ef5-9994-9e916a41c9a5" />


> **Página pessoal com interface inspirada em editores de código**

Uma página pessoal moderna construída com Next.js, apresentando uma interface que simula um editor de código (VS Code-like), onde cada seção do portfólio é representada como um arquivo navegável.

## ✨ Características

- **Interface de Editor**: Design inspirado em editores de código modernos
- **Explorer Interativo**: Navegação através de uma estrutura de pastas/arquivos
- **Performance**: Construído com Next.js 15 e Turbopack
- **Command Menu**: Menu de comandos para navegação rápida
- **Markdown**: Conteúdo escrito em Markdown para facilitar edição
- **Syntax Highlighting**: Realce de sintaxe para código

## 🛠️ Tecnologias

- **Framework**: [Next.js 15](https://nextjs.org/) com App Router
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Sass/SCSS](https://sass-lang.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Syntax Highlighting**: [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- **Fonte**: [Space Mono](https://fonts.google.com/specimen/Space+Mono) (Google Fonts)
- **Linter/Formatter**: [Biome](https://biomejs.dev/)

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**
  ```bash
  git clone https://github.com/clodoaldodantas/clodoaldo.dev.git
  cd clodoaldo.dev
  ```

2. **Instale as dependências**
  ```bash
  npm install
  # ou
  yarn install
  # ou
  pnpm install
  ```

3. **Execute em desenvolvimento**
  ```bash
  npm run dev
  # ou
  yarn dev
  # ou
  pnpm dev
  ```

4. **Abra no navegador**
  Acesse [http://localhost:3000](http://localhost:3000)

### Scripts disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm run start

# Linting
npm run lint

# Formatação de código
npm run format
```

## 📝 Editando conteúdo

O conteúdo da página é gerenciado através de arquivos Markdown na pasta `src/content/`:

- **`about.md`** - Informações pessoais e links
- **`experiences.md`** - Experiência profissional  
- **`qualifications.md`** - Formação acadêmica
- **`courses.md`** - Cursos e certificações

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
