<template>
  <div class="blog__index__post" 
       :class="{'featured': post.frontmatter.featured}">
    <ImageHelper :image="post.frontmatter.image"
                 :imageAltText="post.frontmatter.imageAltText" />
    
    <div class="blog__index__post__byline">
      <span v-if="post.frontmatter.author" 
            class="blog__index__post__byline__author">
        {{ post.frontmatter.author }}
      </span>

      <span class="blog__index__post__byline__date">
        {{ post.frontmatter.publish_date }}
      </span>
    </div>
      

    <router-link tag="h3" :to="post.path" class="blog__index__post__title">{{ post.frontmatter.title }}</router-link>
    <p class="blog__index__post__excerpt" v-html="markdown(post.frontmatter.excerpt)"></p>
  </div>
</template>

<script>
import { markdown } from '../../.vuepress/util'
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: false
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
