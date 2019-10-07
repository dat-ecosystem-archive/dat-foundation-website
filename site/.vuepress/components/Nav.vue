<template>
  <header>
    <router-link to="/">
      <div
        v-if="logo"
        class="logo"
        :style="{ backgroundImage: `url(${logo})`}"
        :title="$site.title"
      />
      <span v-else>{{ $site.title }}</span>
    </router-link>

  <div class="nav__mobile__open" @click="toggleMobileNav">
    <svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M0 0h18v2H0zM0 6h18v2H0zM0 12h18v2H0z"/></g></svg>
  </div>

  <nav :class="{'is-visible': mobileNavActive}">
    <div class="nav__mobile__close" @click="toggleMobileNav">
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M2.343.929l12.728 12.728-1.414 1.414L.929 2.343z"/><path d="M13.657.929L.929 13.657l1.414 1.414L15.071 2.343z"/></g></svg>
    </div>
    <div v-for="(navItem, index) in navItems"
        :key="`navItem-${index}`"
        class="nav-section">
      
        <a v-if="navItem.path"
          :to="navItem.path"
           :href="navItem.path"
           class="nav-section__name">
          {{ navItem.label }}
        </a>

        <div v-else class="nav-section__name">
          {{ navItem.label }}
        </div>

    <ul class="nav-section__items">
      <li v-for="secondary in navItem.secondary"
          class="nav-section__items__link">
        <router-link :to="secondary.path">
          {{ secondary.label }}
        </router-link>
      </li>
    </ul>

    </div>
  </nav>

<!--     
    <nav v-if="navLinks" class="navigation left desktop-nav">
      <ul>
        <router-link
          v-for="nav in navLinks"
          :key="nav.text"
          tag="li"
          :to="nav.link"
          active-class="active"
          v-text="nav.text"
          exact
        />
      </ul>
    </nav>

    <div class="mobile-nav-toggle" @click="toggleMobileNav" />
    <div class="mobile-nav" :class="{'mobile-nav--active': mobileNavActive}">
      <nav>
        <ul @click="toggleMobileNav">
          <router-link
            v-for="nav in navLinks"
            :key="nav.text"
            v-if="!nav.external"
            tag="li"
            :to="nav.link"
            active-class="active"
            v-text="nav.text"
            exact
          />
          <li v-for="nav in navLinks" v-if="nav.external" @click="toggleMobileNav">
            <a :href="nav.link" target="_blank">{{ nav.text }}</a>
          </li>
        </ul>
        <div class="mobile-nav-close" @click="toggleMobileNav" />
      </nav>
    </div> -->

  </header>
</template>

<script>
import navItems from '../assets/data/globals/navigation.yml'
export default {
  name: 'Navbar',
  data () {
    return {
      navItems: navItems.nav_items,
      mobileNavActive: false
    }
  },
  props: {
    logo: {
      type: String,
      required: false,
    }
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavActive = !this.mobileNavActive
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
  background: $color-black;
  bottom: 0;
  color: $color-white;
  display: none;
  left: 20vw;
  padding: $space-medium;
  position: fixed;
  right: 0;
  top: 0;

  &.is-visible {
    display: block;
  }

  @include mobile {
    display: flex;
    justify-content: flex-end;
    position: relative;
    background: none;
    left: auto;
    color: $color-black;
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
    @include mobile {
      display: none;
    }
  }
}
.nav-section {
  position: relative;
  margin-bottom: $space-medium;

  @include mobile {
    margin-right: $space-medium;

    &:last-of-type {
      margin-right: 0;
    }
    
    &:hover {
      .nav-section__items { visibility: visible; opacity: 1; }
    }
  }

  &__name {
    font-weight: bold;
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
      
      &:hover { color: $color-green; }
    }
  }
}

.logo {
  width: 30vw;
  height: 30vw;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
