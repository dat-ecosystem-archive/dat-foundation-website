<template>
  <div class="timeline">
    <div v-for="item in sortedItems"
         class="timeline__item"
         :class="{ 'milestone': item.milestone }">
      <div class="timeline__item__date">{{ item.date }}</div>
      <div class="timeline__item__description">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>
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
    }
  }
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

.timeline {
  &__item {
    margin-bottom: $space-medium;

    &.milestone { color: $color-green; }
  }
}
</style>
