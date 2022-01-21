type Marker = google.maps.Marker

type State = {
  markers: Marker[]
}

type MarkerClient = {
  disableMarker: () => void
  markedCount: number
  setMarker: google.maps.MarkerOptions
}

const state: State = {
  markers: []
}

const setMarker = (options: google.maps.MarkerOptions) => {
  return new google.maps.Marker({
    ...options
  })
}

export const markerClient: MarkerClient = {
  disableMarker: function () {
    const marker = state.markers[this.markedCount - 1]
    marker.setMap(null)
  },

  get markedCount() {
    return state.markers.length
  },

  set setMarker(options: Parameters<typeof setMarker>[0]) {
    state.markers[this.markedCount] = setMarker(options)
  }
}
