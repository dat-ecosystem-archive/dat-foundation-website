<template>
  <div class="blog__index">
    <h1 class="blog__index__page-title page-title">Blog</h1>
    
    <div v-for="post in journal" 
         :key="post.title" 
         class="blog__index__post" 
         :class="{'featured': post.frontmatter.featured}">
      <ImageHelper :image="post.frontmatter.image"
                   :imageAltText="post.frontmatter.imageAltText" />
      
      <div class="blog__index__post__byline">
        <span v-if="post.frontmatter.author" 
              class="blog__index__post__byline__author">
          {{ post.frontmatter.author }}
        </span>

        <span class="blog__index__post__byline__date">
          {{ post.frontmatter.date }}
        </span>
      </div>
        

      <router-link tag="h3" :to="post.path" class="blog__index__post__title">{{ post.frontmatter.title }}</router-link>
      <p class="blog__index__post__excerpt" v-html="markdown(post.frontmatter.excerpt)"></p>
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
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: $space-medium;

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
    }

    &__page-title {
      grid-column: 1 / 2;

      @include mobile {
        grid-column: 1 / 3;
      }
    }

    &__post {    
      &.featured {
        grid-column: 1 / 2;

        @include mobile {
          grid-column: 1 / 3;
        }

        img, 
        .placeholder { 
          min-height: 30vh; 

          @include mobile {
            min-height: 60vh;
          }
        }
      }  

      figure { margin-bottom: $space-small; }

      &__byline {
        @include type-small;
        color: $color-gray;
        margin-bottom: $space-base;
        
        &__author {
          &::after {
            clip-path: polygon(49% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            content: '';
            height: 10px  * 1.15;
            width: 10px;
            background: $color-green;
            display: inline-block;
            position: relative;
            margin: 0 $space-small;
            left: 0;
            top: 0;
          }
        }
      }

      &__title {
        margin-bottom: $space-small;
        text-decoration: underline;

        &:hover { cursor: pointer; }
      }

      &__excerpt {
        max-width: 65ch;
      }
    }
  }
}
</style>
