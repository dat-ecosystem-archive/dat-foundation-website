<template>
  <div class="values">
    <h1 class="values__title">Value-driven technology</h1>
    <div class="values__subhead"> Technology built by community, financed responsibly, and given away for free to the public </div>

    <div class="values__row">
      <div v-for="value in values"
           class="values__value">
        <h3 class="values__value__name">
          {{ value.name }}
        </h3>
        <div v-html="markdown(value.description)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { markdown } from '../util'
import values from '../../.vuepress/assets/data/globals/values.yml'

export default {
  name: 'Values',
  data () {
    return {
      values: values.values
    }
  },
  methods: { markdown } 
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
