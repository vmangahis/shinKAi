import {Container, Table, Button} from 'reactstrap';
import {useEffect} from 'react';
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
            <h1>Search Table</h1>
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
                            <td colSpan = "5" className= "nothing">
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
