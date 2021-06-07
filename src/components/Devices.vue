<template>
  <div class="devices-page">
    <div class="button green-button" @click="showModal = true" @close="showModal = false">
      <span>Добавить устройство</span>
    </div>
    <div class="devices-wrapper">
      <div v-for="device in devices" :key="device.id" class="device">
        <div class="device__header">
          <h1>{{ device.name }}</h1>
        </div>
        <div class="device__body">
          <span>Device ID: {{ device.id }}</span>
          <span>Secret: {{ device.secret }}</span>
          <span>User ID: {{ device.userId }}</span>
          <span>Created at: {{ device.createdAt }}</span>
          <span>Updated at: {{ device.updatedAt }}</span>
        </div>
      </div>
    </div>

    <ModalComponent :visible="showModal" @close="showModal = false">
      <template v-slot:body>
        <div class="add-device-modal">
          <h1 class="modal-title">ADD DEVICE</h1>
          <label class="input-label">Device Name</label>
          <input class="input" v-model="deviceName" />
          <label class="input-label">Device Model</label>
          <select class="select input" v-model="deviceModel">
            <option v-for="model in deviceModels" :key="model.id">
              {{ model.deviceName }}
            </option>
          </select>

          <div class="control-panel">
            <button class="button green-button" @click="addDevice">
              <span>Добавить</span>
            </button>
          </div>
        </div>
      </template>
    </ModalComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import deviceModule from '@/modules/deviceModule'
import ModalComponent from '@/components/ModalComponent.vue'

export default defineComponent({
  setup () {
    const {
      getDevices,
      devices,
      getDevicesModels,
      deviceModels,
      addNewDevice
    } = deviceModule()
    return { getDevices, devices, getDevicesModels, deviceModels, addNewDevice }
  },

  data () {
    return {
      deviceName: '',
      deviceModel: { id: 0 },
      showModal: false
    }
  },

  mounted (): void {
    this.getDevices()
    this.getDevicesModels()
  },

  methods: {
    addDevice () {
      if (!this.deviceName || !this.deviceModel) return

      this.addNewDevice({ name: this.deviceName, device: this.deviceModel.id })
    }
  },

  components: {
    ModalComponent
  }
})
</script>

<style lang="scss" scoped>
  .devices-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px;
    box-sizing: border-box;

    .devices-wrapper {
      display: flex;
      flex-wrap: wrap;

      .device {
        display: flex;
        flex-direction: column;
        border: 1px solid #91979a;

        &__header {
          display: flex;
          align-items: center;
          height: 50px;
          padding: 0 15px;
          border-bottom: 1px solid #91979a;

          h1 {
            font-size: 16px;
          }
        }

        &__body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 15px;

          span {
            font-size: 14px;
            margin-bottom: 10px;
          }
        }
      }
    }

    .green-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      height: 40px;
      margin-bottom: 25px;

      span {
        text-transform: uppercase;
        color: #ffffff;
        font-weight: 500;
      }
    }

    .add-device-modal {
      background: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 40px;

      h1 {
        font-size: 26px;
        margin-bottom: 40px;
      }

      .input {
        width: 260px;
        height: 40px;
        font-size: 16px;
        margin-bottom: 30px;
      }

      .control-panel {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
</style>
