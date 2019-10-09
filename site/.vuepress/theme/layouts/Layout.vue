<template>
  <div class="app">
    <Nav/>
    <div class="breadcrumbs">
      <span v-for="crumb in breadcrumbs"
            class="breadcrumbs__crumb">
        {{ crumb }}
      </span>
    </div>
    <main class="app__main">
      <Content/>
      <Post 
        v-if="$page.frontmatter.template === 'blog'" 
      />
    </main>

    <Footer/>

  </div>
</template>

<script>
  export default {
    computed: {
      breadcrumbs () {
        const parts = this.$page.path.split("/");
        var crumbs = parts.filter(function(el) { return el; });
        return crumbs;
      },
    },
  };
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

.breadcrumbs {
  @include type-tiny;
  text-transform: uppercase;
  display: block;
  margin: 0 0 $space-base $space-medium;

  @include laptop {
    margin-left: $space-large;
  }

  &__crumb {
    position: relative; 
    
    &:last-of-type {
      font-weight: bold;
      
      &::before {
        clip-path: polygon(49% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        content: '';
        height: 10px  * 1.15;
        width: 10px;
        background: $color-green;
        display: inline-block;
        position: relative;
        margin: 0 $space-small;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
