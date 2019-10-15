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

      <div v-if="event.frontmatter.livestream"
           class="event__details__livestream">
        Watch the
        <a :href="event.frontmatter.rsvp" class="">livestream</a>!
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
  margin-bottom: $space-medium;
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid $color-gray-light;
  padding-bottom: $space-medium;

  @include mobile {
    flex-direction: row;
  }

  &__timing {
    margin-right: $space-medium;
    margin-bottom: $space-base;
    
    &__date {
      @include type-medium;
      font-weight: bold;
    }

    &__time {
      color: $color-gray;
    }
  }
  
  &__image {
    margin-bottom: $space-base;
    height: 50vw;
    width: 50vw;
    object-fit: cover;

    @include mobile {
      width: 30vw;
      margin-right: $space-base;
      height: 30vw;
    }
  }

  &__details {
    @include mobile {
      width: 30vw;
    }

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

    &__livestream {
      margin-bottom: $space-base;
      color: $color-green;
      text-decoration: underline;
    }
  }
}
</style>
