// type ApiType = 'onecall'
type ExcludeOption = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts'
type UtilsOption = 'standard' | 'metric' | 'imperial'

export type OneCallApiQueryStruct = {
  lat: number
  lon: number
  exclude?: ExcludeOption
  utils?: UtilsOption
  lang: string
}
