
import './App.css';
import Video from './pages/video';


function App() {
  return (
    <div className="App">
      <div className="app__videos">
        
      <Video
        likes={111}
        shares={222}
        messages={333}
        name="Dartan"
        description="Cat jogando"
        music="Like a Boss"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
      />
      <Video 
        likes={444}
        shares={555}
        messages={666}
        name="Dartanham"
        description="Cat Brincando"
        music="Boss a Boss"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
      />
      <Video 
        likes={777}
        shares={888}
        messages={999}
      />
     
      </div>
    </div>
  );
}

export default App;
