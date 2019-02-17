import React from 'react'

function SearchBox(props)
{
    return <React.Fragment>
        <input id="searchName" style={{background:"lightgray", width:"400px", height:"30px", borderRadius:"10px"}} placeholder="Search Games" type="search"/>
        <button id="search" type="search" style={{height:"30px"}} onClick={props.searchByName}>Search</button>
    </React.Fragment>
}

export default SearchBox