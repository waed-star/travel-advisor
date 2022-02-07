import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlineIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'
import mapStyles from './mapStyles'

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 600px)') //Checks if the width is larger than 600px, returns bool

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
        onChange={(event) => {
          console.log(event)
          setCoordinates({ lat: event.center.lat, lng: event.center.lng })
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw })
        }}
        onChildClick={( child ) => {setChildClicked(child)}} //used for any click on restaurants on the map
      >
        {
          places?.map((place, index) => (
            <div
              key={index}
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
            >
              {
                !isDesktop ? (
                  <LocationOnOutlineIcon color='primary' fontSize='large'/>
                ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                      {place.name}
                    </Typography>
                    <img
                      className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url : 'Hi'}
                      alt={place.name}
                    />
                    <Rating size='small' value={Number(place.rating)} readOnly />
                  </Paper>
                )
              }
            </div>
          ))
        }
        {weatherData?.list?.map((data, index) => (
          <div key={index} lat={data.coord.lat} lng={data.coord.long}>
          <img height='100' src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
        </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map