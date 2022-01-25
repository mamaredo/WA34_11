import { setElementText } from './setElementText'
import type { RenderTextModel } from '@/types'

export const render = (content: RenderTextModel[]) => {
  for (const { id, text } of content) {
    setElementText(id, text)
  }
}
