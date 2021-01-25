import React from 'react'
import ResultComponent from './ResultComponent';
import Searchbar from './Searchbar';

const SearchComponent = () => {

    const fetchData =  async () => {
            console.log('clicked search button');
            const response = await fetch('http://localhost:5000/api/anime/', {method: 'GET'})
            const data = await response.json();
            console.log(data);
            
    }

    

    return (
        <>
            <div>
            <Searchbar click = {fetchData}/>
            <ResultComponent />
            </div>
            
        </>
    )
}

export default SearchComponent
