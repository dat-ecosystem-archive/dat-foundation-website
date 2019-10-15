<template>
  <figure class="image">
    <img v-if="image"
         :src="image" 
         :alt="imageAltText">
    <div v-else class="placeholder"></div>
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
@import '../assets/stylesheets/variables.scss';

.placeholder {
  background-image: url('../public/hex-pattern.svg');
  background-size: cover;
  background-color: $color-neutral;
  display: inline-block;
  height: 100%;
  min-height: 30vh;
  position: relative;
  width: 100%;
}
</style>
