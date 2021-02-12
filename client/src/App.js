import './App.css'
import SearchComponent from './components/SearchComponent';
import AnimeList from './components/AnimeList';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';


function App() {

  //Passing a function to setState actually has Previous state in the parameter

  //useState(arrowFunction) - runs once 
  //useState(function) - runs every render
const isLoggedIn = useSelector((state) => state.login_auth);


  return (
    <div className='App'>
      <h1>Anime Watchlist Application</h1>
      <p>h</p>
      <p>{isLoggedIn}</p>
      <SearchComponent/>
      <AnimeList/>
    </div>
  );
}

export default App;
