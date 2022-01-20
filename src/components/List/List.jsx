import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('Restaurants')
  const [rating, setRating] = useState('')

  const places = [
    { name: 'Cool Place' },
    { name: 'Best Steak' },
    { name: 'Cool Chicken' },
    { name: 'Cool Place' },
    { name: 'Best Steak' },
    { name: 'Cool Chicken' },
  ]

  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Restaurants, Hotels and Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(event) => setType(event.target.value)}>
          <MenuItem value="Restaurants">Restaurants</MenuItem>
          <MenuItem value="Hotels">Hotels</MenuItem>
          <MenuItem value="Attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(event) => setRating(event.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}> {/* This is not good prectice but since we are NOT deleting items from the list then it's fine */}
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List