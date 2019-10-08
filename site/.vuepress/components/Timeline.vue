<template>
  <div class="timeline">
    <div v-for="item in sortedItems"
         class="timeline__item"
         :class="{ 'milestone': item.milestone }">
      <div v-if="item.milestone" 
           class="timeline__item--milestone">
      </div>
      <p v-html="markdown(item.description)" 
           class="timeline__item__description"></p>
      <div class="timeline__item__date">{{ item.date }}</div>
    </div>

    <div class="timeline__item milestone">
      <div class="timeline__item--milestone">
      </div>
      <p class="timeline__item__description">What's next? <a href="#">Sponsor us</a> or join our <a href="#">community</a> to learn how you can help build the future of the web.</p>
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

  &__item {
    margin-bottom: $space-medium;
    position: relative;
    margin-left: $space-large;
    
    // The green vertical line
    &::before {
      height: 200%;
      width: 8px;
      content: '';
      background-color: $color-green-dark;
      position: absolute;
      left: -$space-base * 3;

      // @include tablet { height: 200%; }
    }

    &:last-of-type {
      &::before { 
        background-color: $color-white; 
        height: 120%;
      }
    }

    &--milestone {
      position: absolute;
      width: 50px;
      height: 58px;
      background-color: $color-white;
      clip-path: polygon(49% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      top: -4px;
      left: -$space-large - 3px;

      &::before {
        content: '';
        position: absolute;
        width: 44px;
        height: 50px;
        background-color: $color-green;
        clip-path: polygon(49% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        top: 4px;
        left: 3px;
      }
    }

    &__description {
      @include type-medium;

      .milestone & {
        font-weight: bold;
      }
    }

    &__date {
      @include type-tiny;
      color: $color-gray;
    }
  }
}
</style>
