import React, { useState} from 'react'
import ResultComponent from './ResultComponent';
import Searchbar from './Searchbar';

const SearchComponent = ({functionadd, searchData, query, datas}) => {

   


    return (
        <>
            <div>
            <Searchbar click = {searchData} reference = {query} />
            <ResultComponent result = {datas} resultFunction={functionadd} />
            </div>
            
        </>
    )
}

export default SearchComponent
