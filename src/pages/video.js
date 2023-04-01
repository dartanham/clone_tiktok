import React, { useRef, useState } from 'react'
import './video.css'
import VideoFooter from './componentes/footer/videoFooter'
import VideoSidebar from './componentes/sidebar/videoSidebar'

function Video( {likes, shares, messages, name, description, music, url} ) {

    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    function handlerStart(){
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        }else {
            videoRef.current.play();
            setPlay(true);
        }
    }


  return (
    <div className='video'>
        
        <video 
        className='video__player'
        ref={videoRef}
        onClick={handlerStart}
        loop
        src={url}
        ></video>
        <VideoSidebar 
            likes={likes}
            shares={shares}
            messages={messages}
        />
        <VideoFooter 
            name={name}
            description={description}
            music={music}
        />
    </div>
  )
}

export default Video