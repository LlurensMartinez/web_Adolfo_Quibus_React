import React from 'react';
import { useParams } from "react-router-dom";
import movies from '../data/movies.json';
import Movie from '../components/movie_/movie';



const MoviesDetails = () => {

  const { id } = useParams();

  const getData = () => {
    return (<Movie 
              idParams = {id}
              movies = {movies}
            />)
  }

  return (<>{getData()}</>);
};

export default MoviesDetails;