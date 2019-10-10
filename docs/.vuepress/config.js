module.exports = {
  title: 'Dat Ecosystem',
  description: 'Documentation to the Dat Ecosystem',
  themeConfig: {
    repo: 'datproject/docs',
    sidebar: [
      ['/getting-started/', 'Getting started'],
      ['/learn-more/', 'Learning more'],
      ['/using-dat/', 'Using Dat']
    ],
    lastUpdated: 'Last Updated',
    smoothScroll: true
  },
  head: [
    ['meta', { name: 'theme-color', content: '#2aca4b' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#2aca4b' }],
    ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i&display=swap" }]
  ]
}

