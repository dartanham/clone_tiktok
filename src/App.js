
import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/video';
import db from './config/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


function App() {


  const [videos, setVideos] = useState([]);

  async function getVideos () {
      const videosCollection = collection(db, 'videos');
      const videosSnapshot = await getDocs(videosCollection);
      const videosList = videosSnapshot.docs.map(doc => doc.data());
      setVideos(videosList);

  }


  useEffect(() => {
      getVideos();
  }, []);



  return (
    <div className="App">
      <div className="app__videos">

      {videos.map((item) => {
        return (
          <Video
            likes={item.likes}
            shares={item.shares}
            messages={item.messages}
            name={item.name}
            description={item.description}
            music={item.music}
            url={item.url}
          />
        )
      }
        
      )}

     
      </div>
    </div>
  );
}

export default App;
