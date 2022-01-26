import { getCurrentWeather } from './api/getCurrentWeather'
import type { CurrentWeatherApiQueryStruct, CurrentWeather } from './api/type'
import { renderTempContent } from './view/temperature'
import { renderWeatherContent } from './view/weather'
import { renderLocationNameContent } from './view/locationName'

type LocationType = {
  lat: number
  lng: number
}
export const weatherInfo = {
  today: (location: LocationType) => {
    const query: CurrentWeatherApiQueryStruct = {
      lat: location.lat,
      lon: location.lng,
      units: 'metric',
      lang: 'ja'
    }
    return getCurrentWeather.get(query)
  },
  view: (content: CurrentWeather & { name: string }) => {
    const { name, weather, temp } = content
    renderLocationNameContent(name)
    renderWeatherContent(weather)
    renderTempContent(temp)
  }
}

// export const createCurrentWeatherOption = (
//   lat: number,
//   lon: number
// ): CurrentWeatherApiQueryStruct => ({
//   lat: lat,
//   lon: lon,
//   lang: 'ja',
//   units: 'metric'
// })

// const shool: CurrentWeatherApiQueryStruct = {
//   lat: 35.16832838570073,
//   lon: 136.88561516878792,
//   lang: 'ja',
//   units: 'metric'
// }

// weatherInfo.today(shool).then(res => console.log(res))

// console.log(weatherInfo.today(shool))
