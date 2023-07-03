import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../assets/constans'


const ChannelCard = ({ channelDetail, marginTop}) => {
  return (
    <Box
      sx={{ 
        boxShadow: 'none', 
        borderRadius: '20px', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        height: '326px',
        width: {xs: '356px', md: '320px'},
        margin: '0 auto',
        marginTop,
      }}
    >
      <Link
        to={`/channel/${channelDetail?.id?.channelId}`}
      >
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#000' }}
        >
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: '2', border:' 1px solid #e3e3e3'}}
          />
          <Typography variant='h6'>
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscriber
            </Typography>
          )}
        </CardContent>
      </Link>
      ChannelCard
    </Box>
  )
}

export default ChannelCard