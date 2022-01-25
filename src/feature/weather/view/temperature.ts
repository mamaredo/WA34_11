import { render } from '@/utils'
import type { RenderTextModel } from '@/types'
import type { CurrentWeather } from '../api/type'

const tempElement = ({
  current = 0,
  max = 0,
  min = 0,
  humidity = 0
}): RenderTextModel[] => [
  { id: 'temp-current', text: current },
  { id: 'temp-max', text: max },
  { id: 'temp-min', text: min },
  { id: 'temp-humidity', text: humidity }
]

export const renderTempContent = async (content: CurrentWeather['temp']) => {
  const renderTempContent = tempElement(content)
  render(renderTempContent)
}
