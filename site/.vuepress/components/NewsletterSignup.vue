<template>
  <div class="newsletter-signup">
    <h3 class="newsletter-signup__header">
      Sign up for our monthly newsletter!
    </h3>
    <div class="newsletter-signup__cta">
      Get updates from the Dat Foundation in your inbox each month! You can read newsletters from past months or learn how you can contribute <router-link to="/community/newsletter">here</router-link>.
    </div>

    <fieldset class="newsletter-signup__form">
      <input>
      <button>Submit</button>
    </fieldset>
  </div>
</template>

<script> 
export default {
  name: 'NewsletterSignup'
}
</script> 

<style lang="scss">
@import '../assets/stylesheets/variables.scss';
.newsletter-signup {
  @include shadow;
  background: $color-white;
  border: 2px solid $color-green;
  padding: $space-medium;

  a { 
    color: $color-green;
    text-decoration: underline; 
  }
  
  &__header { margin-bottom: $space-base; }
  &__cta { margin-bottom: $space-base; }

  &__form {
    display: flex;

    input { 
      width: 100%;
      margin-right: $space-base; 
    }
  }
}
</style>
