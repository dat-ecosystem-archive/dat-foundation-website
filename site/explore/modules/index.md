<div class="modules-index">
  <h1 class="page-title">Modules</h1>
  <div class="modules-index__intro">{{ intro }}</div>

  <div class="modules-index__filters">
    Filters
  </div>

  <div class="modules-index__grid">
    <Project v-for="module in modules" 
             :project="module"/>
  </div>
</div>

<script>
import content from '../../../site/_data/explore/modules.yml'
import { markdown } from '../../.vuepress/util'
export default {
  data () {
    return {
      intro: content.intro
    }
  },

  computed: {
    modules () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/modules'))
    }
  },
  methods: { markdown }
}
</script>

<style lang="scss">
@import '../../.vuepress/assets/stylesheets/variables.scss';

.modules-index {
  &__intro {
    @include text-subhead;
    margin-bottom: $space-medium;
  }

  &__featured {
    margin-bottom: $space-medium;
    border-bottom: 0.5px solid $color-gray-light;

    &__title { margin-bottom: $space-base; }
  }

  &__filters {
    margin-bottom: $space-medium;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: $space-medium;
  }
}
</style>
