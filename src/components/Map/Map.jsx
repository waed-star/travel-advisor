import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlineIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = ({ setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)') //Checks if the width is larger than 600px, returns bool

  // const coordinates = { lat: 0, lng: 0}

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC9rjDO9m1kUK5r6mKG0O8vlMegAjjZ6YA'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(event) => {
          console.log(event)
          setCoordinates({ lat: event.center.lat, lng: event.center.lng })
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw })
        }}
        onChildClick={''} //used for any click on restaurants on the map
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map