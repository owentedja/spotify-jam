// src/components/Playlist.js
import React from 'react';
import Tracklist from './tracklist';
import './playlist.css';
import './searchresult.css'; /*for button*/

function Playlist() {
  return (
    <div className='your-playlist'>
      <h2 style={{ color: 'white' }}>Your Playlist</h2>
      <Tracklist />
      <button className='searchresultbutton'>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
