<template>
  <div class="featured-projects">
    <h2 class="page-title">Featured projects</h2>

    <div class="featured-projects__grid">
      <Project v-for="project in projects.slice(0,2)" 
               :project="project"/>
    </div>

    <router-link tag="a" class="button" to="explore/projects">See all projects</router-link>
  </div>
</template>

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
        .filter(x => x.path.startsWith('/projects') && x.frontmatter.featured)
    }
  },
  methods: { markdown }
}
</script>

<style lang="scss">
@import '../../.vuepress/assets/stylesheets/variables.scss';

.featured-projects {
  margin-bottom: $space-medium;
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: $space-medium;
    margin-bottom: $space-base;
  }
}
</style>
