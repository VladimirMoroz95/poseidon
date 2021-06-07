<template>
  <div class="dashboard-page">Dashboard</div>
</template>

<script>
import { defineComponent } from 'vue'
import dashboardModule from '../modules/dashboardModule'

export default defineComponent({
  setup () {
    const { getDashBoardData } = dashboardModule()
    return { getDashBoardData }
  },

  mounted () {
    this.getDashBoardData()
  }
})
</script>

<style lang="scss" scoped>
  .dashboard-page {
    width: 100%;
  }
</style>
