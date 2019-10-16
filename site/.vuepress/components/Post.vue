<template>
  <div class="post">

    <ImageHelper v-if="$page.frontmatter.image"
                 :image="$page.frontmatter.image"
                 :imageAltText="$page.frontmatter.imageAltText" />
   
    <h1 class="post__title">{{ $page.frontmatter.title }}</h1>
    <div v-html="markdown($page.frontmatter.excerpt)"
         class="post__excerpt"></div>
    <div>{{ $page.frontmatter.publish_date }}</div>
    
    <div v-for="author in $page.frontmatter.authors">
      <div class="post__author">{{ author }}</div>
    </div>

    <div v-html="markdown($page.frontmatter.content)"
         class="post__content text" />
    
    <div v-if="$page.frontmatter.tags">
      <span v-for="tag in $page.frontmatter.tags"
      class="tag">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
import { markdown } from '../util'
export default {
  name: 'BlogPost',
  methods: { markdown } 
}
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

.post {
  figure {
    margin-bottom: $space-medium;

    .placeholder {
      min-height: 50vh;
    }
  }

  &__title {
    @include text-title;
  }

  &__author {
    color: $color-green-dark;
    margin-bottom: $space-medium;
  }

  &__excerpt {
    @include text-subhead;
    margin-bottom: $space-medium;
  }

  &__content {
    margin-bottom: $space-medium;
  }
}
</style>
