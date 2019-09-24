# Dat Foundation website

This is a shiny new website for the Dat Foundation! It is built on Vuepress, uses content from Github, is editable with Netlify CMS, and continuously integrated with Netlify. 

## Development

```bash
# install VuePress locally
npm i -g vuepress

# Start local dev server
vuepress dev
```

## Tasks

```bash
# Build static files to .vuepress/dist
vuepress build
```

## Netlify CMS
Edit the site content at `/admin`. 

Edit the CMS configuration in `.vuepress/public/admin/config.yml`

If you make a change to the Vuepress config file (site/config.json) you'll have to restart the server for any changes to take effect.
