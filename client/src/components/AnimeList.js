import EntryList from './EntryList';
import SearchColumnHeader from './SearchColumnHeader'
const AnimeList = ({watchlist}) => {
    
    return (
        <>
            <h1>Listed Anime</h1>
            <div>
            <SearchColumnHeader />
            <EntryList entries = {watchlist} />
            </div>
        </>
    )
}

export default AnimeList
