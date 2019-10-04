<template>
  <div class="person"
       :class="{ 'full-bio': person.active }">
    <a :href="person.website">
      <div class="person__image">
        <img :src="person.image">
      </div>
    </a>
    <a :href="person.website" class="person__name"><h3>{{ person.name }}</h3></a>
    <div class="person__title">{{ person.title }}</div>
    <a :href="person.affiliation.url" class="person__affiliation">{{ person.affiliation.name }} </a>
   <br/><br/>
   <div v-html="markdown(person.bio)" class="person__bio"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'Person',
  props: {
    name: {
      type: String,
      required: false
    }
  },

  computed: {
    person(name) {
      return this.$site.pages
        .filter(x => x.path.startsWith('/people/') && x.frontmatter.name == this.name)[0].frontmatter
    }
  },

  methods: {
    markdown (input) {
      if (input === null) {
        return false
      } else {
        return marked(String(input), {
          smartypants: true,
          gfm: true,
          breaks: true
        })
      }
    }
  } 
}
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

// Change these! 
$person-width: 100px;
$person-stroke: 3px;

// Don't change these!
$person-height: $person-width * 1.15;
$person-outline-width: $person-width + ($person-stroke * 2);
$person-outline-height: $person-height + ($person-stroke * 2);

.person {
  border: 3px solid $color-green;
  padding: $space-base;
  width: 45%;
  margin-right: $space-large;
  position: relative;


  
  &__image {
    clip-path: polygon(49% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background: $color-green;
    width: $person-outline-width;
    height: $person-outline-height;
    position: absolute;
    right: -3px;
    top: -33px;
    
    img {
      clip-path: polygon(49% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      width: $person-width;
      height: $person-height;
      object-fit: cover;
      position: absolute;
      top: $person-stroke;
      left: $person-stroke;
    }
  }



  &__name {

  }

  &__title {
    text-transform: uppercase;
    font-weight: bold;
  }

  &__affiliation {
    text-transform: uppercase;
    font-weight: bold;
    color: $color-green;
  }

  &__bio {

  }
}
</style>
