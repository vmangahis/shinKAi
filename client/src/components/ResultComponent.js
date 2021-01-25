import React from 'react'
import Results from './Results';
import './ResultComponent.css'
import SearchColumnHeader from './SearchColumnHeader';

const ResultComponent = () => {
    

    
    return (
        <>
        <h3 className = 'result-header'>Result</h3>
        <SearchColumnHeader />
        <Results />
        </>
    )
}

export default ResultComponent
