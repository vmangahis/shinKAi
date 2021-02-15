import {Container, Table, Button} from 'reactstrap';
import {useState} from 'react';
import{v4 as uuidv4} from 'uuid';

const SearchList = () => {


    
    const initialState = [

    
            {id:   uuidv4(), anime_title: "AOT" , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete" },
            {id:   uuidv4(), anime_title: "Chuuni" , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete"  },
            {id:   uuidv4(), anime_title: "SAO"  , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete" }
        
    
    ];

    const[animeList, setAnimeList] = useState(initialState);

    return (
        <Container>
            <Button color = "primary" onClick = {() => { const entry = prompt('Sample entry'); if(entry){
                setAnimeList((list) => ({
                    animeList:[...list, {id: uuidv4(), anime_title: entry, air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete"}]
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



            </Table>
        </Container>
    )
}

export default SearchList
