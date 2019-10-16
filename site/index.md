<template>
  <h1 class="mission-statement">{{ missionStatement }}</h1>
  <Values />
  <FeaturedProjects />
  <FeaturedPosts />
</template>

<script> 
import { markdown } from '../site/.vuepress/util'
import missionStatement from '../site/_data/globals/mission-statement.yml'

export default {

  name: 'Home',
  data () {
    return {
      missionStatement: missionStatement.missionStatement
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
@import '../site/.vuepress/assets/stylesheets/variables.scss';

.mission-statement { margin-bottom: $space-large; }
</style>
