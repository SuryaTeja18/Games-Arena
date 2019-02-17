import React from 'react'

function Platforms(props){
    return(
        <select onChange={props.onChangePlatform} value={props.value}>
            <option>Search By Platform</option>
            <option>Macintosh</option>
            <option>PlayStation</option>
            <option>Xbox</option>
            <option>PC</option>
            <option>iPhone</option>
            <option>iPad</option>
            <option>Nintendo</option>
        </select>
    )
}

export default Platforms