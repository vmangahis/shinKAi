import Button from './Button';

const Searchbar = ({click, reference}) => {
    return (
        <>
            <div>
            <input type = "text" placeholder = "Search..." className="search-input" ref={reference}/>
            <Button label = 'Search' clickfunction={click} />
            <Button label = 'Clear' />
            </div>
        </>
    )
}

export default Searchbar;
