<div class="about__history">
  <h1 class="about__history__title page-title">
    {{ title }}
  </h1>
  <div class="about__history__intro">
    {{ intro }}
  </div>
  <Timeline :items="timeline" />
</div>

<script>
import content from '../../../site/_data/about/history.yml'

export default {
  name: 'AboutHistory',
  data () {
    return {
      title: content.title,
      intro: content.intro,
      timeline: content.timeline
    }
  }
}
</script>

<style lang="scss">
@import '../../.vuepress/assets/stylesheets/variables.scss';

.about__history {
  &__intro {
    @include text-subhead;
    margin-bottom: $space-large;
  }
}
</style>
