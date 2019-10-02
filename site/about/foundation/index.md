<div v-html="markdown(intro)"></div>

<div class="foundation__projects">
  <h2 class="foundation__projects__title">
    Consortium of Projects
  </h2>
  <div v-for="project in projects">
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
  <div v-for="sponsor in sponsors">
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
import content from '../../.vuepress/assets/data/about-foundation.yml'
// import markdown from '../../.vuepress/helpers/markdown'

 export default {
  name: 'AboutFoundation',
  data () {
    return {
      intro: content.intro,
      projects: content.projects,
      sponsors: content.sponsors
    }
  },

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
