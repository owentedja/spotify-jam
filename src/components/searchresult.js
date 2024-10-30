import React from 'react';
import Track from './tracks.js';
import Tracklist from './tracklist.js';
import './searchresult.css';

function SearchResults({ tracks }) {
  return (
    <div className="search-results"> 
      <h2 style={{ color: 'white' }}>Search Results</h2>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
      <Tracklist />
    </div>
  );
}

export default SearchResults;
