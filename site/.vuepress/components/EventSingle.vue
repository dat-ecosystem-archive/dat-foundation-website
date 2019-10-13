<template>
  <div class="event">
    <img :src="event.frontmatter.image"
         class="event__image" />

    <div class="event__name">
      {{ event.frontmatter.name }}
    </div>

    <div class="event__date">
      {{ event.frontmatter.date }}
    </div>
  </div>
</template>

<script> 
export default {
  name: 'EventSingle',
  props: {
    event: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss">
.event {
  &__image {
    width: 300px;
  }
}
</style>
