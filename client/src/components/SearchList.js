import {Container, Table, Button} from 'reactstrap';
import {useEffect} from 'react';
import{v4 as uuidv4} from 'uuid';
import {getAnime} from '../actions/AnimeAction';
import {useDispatch} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
const SearchList = () => {

    useEffect(() => {
        dispatch(getAnime());
        console.log('dispatch');
    }, [])
    
    const dispatch = useDispatch();
    
   
    
    return (
        <>
        <Container>
            <Button color = "primary">List Anime</Button>
            <Table dark responsive>
                    <thead>
                        <tr>
                            <th width={200}>&nbsp;</th>
                            <th>Title</th>
                            <th>Date Aired</th>
                            <th>Episodes</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    
                    <tbody>  
                            <tr>
                                <td colspan = "5" className= "nothing">
                                <h1>Nothing was searched....</h1>
                                 </td>
                            </tr>
                    </tbody>
            </Table>
        </Container>
        </>
    )
}

export default SearchList
