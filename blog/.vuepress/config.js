module.exports = {
  title: 'Josh Peak - A Caffeinated Release Valve',
  description: 'Software Engineer | Data Scientist | IoT Data Geek',
  head: [
      ['link', { rel: 'icon', href: `/images/favicon.ico` }]
  ],
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Posts', link: '/posts/' },
        { text: 'LinkedIn', link: 'https://au.linkedin.com/in/neozenith' },
        { text: 'Github', link: 'https://github.com/neozenith' },
        { text: 'About', link: '/about/' }
      ]
  },
  dest: "build"
}
