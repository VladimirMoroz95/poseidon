<template>
  <div class="dashboard-page">
    <div class="graphics-wrapper">
      <div class="graphic" v-for="graphic in graphics" :key="graphic.id">
        <div @click="showGraphic(graphic)" class="graphic__header">
          <span class="graphic__name">{{ graphic.name }}</span>
          <span class="graphic__text">click to see graph</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import dashboardModule from '../modules/dashboardModule'

export default defineComponent({
  setup () {
    const { getDashBoardData, graphics, getGraphicDataM } = dashboardModule()
    return { getDashBoardData, graphics, getGraphicDataM }
  },

  mounted () {
    this.getDashBoardData()
  },

  methods: {
    showGraphic (graphic) {
      const { period, device, canal } = graphic
      this.getGraphicDataM({ period, device, canal })
    }
  }
})
</script>

<style lang="scss" scoped>
  .dashboard-page {
    width: 100%;
    padding: 40px;
    box-sizing: border-box;

    .graphics-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;

      .graphic {
        width: 100%;
        box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.25), 0 0 17px rgba(0, 0, 0, 0.12);
        border-radius: 5px;
        cursor: pointer;

        &__header {
          height: 40px;
          display: flex;
          padding: 0 25px;
          justify-content: space-between;
          align-items: center;
        }

        &__name {
          font-size: 16px;
          font-weight: 600;
        }

        &__text {
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
        }
      }
    }
  }
</style>
