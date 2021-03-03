import {Container, Table, Button} from 'reactstrap';
import {useEffect, useState} from 'react';
import {extAnime} from '../actions/AnimeAction';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
const SearchList = () => {
    
    const {anime} = useSelector(state => state.anime);
    const [searchState, setSearchState] = useState(anime);
    const dispatch = useDispatch();

    useEffect(() => {
        setSearchState(state => ({...state,anime}))
        console.log('use effect fired');
        console.log(anime);
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
                        </tr>
                    </thead>
                    <tbody> 
                        {(anime.length === 0) ?  <tr id = {0}>
                            <td colSpan = "5" className= "nothing">
                                <h1>Nothing was searched....</h1>
                                 </td>
                            </tr> :anime.map((anime)=> (
                    <tr key={anime.id}>
                        <th scope ="row"><img src ={anime.img_url} width={100} height={100}/></th>
                        <td>{anime.anime_title}</td>
                        <td>{anime.episode}</td>
                        <td>{anime.status}</td>
                                </tr>
                            ))} 
                            
                    </tbody>
            </Table>
        </Container>
        </>

    )
}

export default SearchList
