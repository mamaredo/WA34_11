import { render } from '@/utils'
import type { RenderTextModel } from '@/types'

const locationNameElement = (name: string): RenderTextModel[] => [
  { id: 'location-name', text: name }
]

export const renderLocationNameContent = async (name: string) => {
  const content = locationNameElement(name)
  render(content)
}
