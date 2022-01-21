import 'ress'
import './style.css'
import { mapInit } from './feature/map/mapInit'
import './feature/weather/api'

window.onload = () => {
  // const app = document.querySelector<HTMLDivElement>('#app')!
  const headerTitle = document.getElementById('header-title')!
  headerTitle.textContent = 'ちずとてんきのあぷりけーしょん'
  mapInit()
}
