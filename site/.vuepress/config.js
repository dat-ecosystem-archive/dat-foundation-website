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
    ['script', { src: "https://identity.netlify.com/v1/netlify-identity-widget.js"}]
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
