import {React, useState} from 'react'
import styled from "styled-components";

const MovieList = ({movies, FavourtiesComponent, handleFavouritesClick }) => {
const DivBox = styled.div`
    /* display : flex; */
`
const [mouseUp,setMouseUp]=useState(false)
console.log(mouseUp)
function handleMouseUp(){
    
 setMouseUp(true)
    
}
function handleMouseDown(){
    setMouseUp(false)
}
   
    return (
        <>
            {movies.map((movie,index)=> 
            <div key = {index} className = 'd-flex justify-content-start m-3'>
                
                    <DivBox>
                        <img onMouseOver = {handleMouseUp} onMouseOut = {handleMouseDown}
                        className = 'image-container' src = {movie.Poster} alt = 'movie'></img>
                    
                        <div 
                        onClick = {()=>handleFavouritesClick(movie)} 
                        className = {mouseUp ? "d-flex align-items-center justify-content-center" : "overlay d-flex align-items-center justify-content-center"}
                        >
                        <FavourtiesComponent />
                        </div>
                    </DivBox>

            </div>
            )}
        
        </>
    )
}

export default MovieList;