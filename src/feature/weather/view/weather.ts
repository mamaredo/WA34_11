import { render } from '@/utils'
import type { CurrentWeather } from '../api/type'
import type { RenderTextModel } from '@/types'

type WeatherContent = {
  description: string
  icon: string
}
const weatherElement = ({
  description,
  icon
}: WeatherContent): RenderTextModel[] => [
  { id: 'weather-description', text: `： ${description}` },
  {
    id: 'weather-icon',
    text: `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="天気アイコン" />`
  }
]

export const renderWeatherContent = async (
  weather: CurrentWeather['weather']
) => {
  const content = weatherElement(weather)
  render(content)
}
