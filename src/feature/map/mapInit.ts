import { getInitialLocation } from './getInitialLocation'
import type { UserLocation } from './getInitialLocation'
import { markerClient } from './markerClient'
import { weatherInfo } from '@/feature/weather/weatherInfo'

const renderMapContent = (
  geocoder: google.maps.Geocoder,
  latLng: { lat: number; lng: number }
) => {
  Promise.all([
    weatherInfo.today(latLng),
    geocoder.geocode({ location: latLng })
  ]).then(res => {
    console.log(res[1])
    const payload = {
      ...res[0],
      name: res[1].results[0].formatted_address
    }
    weatherInfo.view(payload)
  })
}

const handleMapClick = (
  map: google.maps.Map,
  geocoder: google.maps.Geocoder
) => {
  map.addListener('click', (e: google.maps.MapMouseEvent) => {
    const latLng: UserLocation = {
      lat: e.latLng?.lat()!,
      lng: e.latLng?.lng()!
    }

    markerClient.disableMarker()
    markerClient.setMarker = { map, position: latLng }
    renderMapContent(geocoder, latLng)
  })
}

export const mapInit = async () => {
  const mapView = document.getElementById('map-view')!
  const initLocation = await getInitialLocation()
  const map = new google.maps.Map(mapView, {
    zoom: 13,
    center: initLocation
  })
  const geocoder = new google.maps.Geocoder()

  renderMapContent(geocoder, initLocation)
  markerClient.setMarker = { map, position: initLocation }

  handleMapClick(map, geocoder)
}
