<template>
  <div class="post">
    <h1 class="post__title">{{ $page.frontmatter.title }}</h1>
    <div v-html="markdown($page.frontmatter.excerpt)"></div>
    <div>{{ $page.frontmatter.date }}</div>
    <div>{{ $page.frontmatter.tags }}</div>
    <div>{{ $page.frontmatter.authors }}</div>
    <div>{{ $page.frontmatter.image }}</div>
    <div v-html="markdown($page.frontmatter.content)"></div>
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

</style>
