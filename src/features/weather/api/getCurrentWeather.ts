import { apiClient } from '@/lib/apiClient'
import { createQueryString } from '@/utils/createQueryString'
import type {
  CurrentWeather,
  CurrentWeatherApiQueryStruct
} from '@/features/weather/types'

export const getCurrentWeather = {
  get: async (query: CurrentWeatherApiQueryStruct): Promise<CurrentWeather> => {
    const url = 'weather' + createQueryString(query)
    const res = await apiClient.get(url)

    const { weather, main: temp } = { weather: res.weather[0], main: res.main }
    const payload: CurrentWeather = {
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
