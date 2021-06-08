import { ref } from 'vue'
import { getGraphics, getGraphicData } from '@/api'
import { tGraphic, tGraphicDataParams } from '../interfaces'

const graphics = ref([])
const graphicData = ref([])

interface tGraphicRef<tGraphic> {
  value: Array<tGraphic>,
}

interface tDashboard {
  getDashBoardData: () => void,
  getGraphicDataM: (params: tGraphicDataParams) => void,
  graphics: tGraphicRef<tGraphic>
}

export default function dashboardData (): tDashboard {
  const getDashBoardData = () => {
    getGraphics().then(result => {
      graphics.value = result
    })
  }

  const getGraphicDataM = (params: tGraphicDataParams) => {
    getGraphicData(params).then(result => {
      graphicData.value = result
    })
  }

  return { getDashBoardData, getGraphicDataM, graphics }
}
