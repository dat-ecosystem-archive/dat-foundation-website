<template>
  <div class="event">
    <div class="event__timing">
      <div class="event__timing__date">
        {{ event.frontmatter.date }}
      </div>

      <div class="event__timing__time">
        {{ event.frontmatter.start }} – {{ event.frontmatter.end }}
      </div>
    </div>

    <!-- If no image is present, display a placeholder -->
    <img :src="event.frontmatter.image"
         class="event__image" />

    <div class="event__details">
      <div class="event__details__name">
        {{ event.frontmatter.name }}
      </div>
      
      <div v-if="event.frontmatter.location" class="event__details__location">
        at <a v-if="event.frontmatter.location.url" :href="event.frontmatter.location.url" class="event__details__location__name">{{ event.frontmatter.location.name}}</a>

        <div class="event__details__location__address">
          {{ event.frontmatter.location.addressOne}} <br/>
          {{ event.frontmatter.location.addressTwo}}
        </div>
      </div>

      <div class="event__details__description">
        {{ event.frontmatter.description}}
      </div>

      <div v-if="event.frontmatter.rsvp">
        <a :href="event.frontmatter.rsvp" class="button">RSVP</a>
      </div>
    </div>

  </div>
</template>

<script> 
export default {
  name: 'EventSingle',
  props: {
    event: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/variables.scss';

.event {
  display: flex;
  margin-bottom: $space-large;

  &__timing {
    margin-right: $space-large;
    
    &__date {
      @include type-medium;
      font-weight: bold;
    }

    &__time {
      color: $color-gray;
      font-weight: bold;
    }
  }
  
  &__image {
    width: 30vw;
    margin-right: $space-base;
  }

  &__details {
    width: 30vw;
    
    &__name {
      @include type-medium;
      font-weight: bold;
    }
    
    &__location {
      &__name {
        color: $color-green;
        font-weight: bold;
      }

      &__address {
        @include type-small;
        color: $color-gray;
        margin-bottom: $space-base;
        margin-top: $space-base;
      }
    }
    
    &__description {
      margin-bottom: $space-base;
    }
  }
}
</style>
