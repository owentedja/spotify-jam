import './App.css';
import SearchBar from './components/searchbar';
import SearchResults from './components/searchresult';
import Playlist from './components/playlist';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Jammming</h1>
      <SearchBar />
      <div className="app-content">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
