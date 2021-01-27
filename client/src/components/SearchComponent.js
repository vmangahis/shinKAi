import React, {useEffect, useState} from 'react'
import ResultComponent from './ResultComponent';
import Searchbar from './Searchbar';

const SearchComponent = () => {

    const [datas, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    let query = React.createRef();
    
    
    const fetchData =  async () => {
            
            console.log('clicked search button');
            const response = await fetch(`http://localhost:5000/api/anime/${query.current.value}`, {method: 'GET'})
            const data = await response.json();
            setData(data);
            
    }

    

    return (
        <>
            <div>
            <Searchbar click = {fetchData} reference = {query} />
            <ResultComponent result = {datas} />
            </div>
            
        </>
    )
}

export default SearchComponent
