import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import{Box} from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {

  const { id } = useParams()
  const [channel, setChannel] = useState(null)
  const [videos, setVideos] = useState(null)
  console.log(channel)
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>{setChannel(data?.items[0])});


    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>{setVideos(data.items)});
  },[id])
  return (
    <Box minHeight={`95vh`} sx={{color:'#fff'}}>
      <Box>
        <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,55,1) 35%, rgba(0,212,255,1) 100%)',
        zIndex:10,
          height:'300px'}}
         
          
          />
           <ChannelCard channel={channel}
           marginTop={`-150px`}

           />
      </Box>
      <Box display={`flex`} p={`2px`}>
        <Box sx={{mr:{sm:'100px'}}}/>

        <Videos videos={videos}
        
        />
      
       
      </Box>
    </Box>
  )
}

export default ChannelDetail