import './App.css'
import SearchComponent from './components/SearchComponent';
import AnimeList from './components/AnimeList';
import React, {useState} from 'react';


function App() {

  //Passing a function to setState actually has Previous state in the parameter

  //useState(arrowFunction) - runs once 
  //useState(function) - runs every render

  const [animelist, setAnimeList] = useState([]);


  const [dat, setData] = useState([]);
 
 

  let search = React.createRef();
  
  const fetchData =  async () => {
          
          console.log('clicked search button');
          const response = await fetch(`http://localhost:5000/api/anime/${search.current.value}`, {method: 'GET'})
          const data = await response.json();
          setData(data);
          
  }



  const addToList = (id) => {
     
    setAnimeList(dat[id]);
  }


  return (
    <div className='App'>
     
      <h1>Anime Watchlist Application</h1>
      <SearchComponent functionadd = {addToList} searchData = {fetchData} query= {search} datas={dat} />

      <AnimeList watchlist = {animelist}/>
    </div>
  );
}

export default App;
