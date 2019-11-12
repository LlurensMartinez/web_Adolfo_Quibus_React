import React from 'react';
import movies from '../../data/movies.json'
import './filmography.css'

const filmography = ({title}) => {
 
  const renderMovies = movies.map(movie => 
        <div key={movie.id} className="containerInfo">
          <img src={movie.img} alt=""/>
          <div className="description">
            <h2>{movie.title}</h2>
            <h3>{movie.date}</h3>
            <p>{movie.description}</p>
          </div>
        </div>)
  
  return (
    <section className="section black">
          <h2 className="header white-text text-white">{title}</h2>
          <div className="containerFilms">
            {renderMovies}
          </div>  
    </section>
  );
};

export default filmography;