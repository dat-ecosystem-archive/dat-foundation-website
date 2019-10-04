<div class="about__history">
  <div class="about__history__intro">
    {{ intro }}
  </div>
  <Timeline :items="timeline" />
</div>

<script>
import content from '../../.vuepress/assets/data/about/history.yml'

export default {
  name: 'AboutHistory',
  data () {
    return {
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
