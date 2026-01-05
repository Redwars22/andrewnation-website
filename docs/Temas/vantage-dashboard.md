# Vantage Dashboard

O Vantage Dashboard é um modelo de plataforma de análise financeira desenvolvido com Next.js. Ao utilizar Recharts para visualização de dados e Tailwind CSS para uma estética refinada em modo escuro, a aplicação oferece uma visão clara das receitas mensais, despesas e disponibilidade para investimentos por meio de uma interface limpa e responsiva. Você pode customizá-lo facilmente para atender às suas necessidades, pois o aplicativo é dividido em componentes reutilizáveis. Ele foi construído com foco em precisão, desempenho e princípios modernos de UI/UX.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Vantage Dashboard](https://andrewnationdev.vercel.app/img/vantage/vantage-1.png)

Você pode comprá-lo [aqui](https://www.patreon.com/posts/finances-theme-147330908?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link), caso tenha interesse. Também há uma prévia do modelo [aqui](https://vantage-dashboard-demo.vercel.app/).

# Recursos-Chave

- Arquitetura Full-Stack: Implementa rotas de API nativas do Next.js para servir dados financeiros de forma assíncrona.
- Visualização Analítica: Gráficos de linha responsivos que ilustram as tendências de receitas vs. despesas.
- Design de Componentes Modulares: Separação clara de responsabilidades com componentes isolados para cartões, gráficos e lógica de layout.
- UI/UX Refinada: Interface otimizada para modo escuro com transições suaves e animações de fade-in.
- Mobile First: desenvolvido com a navegação em dispositivos móveis em mente.

## Decisões de Arquitetura
- Separação de Dados: Os dados são buscados em um endpoint interno (`/api/finance`) em vez de estarem fixos na interface. Se necessário, você pode expandir facilmente esse *endpoint* para adicionar uma conexão com banco de dados.
- Type Safety: Uso de interfaces TypeScript para garantir a consistência dos dados em toda a aplicação.
- Otimização: Uso de metadados do Next.js para melhoria de SEO e branding (favicons personalizados e títulos dinâmicos).