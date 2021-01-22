import './App.css'

import SearchComponent from './components/SearchComponent';
import ResultComponent from './components/ResultComponent';

function App() {
  return (
    <div className="App">
      <h1>Anime Watchlist Web Application</h1>
      <SearchComponent />
      <ResultComponent />
    </div>
  );
}

export default App;
