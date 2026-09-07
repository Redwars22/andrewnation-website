# ✒️ QalamStudio (ALPHA)

QalamStudio é um estúdio de escrita e gerenciador de histórias web, focado na experiência de autores romancistas. Projetado com uma interface inspirada no ecossistema Microsoft Word / Ribbon para desktop e uma experiência fluida e adaptada para dispositivos móveis.

[EXECUTAR NO NAVEGADOR](https://qalamstudio.vercel.app)

![QalamStudio - Captura de Tela 1](https://andrewnationdev.vercel.app/img/qalamstudio/1.png)
![QalamStudio - Captura de Tela 2]https://andrewnationdev.vercel.app/img/qalamstudio/2.png)
## 📸 Visão Geral da Interface

- Editor WYSIWYG em Tempo Real: Formatação direta.

- Modo Zen (Foco Total): Elimina distrações visuais para proporcionar imersão e foco.

- Painel de Controle Ribbon & Gestão de Projetos: Organização por abas (Início, Inserir, Tipografia, Exportar e Estatísticas) e menu lateral (drawer) em telas touch.

## ✨ Principais Funcionalidades

### 📝 Editor WYSIWYG.

- Formatação: Títulos (H1, H2, H3), negrito, itálico, sublinhado, marcadores de destaque (highlighter) e citações estilizadas.

- Diálogo: Inserção do travessão ortográfico (—) com um clique ou atalho.

- Divisor de Cenas: Inserção do marcador de transição de cena (❖ ❖ ❖).

- Menu Flutuante (Bubble Menu): Barra de ferramentas flutuante acionada ao selecionar qualquer trecho de texto.

- Localizar & Substituir (Ctrl+F): Ferramenta de busca com substituição individual ou em massa diretamente no documento.

### 📚 Gerenciamento Completo de Histórias (CRUD)

- Criação e Edição de Metadados: Título, sinopse, gênero principal, meta de palavras e tags.

- Fixação de Histórias (Pin): Mantenha rascunhos importantes no topo da lista.

- Busca e Filtragem: Filtro por palavras-chave ou tags de gênero literário.

- Modais de Confirmação: Interface limpa livre de diálogos nativos do navegador (alert/confirm).

### 📊 Estatísticas e Metas em Tempo Real

- Contadores de palavras, caracteres (com e sem espaço) e contagem de parágrafos.

- Tempo Estimado de Leitura: Cálculo baseado na taxa média de leitura de 200 palavras por minuto.

- Barra de Progresso Visual: Indicador percentual de avanço em relação à meta de palavras configurada pelo autor.

### 🎨 Design System, Tipografia & Temas

- Temas Nativos:

- 🌙 Escuro (Dark): Otimizado para longas sessões de escrita noturna.

- ☕ Sépia: Conforto visual baseado em tons pasteis e papel antigo.

- ☀️ Claro (Light): Alto contraste para ambientes iluminados.

- Ajustes Tipográficos: Seleção de fontes do sistema (Serif, Sans, Monospace, Garamond, Georgia, Merriweather, Inter), ajuste fino de tamanho (px), altura de linha e alinhamentos.

### 🔄 Importação, Exportação e Persistência

- Exportação: Markdown (.md), Web HTML (.html) com folha de estilo embutida e cópia para área de transferência em texto puro.

- Importação: Leitura e conversão automática de arquivos .md locais para o editor WYSIWYG.
- Salvamento automático no localStorage do navegador com indicador de estado.
- Internacionalização (i18n): Suporte a diferentes idiomas. Atualmente o aplicativo encontra-se disponível em Português (PT), Aru (ARU) e Inglês (EN).

## 🛠️ Arquitetura e Tecnologias

- React 18: Componentização otimização de renderização.

- TypeScript: Tipagem estática para garantir estabilidade e previsibilidade de dados.

- Tailwind CSS: Estilização com classes condicionais e suporte a temas.

- Lucide React: Iconografia vetorizada e consistente.

- DOM ContentEditable API: Manipulação de texto rico e seleção de alcance (Selection & Range API).

## 📐 Escolhas de Design & Engenharia de Frontend

- Restrição de Viewport Unificada (100vh / h-dvh): Evita a rolagens globais indesejadas na página. O cabeçalho, abas e rodapé permanecem fixos enquanto apenas o documento de escrita rola verticalmente.

- Otimização de Re-renderização: Uso estratégico de useMemo e useCallback para operações computacionalmente custosas, como cálculo de estatísticas e filtros de histórias.

- Experiência Responsiva Adaptativa: Otimização do espaço visual em dispositivos móveis, ocultando controles secundários e substituindo o painel lateral por drawer modal com overlay e backdrop-blur.

## 🚀 Como Executar o Projeto Localmente

**Pré-requisitos:**

- Node.js (versão 18 ou superior)

- npm, yarn ou pnpm

**Passo a Passo:**

- 1. Clone o repositório: `git clone https://github.com/seu-usuario/inkspark.git`

- 2. Acesse a pasta do projeto: `cd inkspark`

- 3. Instale as dependências: `npm install`

- 4. Inicie o servidor de desenvolvimento: `npm run dev`
