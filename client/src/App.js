import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store'

import AppNavBar from './components/AppNavBar';
import SearchList from './components/SearchList';
import WatchList from './components/WatchList';


function App() {
  return (
    <>
    <Provider store = {store}>
    <div>
    <AppNavBar />
    <SearchList />
    <WatchList />
    </div>    
    </Provider>
    </>
  );
}

export default App;
