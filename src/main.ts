import 'ress'
import './style.css'
import { mapClient } from './feature/Map/map-client'

window.onload = () => {
  // const app = document.querySelector<HTMLDivElement>('#app')!
  const headerTitle = document.getElementById('header-title')!
  headerTitle.textContent = 'ちずとてんきのあぷりけーしょん'
  mapClient()
}
