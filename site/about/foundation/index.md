---
title: Foundation
intro: >-
  These projects use Dat. Nulla vitae elit libero, a pharetra augue. Nullam id
  dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis
  euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
  condimentum nibh, ut fermentum massa justo sit amet risus.

projects:
  - description: >-
      [Beaker](https://beakerbrowser.com/) is an experimental browser for
      exploring and building the peer-to-peer Web.
    logo: /../../beaker-logo.png
    name: Beaker Browser
    website: 'https://beakerbrowser.com/'
sponsors:
  - description: >-
      Code for Science and society empowers communities to work together and
      build innovative technology for the public good.
    logo: /../../codeforscience.png
    name: Code for Science & Society
    website: 'https://codeforscience.org'
---


<div v-html="markdown($page.frontmatter.intro)"></div>

<div v-for="project in $page.frontmatter.projects">
  <div class="foundation__project__logo">
    <!-- <img :src="project.logo"> -->
  </div>
  <div class="foundation__project__name">
    <a :href="project.website">{{ project.name}}</a>
  </div>
  <div class="foundation__project__description" v-html="markdown(project.description)">
  </div>
</div>

<div v-for="sponsor in $page.frontmatter.sponsors">
  <div class="foundation__sponsor__logo">
    <!-- <img :src="sponsor.logo"> -->
  </div>
  <div class="foundation__sponsor__name">
    <a :href="sponsor.website">{{ sponsor.name}}</a>
  </div>
  <div class="foundation__sponsor__description" v-html="markdown(sponsor.description)">
  </div>
</div>

<script> 
import marked from 'marked'
// import markdown from '../../.vuepress/helpers/markdown'

 export default {
  name: 'AboutFoundation',

  methods: {
    markdown (input) {
      if (input === null) {
        return false
      } else {
        return marked(String(input), {
          smartypants: true,
          gfm: true,
          breaks: true
        })
      }
    }
  } 
}
</script>
