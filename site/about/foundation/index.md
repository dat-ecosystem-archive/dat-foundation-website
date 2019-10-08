<div class="foundation">
  <h1 class="foundation__title page-title">{{ title }}</h1>
  
  <div v-html="markdown(missionStatement)"
       class="foundation__mission-statement">
  </div>

  <div v-html="markdown(intro)"
       class="foundation__content">
  </div>
  
  <Values />

  <h2 class="foundation__projects__title">
    Consortium of Projects
  </h2>
  <div class="foundation__projects">
    <div v-for="project in projects"
         class="foundation__project">
      <a :href="project.website">
        <img :src="project.logo"
             class="foundation__project__logo">
      </a>
      <div class="foundation__project__description" v-html="markdown(project.description)">
      </div>
    </div>
  </div>

  <h2 class="foundation__sponsors__title">
    Sponsors
  </h2>
  <div class="foundation__sponsors">
    <div v-for="sponsor in sponsors"
         class="foundation__sponsor">
      <a :href="sponsor.website">
        <img :src="sponsor.logo"
             class="foundation__sponsor__logo">
      </a>
      <div class="foundation__sponsor__description" v-html="markdown(sponsor.description)">
      </div>
    </div>
  </div>
</div>

<script> 
import marked from 'marked'
import content from '../../.vuepress/assets/data/about/foundation.yml'
import missionStatement from '../../.vuepress/assets/data/globals/mission-statement.yml'

export default {
  name: 'AboutFoundation',
  data () {
    return {
      title: content.title,
      intro: content.intro,
      projects: content.projects,
      sponsors: content.sponsors,
      missionStatement: missionStatement.missionStatement
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

<style lang="scss">
@import '../../.vuepress/assets/stylesheets/variables.scss';

.foundation {
  &__mission-statement { 
    @include text-subhead;
    margin-bottom: $space-medium; 
  }

  &__content {
    margin-bottom: $space-medium;
  }

  &__sponsors,
  &__projects {
    margin-bottom: $space-large;

    @include mobile {
      display: flex;
      flex-wrap: wrap;
    }

    &__title {
      margin-bottom: $space-medium;
    }
  }

  &__project,
  &__sponsor {
    margin-bottom: $space-large;

    @include mobile {
      margin-bottom: $space-medium;
      margin-right: 5%;
      padding-top: $space-medium;
      padding: $space-small;
      width: 20%;

    }

    &__title {
      margin-bottom: $space-large;
    }

    &__logo {
      height: 75px;
      margin-bottom: $space-base;
      object-fit: contain;
      width: 100%;

      img {
        object-fit: contain;
        object-position: 50% 50%;
        width: auto;
      }
    }

    &__description {
      @include type-small;

      p { margin-bottom: 0; }
    }
  }
}
</style>
