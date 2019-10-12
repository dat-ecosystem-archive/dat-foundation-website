<template>
  <div class="project">
    <div class="project__name">
      <a :href="project.frontmatter.website">
        {{ project.frontmatter.name }}
      </a>
    </div>

    <div class="project__description">
      {{ project.frontmatter.description }}
    </div>

    <div class="project__tags">
      <span v-for="tag in project.frontmatter.tags"
            class="tag">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script> 
export default {
  name: 'Project',
  props: {
    project: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

.project {

}
</style>

