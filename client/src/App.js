import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store'

import AppNavBar from './components/AppNavBar';
import SearchList from './components/SearchList';

function App() {
  return (

    <div>
    <AppNavBar />
    <SearchList />
    </div>    
  );
}

export default App;
