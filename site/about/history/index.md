{{ intro }}
<Timeline :items="timeline" />

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
