import {useState, useEffect} from 'react'
import {Box,  Typography} from '@mui/material'

import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

useEffect(()=>{

fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{setVideos(data.items)});

},[searchTerm])
console.log(searchTerm)
if(!videos) return 'Loading...';

  return (
    <Box
    p={2} 
    sx={{flex:2, height:'90vh', overflowY:'auto'}}
    >
      <Typography
      variant='h4'
      fontWeight={'bold'}
      mb={2}
      sx={{color:'#fff'}}
      >
        Search Result for: <span style={{color:'#F31503'}}>{searchTerm}</span>Videos
      </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed