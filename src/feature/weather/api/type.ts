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

// export type CurrentWeatherApiResponse = {
//   coord: {
//     lon: number
//     lat: number
//   }
//   weather: [
//     {
//       id: number
//       main: string
//       description: string
//       icon: string
//     }
//   ]
//   base: string
//   main: {
//     temp: number
//     feels_like: number
//     temp_min: number
//     temp_max: number
//     pressure: number
//     humidity: number
//     sea_level: number
//     grnd_level: number
//   }
//   visibility: number
//   wind: {
//     speed
//   }
// }

export type CurrentWeather = {
  name: string
  weather: {
    description: string
    icon: string
  }
  temp: {
    current: number
    feelsLike: number
    max: number
    min: number
    humidity: number
  }
}
