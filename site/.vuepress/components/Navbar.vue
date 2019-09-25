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
      
        <a v-if="navItem.path"
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
        <a :href="secondary.path">
          {{ secondary.label }}
        </a>
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
import navItems from '../../settings/navigation.yml'
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

// Spacing
$space-base: 16px;

$space-tiny: $space-base / 4;
$space-small: $space-base / 2;
$space-medium: $space-base * 2;
$space-large: $space-base * 4;

// Colors
$color-green: #2aca4b;
$color-black: #293648;
$color-white: #ffffff;

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

  a {
    text-decoration: none;
    color: inherit;
  }

  a:active { color: inherit; }
  a:visited { color: inherit; }

  .mobile-nav {
    display: block;
    position: absolute;
    background: #ffffff;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    transform: translateY(-100%);
    transition: transform 0.35s ease-in-out;
    text-align: center;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2;
  }

  .mobile-nav li {
    list-style: none;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  .mobile-nav li:hover {
    opacity: 0.6;
  }

  .mobile-nav--active {
    transform: translateY(0);
  }

  .mobile-nav-close {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    padding: 3rem;
    background-image: url('/close.svg');
    background-position: center;
    background-size: 1.5rem;
    background-repeat: no-repeat;
    transition: opacity 0.15s;
    cursor: pointer;
  }

  .mobile-nav-toggle {
    display: block;
    width: 3rem;
    height: 3rem;
    background-image: url('/burger.svg');
    background-position: center;
    background-size: 1.5rem;
    background-repeat: no-repeat;
    transition: opacity 0.15s;
    cursor: pointer;
  }

  .mobile-nav-toggle:hover,
  .mobile-nav-close:hover {
    opacity: 0.6;
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
