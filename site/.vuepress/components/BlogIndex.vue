<template>
  <div class="blog__index">
    <h1 class="blog__index__page-title page-title">Blog</h1>

    <div v-for="post in journal" :key="post.title" class="blog__index__post">
      <img :src="post.frontmatter.image"
           class="blog__index__post__image" />

      <div class="blog__index__post__info">
        
        <router-link tag="h3" :to="post.path" class="blog__index__post__title">{{ post.frontmatter.title }}</router-link>
        <p class="blog__index__post__excerpt" v-html="markdown(post.frontmatter.excerpt)"></p>
        <div class="blog__index__post__authors">
          <div v-for="author in post.frontmatter.authors">
            {{ author }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { markdown } from '../util'
  export default {
    computed: {
      journal() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/blog/posts'))
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    },
    methods: { markdown }
  }
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

.blog {
  &__index {
    display: flex;
    flex-wrap: wrap;

    &__page-title {
      margin-bottom: $space-medium;
      width: 100%;
    }

    &__post {
      @include shadow;
      overflow: hidden;
      margin-bottom: $space-large;
      border: 0.5px solid $color-gray-light;
      // padding: $space-base;
      width: 30%;
      margin-right: $space-small;
      transition: all 250ms ease-in-out;


      &:hover {
        transform: translateY(-$space-small);
        cursor: pointer;
      }

      &:last-of-type {
        margin-right: 0;
      }

      &__title {
        margin-bottom: $space-base;
      }

      &__image {
        
      }

      &__info {
        padding: $space-base;
      }

      &__excerpt {
        margin-bottom: $space-medium;
      }
      
      &__authors {
        @include type-small;
        color: $color-green-dark;
      }
    }

  }
}
</style>
