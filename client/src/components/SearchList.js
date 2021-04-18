import {Container, Table, Button, Modal, ModalBody, ModalFooter, ModalHeader,
FormGroup, Form, Input
} from 'reactstrap';
import {useEffect, useState} from 'react';
import {addWatchlist} from '../actions/AnimeAction';
import {useDispatch, useSelector} from 'react-redux';
import {getAnime} from '../actions/AnimeAction'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SearchList = () => {
    
    const {anime} = useSelector(state => state.anime);

    // State
    const [searchState, setSearchState] = useState(anime);
    const [modalPrompt, setModalPrompt] = useState(false);
    const [searchQuery, setQuery] = useState("");
    const [selectedAnime, setSelectedAnime] = useState("");
    const [secondModalPrompt, setSecModalPrompt] = useState(false);

    const dispatch = useDispatch();
    const addToWatchList = idSelected => {
            
            setModalPrompt(!modalPrompt);
            setSelectedAnime(idSelected);
    }

    const addWatch = id  => {
        
        dispatch(addWatchlist(id));
        setModalPrompt(!modalPrompt);
    }

    const searchAnime = () => {
        axios.get(`/api/anime/${searchQuery}`)
        .then(response => dispatch(getAnime(response.data)))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        setSearchState(state => ({...state,anime}))
    }, [anime])


    return (
        <>
        <Container>
            <Form onSubmit ={(e) => { e.preventDefault();
                console.log("Submitted " + searchQuery)
                searchAnime();
            }}>
                <FormGroup className = "search-form">
                <Input type = "text" className = "search-bar" onChange={(e) => {
                    setQuery(e.target.value)} } placeholder = "Search here..."/>
                <Button type = "submit" color = "primary">Search...</Button>
                <Button  color = "secondary" type= "reset" >Clear</Button>
                </FormGroup>
            </Form>
        </Container>
        <Container>
            <h1>Search Table</h1>
            <Table dark responsive className = "dark table" >
                    <thead className = "table-header">
                        <tr>
                            <th className = "empty-header">&nbsp;</th>
                            <th>Title</th>              
                            <th>Episodes</th>
                            <th>Status</th>
                            <th className = "empty-header">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {(anime.length === 0) ?  <tr id = {0}>
                            <td colSpan = "6" className= "nothing">
                                <h1>Nothing was searched....</h1>
                                 </td>
                            </tr> :anime.map((anime)=> (
                                <>
                    <tr key={anime._id}>
                        <th scope ="row"><img src ={anime.img_url}/></th>
                        <td>{anime.anime_title}</td>
                        <td>{anime.episodes}</td>
                        <td>{anime.status}</td>
                        <td><Button className = "addtoWatchlist" color = "primary" onClick={() => addToWatchList(anime._id)}>Add To Watchlist</Button></td>        
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
                <Button color = "warning" onClick = {() => setModalPrompt(!modalPrompt)}>Cancel</Button>
            </ModalFooter>
            </Modal>  
        </Container>
        </>

    )
}
export default SearchList;
