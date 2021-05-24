import {Container, Table, Button, ListGroupItem, ListGroup} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react';
import{delAnime} from '../actions/AnimeAction';
const WatchList = () => {

    const dispatch = useDispatch();
    const {watchlist} = useSelector(state => state.anime);
    const [watch, setWatch] = useState(watchlist);

    const removeWatchlist = (id) => {
        console.log(id);
    }
    useEffect(() => {
        
       if(watchlist.length > 0) {
            setWatch(watchlist);
       }
    }, [watchlist]);

    return (
        <div>
            <h1>Your Watchlist</h1>
            <Container className = "watchlist-container">      
                <Table dark={true} className = "table">
                    <thead className ="table-header" color="dark">
                        <tr>
                            <th className="empty-header">&nbsp;</th>
                            <th className = "header">Title</th>
                            <th className = "header">Episodes</th>
                            <th className = "header">Status</th>
                            <th className="empty-header">&nbsp;</th>
                        </tr>
                    </thead>

                <tbody>
                    {(watch.length === 0) ? <tr key = {0}>
                    <td colSpan = "5" className= "nothing">
                                <h1 className = "empty-placeholder">Empty Watchlist....</h1>
                                 </td>
                    </tr> : watch.map(anime =>
            
                    <tr key = {anime._id}>
                            <th scope = "row"><img src ={anime.img_url} /></th>
                            <td className = "header">{anime.anime_title}</td>
                            <td className = "header">{anime.episodes}</td>
                            <td className = "header">{anime.status}</td>
                            <td className = "header"><Button color = "primary" onClick = {() => removeWatchlist(anime._id)} >Remove</Button></td>
                    </tr>
                    
                
                
                    )}
                </tbody>
                    
                </Table>

            </Container>
        </div>
    )
}

export default WatchList
