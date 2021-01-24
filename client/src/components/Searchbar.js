import Button from './Button';

const Searchbar = () => {
    return (
        <>
            <input type = "text" placeholder = "Search..." />
            <Button label = 'Search' />
            <Button label = 'Clear' />
        </>
    )
}

export default Searchbar
