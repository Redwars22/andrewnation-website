# O Periódico

## Visão geral

O Periódico é uma aplicação front-end construída com Angular que simula um portal de notícias com foco em leitura limpa e navegação simples. O projeto apresenta uma listagem de artigos, página de leitura, seção de favoritos e layout editorial com cabeçalho e rodapé fixos. Há uma API em desenvolvimento que também será publicada aqui.

## Objetivo

Entregar uma experiência de leitura digital com estética minimalista, priorizando tipografia, hierarquia visual e conteúdo textual.

## Funcionalidades

1. Página inicial com resumo de artigos.
2. Navegação por rotas com Angular Router.
3. Página de visualização de artigo.
4. Cálculo de tempo estimado de leitura por artigo.
5. Persistência de favoritos no navegador usando localStorage.
6. Página dedicada para visualizar artigos favoritos.
7. Layout global com cabeçalho e rodapé reutilizáveis.

## Tecnologias e bibliotecas

- Angular 21 (standalone components)
- TypeScript
- Angular Router
- Angular HttpClient (configurado no app)
- Tailwind CSS via CDN
- CSS global customizado (tipografia, animações e utilitários)
- Vercel (configuração de build/deploy presente no projeto)

## Links importantes

### Código-fonte

- Repositório no GitHub: https://github.com/andrewnationdev/site-noticias-angular

### Versão em deploy

- Edição/execução online (StackBlitz): https://operiodico.vercel.app/

## Como executar localmente

1. Instalar dependências:

```bash
npm install
```

2. Rodar em desenvolvimento:

```bash
npm run start
```

3. Gerar build de produção:

```bash
npm run build
```

## Pontos de evolução sugeridos

1. Integrar os artigos a uma API real em vez de dados estáticos.
2. Implementar lógica completa de adicionar/remover favoritos na página de artigo.
3. Exibir contador dinâmico de favoritos no cabeçalho.
4. Criar página 404 dedicada em vez de fallback para visualizador de post.
5. Adicionar testes de integração para fluxos de navegação e favoritos.