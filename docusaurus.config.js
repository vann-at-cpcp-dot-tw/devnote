require('dotenv').config()

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevNotes',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"))
          postcssOptions.plugins.push(require("autoprefixer"))
          return postcssOptions
        },
      }
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3',
    },
  ],
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@docsearch/js@3',
      async: false,
    },
    {
      src: '/onMounted.js',
      async: false,
    },
  ],
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DevNotes',
      logo: {
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'left'
        // },
        // {
        //   href: 'https://github.com/vann-at-cpcp-dot-tw',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      // The application ID provided by Algolia
      // appId: process.env.ALGOLIA_APP_ID,
      appId: '9XD6Q44CMT',

      // Public API key: it is safe to commit it
      // apiKey: process.env.ALGOLIA_API_KEY,
      apiKey: 'accf998caacd7c90eb28a9cd13e0f6e1',

      // indexName: process.env.ALGOLIA_INDEX_NAME,
      indexName: 'prod_devnote',

      // Optional: see doc section below
      contextualSearch: true,

      // 可選：聲明哪些功能變數名稱需要用 window.location 型的導航而不是 history.push。 適用於 Algolia 配置會爬取多個文檔站點，而我們想要用 window.location.href 在它們之間跳轉時。
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
  },
};

module.exports = config;
