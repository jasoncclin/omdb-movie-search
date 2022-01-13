import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=57f46263` //make request to oMDB API with hard coded parameter

    const response = await fetch(url);                                     //fetch request stored in response constant
    const responseJson = await response.json();                            //convert HTTP response to JSON format  

    if(responseJson.Search) {
      setMovies(responseJson.Search)
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);                                          //call getMovieRequest through hook
  }, [searchValue]);                                                       // when search value changes, get movie request called
                                                                           //flexible response layout for our search and header
  return (                  
    <div className='container-fluid movie-container'>
      <div className='row d-flex align-items-center mt-3 mb-3'>                        
        <MovieListHeading heading='Movie Search' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
