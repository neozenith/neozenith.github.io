module.exports = {
  title: 'Josh Peak - ☕ Release Valve',
  description: 'Software Engineer | Data Scientist | IoT Data Geek',
  head: [
      ['link', { rel: 'icon', href: `/images/favicon.ico` }]
  ],
  plugins: [
    '@vuepress/last-updated',
    'vuepress-plugin-reading-time',
    '@vuepress/google-analytics',
    {
      'ga': 'UA-144735544-1'
    },
    '@limdongjin/vuepress-plugin-simple-seo', {
      default_image: '/images/books.jpg',
      root_url: 'https://joshpeak.net',
      default_site_name: 'Josh Peak - Data Scientist',
      twitter_creator: '@_neozenith',
      twitter_site: '@_neozenith'
    }
  ],
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Posts', link: '/posts/' },
        { text: 'LinkedIn', link: 'https://au.linkedin.com/in/neozenith' },
        { text: 'Github', link: 'https://github.com/neozenith' },
        { text: 'About', link: '/about/' }
      ],
      lastUpdated: 'Last Updated', // string | boolean

  },
  dest: "build"
}
