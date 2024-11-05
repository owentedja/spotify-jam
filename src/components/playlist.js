import React, { useState } from 'react';
import Tracklist from './tracklist';
import './playlist.css';

function Playlist({ playlistName, onNameChange }) {
  const [tempName, setTempName] = useState(playlistName);

  const handleNameChange = (event) => {
    setTempName(event.target.value); // Update temporary name while typing
  };

  const handleSave = () => {
    onNameChange(tempName); // Save the new name to App.js state
  };

  return (
    <div> /* can directly delete "your playlist" and write playlist name */
      <h2 className="playlist-title" style={{ color: 'white' }}>
        {tempName}
      </h2>
      <input
        type="text"
        value={tempName}
        onChange={handleNameChange}
        placeholder="Enter playlist name"
        className="playlist-name-input"
      />
      <Tracklist />
      <button onClick={handleSave} className="searchresultbutton">
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;
