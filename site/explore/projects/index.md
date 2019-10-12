<div class="project-index">
  <h1 class="page-title">Projects</h1>
  <!-- TODO: Add a description for this section that's editable in the CMS -->
  <div class="project-index__featured">
    <h2 class="project-index__featured__title">
      Featured
    </h2>
  </div>
  <div class="project-index__filters">
    Filters
  </div>
  <Project v-for="project in projects" 
           :project="project"/>
</div>

<script>
import { markdown } from '../../.vuepress/util'
export default {
  computed: {
    projects () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/_data/projects'))
    }
  },
  methods: { markdown }
}
</script>

<style lang="scss">
@import '../../.vuepress/assets/stylesheets/variables.scss';

</style>
