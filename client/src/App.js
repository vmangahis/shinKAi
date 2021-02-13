import './App.css';
import SearchComponent from './components/SearchComponent';
import Searchbar from './components/Searchbar';
import Watchlist from './components/Watchlist';
import {Provider} from 'react-redux';
import store from './store'
function App() {
  return (

    <>
    <Provider store= {store} >
    <h1 style = {{textAlign:"center"}}>Anime Watchlist Web Application</h1>
    <Searchbar />
    <SearchComponent />
    <Watchlist />
    </Provider>
    </>
  );
}

export default App;
