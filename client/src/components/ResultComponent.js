import React from 'react'
import Results from './Results';
import './ResultComponent.css'
import SearchColumnHeader from './SearchColumnHeader';

const ResultComponent = ({result, resultFunction}) => {
    
    
    
    return (
        <>
        <h1 className = 'result-header'>Search Result</h1>
        <SearchColumnHeader />
        <Results final = {result} buttonFunction = {resultFunction} />
        
        </>
    )
}

export default ResultComponent
