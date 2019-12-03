import React from 'react';
import './biography.css';
import {
  Link
} from "react-router-dom";

const biography = ({title}) => {
  return (
    <section id="biography" className="section black">
      <div className="bioContainer">
          <h2 className="header white-text text-white">{title}</h2>
          <img className="imgBio" src="images/image5.jpg" alt="adolfo"/>
          <p className="pBio">Adolfo Quibus es guionista, director y actor español muy vinculado al cine, al teatro y a la literatura desde muy joven. Nació en Barcelona en el año 1945 y aunque comienza estudios de ingeniería, se decanta por una trayectoria profesional artística. </p>
          <p className="pBio">Cuando se traslada a Madrid, en el 1966, comienza a dirigir obras de teatro como “Cuidado con las personas formales”, de Alfonso Paso, y “Ella, él y Salomón”, de José Santaolaya. Posteriormente, también dirige e interpreta “El diario de un loco”, de Daniel Bohr. En el 1972, ya plenamente en el mundo teatral, despliega su faceta de escritor y como dramaturgo estrena “El conde von Parkus”, obra que se mantuvo dieciséis meses en cartel en al Lady Pepa de Madrid. Durante los últimos quince años, estrena y representa obras de su autoría, entre las que destacan “Recordando las candilejas” y “El precio de mi independencia”, ya en el año 2006. En el 2014 estrena “LOS TRES DIAS DEL CANGREJO” en Buenos Aires, Argentina, siendo un éxito de crítica y público, estando nueve meses en cartel. Este año quieren reponerla.</p>
          <Link to={`/biography`} id="buttonMore">Saber Mas</Link>
      </div>     
    </section>
  );
};

export default biography;