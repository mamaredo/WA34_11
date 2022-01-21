import { getInitialLocation } from './initial-location'

const setMarker = (options: google.maps.MarkerOptions) => {
  return new google.maps.Marker({
    ...options
  })
}

type MarkerClient = {
  markers: google.maps.Marker[]
  disableMarker: () => void
  markedCount: number
  setMarker: google.maps.MarkerOptions
}

const markerClient: MarkerClient = {
  markers: [],
  disableMarker: function () {
    console.log('marker', this.markers)
    const marker = this.markers[this.markedCount - 1]
    marker.setMap(null)
  },

  get markedCount() {
    return this.markers.length
  },

  set setMarker(options: Parameters<typeof setMarker>[0]) {
    this.markers[this.markedCount] = setMarker(options)
  }
}

const handleMapClick = (map: google.maps.Map) => {
  map.addListener('click', (e: google.maps.MapMouseEvent) => {
    markerClient.disableMarker()
    markerClient.setMarker = { map, position: e.latLng }
  })
}

export const mapClient = async () => {
  const mapView = document.getElementById('map-view')!
  const initLocation = await getInitialLocation()

  const map = new google.maps.Map(mapView, {
    zoom: 13,
    center: initLocation
  })
  markerClient.setMarker = { map, position: initLocation }

  handleMapClick(map)
}
