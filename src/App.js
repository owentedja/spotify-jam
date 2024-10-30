import './App.css';
import SearchBar from './components/searchbar';
import SearchResults from './components/searchresult';
import Playlist from './components/playlist';

function App() {
  // Hard-coded array of track objects
  const tracks = [
    {
      id: 1,
      name: "Track One",
      artist: "Artist One",
      album: "Album One",
    },
    {
      id: 2,
      name: "Track Two",
      artist: "Artist Two",
      album: "Album Two",
    },
    {
      id: 3,
      name: "Track Three",
      artist: "Artist Three",
      album: "Album Three",
    },
  ];
  


  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Jammming</h1>
      <SearchBar />
      <div className="app-content">
        <SearchResults tracks={tracks} /> {/* Pass tracks as a prop */}
        <Playlist />
      </div>
    </div>
  );
}

export default App;