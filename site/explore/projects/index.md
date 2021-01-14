<div class="projects-index">
  <h1 class="page-title">Projects</h1>
  <div class="projects-index__intro">{{ intro }}</div>
  <div class="projects-index__featured">
    <h2 class="projects-index__featured__title">
      Featured
    </h2>
    <Project v-for="project in projects"
             v-if="project.frontmatter.featured"
             :project="project"/>
  </div>

  <div class="projects-index__filters">
    All Projects
  </div>

  <div class="projects-index__grid">
    <Project v-for="project in projects"
            v-if="!project.frontmatter.featured"
            :project="project"/>
  </div>
</div>

<script>
import content from '../../../site/_data/explore/projects.yml'
import { markdown } from '../../.vuepress/util'
export default {
  data () {
    return {
      intro: content.intro
    }
  },

  computed: {
    projects () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/projects'))
    }
  },
  methods: { markdown }
}
</script>

<style lang="scss">
@import '../../.vuepress/assets/stylesheets/variables.scss';

.projects-index {
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
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
