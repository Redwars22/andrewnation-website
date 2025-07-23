// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AndrewNation',
  tagline: 'Um programador front-end com curiosidade infinita, movido pelas ideias e criatividade',
  favicon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/84_Dev_logo_logos-256.png',

  // Set the production url of your site here
  url: 'https://andrewnationdev.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Redwars22', // Usually your GitHub org/user name.
  projectName: 'andrewnation-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image:
        'https://andrewnationdev.vercel.app/website_icon.png',
      navbar: {
        title: 'AndrewNation',
        logo: {
          alt: 'AndrewNation Logo',
          src: 'https://andrewnationdev.vercel.app/website_icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Portfólio',
          },
          {
            position: 'left',
            label: 'Trajetória Profissional e Acadêmica',
            to: 'professional',
          },
          {
            position: 'left',
            label: 'Sobre mim',
            to: 'aboutme',
          },
          {
            position: 'left',
            label: 'Blog',
            to: 'blog',
          },
          {
            position: 'left',
            label: 'Loja',
            href: 'https://www.buymeacoffee.com/andrewnation/extras'
          },
          {
            position: "left",
            label: 'AndrewDeviant',
            href: 'https://andrewdeviant.vercel.app/'
          },
          {
            href: 'https://github.com/Redwars22',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links Úteis',
            items: [
              {
                label: 'Portfólio de Projetos',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Outros Links',
            items: [
              /*{
                label: 'WattPad',
                href: 'https://www.wattpad.com/user/andrewnation69',
              },*/
              /*{
                label: 'Livros',
                href: 'https://www.amazon.com.br/stores/Andrew-Nation/author/B0D8L8DXF8'
              },*/
              {
                label: 'Entre em contato',
                href: 'mailto:andrewnationdev@gmail.com',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Redwars22',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AndrewNation (André Pereira). Site criado com o Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

/*

          {
            position: 'left',
            label: 'AndrewNation Games',
            to: 'games'
          },
*/