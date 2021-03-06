import {Container, Table, Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {useEffect, useState} from 'react';
import {addWatchlist} from '../actions/AnimeAction';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
const SearchList = () => {
    
    const {anime} = useSelector(state => state.anime);
    const [searchState, setSearchState] = useState(anime);
    const [modalPrompt, setModalPrompt] = useState(false);
    const [selectedAnime, setSelectedAnime] = useState("");
    const dispatch = useDispatch();

    const addToWatchList = idSelected => {
            
            setModalPrompt(!modalPrompt);
            setSelectedAnime(idSelected);

    }

    const addWatch = (id)  => {
        
        dispatch(addWatchlist(id));
        setModalPrompt(!modalPrompt);
    }

    useEffect(() => {
        setSearchState(state => ({...state,anime}))
    }, [anime])
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
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {(anime.length === 0) ?  <tr id = {0}>
                            <td colSpan = "5" className= "nothing">
                                <h1>Nothing was searched....</h1>
                                 </td>
                            </tr> :anime.map((anime)=> (

                                <>
                                                  
                    <tr key={anime._id}>
                        <th scope ="row"><img src ={anime.img_url} width={100} height={100}/></th>
                        <td>{anime.anime_title}</td>
                        <td>{anime.airstart}</td>
                        <td>{anime.episodes}</td>
                        <td>{anime.status}</td>
                        <td><Button color = "primary" onClick={() => addToWatchList(anime._id)}>Add To Watchlist</Button></td>
                        
                                </tr>

                             

                               
                            </>    
                            ))} 
                            
                    </tbody>
            </Table>

            <Modal isOpen = {modalPrompt} toggle = {addToWatchList}>
                        <ModalHeader toggle = {addToWatchList}>Add Anime to your Watchlist</ModalHeader>
                        <ModalBody>
                    <h2>Add this anime to your watchlist?</h2>
            </ModalBody>

            <ModalFooter>
                <Button color = "primary" onClick = {() => addWatch(selectedAnime)}>Add To Watchlist</Button>
                <Button color = "warning" onClick = {addToWatchList}>Cancel</Button>
            </ModalFooter>
            </Modal>  

            
        </Container>
        </>

    )
}

export default SearchList
