import React from 'react'
import {Box,Stack} from '@mui/material'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos, direction}) => {

console.log(videos)
  return (
    <Stack direction={direction || 'row'} display={'flex'} justifyContent={`start`} flexWrap={`wrap`} gap={2} >

    {videos && videos.map((item,index)=>(
      <Box key={index}>
        {item.id.videoId && <VideoCard video={item}/>}
        {item.id.channelId && <ChannelCard channel={item}/>}
      </Box>
    ))}
    </Stack>
  )
}

export default Videos