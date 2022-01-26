import { render } from '@/utils'
import type { CurrentWeather } from '@/features/weather/types'
import type { RenderTextModel } from '@/types'

const weatherElement = ({
  description,
  icon
}: CurrentWeather['weather']): RenderTextModel[] => [
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
