import React from 'react'
import './Results.css'
import sampleimage from '../aot.png';
import sampleimage2 from '../horimiya.png'
import Button from './Button';
const Results = () => {
    return (
        <>
        <ul className = 'search-column'>
            <li>Image</li>
            <li>Title</li>
            <li>Air Date</li>
            <li>Episodes</li>
            <li>Status</li>
            <li></li>
        </ul>

        <ul className = 'search-column'>
        <li><img src = {sampleimage} /></li>
        <li><p>Attack on Titan S1</p></li>
        <li><p>04/07/13 - 09/29/13</p></li>
        <li><p>25</p></li>
        <li><p>Completed</p></li>
        <li><Button label = 'Add' /></li>
        </ul>

        <ul className = 'search-column'>
        <li><img src = {sampleimage2} /></li>
        <li><p>Attack on Titan S1</p></li>
        <li><p>04/07/13 - 09/29/13</p></li>
        <li><p>25</p></li>
        <li><p>Completed</p></li>
        <li><Button label = 'Add' /></li>
        </ul>
        
        
        </>
    )
}

export default Results;
