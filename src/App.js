import React, { useState, useEffect} from 'react'
import { CssBaseline, Grid} from '@material-ui/core'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

import { getPlacesData } from './api'

const App = () => {
  const [ places, setPlaces ] = useState([])
  const [ coordinates, setCoordinates ] = useState({})
  const [ bounds, setBounds ] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
      setCoordinates({ lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    getPlacesData()
      .then((data) => {
        setPlaces(data)
        console.log(data)
      })
  }, [coordinates, bounds]); {/* For data to be passed from child to parent, it has been called here*/}

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App;