<template>
  <div class="featured-posts">
    <h2 class="page-title">Blog</h2>

    <div class="featured-posts__grid">
      <BlogPost v-for="post in posts.slice(0,2)" 
               :post="post"/>
    </div>

    <router-link tag="a" class="button" to="/blog">All posts →</router-link>
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
    posts () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/blog/posts') && x.frontmatter.featured)
    }
  },
  methods: { markdown }
}
</script>

<style lang="scss">
@import '../../.vuepress/assets/stylesheets/variables.scss';

.featured-posts {
  margin-bottom: $space-medium;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: $space-medium;
    margin-bottom: $space-base;
  }
}
</style>
