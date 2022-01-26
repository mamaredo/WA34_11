// type ApiType = 'onecall'
type ExcludeOption = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts'
type UnitsOption = 'standard' | 'metric' | 'imperial'

type OpenWeatherApiDefaultQuery = {
  lat: number
  lon: number
  units?: UnitsOption
  lang?: string
}

export type CurrentWeatherApiQueryStruct = OpenWeatherApiDefaultQuery

export type CurrentWeather = {
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
