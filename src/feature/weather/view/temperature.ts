import { render } from '@/utils'
import type { RenderTextModel } from '@/types'
import type { CurrentWeather } from '../api/type'

const tempElement = ({
  current,
  max,
  min,
  humidity
}: CurrentWeather['temp']): RenderTextModel[] => [
  { id: 'temp-current', text: `現在： ${current}℃` },
  { id: 'temp-max', text: `最高気温： ${max}℃` },
  { id: 'temp-min', text: `最低気温： ${min}℃` },
  { id: 'temp-humidity', text: `湿度： ${humidity}℃` }
]

export const renderTempContent = async (temp: CurrentWeather['temp']) => {
  const content = tempElement(temp)
  render(content)
}
