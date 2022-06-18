export default {
  base: '/',
  lang: 'en-US',
  title: 'Directus Docs',
  description: 'Directus. An Instant App & API for your SQL Database.',
  
  markdown: {
    // theme: { light: 'dracula', dark:  'slack-dark' },
    // lineNumbers: true,
    // TODO Limit to 1 level
    // toc:
  },
  lastUpdated: true,
  themeConfig: {
    // logo: '/logo.svg', -> Need to add the logo svg 
    nav: [
      // https://vitepress.vuejs.org/config/theme-configs.html#nav
      { text: 'Website', link: 'https://directus.io/' },
      { text: 'Cloud', link: 'https://directus.cloud/' },
      { text: 'GitHub', link: 'https://github.com/directus/directus' },
    ],
    sidebar: [
      // NOTE: At this time, nested menus are not supported,
      // but they plan to support in the future....
        {
          text: 'Getting Started',
          items: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Finished', link: '/finished' },
          ]
        },
        {
          text: 'Configuration',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Data Model', link: '/configuration/data-model' },
            { text: 'Fields', link: '/configuration/data-model/fields/' },
            { text: 'Schema', link: '/configuration/data-model/fields/schema' },
          ]
        },
      ],
      // editLink: {
      //   pattern: 'https://github.com/directus/directus/edit/main/docs/:path',
      //   text: 'Edit this page on GitHub'
      // },
  }
}