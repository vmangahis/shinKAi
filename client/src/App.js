import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store'

import AppNavBar from './components/AppNavBar';
import SearchList from './components/SearchList';
import WatchList from './components/WatchList';
import ModalButton from './components/ModalButton';

function App() {
  return (
    <>
    <Provider store = {store}>
    <div>
    
    <AppNavBar />
    <ModalButton />
    <SearchList />
    <WatchList />
    </div>    
    </Provider>
    </>
  );
}

export default App;
