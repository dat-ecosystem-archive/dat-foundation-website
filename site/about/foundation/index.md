---
title: Foundation
intro: >-
  Dat is a community-driven project for distributed data syncronization. The Dat
  Foundation imagines a web of commons created by global communities on open and
  secure protocols. We set out to improve access to public data and [created a
  new protocol](https://www.datprotocol.com/) along the way. In our work on
  developing Dat, we found a under-served need. User-driven software has
  potential to return control of digital information to the people. Today,
  building peer-to-peer applications presents both technical and ethical
  challenges but Dat is slowly changing that.

  To encourage people to experiment and innovate with peer-to-peer technology,
  we aim to make Dat foundational software for peer-to-peer applications – one
  that is sponsored by a mission-driven nonprofit. To realize this future, we
  aim to make Dat good at supporting the core needs of peer-to-peer
  applications. We hope that with our small but critical focus, we can create a
  strong building block for the Dat ecosystem.

  The first code went into Dat [on August 17,
  2013](https://github.com/datproject/dat/commit/e5eda57b53f60b05c0c3d97da90c10cd17dcbe19).
  Throughout its history, Dat has had a primary focus on Dat sharing in civic
  data and research, only recently with a wider focus on more general user-owned
  applications. Dat has been almost exclusively funded by [grants from private
  foundations](https://blog.datproject.org/2017/09/15/dat-funding-history/).
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
content: 
  <div v-html="markdown($page.frontmatter.intro)"></div>

  <div class="foundation__projects">
    <h2 class="foundation__projects__title">
      Consortium of Projects
    </h2>
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
  </div>

  <div class="foundation__sponsors">
    <h2 class="foundation__sponsors__title">
      Sponsors
    </h2>
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
---
