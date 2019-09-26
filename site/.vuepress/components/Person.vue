<template>
  <div class="person">
    <a :href="person.website" class="person__name">{{ person.name }}</a>
    <div class="person__title">{{ person.title }}</div>
    <a :href="person.affiliation.url" class="person__affiliation">{{ person.affiliation.name }} </a>
   <br/><br/>
   <!-- <a :href="person.website"><img :src="person.image"></a> -->
   <div class="person__bio">{{ person.bio }}</div>
    <br/><br/><br/>
  </div>
</template>

<script>
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
    }
  }
</script>
