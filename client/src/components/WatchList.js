import {Container, Table, Button, ListGroupItem, ListGroup} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux'
const WatchList = () => {

    const dispatch = useDispatch();
    const {anime} = useSelector(state => state.anime);
    return (
        <div>

            <Container>
                <h1>Your Watchlist</h1>
                <Table dark={true} className = "table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Episodes</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                {anime.map(({_id, anime_title, status, img_url, episode, air_date})=> (
                    <tr key={_id}>
                        <th scope ="row"><img src ={img_url} width={100} height={100}/></th>
                        <td>{anime_title}</td>
                        <td>{episode}</td>
                        <td>{status}</td>
                        <td><Button color = "light">&times;</Button></td>
                    </tr>

                    
                ))}
              
                </tbody>
                    
                </Table>

            </Container>
        </div>
    )
}

export default WatchList
