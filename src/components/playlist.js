// src/components/Playlist.js
import React from 'react';
import Tracklist from './tracklist';

function Playlist() {
  return (
    <div>
      <h2>Your Playlist</h2>
      <Tracklist />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
