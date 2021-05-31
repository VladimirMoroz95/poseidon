import { ref } from 'vue'
import { tDevice, tDeviceModels } from '../interfaces'
import { getDeviceList } from '@/api'

interface tDeviceRef<tDevice> {
  value: Array<tDevice>,
}

interface tDeviceModelsRef<tDeviceModels> {
  value: Array<tDeviceModels>,
}

interface tDeviceModel {
  device: tDeviceRef<tDevice>,
  deviceModels: tDeviceModelsRef<tDeviceModels>,
  getDevices: () => any
}

const devices = ref([])
const deviceModels = ref([])

export default function deviceModel () {
  const getDevices = () => {
    return getDeviceList().then(response => {
      console.log('response')
    })
  }
  return { devices, deviceModels, getDevices }
}
