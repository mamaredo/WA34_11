export const WEATHER_API = {
  URL: import.meta.env.VITE_WEATHER_API_URL as string,
  KEY: import.meta.env.VITE_WEATHER_API_KEY as string
} as const
