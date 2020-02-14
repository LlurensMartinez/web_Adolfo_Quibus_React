import React from 'react';
import "./festival.css";
import { Link } from 'react-router-dom';

const festival = ({title}) => {


  return (
    <section id="festival" className="black sectionFestival">
      <div className="festivalContainer">
        <h2>{title}</h2>
        <img src="images/festivalNunes.png" alt="Festival Nunes"/>
        <p>Ha finalizado el 9 FESTIVAL INTERNACIONAL DE CINE NUNES con la entrega
          de premios el jurado tras larga deliberacion ha decidido de forma inapelable:</p>
        <div className="festivalInfoContainer">
            <p><b>Mejor Pelicula de Ficcion:</b> “Jump” de Liberto Rabal</p>
            <p><b>Mejor Documental:</b> “Hijas de Cynisca” de Beatriz Carretero</p>
            <p><b>Nunes de Honor:</b> Carlos Mir</p>
        </div>
        <br/>
        <p>Felicidades a los ganadores y a los seleccionados por el extraordinario nivel de sus películas. Seguiremos informando.</p>
        <Link id="buttonProgram" to={"/program"}>AGRADECIMIENTOS</Link>
      </div>
    </section>
  );
};

export default festival;