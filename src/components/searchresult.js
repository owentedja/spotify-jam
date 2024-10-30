import React from 'react';
import Tracklist from './tracklist.js';
import './searchresult.css';

function SearchResults() {
  return (
    <div className="search-results"> //assigns css section to this part of div
      <h2>Search Results</h2>
      <Tracklist />
    </div>
  );
}

export default SearchResults;