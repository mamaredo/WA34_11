export type UserLocation = { lat: number; lng: number }
const halLocation: UserLocation = {
  lat: 35.16832838570073,
  lng: 136.88561516878792
}

export const getInitialLocation = async () => {
  if (!navigator.geolocation) {
    window.alert('Geolocation is not suport :(')
    return halLocation
  }

  const currentPosition = await new Promise<UserLocation>(res => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const currentLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
        res(currentLocation)
      },
      err => {
        console.error(err.message)
        res(halLocation)
      }
    )
  })

  return currentPosition
}
