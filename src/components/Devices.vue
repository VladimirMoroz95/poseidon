<template>
  <div>
    devices
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import deviceModule from '@/modules/deviceModule'

export default defineComponent({
  setup () {
    const { getDevices } = deviceModule()
    return { getDevices }
  },

  mounted (): void {
    this.getDevices()
  }
})
</script>

<style lang="scss" scoped>

</style>
