<template>
  <div class="donate">
    <h3 class="donate__header">Donate today!</h3>
    <div class="donate__cta">
      You help make Dat Project a success! Donations sustain Dat, allowing us to improve core support and feature development.
    </div>
    <a href="https://opencollective.com/dat" class="button">Donate</a>
  </div>
</template>

<script> 
export default {
  name: 'Donate'
}
</script> 

<style lang="scss">
@import '../assets/stylesheets/variables.scss';
.donate {
  @include shadow;
  background: $color-white;
  border: 2px solid $color-green;
  padding: $space-medium;

  &__header { margin-bottom: $space-base; }
  &__cta { margin-bottom: $space-base; }
}
</style>
