export default {
    base: '/',
    lang: 'en-US',
    title: 'Directus Docs',
    description: 'Directus. An Instant App & API for your SQL Database.',
    
    markdown: {
      theme: { light: 'dracula', dark:  'slack-dark' },
      lineNumbers: true,
      // TODO Limit to 1 level
      // toc:
    },
    lastUpdated: true,
    themeConfig: {
      // logo: '/logo.svg', -> Need to add the logo svg 
      // nav: [...],
      // sidebar: { ... }
      nav: [
        // https://vitepress.vuejs.org/config/theme-configs.html#nav
        { text: 'Website', link: 'https://directus.io/' },
        { text: 'Cloud', link: 'https://directus.cloud/' },
        { text: 'GitHub', link: 'https://github.com/directus/directus' },
      ],
      sidebar: [
        // https://vitepress.vuejs.org/guide/theme-sidebar.html
        {
          text: 'Configuration',
          items: [
            // TODO: Add 3-tiers of dropdowns
            { text: 'Getting Started', link: '/getting-started' },
          ]
        }
      ]
    }
}