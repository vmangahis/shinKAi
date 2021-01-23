import EntryList from './EntryList';
import SearchColumnHeader from './SearchColumnHeader'
const AnimeList = () => {
    return (
        <>
            <h1>Listed Anime</h1>
            <div>
            <SearchColumnHeader />
            <EntryList />
            </div>
        </>
    )
}

export default AnimeList
