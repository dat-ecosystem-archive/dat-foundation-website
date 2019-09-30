---
title: Foundation
intro: >-
  _These projects use Dat_. Nulla vitae elit libero, a pharetra augue. Nullam id
  dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis
  euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
  condimentum nibh, ut fermentum massa justo sit amet risus.

  I'm editing this text as a test!

  **This is another test.**
projects:
  - description: >-
      [Beaker](https://beakerbrowser.com/) is an experimental browser for
      exploring and building the peer-to-peer Web.
    logo: /../../beaker-logo.png
    name: Beaker Browser
    website: 'https://beakerbrowser.com/'
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
