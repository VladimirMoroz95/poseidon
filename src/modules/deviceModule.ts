import { ref } from 'vue'
import { tDevice, tDeviceModels, tAddDevice } from '../interfaces'
import { getDeviceList, getDeviceModels, addDevice } from '@/api'

interface tDeviceRef<tDevice> {
  value: Array<tDevice>,
}

interface tDeviceModelsRef<tDeviceModels> {
  value: Array<tDeviceModels>,
}

interface tDeviceModel {
  device: tDeviceRef<tDevice>,
  deviceModels: tDeviceModelsRef<tDeviceModels>,
  getDevices: () => any,
  getDevicesModels: () => any,
  addNewDevice: () => void
}

const devices = ref([])
const deviceModels = ref([])

export default function deviceModel () {
  const getDevices = () => {
    return getDeviceList().then(response => {
      devices.value = response
    })
  }

  const getDevicesModels = () => {
    return getDeviceModels().then(response => {
      deviceModels.value = response
    })
  }

  const addNewDevice = (params: tAddDevice) => {
    return addDevice(params)
  }

  return { devices, deviceModels, getDevices, getDevicesModels, addNewDevice }
}
