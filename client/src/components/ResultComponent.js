import React from 'react'
import Results from './Results';
import './ResultComponent.css'
import SearchColumnHeader from './SearchColumnHeader';

const ResultComponent = ({result}) => {
    
    
    
    return (
        <>
        <h1 className = 'result-header'>Search Result</h1>
        <SearchColumnHeader />
        <Results final = {result}  />
       
        </>
    )
}

export default ResultComponent
