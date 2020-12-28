<template>
  <div class="project">
    <a :href="project.frontmatter.website">
      <ImageHelper :image="project.frontmatter.image"
                   :imageAltText="project.frontmatter.imageAltText" />
    </a>

    <div class="project__details">
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
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      required: false
    },
    name: {
      type: String,
      required: false
    }
  },
  computed: {
    fetchProject (name) {
      return this.$site.pages
        .filter(x => x.path.startsWith('/projects/') && x.frontmatter.name == this.name)[0].frontmatter
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

.project {
  flex-basis: calc(25% - #{$space-medium});
  flex-grow: 1;
  figure {
    height: 5vw;
    width: 40%;
    height: 160px;
    overflow: hidden;
    margin-bottom: $space-base;

    img { object-fit: cover; }
  }

  &__name {
    font-weight: bold;
    margin-bottom: $space-small;
    color: $color-green;
  }

  &__description {
    margin-bottom: $space-base;
  }

  // Style when featured.
  .projects-index__featured & {
    display: flex;
    flex-direction: column;
    margin-bottom: $space-medium;

    figure {
      margin-right: $space-base;
      width: 25%;
      height: 25%;
      img { object-fit: cover; }
    }

    &__name {
      @include type-medium;
    }
  }
}
</style>
