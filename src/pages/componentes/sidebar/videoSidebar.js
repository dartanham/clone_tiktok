import React from 'react'
import './videoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react'

function VideoSidebar({likes, shares, messages}) {

    const [liked, setLike] = useState(false);

    function handlerLike(){
        setLike(!liked);
         
    }
  return (
    <div className='videoSidebar'>
        <div
            className="videoSidebar__options"
            onClick={handlerLike}
        >
            {liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
          
            <p>{ liked ? likes +1 : likes } </p>
        </div>
        <div className="videoSidebar__options">
          <ChatIcon fontSize='large'/>
          <p>200 </p>
        </div>
        <div className="videoSidebar__options">
          <ShareIcon fontSize='large'/>
          <p>100 </p>
        </div>
    </div>
  )
}

export default VideoSidebar