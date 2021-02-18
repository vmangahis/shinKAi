import {Container, Table, Button} from 'reactstrap';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAnime} from '../actions/AnimeAction';

import{v4 as uuidv4} from 'uuid';

const SearchList = () => {



    
   
    
    return (
        <>
        <Container>
            <Button color = "primary">List Anime</Button>
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
        </>
    )
}

export default SearchList
