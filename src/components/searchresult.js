import React from 'react';
import Tracklist from './tracklist.js';
import './searchresult.css';

function SearchResults() {
  return (
    <div className="search-results"> 
      <h2 style={{ color: 'white' }}>Search Results</h2>
      <Tracklist />
    </div>
  );
}

export default SearchResults;
