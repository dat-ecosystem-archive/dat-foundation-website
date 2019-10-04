<div class="foundation">
  <div v-html="markdown(intro)"
       class="foundation__intro">
  </div>
  
  <h1 class="foundation__values__title">Value-driven technology</h1>
  <div class="foundation__values__subhead"> Technology built by community, financed responsibly, and given away for free to the public </div>

  <div class="foundation__values">
    <div v-for="value in values"
         class="foundation__values__value">
      <h3 class="foundation__values__value__name">
        {{ value.name }}
      </h3>
      <div v-html="markdown(value.description)"></div>
    </div>
  </div>

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
import values from '../../.vuepress/assets/data/globals/values.yml'

export default {
  name: 'AboutFoundation',
  data () {
    return {
      intro: content.intro,
      projects: content.projects,
      sponsors: content.sponsors,
      values: values.value
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
  &__intro { 
    @include text-subhead;
    margin-bottom: $space-large; 
  }

  &__values { 
    display: flex; 
    justify-content: space-between;
    margin-bottom: $space-large;

    &__title {
      margin-bottom: $space-small;
    }

    &__subhead {
      @include text-subhead;
      margin-bottom: $space-medium;
    }

    &__value {
      width: 32%;

      &__name {
        margin-bottom: $space-small;
      }
    }
  }

  &__sponsors,
  &__projects {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: $space-large;

    &__title {
      margin-bottom: $space-medium;
    }
  }

  &__project,
  &__sponsor {
    margin-bottom: $space-medium;
    margin-right: 5%;
    padding-top: $space-medium;
    padding: $space-small;
    width: 20%;

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
      font-size: $type-size-small;

      p { margin-bottom: 0; }
    }
  }
  
}
</style>
