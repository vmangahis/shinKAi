import {Container, Table, Button, ListGroupItem, ListGroup} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux'
import{delAnime} from '../actions/AnimeAction';
const WatchList = () => {

    const dispatch = useDispatch();
    const {anime} = useSelector(state => state.anime);
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
                {(anime.length === 0) ? <tr><td colSpan = "5" className= "nothing">
                                <h1>Empty Watchlist...</h1>
                                 </td></tr>
                                 :anime.map(({id, anime_title, status, img_url, episode, air_date})=> (
                    <tr key={id}>
                        <th scope ="row"><img src ={img_url} width={100} height={100}/></th>
                        <td>{anime_title}</td>
                        <td>{episode}</td>
                        <td>{status}</td>
                        <td><Button color = "light"
                        onClick={() => dispatch(delAnime(id))}
                        >&times;</Button></td>
                    </tr>

                    
                ))}
              
                </tbody>
                    
                </Table>

            </Container>
        </div>
    )
}

export default WatchList
