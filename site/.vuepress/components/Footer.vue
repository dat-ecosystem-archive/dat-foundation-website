<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div v-for="(footerItem, index) in footerItems"
          :key="`footerItem-${index}`"
          class="footer__section">
        
          <router-link v-if="footerItem.path"
            :to="footerItem.path"
             :href="footerItem.path"
             class="footer__section__name">
            {{ footerItem.label }}
          </router-link>

          <div v-else class="footer__section__name">
            {{ footerItem.label }}
          </div>

      <ul class="footer__section__items">
        <li v-for="secondary in footerItem.secondary"
            class="footer__section__items__link">
          <router-link :to="secondary.path">
            {{ secondary.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>

  <!-- TODO: Update this link -->
  <div class="footer__copyright">Dat Foundation © 2013 - 2019 • Source on <a href="#">GitHub</a>
  </div>
  </footer>
</template>

<script>
import navItems from '../../../site/_data/globals/navigation.yml'
export default {
  name: 'Navbar',
  data () {
    return {
      footerItems: navItems.nav_items
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

.footer {
  background-color: $color-black;
  color: $color-white;
  padding: $space-medium;

  @include tablet {
    padding: $space-large;
  }


  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: $space-large;
    
    @include tablet {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }

  &__section {
    margin-bottom: $space-medium;
    width: 50%;

    @include tablet {
      margin-right: $space-large;
      width: 100%;
    }

    &__name {
      font-weight: bold;
      margin-bottom: $space-small;

      @include tablet {
        margin-bottom: $space-medium;
      }
    }

    &__items {
      list-style: none;

      &__link  {
        color: $color-white;
      }
    }
  }

  &__copyright {
    @include type-small;
    color: $color-gray-light;
  }
}

</style>
