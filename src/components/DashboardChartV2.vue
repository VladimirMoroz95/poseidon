<script>

import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'
import dashboardModule from '../modules/dashboardModule'
import moment from 'moment'

export default defineComponent({
  props: {
    title: String
  },
  extends: Line,
  setup () {
    const { graphicData } = dashboardModule()

    return { graphicData }
  },

  watch: {
    graphicData (value) {
      const data = []
      const labels = []

      value.forEach(item => {
        data.push(item.value)
        labels.push(moment(item.createdAt).format('DD - MM - YYYY'))
      })

      this.renderChart({
        labels,
        datasets: [
          {
            label: this.title,
            backgroundColor: '#f87979',
            data
          }
        ]
      })
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
