<template>
  <div class="timeline">
    <div v-for="item in sortedItems"
         class="timeline__item"
         :class="{ 'milestone': item.milestone }">
      <div v-html="markdown(item.description)" 
           class="timeline__item__description"></div>
      <div class="timeline__item__date">{{ item.date }}</div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'Timeline',
  props: {
    items: {
      type: Array,
      required: false
    }
  },
  computed: {
    sortedItems(items) {
      return this.items.sort((a, b) => new Date(b.date) - new Date(a.date))
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

.timeline {
  position: relative;

  // The line itself
  &::before {
    height: 95%;
    width: 8px;
    content: '';
    background-color: green;
    position: absolute;
    left: 18px;
  }

  &__item {
    margin-bottom: $space-medium;
    position: relative;
    margin-left: $space-large;

    &.milestone {
      &::after {
        content: '';
        position: absolute;
        width: 44px;
        height: 50px;
        background-color: $color-green;
        clip-path: polygon(49% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        top: 0;
        left: -$space-large;
      }

      &::before {
        content: '';
        position: absolute;
        width: 50px;
        height: 58px;
        background-color: $color-white;
        clip-path: polygon(49% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        left: -$space-large - 3px;
        top: -4px;
      }
    }

    &__description {
      font-size: $type-size-medium;


      .milestone & {
        font-weight: bold;
      }
    }

    &__date {
      font-size: $type-size-small;
    }
  }
}
</style>
