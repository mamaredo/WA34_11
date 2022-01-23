import { WEATHER_API } from '@/config'

const baseUrl = WEATHER_API.URL
const apiKey = WEATHER_API.KEY

export const apiClient = {
  get: async (url: string) => {
    const requestUrl = baseUrl + url + `&appid=${apiKey}`
    try {
      const response = await fetch(requestUrl, {
        method: 'GET',
        mode: 'cors'
      })
      if (!response.ok) {
        const err = await response.json()
        throw new Error(err)
      }
      return await response.json()
    } catch (error) {
      console.error(error)
    }
  },
  post: async (url: string, body: Record<string, string | number>) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if (!response.ok) {
      const err = await response.json()
      throw new Error(err)
    }
    return await response.json()
  }
}
