import Button from './Button';

const Searchbar = ({click}) => {
    return (
        <>
            <div>
            <input type = "text" placeholder = "Search..." />
            <Button label = 'Search' clickfunction={click} />
            <Button label = 'Clear' />
            </div>
        </>
    )
}

export default Searchbar
