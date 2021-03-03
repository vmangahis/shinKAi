import {Container, Table, Button} from 'reactstrap';
import {useEffect, useState} from 'react';
import {extAnime} from '../actions/AnimeAction';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
const SearchList = () => {
    const [searchState, setSearchState] = useState([]);
    const animeSelector = useSelector(state => state.anime);
    const dispatch = useDispatch();
    useEffect(() => {
      
       
    }, [searchState])
    
    
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
                        {} 
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
