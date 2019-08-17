# Dat Foundation website

This is a shiny new website for the Dat Foundation! It is built on Vuepress, uses content from Github, is editable with Netlify CMS, and continuously integrated with Netlify. 

## Development

```bash
# install VuePress locally
npm i -g vuepress

# cd into the VuePress directory
cd portfolio

# Start local dev server
vuepress dev
```

## Tasks

```bash
# Build static files to .vuepress/dist
vuepress build
```

## Deploy with Netlify
2. Set the build command to: `npm run site:build`
3. Set the publish directory to `portfolio/.vuepress/dist`

That's it, now your site gets deployed automatically on `git push`

## Netlify CMS
Edit the site content at `/admin`. 
