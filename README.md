# Dat Foundation website

This is a shiny new website for the Dat Foundation! It is built on [VuePress](https://vuepress.vuejs.org/), pulls its content from this GitHub repo, is editable with [Netlify CMS](https://www.netlifycms.org/), and is continuously integrated with Netlify. 

## Development

For local development:

Install dependencies using Yarn.

```bash 
yarn install
```

Run the development server.

```bash
npm run dev 
```

**Things to note:**
- If you edit the VuePress config file (`site/config.json`) you'll have to restart the development server for any changes to take effect.


## Build and deploy

To build the site: 
```bash
npm run build 
```

This repo is continuously integrated with Netlify and all commits to master will trigger a deploy.


## Netlify CMS

Edit the site content at `/admin` with [Netlify CMS](https://www.netlifycms.org/)!

Edit the CMS configuration in `.vuepress/public/admin/config.yml`


### Login with Netlify Identity
This ties your contributions to your GitHub account.

### Editorial Workflow
This is a layer of abstraction on top of standard Git pull requests and merges; learn more [here](https://www.netlifycms.org/docs/configuration-options/#publish-mode).

| Actions in Netlify UI ... | Perform these Git actions                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Save draft                | Commits to a new branch (named according to the pattern `cms/collectionName-entrySlug`), and opens a pull request |
| Edit draft                | Pushes another commit to the draft branch/pull request                                                            |
| Approve and publish draft | Merges pull request and deletes branch                                                                            |


# Content Structure
We deviated from the default VuePress content model in order to integrate Netlify CMS. **Pages** and **Global** content is stored in `/site/_data` as YML and imported directly into views and components as needed. This separation of data from view component is a solution to Netlify CMS occasionally overwriting template data when updating YML frontmatter via the editorial workflow. Unfortunately it makes it harder to take advantage of some of the default VuePress features, and hope that as Netlify CMS matures we can revert to a 


## Collections
Collections consist of objects that can be related to pages and other collection objects sitewide. Currently, the collections are `People`, `Projects`, `Modules`, `Tags`, and `Events`. These collections serve as a version-controlled directory of all people, projects, modules, and events related to the Dat Foundation, including how they're related to one another.

For example, before displaying a `Person` on the About/People page, you'd have to add them as a `Person` in the `People` collection. That `Person` is now represented by a single record in the `People` collection. Different pages can "use" that `Person` object via relation fields, and any changes you make to that object propagate sitewide at build.

## Globals
Things that don't change often. This serves as the canonical source of truth for things like the Dat Foundation mission statement, values, etc. Also the site navigation!

## Blog
The blog is a little bit different; it follows normal VuePress content structure in that it's just a directory of markdown files.
