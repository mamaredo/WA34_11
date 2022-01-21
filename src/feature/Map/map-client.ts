// const mapView = document.getElementById('map-view')!
const setMarker = (map: google.maps.Map) => {
  map.addListener('click', (e: any) => {
    console.log(e)
    new google.maps.Marker({
      position: e.latLng,
      map: map
    })
  })
}

const mapClient = () => {
  const mapView = document.getElementById('map-view')!
  const map = new google.maps.Map(mapView, {
    zoom: 13,
    center: { lat: 36, lng: 139 }
  })
}

mapClient()

// class MapClient {
//   private map: any
//   public view: any

//   constructor() {
//     this.view = document.getElementById('map-view')!
//     this.map = new google.maps.Map(this.view, {
//       zoom: 13,
//       center: { lat: 36, lng: 139 }
//     })
//   }

//   setMarker() {
//     console.log('from set Marker')
//     this.map.addListener('click', (e: { latLng: any }) => {
//       new google.maps.Marker({
//         position: e.latLng,
//         map: this.map
//       })
//     })
//   }
// }

// const mapClient = new MapClient()
// export default mapClient

// const mapClient = () => new MapClient()
// export { mapClient, mapView }
