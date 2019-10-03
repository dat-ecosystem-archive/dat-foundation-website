<div v-for="(section, index) in section">
  <h1>{{ section.name }}</h1>
  <h2>{{ section.description }}</h2>
 
  <div v-for="person in section.people">
    <Person :name="person" />
  </div>
</div>

<script>
import content from '../../.vuepress/assets/data/about/people.yml'

export default {
  name: 'AboutPeople',
  data () {
    return {
      section: content.section,
      timeline: content.timeline
    }
  }
}
</script>
