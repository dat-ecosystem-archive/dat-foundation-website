<template>
  <div class="blog__index">
    <div v-for="post in journal" :key="post.title" class="blog__index__post">
      <a tag="h3" :href="post.path" class="title">{{ post.frontmatter.title }}</a>
      <p>{{ post.frontmatter.excerpt }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      journal() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/blog/posts'))
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style lang="scss">
.blog {
  &__index {
    &__post {
      margin-bottom: 2rem;
    }
  }
}
</style>
