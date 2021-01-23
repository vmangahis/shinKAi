import './App.css'
import SearchComponent from './components/SearchComponent';
import AnimeList from './components/AnimeList';

function App() {
  return (
    <div className='App'>
      <h1>Anime Watchlist Web Application</h1>
      <SearchComponent />
      <AnimeList />
    </div>
  );
}

export default App;
