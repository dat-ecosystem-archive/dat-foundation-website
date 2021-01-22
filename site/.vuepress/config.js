const config = require('../config.json');

module.exports = {
  title: config.title,
  description: config.description,
  base: "/",
  themeConfig: {
    logo: config.logo,
    footer: config.footer,
    nav: config.navigation,
  },
  head: [
    ['link', { rel: "icon", href: config.favicon }],
    ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i&display=swap" }]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          loader: 'js-yaml-loader'
        }
      ]
    }
  }
};
