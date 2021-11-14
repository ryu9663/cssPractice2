import React from 'react'

const SearchBox = ({searchValue , setSearchValue}) => {
    return (
        <div className = "col col-sm-4">
            <input 
                className = 'form-control'
                value = {searchValue}
                onChange={(event)=> setSearchValue(event.target.value)}
                // onClick = {()=>{console.log(props)}}
                placeholder = 'Type to search'
            ></input>
        </div>
    )
}

export default SearchBox