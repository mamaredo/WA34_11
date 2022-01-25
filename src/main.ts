import 'ress'
import './style.css'
import { setElementText } from '@/utils'
import { mapInit } from './feature/map/mapInit'
import type { RenderTextModel } from './types'

const constanceText: RenderTextModel[] = [
  { id: 'header-title', text: 'ちずとてんきのあぷりけーしょん' },
  { id: 'location-label', text: '地域' },
  { id: 'weather-label', text: '天気' },
  { id: 'temp-label', text: '気温' }
]

window.onload = () => {
  mapInit()
  // const app = document.querySelector<HTMLDivElement>('#app')!
  for (const content of constanceText) {
    setElementText(content.id, content.text)
  }
}
