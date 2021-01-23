import React from 'react'
import Button from './Button';
import ResultComponent from './ResultComponent';
import Searchbar from './Searchbar';

const SearchComponent = () => {
    return (
        <>
            <div>
            <Searchbar />
            <Button label = "Search" />
            <Button label = "Clear" />
            <ResultComponent />
            </div>
            
        </>
    )
}

export default SearchComponent
