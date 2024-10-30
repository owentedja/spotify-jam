import './App.css';
import SearchBar from './components/searchbar';
import SearchResults from './components/searchresult';
import Playlist from './playlist';

function App() {
  return(
  <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults/>
      <Playlist/>
  </div>
  );
}

export default App;
