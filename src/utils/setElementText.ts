import { getElementById } from './getElementById'

export const setElementText = (id: string, text: string | number) => {
  const element = getElementById(id)
  typeof text === 'number'
    ? (element.textContent = String(text))
    : (element.textContent = text)
}
