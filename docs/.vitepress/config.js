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
    // logo: '/logo.svg'
    nav: [
      // https://vitepress.vuejs.org/config/theme-configs.html#nav
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
      // NOTE: At this time, nested menus are not supported,
      // but they plan to support in the future....
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/getting-started/introduction' },
          ]
        },
        {
          text: 'Configuration',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Data Model', link: '/configuration/data-model' },
            { text: 'Fields', link: '/configuration/data-model/fields' },
            { text: 'Schema', link: '/configuration/data-model/fields/schema' },
          ]
        },
        {
          text: 'Reference',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Items', link: '/reference/items' },
          ]
        },
      ],
      // editLink: {
      //   pattern: 'https://github.com/directus/directus/edit/main/docs/:path',
      //   text: 'Edit this page on GitHub'
      // },
  }
}