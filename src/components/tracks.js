import React from 'react';
import './track.css';

function Track({ track }) {
  return (
    <div className="track">
      <div className="track-info">
        <div className="track-name">{track.name}</div>
        <div className="track-details">Artist: {track.artist}</div>
        <div className="track-details">Album: {track.album}</div>
      </div>
    </div>
  );
}

export default Track;
