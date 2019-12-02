import React from 'react';
import "./festival.css";
import { Link } from 'react-router-dom';

const festival = ({title}) => {
  return (
    <section id="festival" className="black sectionFestival">
      <div className="festivalContainer">
        <h2>{title}</h2>
        <img src="images/festivalNunes.png" alt="Festival Nunes"/>
        <p>El <b>Ateneo de liertad de Gracia</b> y <b>Adolfo Quibus</b> Producciones Cinematograficas S.L,
          presentan el 9º Festival Internacional Nunes, dedicado al gran director y amigo  Jose María Nunes.
        </p>
        <Link id="buttonProgram" to={"/"}>PROGRAMACION</Link>
      </div>
    </section>
  );
};

export default festival;