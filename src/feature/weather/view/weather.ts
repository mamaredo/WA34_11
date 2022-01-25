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
  { id: 'weather-description', text: description },
  { id: 'weather-icon', text: icon }
]

export const renderWeatherContent = async (
  content: CurrentWeather['weather']
) => {
  // const content = await getCurrentWeather.get(query)
  const renderWeatherContent = weatherElement(content)
  render(renderWeatherContent)
}
