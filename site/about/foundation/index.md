<div class="foundation">
  <h1 class="foundation__title page-title">{{ title }}</h1>
  
  <div v-html="markdown(missionStatement)"
       class="foundation__mission-statement">
  </div>

  <div v-html="markdown(intro)"
       class="foundation__content">
  </div>
</div>

<script> 
import { markdown } from '../../.vuepress/util'
import content from '../../../site/_data/about/foundation.yml'
import missionStatement from '../../../site/_data/globals/mission-statement.yml'

export default {
  name: 'AboutFoundation',
  data () {
    return {
      title: content.title,
      intro: content.intro,
      missionStatement: missionStatement.missionStatement
    }
  },

  methods: { markdown }
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
