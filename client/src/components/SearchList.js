import {Container, Table, Button, ListGroupItem, ListGroup} from 'reactstrap';
import {useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import{v4 as uuidv4} from 'uuid';

const SearchList = () => {


    
    const initialState = [

        {id:   uuidv4(), anime_title: "AOT"  , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete" , img_url: "https://i.imgur.com/7uOdUl5.jpg"},
            {id:   uuidv4(), anime_title: "Chuuni" , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete", img_url: "https://i.imgur.com/7uOdUl5.jpg" },
            {id:   uuidv4(), anime_title: "SAO"  , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete" , img_url: "https://i.imgur.com/7uOdUl5.jpg"}
        
    
    ];

    const[animeList, setAnimeList] = useState(initialState);

    return (
        <Container>
            <Button color = "primary" onClick = {() => { const entry = prompt('Sample entry'); if(entry){
                setAnimeList((list) => ({
                    animeList:[...list, {id: uuidv4(), anime_title: entry, air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete", img_url: "https://i.imgur.com/7uOdUl5.jpg"}]
                }));
            }}}>List Anime</Button>
            <Table dark>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Date Aired</th>
                            <th>Episodes</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                

                {animeList.map(({id, anime_title, air_date, episode, status, img_url})=> (
    
                        <tr>
                            <th scope="row"> <img 
      src={img_url}
      alt="new" width={200} height ={200}
      /></th>
                            <td>{anime_title}</td>
                            <td>{air_date}</td>
                            <td>{episode}</td>
                            <td >{status}</td>
                        </tr>
                    
        ))}


            
                </tbody>





            </Table>
        </Container>
    )
}

export default SearchList
