// type ApiType = 'onecall'
type ExcludeOption = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts'
type UnitsOption = 'standard' | 'metric' | 'imperial'

export type OneCallApiQueryStruct = {
  lat: number
  lon: number
  exclude?: ExcludeOption
  units: UnitsOption
  lang: string
}

export type CurrentWeatherApiQueryStruct = {
  lat: number
  lon: number
  units?: UnitsOption
  lang?: string
}

export type CurrentWeather = {
  name: string
  weather: {
    description: string
    icon: string
  }
  temp: {
    current: string | number
    feelsLike: string | number
    max: string | number
    min: string | number
    humidity: string | number
  }
}
