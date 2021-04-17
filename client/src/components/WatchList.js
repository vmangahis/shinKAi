import {Container, Table, Button, ListGroupItem, ListGroup} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react';
import{delAnime} from '../actions/AnimeAction';
const WatchList = () => {

    const dispatch = useDispatch();
    const {watchlist} = useSelector(state => state.anime);
    const [watch, setWatch] = useState(watchlist);

    const removeWatchlist = () => {
        
    }

    useEffect(() => {
       if(watchlist.length > 0) {
        setWatch(state =>([...state, watchlist])); 
       }
    }, [watchlist]);


    return (
        <div>
            <h1>Your Watchlist</h1>
            <Container className = "watchlist-container">
                
                <Table dark={true} className = "table">
                    <thead className ="table-header" color="dark">
                        <tr>
                            <th>&nbsp;</th>
                            <th>Title</th>
                            <th>Episodes</th>
                            <th>Status</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>

                <tbody>
                    {(watch.length === 0) ? <tr key = {0}>
                    <td colSpan = "5" className= "nothing">
                                <h1>Empty Watchlist....</h1>
                                 </td>
                    </tr> : watch.map(an =>
                        
                    an.map(items => <> 
                    
                    <tr key = {items._id}>
                            <th><img src ={items.img_url} /></th>
                            <td>{items.anime_title}</td>
                            <td>{items.episodes}</td>
                            <td>{items.status}</td>
                            <td><Button color = "primary" onClick = {console.log('hello')}>Remove</Button></td>
                    </tr>
                    
                    </>)    
                    
                    )}
                </tbody>
                    
                </Table>

            </Container>
        </div>
    )
}

export default WatchList
