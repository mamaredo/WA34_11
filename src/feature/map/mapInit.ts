import { getInitialLocation } from './getInitialLocation'
import { markerClient } from './markerClient'

const handleMapClick = (map: google.maps.Map) => {
  map.addListener('click', (e: google.maps.MapMouseEvent) => {
    markerClient.disableMarker()
    markerClient.setMarker = { map, position: e.latLng }
  })
}

export const mapInit = async () => {
  const mapView = document.getElementById('map-view')!
  const initLocation = await getInitialLocation()

  const map = new google.maps.Map(mapView, {
    zoom: 13,
    center: initLocation
  })
  markerClient.setMarker = { map, position: initLocation }

  handleMapClick(map)
}
