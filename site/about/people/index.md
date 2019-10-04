<div v-for="(section, index) in section"
     class="people__section">
  <h1 class="people__section__title">{{ section.name }}</h1>
  <div class="people__section__subhead">{{ section.description }}</div>
  

  <div class="people__section__people">
    <Person v-for="person in section.people"
            :name="person" />
  </div>
</div>

<script>
import content from '../../.vuepress/assets/data/about/people.yml'

export default {
  name: 'AboutPeople',
  data () {
    return {
      section: content.section
    }
  }
}
</script>

<style lang="scss">
@import '../../.vuepress/assets/stylesheets/variables.scss';

.people {
  &__section {
    margin-bottom: $space-large;

    &__title {
      margin-bottom: $space-medium;
    }

    &__subhead {
      @include text-subhead;
      margin-bottom: $space-medium;
    }

    &__people {
      display: flex;
    }
  }
}
</style>
