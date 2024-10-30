import React from 'react' //importing react

//function for the search bar
function SearchBar() {
    return (
      <div>
        <input type="text" placeholder="Enter a song, album, or artist" />
        <button>Search</button>
      </div>
    );
  }
  
  export default SearchBar;