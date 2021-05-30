import {Container, Table, Button, ListGroupItem, ListGroup, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react';
import {removeAnime} from '../actions/AnimeAction';


const WatchList = () => {
    const dispatch = useDispatch();
    const {watchlist} = useSelector(state => state.anime);
    const [watch, setWatch] = useState(watchlist);

    const [removePrompt, setRemovePrompt] = useState(false);
    const [watchlistRemove, setWatchlistRemove] = useState(["", ""]);

    const removeWatchlist = (id, desc) => {
        setWatchlistRemove([id, desc]);
        setRemovePrompt(!removePrompt);
    }

    const remAnime = () => {
        dispatch(removeAnime(watchlistRemove[0]))
        setRemovePrompt(!removePrompt);
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
                    {(watchlist.length === 0) ? <tr key = {0}>
                    <td colSpan = "5" className= "nothing">
                                <h1 className = "empty-placeholder">Empty Watchlist....</h1>
                                 </td>
                    </tr> : watchlist.map(anime =>
            
                    <tr key = {anime._id}>
                            <th scope = "row"><img src ={anime.img_url} /></th>
                            <td className = "header">{anime.anime_title}</td>
                            <td className = "header">{anime.episodes}</td>
                            <td className = "header">{anime.status}</td>
                            <td className = "header"><Button color = "primary" onClick = {() => removeWatchlist(anime._id, anime.anime_title)}>Remove</Button></td>
                    </tr>
                    
                
                
                    )}
                </tbody>
                    
                </Table>
                
                <Modal isOpen = {removePrompt} toggle = {removeWatchlist}>
                    <ModalHeader toggle = {removeWatchlist}>Remove anime from Watchlist?</ModalHeader>
                    <ModalBody>Do you want to remove {watchlistRemove[1]} from your Watchlist/s?</ModalBody>
                    <ModalFooter>
                        <Button onClick = {() => remAnime()}>Remove</Button>
                        <Button onClick ={() => setRemovePrompt(!removePrompt)}>Cancel</Button>
                    </ModalFooter>

                    </Modal>

            </Container>
        </div>
    )
}

export default WatchList
