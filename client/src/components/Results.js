import React, { useEffect } from 'react'
import './Results.css'

import Button from './Button';
import SearchColumnHeader from './SearchColumnHeader'
const Results = ({final}) => {

  
    return (
        <>
        
      {final.map((val) => {
        return(<>
          <ul className = 'search-column' key = {val._id}>
        <li><img src = {val.img_url} alt = "" /></li>
        <li><p>{val.anime_title}</p></li>
        <li><p>{val.airstart} - {val.airend}</p></li>
        <li><p>{val.episodes}</p></li>
        <li><p>{val.status}</p></li>
        <li><Button label = 'Add' /></li>
        </ul>
        </>
        );
      })}

      


      { /* <ul className = 'search-column'>
        <li><img src = {""} alt = "" /></li>
        <li><p>Attack on Titan S1</p></li>
        <li><p>04/07/13 - 09/29/13</p></li>
        <li><p>25</p></li>
        <li><p>Completed</p></li>
        <li><Button label = 'Add' /></li>
        </ul>

        <ul className = 'search-column'>
        <li><img src = {""} alt = ""  /></li>
        <li><p>Attack on Titan S1</p></li>
        <li><p>04/07/13 - 09/29/13</p></li>
        <li><p>25</p></li>
        <li><p>Completed</p></li>
        <li><Button label = 'Add' /></li>
        </ul>
        */ }
        
        </>
    )
}

export default Results;
