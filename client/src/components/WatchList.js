import {Container, Table, Button, ListGroupItem, ListGroup} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react';
import{delAnime} from '../actions/AnimeAction';
const WatchList = () => {

    const dispatch = useDispatch();
    const {watchlist} = useSelector(state => state.anime);
    const [watch, setWatch] = useState(watchlist);
    
  

    useEffect(() => {
       setWatch(state => ({...state, watchlist})); 
    }, [watchlist]);
    return (
        <div>
            <h1>Your Watchlist</h1>
            <Container className = "watchlist-container">
                
                <Table dark={true} className = "table">
                    <thead className ="table-header" color="dark">
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Episodes</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
            
                </tbody>
                    
                </Table>

            </Container>
        </div>
    )
}

export default WatchList
