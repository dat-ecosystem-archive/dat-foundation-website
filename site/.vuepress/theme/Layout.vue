<template>
  <div class="app">
    <Navbar :logo="$site.themeConfig.logo"/>

    <main class="app__main">
      <Content/>
    </main>

    <Footer/>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

.app__main {
  padding: $space-large;
  margin: 0 $space-large;
  background: $color-white;
}
</style>
