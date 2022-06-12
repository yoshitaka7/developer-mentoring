// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Developer Mentoring Guide',
  tagline: 'Helping devs help devs',
  url: 'https://developer-mentoring.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'offerzen', // Usually your GitHub org/user name.
  projectName: 'developer-mentoring-guide', // Usually your repo name.

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Options here
      },
    ],
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-TZVBNJD", // GTM Container ID
      },
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/OfferZen-Community/developer-mentoring/blob/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/OfferZen-Community/developer-mentoring/blob/main/',
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
      navbar: {
        title: 'Developer Mentoring Guide',
        logo: {
          alt: 'OfferZen Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo_white.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/welcome',
            position: 'left',
            label: 'The Guide',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: 'https://github.com/OfferZen-Community/developer-mentoring',
            label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'The Guide',
                to: '/docs/introduction/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'OfferZen Community',
                href: 'https://www.offerzen.com/community',
              },
              {
                label: 'OfferZen Thrive',
                href: 'https://www.offerzen.com/foundation',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://www.offerzen.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/offerzen/poc-docusaurus',
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
    }),
    
};

module.exports = config;
