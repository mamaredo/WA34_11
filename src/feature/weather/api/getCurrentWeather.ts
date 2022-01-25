import { apiClient } from '@/lib/apiClient'
import { createQueryString } from '@/utils/createQueryString'
import type { CurrentWeather } from './type'
import type { CurrentWeatherApiQueryStruct } from './type'

export const getCurrentWeather = {
  get: async (query: CurrentWeatherApiQueryStruct): Promise<CurrentWeather> => {
    const url = 'weather' + createQueryString(query)
    const res = await apiClient.get(url)

    const {
      name,
      weather,
      main: temp
    } = { name: res.name, weather: res.weather[0], main: res.main }

    const payload: CurrentWeather = {
      name,
      weather: {
        description: weather.description,
        icon: weather.icon
      },
      temp: {
        current: temp.temp,
        feelsLike: temp.feels_like,
        max: temp.temp_max,
        min: temp.temp_min,
        humidity: temp.humidity
      }
    }
    return payload
  }
}
