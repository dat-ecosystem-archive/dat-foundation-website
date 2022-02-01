<template>
  <div class="app">
    <Nav/>
    <div v-if="!isBlogIndex" class="breadcrumbs">
      <div v-if="$page.frontmatter.template === 'blog'">
        <router-link to="/blog" class="breadcrumbs__crumb" >Blog</router-link>
        <span class="breadcrumbs__crumb">{{ $page.frontmatter.title }}</span>
      </div>

      <div v-else>
        <span v-for="crumb in breadcrumbs"
              class="breadcrumbs__crumb">
          {{ crumb }}
        </span>
      </div>
    </div>

    <main class="app__main">
      <transition appear name="fade">
        <Content/>
      </transition>
      
      <transition appear name="fade">
        <Post 
          v-if="$page.frontmatter.template === 'blog'" 
        />
      </transition>
    </main>

    <div class="pre-footer">
      <NewsletterSignup />
      <Donate />
    </div>

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

      isBlogIndex () {
        return this.$page.path === '/blog/'
      }
    },
  };
</script>


<style lang="scss">
@import '../../assets/stylesheets/variables.scss';

.app__main {
  .fade-enter-active, .fade-leave-active {
    transition: opacity .75s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

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
    
    &.router-link-active {
      &::before { display: none; }
      font-weight: normal;
    }
  }
}

.pre-footer {
  background-color: $color-neutral;
  color: black;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: $space-medium;
  padding: $space-medium;

  @include mobile { grid-template-columns: repeat(2, 1fr); }

  @include tablet { padding: $space-large; }
}
</style>
