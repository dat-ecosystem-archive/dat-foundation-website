<template>
  <div class="app">
    <Nav/>
    <!-- TODO: Add link to open issue. -->
    <main class="app__main not-found">
      <h1 class="not-found__header">Uh oh!</h1>
      <p>There's nothing here! If you think you've reached this page in error, <a>open an issue</a>. Otherwise, head on <router-link to="/dat-foundation-website/">home</router-link>.</p>
    </main>
    <Footer/>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/stylesheets/variables.scss';

.app__main {
  background: $color-white;
  padding: $space-base;

  @include mobile {
    @include shadow;
    padding: $space-medium;
    margin: 0 $space-medium $space-medium;
  }

  @include laptop {
    @include shadow;
    padding: $space-large;
    margin: 0 $space-large $space-large;
  }
}

.not-found {
  min-height: 20vh;

  &__header {
    margin-bottom: $space-medium;
  }
}
</style>
