<template>
  <div v-if="visible" class="dialog">
    <div class="dialog__background" @click="closeModal"></div>
    <div class="dialog-wrapper">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    visible: Boolean
  },

  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
})
</script>

<style lang="scss" scoped>
  .dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2000;

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2100;
    }

    .dialog-wrapper {
      z-index: 3000;
    }
  }
</style>
