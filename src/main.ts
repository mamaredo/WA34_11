import 'ress'
import './style.css'
import { mapInit } from './feature/map/mapInit'
import './feature/weather/api'
import '@/feature/weather/weatherInfo'

window.onload = () => {
  // const app = document.querySelector<HTMLDivElement>('#app')!
  const headerTitle = document.getElementById('header-title')!
  headerTitle.textContent = 'ちずとてんきのあぷりけーしょん'
  mapInit()
}
