<template>
  <div class="post">
    <img :src="$page.frontmatter.image"
          class="post__image" />
    <h1 class="post__title">{{ $page.frontmatter.title }}</h1>
    <div v-html="markdown($page.frontmatter.excerpt)"
         class="post__excerpt"></div>
    <div>{{ $page.frontmatter.publishdate }}</div>
    
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
  &__image {
    margin-bottom: $space-medium;
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
