import React from 'react'



const EntryList = ({entries}) => {
    
    let data = entries;
    
    return (
        <>
            <p>{entries.img_url}</p>
           {Object.keys(data).map((val)=>{
               return(
                <ul className = 'search-column'>
                <li>{val.img_url}</li>
                <li>{val.anime_title}</li>

                </ul>

               );
           })}
        </>
    )
}

export default EntryList
