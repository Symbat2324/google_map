import React from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api'


const containerStyle = {
  width: '600px',
  height: '600px'
}

const center ={
  lat: -3.745,
  lng: -38.532
}
export default function App() {
  const [map, setMap] = React.useState(null)

  const onLaod = React.useCallback(function callback(map){
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
     setMap(map)
  },[])

  const onUnmount = React.useCallback(function callback(map){
    setMap(null)
  },[])
  return (
    <div>
      <LoadScript
        googleMapApiKey="AIzaSyDNZpgE4ag9PYqfdOCGHLGeksDl91r1SeA"
        >
          <GoogleMap
          mapContainerStyle = {containerStyle}
          center={center}
          zoom={10}
          onLoad={onLaod}
          onUnmount={onUnmount}
          >
          </GoogleMap>
      </LoadScript>
    </div>
  )
}
