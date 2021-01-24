import Button from './Button';

const Searchbar = () => {
    return (
        <>
            <div>
            <input type = "text" placeholder = "Search..." />
            <Button label = 'Search' />
            <Button label = 'Clear' />
            </div>
        </>
    )
}

export default Searchbar
