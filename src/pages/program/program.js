import React from 'react';
import {
  Link
} from "react-router-dom";
import './program.css'

const program = () => {
  return (
    <section className="black section sectionProgram">
      <h5>Hijas de Cynisca: Mejor documental</h5>

      <iframe width="100%" height="50%"
        title="Hijas de Cynisca"
        src="http://www.youtube.com/embed/3TVeUaWyVu8">
      </iframe>

      <h5>JUMP: Mejor largometraje de ficción</h5>

      <iframe width="100%" height="50%"
        title="Jump"
        src="http://www.youtube.com/embed/Jj04wLYAPjc">
      </iframe>

      <Link id="buttonFestival" to={'/'}>Back</Link>
    </section>
  );
};

export default program;