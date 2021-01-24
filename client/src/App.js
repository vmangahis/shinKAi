import './App.css'
import SearchComponent from './components/SearchComponent';
import AnimeList from './components/AnimeList';
import Watchlist from'./components/Watchlist';


function App() {

  //Passing a function to setState actually has Previous state in the parameter

  //useState(arrowFunction) - runs once 
  //useState(function) - runs every render


  return (
    <div className='App'>
     
      <h1>Anime Watchlist Application</h1>
      <SearchComponent />

      <AnimeList />
      <Watchlist />
    </div>
  );
}

export default App;
