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

export const markerClient: MarkerClient = {
  markers: [],
  disableMarker: function () {
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
