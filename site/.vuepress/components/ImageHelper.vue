<template>
  <figure class="image">
    <img v-if="image"
         :src="image" 
         :alt="imageAltText"
         alt="test">
    <div v-else class="placeholder">placeholder image</div>
  </figure>
</template>

<script>
export default {
  name: 'ImageHelper',
  props: {
    image: {
      type: String,
      required: false
    },
    imageAltText: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss">
</style>
