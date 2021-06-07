import { ref } from 'vue'
import { getGraphics } from '@/api'
import { tGraphic } from '../interfaces'

const graphics = ref([])

interface tGraphicRef<tGraphic> {
  value: Array<tGraphic>,
}

interface tDashboard {
  getDashBoardData: () => void,
  graphics: tGraphicRef<tGraphic>
}

export default function dashboardData (): tDashboard {
  const getDashBoardData = () => {
    getGraphics().then(result => {
      graphics.value = result
    })
  }

  return { getDashBoardData, graphics }
}
