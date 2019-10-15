<template>
  <div class="code-of-conduct text"
       v-html="markdown(codeOfConduct)">
  </div>
</template>

<script>
import { markdown } from '../../.vuepress/util'
import codeOfConduct from '../../../site/_data/globals/code-of-conduct.yml'

export default {
  name: 'Home',
  data () {
    return {
      codeOfConduct: codeOfConduct.codeOfConduct
    }
  },
  methods: { markdown }
}
</script>
