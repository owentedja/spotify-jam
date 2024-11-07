import './App.css';
import SearchBar from './components/searchbar';
import SearchResults from './components/searchresult';
import Playlist from './components/playlist';
import React, { useState } from 'react';
function App() {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };
  // Add track to playlist if it doesn't exist already
  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };
  
   // Remove track from playlist
   const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  const [searchResults] = useState([
    { id: 1, name: "Track One", artist: "Artist One", album: "Album One" },
    { id: 2, name: "Track Two", artist: "Artist Two", album: "Album Two" },
    { id: 3, name: "Track Three", artist: "Artist Three", album: "Album Three" },
  ]);

  
  

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Jammming</h1>
      <SearchBar />
      <div className="app-content">
         <SearchResults tracks={searchResults} onAddTrack={addTrackToPlaylist} />
        <Playlist playlistName={playlistName}
          onNameChange={updatePlaylistName}
          playlistTracks={playlistTracks} 
          onRemoveTrack={removeTrackFromPlaylist} // Pass remove function to Playlist
        />
      </div>
    </div>
  );
}

export default App;