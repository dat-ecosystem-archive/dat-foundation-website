<h4>{{ title }}</h4>

<script>
import content from '../../.vuepress/assets/data/about/financial.yml'

export default {
  name: 'AboutFinancial',
  data () {
    return {
      title: content.title
    }
  }
}
</script>
