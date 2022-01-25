import { getInitialLocation } from './getInitialLocation'
import { markerClient } from './markerClient'
import { weatherInfo } from '@/feature/weather/weatherInfo'

const handleMapClick = (map: google.maps.Map) => {
  map.addListener('click', (e: google.maps.MapMouseEvent) => {
    markerClient.disableMarker()
    markerClient.setMarker = { map, position: e.latLng }

    weatherInfo
      .today({ lat: e.latLng?.lat()!, lng: e.latLng?.lng()! })
      .then(res => weatherInfo.view(res))
    // renderWeatherContent(query)
  })
}

export const mapInit = async () => {
  const mapView = document.getElementById('map-view')!
  const initLocation = await getInitialLocation()

  weatherInfo
    .today({ lat: initLocation.lat, lng: initLocation.lng })
    .then(res => weatherInfo.view(res))

  const map = new google.maps.Map(mapView, {
    zoom: 13,
    center: initLocation
  })
  markerClient.setMarker = { map, position: initLocation }

  handleMapClick(map)
}
