import React from 'react';
import {
  Link
} from "react-router-dom";
import './program.css'

const program = () => {
  return (
    <section className="black section sectionProgram">
      <h4>Martes 10 de Diciembre</h4>
      <p><span className="red">19:00</span> INAGURACION del festival y balance de los 9 años transcurridos</p>
      <h4>Miercoles 11 de Diciembre</h4>
      <p><span className="red">18:00</span> Jump, Liberto Rabal, 65 min</p>
      <p><span className="red">19:30</span> Call of Dreams, Ran Slavin, 81 min</p>
      <h4>Jueves 12 de Diciembre</h4>
      <p><span className="red">18:00</span> La Estrella, Francisco Martin, 65 min</p>
      <p><span className="red">19:30</span> Hijas de Cynisca, Beatriz Carretero, 96 min</p>
      <h4>Viernes 13 de Diciembre</h4>
      <p><span className="red">18:00</span> Lors Of The Body, Marc Nadal, 66 min</p>
      <p><span className="red">19:30</span> Apostata de Hugo Cobo, 62min</p>
      <h4>Sabado 14 de Diciembre</h4>
      <p><span className="red">19:00</span>Entrega de PREMIOS y clausura del festival</p>
      <Link id="buttonFestival" to={'/'}>Back</Link>
    </section>
  );
};

export default program;