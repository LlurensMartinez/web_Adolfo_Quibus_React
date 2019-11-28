import React from 'react';
import {
  Link
} from "react-router-dom";
import "./movie.css";

const movie = ({idParams, movies}) => {

  const filterMovie = movies.filter(movie => movie.id === parseInt(idParams));
  const {img, title, duration, description } = filterMovie[0];
  return (
    <div className="movieContainer">
      <img src={img} alt={title}/>
      <div className="infoCard">
        <h3>{title}</h3>
        <p>{duration} min</p>
        <p>{description}</p>
      </div>
      <div className="buttons">
        <Link to={`/movies/${filterMovie[0].id}/${filterMovie[0].title}`}><i className="material-icons">play_circle_outline</i></Link>
        <Link to={'/'}><i className="material-icons">keyboard_return</i></Link>
      </div>  
    </div>
  );
};

export default movie;

