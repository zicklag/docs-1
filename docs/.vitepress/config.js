export default {
  base: '/',
  lang: 'en-US',
  title: 'Directus Docs',
  description: 'Directus. An Instant App & API for your SQL Database.',
  markdown: {
    theme: 'material-palenight',
    toc: {
			level: [2],
		},
  },
  lastUpdated: true,
  themeConfig: {
    // TODO: add the logo svg
    // logo: './logo.svg',
    // siteTitle: false,
    nav: [
      { text: 'Website', link: 'https://directus.io/' },
      { text: 'Cloud', link: 'https://directus.cloud/' },
      { text: 'GitHub', link: 'https://github.com/directus/directus' },
    ],
    algolia: {
      // appId: '',
      // apiKey: '',
      indexName: 'directus'
    },
    sidebar: [
      // NOTE: Nested menu pages will be supported "soon".....
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/getting-started/introduction' },
          ]
        },
        {
          text: 'App Guide',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview', link: '/app/overview' },
          ]
        },
        {
          text: 'Configuration',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Data Model', link: '/configuration/data-model' },
          ]
        },
        {
          text: 'Reference',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/reference/introduction' },
            { text: 'Items', link: '/reference/items' },
          ]
        },
        {
          text: 'Extensions',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Displays', link: '/extensions/displays' },
          ]
        },
        {
          text: 'Contributing',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/contributing/introduction' },
          ]
        },
        {
          text: 'Directus Cloud',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview', link: '/cloud/overview' },
          ]
        },
        {
          text: 'Self Hosted',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Quickstart', link: '/self-hosted/quickstart' },
          ]
        },
      ],
  },
  editLink: {
    pattern: 'https://github.com/directus/docs/edit/main/:path',
    text: 'Edit this page on GitHub'
  },
}