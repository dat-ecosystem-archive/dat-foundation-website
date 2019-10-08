<template>
  <div class="post">
    <h1 class="post__title">Blog post</h1>
  </div>
</template>

<script>
import marked from 'marked'
import values from '../../.vuepress/assets/data/globals/values.yml'

export default {
  name: 'BlogPost',
  data () {
    return {
      values: values.values
    }
  },
  methods: {
    markdown (input) {
      if (input === null) {
        return false
      } else {
        return marked(String(input), {
          smartypants: true,
          gfm: true,
          breaks: true
        })
      }
    }
  } 
}
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

.values { 
  margin-bottom: $space-large;

  &__row {
    @include mobile {
      display: flex; 
      justify-content: space-between;
    }
  }

  &__title {
    margin-bottom: $space-small;
  }

  &__subhead {
    @include text-subhead;
    margin-bottom: $space-medium;
  }

  &__value {
    margin-bottom: $space-medium;

    @include mobile {
      width: 32%;
    }

    &__name {
      margin-bottom: $space-small;
    }
  }
}
</style>
