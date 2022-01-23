import { getTodayWeather } from './api/getTodayWeather'
import type { OneCallApiQueryStruct } from './api/type'

export const weatherInfo = {
  today: (query: OneCallApiQueryStruct) => getTodayWeather.get(query)
}

// const shool: OneCallApiQueryStruct = {
//   lat: 35.16832838570073,
//   lon: 136.88561516878792,
//   lang: 'ja'
// }

// weatherInfo.today(shool).then(res => console.log(res))
