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
  
  <nav>
    <div v-for="(navItem, index) in navItems"
        :key="`navItem-${index}`"
        class="nav-section">
      
        <router-link v-if="navItem.path"
          :to="navItem.path"
           :href="navItem.path"
           class="nav-section__name">
          {{ navItem.label }}
        </router-link>

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

<!--     <div class="brand">
      <router-link to="/">
        <div
          v-if="logo"
          class="logo"
          :style="{ backgroundImage: `url(${logo})`}"
          :title="$site.title"
        />
        <span v-else>{{ $site.title }}</span>
      </router-link>
    </div>

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
      navItems: navItems.nav_items
    }
  },
  props: {
    logo: {
      type: String,
      required: false,
    }
  }
}
</script>

<!-- 
  export default {
    props: {
      logo: {
        type: String,
        required: false,
      }
    },
    data() {
      return {
        mobileNavActive: false
      }
    },
    methods: {
      toggleMobileNav() {
        this.mobileNavActive = !this.mobileNavActive
      }
    }
  } -->

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

header {
  display: flex;
  justify-content: space-between;
  padding: $space-large;
}

nav {
  display: flex;
  justify-content: flex-end;
}

.nav-section {
  margin-left: $space-large;
  position: relative;

  &:hover {
    .nav-section__items { visibility: visible; opacity: 1; }
  }

  &__name {
    font-weight: bold;
    
  }

  &__items {
    list-style: none;
    opacity: 0;
    position: absolute;
    top: $space-medium;
    transition: all 250ms ease-in-out;
    visibility: hidden;

    &__link { 
      margin-bottom: $space-tiny; 
      
      &:hover { color: $color-green; }
    }
  }
}

  .logo {
    width: 100px;
    height: 100px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 600px) {
    .desktop-nav {
      display: block;
    }
    .mobile-nav-toggle {
      display: none;
    }
    .mobile-nav {
      display: none;
    }
  }

</style>
