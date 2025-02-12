import React from 'react'
import{Box , CardContent, CardMedia, Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import{Link} from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channel,marginTop}) => {
  return (
    <Box
    sx={{boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{xs:'356px',md:'320px'},
        height:'326px',
        margin:'auto',
        marginTop,
      
    }}
    >
<Link to={`/channel/${channel?.id?.channelId}`}>
<CardContent sx={{display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    textAlign:'center',
    color:'#fff',
    
}}
>

    <CardMedia
    image={channel?.snippet?.thumbnails?.medium?.url || demoProfilePicture}
    alt={channel?.snippet?.title}
    sx={{borderRadius:'50%', width:'180px', height:'180px',mb:2, border:'1px solid #3d3d3d'}}
    
    />
    <Typography variant='h6'>
        {channel?.snippet?.title}
        <CheckCircle sx={{fontSize:14, color:'gray', ml:'5px'}}/>
        {channel?.statistics?.subscriberCount && 
        <Typography variant='subtitle2' color='gray'>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} subscribers
    </Typography>}
    </Typography>
</CardContent>
</Link>

    </Box>
  )
}

export default ChannelCard