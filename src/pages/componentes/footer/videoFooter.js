import React from 'react'
import './videoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
    <div className="videoFooter__text">
      <h3>@Dartanham</h3>
      <p>Descrição do Video</p>
      <div className="videoFooter__music">
      <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
          <p>Titulo da Musica</p>
          </div>
          
      </div>
      
    </div>
    <img
    className="videoFooter__record"
    alt="record"
    src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
    />
  </div>
);
}

export default VideoFooter 