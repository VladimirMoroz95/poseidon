<template>
  <Chart
    :size="{ width: 2200, height: 800 }"
    :data="graphicData"
    :margin="margin"
    :direction="direction"
    :axis="axis"
  >

    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Area :dataKeys="['createdAt', 'value']" type="monotone" :areaStyle="{ fill: 'url(#grad)' }" />
      <Line
        :dataKeys="['createdAt', 'value']"
        type="monotone"
        :lineStyle="{
          stroke: '#9f7aea'
        }"
      />
      <defs>
        <linearGradient id="grad" gradientTransform="rotate(90)">
          <stop offset="0%" stop-color="#be90ff" stop-opacity="1" />
          <stop offset="100%" stop-color="white" stop-opacity="0.4" />
        </linearGradient>
      </defs>
    </template>

    <template #widgets>
      <Tooltip
        borderColor="#48CAE4"
        :config="{
          value: { color: '#9f7aea' },
          createdAt: { color: 'red', format: formatDate }
        }"
      />
    </template>
  </Chart>
</template>

<script>
import { Chart, Grid, Line, Area, Tooltip } from 'vue3-charts'
import dashboardModule from '../modules/dashboardModule'
import { ref } from 'vue'
import moment from 'moment'

export default {
  setup () {
    const { graphicData } = dashboardModule()
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 60
    })
    const direction = ref('horizontal')
    const axis = ref({
      primary: {
        type: 'band',
        format: (val) => {
          moment.locale('ru')
          return moment(val).format('DD-MM-YYYY')
        }
      },
      secondary: {
        type: 'band'
      }
    })

    console.log('graphicData', graphicData)
    return { graphicData, margin, direction, axis }
  },

  data () {
    return {}
  },

  methods: {
    formatDate (date) {
      return moment(date).format('DD-MM-YYYY')
    }
  },

  components: { Chart, Grid, Line, Area, Tooltip }
}
</script>

<style scoped>

</style>
