import { ref } from 'vue'
import { getGraphics, getGraphicData } from '@/api'
import { tGraphic, tGraphicDataParams, tGraphicData } from '../interfaces'

const graphics = ref([])
const graphicData = ref([])

interface tGraphicRef<tGraphic> {
  value: Array<tGraphic>,
}

interface tGraphicDataRef<tGraphicData> {
  value: Array<tGraphicData>,
}

interface tDashboard {
  getDashBoardData: () => void,
  getGraphicDataM: (params: tGraphicDataParams) => void,
  graphics: tGraphicRef<tGraphic>
  graphicData: tGraphicDataRef<tGraphicData>
}

export default function dashboardData (): tDashboard {
  const getDashBoardData = () => {
    getGraphics().then(result => {
      graphics.value = result
    })
  }

  const getGraphicDataM = (params: tGraphicDataParams) => {
    return getGraphicData(params).then(result => {
      graphicData.value = result.map((item: tGraphicData) => {
        return { ...item, createdAt: Date.parse(item.createdAt) }
      })
    })
  }

  return { getDashBoardData, getGraphicDataM, graphics, graphicData }
}
