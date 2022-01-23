import { apiClient } from '@/lib/apiClient'
import { createQueryString } from '@/utils/createQueryString'
import type { OneCallApiQueryStruct } from './type'

export const getTodayWeather = {
  get: async (query: OneCallApiQueryStruct) => {
    const url = 'onecall' + createQueryString(query)
    const response = await apiClient.get(url)
    return response
  }
}
