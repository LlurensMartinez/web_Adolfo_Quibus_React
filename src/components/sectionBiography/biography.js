import React from 'react';
import './biography.css';
import {
  Link
} from "react-router-dom";

const biography = ({title}) => {
  return (
    <section className="section black">
      <div className="bioContainer">
          <h2 className="header white-text text-white">{title}</h2>
          <img className="imgBio" src="images/image5.jpg" alt="adolfo"/>
          <p className="pBio">Adolfo Quibus es guionista, director y actor español muy vinculado al cine, al teatro y a la literatura desde muy joven. Nació en Barcelona en el año 1945 y aunque comienza estudios de ingeniería, se decanta por una trayectoria profesional artística. </p>
          <p className="pBio">Cuando se traslada a Madrid, en el 1966, comienza a dirigir obras de teatro como “Cuidado con las personas formales”, de Alfonso Paso, y “Ella, él y Salomón”, de José Santaolaya. Posteriormente, también dirige e interpreta “El diario de un loco”, de Daniel Bohr. En el 1972, ya plenamente en el mundo teatral, despliega su faceta de escritor y como dramaturgo estrena “El conde von Parkus”, obra que se mantuvo dieciséis meses en cartel en al Lady Pepa de Madrid. Durante los últimos quince años, estrena y representa obras de su autoría, entre las que destacan “Recordando las candilejas” y “El precio de mi independencia”, ya en el año 2006. En el 2014 estrena “LOS TRES DIAS DEL CANGREJO” en Buenos Aires, Argentina, siendo un éxito de crítica y público, estando nueve meses en cartel. Este año quieren reponerla.</p>
          <Link to={`/biography`}>Saber Mas +</Link>
          {/* <p className="pBio">Pero su trayectoria no se encuadra solo en el teatro y aunque ya hemos hablado de su faceta como dramaturgo que supone escritura, también es prosista ya que escribe para las novelas de Bruguera y con ello adquiere una gran destreza y habilidad a la hora de redactar, cualidad que hoy día sigue demostrando. En cartera “LAS AVENTURAS DE ALBERTO ZUMARRAS” que saldrán en breve. Así como sus memorias tituladas: OTOÑO GRIS (Historia de un aprendiz de persona)</p> */}
          {/* <p className="pBio">Entre sus trabajos más recientes, destacamos “Mi amigo el Alzheimer”. Se trata de un documental acerca del desconocimiento que hay sobre esta enfermedad y las dificultades para encontrar cura. Tampoco dejaremos de nombrar su documental “El sete Sentit", en honor al cineasta Jose María Nunes. Pendientes de estreno están : LA VIDA EN UNA CORCHEA,  y en periodo de montaje; LA ERA DEL BOLSILIBRO,  y SILENTE Su pasión por el cine le ha llevado a crear el Festival Internacional de  Cine Nunes, en honor al gran cineasta portugués, José María Nunes. Este Festival cuenta cada año con más de 200 títulos anuales del que está próxima su novena edición </p> */}
          {/* <p className="pBio">Además, es el presidente de la A.I.P.D.A. (Asociación para la Producción y Distribución Audiovisual) cuyo fin es promover y ayudar al cine independiente. Y tampoco podemos olvidar otra de sus facetas: la de la radio puesto que es un gran comunicador., se recuerda su programa HOYESCINE. </p> */}
      </div>     
    </section>
  );
};

export default biography;