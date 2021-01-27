import './Results.css'
import Button from './Button';
const Results = ({final, buttonFunction}) => {

  
    return (
        <>
        
      {final.map((val, index) => {
        return(<>
          <ul className = 'search-column' >
        <li key = {val._id}><img src = {val.img_url} alt = "" /></li>
        <li key = {val._id}><p>{val.anime_title}</p></li>
        <li key = {val._id}><p>{val.airstart} - {val.airend}</p></li>
        <li key = {val._id}><p>{val.episodes}</p></li>
        <li key = {val._id}><p>{val.status}</p></li>
        <li key = {val._id}><Button label = 'Add' clickfunction = {buttonFunction} id={index}/></li>
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
