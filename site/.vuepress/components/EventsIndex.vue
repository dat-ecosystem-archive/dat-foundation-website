<template>
  <div class="events__index">
    <h1 class="events__index__page-title page-title">Events</h1>
    <EventSingle v-for="event in events" 
           :event="event"/>
  </div>
</template>

<script>
  import { markdown } from '../util'
  export default {
    name: 'EventsIndex',
    computed: {
      events() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/events'))
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    },
    methods: { markdown },
  }
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

.events-index {

}
</style>
