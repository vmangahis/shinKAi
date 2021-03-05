import {Container, Table, Button, ListGroupItem, ListGroup} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux'
import{delAnime} from '../actions/AnimeAction';
const WatchList = () => {

    const dispatch = useDispatch();
    const {anime} = useSelector(state => state);
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
