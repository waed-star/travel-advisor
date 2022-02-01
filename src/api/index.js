import axios from 'axios'

export const getPlacesData = async (type, southWest, northEast) => {
  try {
    const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: southWest.lat,
        tr_latitude: northEast.lat,
        bl_longitude: southWest.lng,
        tr_longitude: northEast.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'db3d2b86bfmshfa877ee7f6dac42p165be6jsn5cb63ea74315'
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}