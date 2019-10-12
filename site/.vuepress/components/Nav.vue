<template>
  <header>
    <router-link to="/">
      <div class="logo">
      </div>
    </router-link>

  <div class="nav__mobile__open" @click="toggleMobileNav">
    <svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M0 0h18v2H0zM0 6h18v2H0zM0 12h18v2H0z"/></g></svg>
  </div>

  <div v-if="mobileNavActive" class="nav__shade" />
  <nav :class="{'is-visible': mobileNavActive}">
    <div class="nav__mobile__close" @click="toggleMobileNav">
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M2.343.929l12.728 12.728-1.414 1.414L.929 2.343z"/><path d="M13.657.929L.929 13.657l1.414 1.414L15.071 2.343z"/></g></svg>
    </div>
    <div v-for="(navItem, index) in navItems"
        :key="`navItem-${index}`"
        class="nav-section">
      
        <router-link v-if="navItem.path"
           :to="navItem.path"
           class="nav-section__name">
          {{ navItem.label }}
        </router-link>

        <div v-else 
             class="nav-section__name"
             :class="{'is-active': subIsActive('/' + navItem.label.toLowerCase())}">
          {{ navItem.label }}
        </div>

      <ul class="nav-section__items">
        <li v-for="secondary in navItem.secondary"
            class="nav-section__items__link">

          <a v-if="secondary.external"
             target="_blank"
             rel="noopener"
             :href="secondary.path">
            {{ secondary.label }}
          </a>
              
          <router-link v-else :to="secondary.path">
            {{ secondary.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</header>
</template>

<script>
import navItems from '../../../site/_data/globals/navigation.yml'
export default {
  name: 'Navbar',
  data () {
    return {
      navItems: navItems.nav_items,
      mobileNavActive: false
    }
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavActive = !this.mobileNavActive
    },
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0 // current path starts with this path string
        })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

header {
  display: flex;
  justify-content: space-between;
  padding: $space-medium;

  @include laptop {
    padding: $space-large;
  }
}

nav,
.nav {
  @include shadow;
  background: $color-black;
  color: $color-white;
  display: none;
  overflow-y: scroll;
  padding: $space-medium;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 20vw;
  z-index: 1;

  &__shade {
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    background: $color-white;
    opacity: 0.85;
  }

  &.is-visible {
    display: block;
  }

  @include mobile {
    background: none;
    box-shadow: none;
    color: $color-black;
    display: flex;
    justify-content: flex-end;
    left: auto;
    overflow: unset;
    position: relative;
    padding: 0;
  }
}

.nav__mobile {
  &__open {
    fill: $color-black;
    @include mobile {
      display: none;
    }
  }

  &__close {
    fill: $color-white;
    position: absolute;
    right: $space-medium;
    top: $space-medium;

    @include mobile {
      display: none;
    }
  }
}

.nav-section {
  position: relative;
  margin-bottom: $space-medium;
  margin-right: $space-large;

  @include mobile {
    &:last-of-type {
      margin-right: 0;
    }
    
    &:hover {
      .nav-section__items { 
        visibility: visible; 
        opacity: 1; }
    }
  }

  &__name {
    font-weight: bold;
    margin-bottom: $space-small;

    &.is-active,
    &.router-link-active {
      color: $color-green;
      position: relative;

      &::before {
        clip-path: polygon(49% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        content: '';
        height: 10px  * 1.15;
        width: 10px;
        background: $color-green;
        position: absolute;
        left: -$space-base;
        top: 6px;
      }
    }
  }

  &__items {
    list-style: none;
  
    @include mobile {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: $space-medium;
      transition: all 250ms ease-in-out;
    }

    &__link { 
      margin-bottom: $space-tiny; 
      margin-left: 0;
      
      &:hover { color: $color-green; }

      .router-link-active {
        color: $color-green;
        text-decoration: underline;
      }
    }
  }
}

.logo {
  background-image: url("../public/images/logo.svg");
  width: 15vw;
  height: 15vw;
  background-size: contain;
  background-repeat: no-repeat;

  @include tablet {
    width: 10vw;
    height: 10vw;
  }
}
</style>
