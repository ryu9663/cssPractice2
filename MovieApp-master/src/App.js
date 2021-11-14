//omdb api
import logo from './logo.svg';
import {React, useState,useEffect, Component} from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList';
import MovieListHeading from './components/MoveListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import dotenv from 'dotenv';
dotenv.config()


function App() {
  const [movies,setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const APIKEY = process.env.REACT_APP_API_KEY
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${APIKEY}`
  
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
    // console.log(responseJson);
    // setMovies(responseJson.Search)
  }

  

  useEffect(()=>{
    getMovieRequest(searchValue);
  },[searchValue]);

  const addFavouriteMovie = movie => {
    console.log(movie)
    console.log(favourites)
    const newFavouriteList = [...favourites,movie]
    setFavourites(newFavouriteList);
  }
  
  const removeFavouriteMovie = (movie) => {
    const filteredList = favourites.filter(el=>{
      
      return el.Title !== movie.Title
    })
    setFavourites(filteredList)
  }

  return (
    <div className = 'container-fluid movie-app'>
      <div className = 'row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading = 'Movies' />
        <SearchBox searchValue = {searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className = 'row'>
        <MovieList movies = {movies} 
        handleFavouritesClick = {addFavouriteMovie} 
        FavourtiesComponent = {AddFavourites}
        />
      </div>
      <div className = 'row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading = 'Favourites' />
        
      </div>
      <div className = 'row'>
        <MovieList movies = {favourites} 
        handleFavouritesClick = {removeFavouriteMovie} 
        FavourtiesComponent = {RemoveFavourites}/>
      </div>
    </div>
    


  );
}

export default App;
