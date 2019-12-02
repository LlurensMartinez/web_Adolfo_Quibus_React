import React from 'react';
import {
  Link
} from "react-router-dom";

const biography = () => {
  return (
    <section className="section black">
      <div className="bioContainer">
          <img className="imgBio" src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/219600_4522816030951_1607879470_o.jpg?_nc_cat=105&_nc_ohc=iTMG-FptJM8AQmySrCQlZ56I3FVumZSu5iQ7aQf2QTQu1CqOf1tP9Uk6Q&_nc_ht=scontent-mad1-1.xx&oh=dc75b97be16483d174e2aeb33d49cc39&oe=5E4C2FA4" alt="adolfo2"/>
          <p className="pBio">Adolfo Quibus es guionista, director y actor español muy vinculado al cine, al teatro y a la literatura desde muy joven. Nació en Barcelona en el año 1945 y aunque comienza estudios de ingeniería, se decanta por una trayectoria profesional artística. </p>
          <img className="imgBio" src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/334607_4702711368222_1943923609_o.jpg?_nc_cat=106&_nc_ohc=M8CLhjjG_BQAQnhFUG-G7PuHp06_f_a9B0piNglBQaBhF257-EKNs4BRg&_nc_ht=scontent-mad1-1.xx&oh=c541d215ed3e84f051d594171e497b3f&oe=5E876FD7" alt="adolfo4"/>
          <p className="pBio">Cuando se traslada a Madrid, en el 1966, comienza a dirigir obras de teatro como “Cuidado con las personas formales”, de Alfonso Paso, y “Ella, él y Salomón”, de José Santaolaya. Posteriormente, también dirige e interpreta “El diario de un loco”, de Daniel Bohr. En el 1972, ya plenamente en el mundo teatral, despliega su faceta de escritor y como dramaturgo estrena “El conde von Parkus”, obra que se mantuvo dieciséis meses en cartel en al Lady Pepa de Madrid. Durante los últimos quince años, estrena y representa obras de su autoría, entre las que destacan “Recordando las candilejas” y “El precio de mi independencia”, ya en el año 2006. En el 2014 estrena “LOS TRES DIAS DEL CANGREJO” en Buenos Aires, Argentina, siendo un éxito de crítica y público, estando nueve meses en cartel. Este año quieren reponerla.</p>
          <img className="imgBio" src="http://www.valenti-versusfilms.com/s/cc_images/cache_44028178.jpg" alt="adolfo2"/>
          <p className="pBio">Pero su trayectoria no se encuadra solo en el teatro y aunque ya hemos hablado de su faceta como dramaturgo que supone escritura, también es prosista ya que escribe para las novelas de Bruguera y con ello adquiere una gran destreza y habilidad a la hora de redactar, cualidad que hoy día sigue demostrando. En cartera “LAS AVENTURAS DE ALBERTO ZUMARRAS” que saldrán en breve. Así como sus memorias tituladas: OTOÑO GRIS (Historia de un aprendiz de persona)</p>
          <img className="imgBio" src="http://1.bp.blogspot.com/-5MyK4GUXY00/Tu7_khe5DdI/AAAAAAAABgM/fT5s4MIREIk/s1600/IMG_5258.JPG" alt="adolfo3"/>
          <p className="pBio">Entre sus trabajos más recientes, destacamos “Mi amigo el Alzheimer”. Se trata de un documental acerca del desconocimiento que hay sobre esta enfermedad y las dificultades para encontrar cura. Tampoco dejaremos de nombrar su documental “El sete Sentit", en honor al cineasta Jose María Nunes. Pendientes de estreno están : LA VIDA EN UNA CORCHEA,  y en periodo de montaje; LA ERA DEL BOLSILIBRO,  y SILENTE Su pasión por el cine le ha llevado a crear el Festival Internacional de  Cine Nunes, en honor al gran cineasta portugués, José María Nunes. Este Festival cuenta cada año con más de 200 títulos anuales del que está próxima su novena edición </p>
          <img className="imgBio" src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/242700_4363508926865_1444618005_o.jpg?_nc_cat=110&_nc_ohc=Y93EKmGsdAQAQk9tk5ckEoSqKaM174M1XnAWvO_7jGwPzgxU0OaFKc8Kg&_nc_ht=scontent-mad1-1.xx&oh=2a7d8e2c4ec0606fadfb1758860a96df&oe=5E40FCBD" alt="adolfo4"/>
          <p className="pBio">Además, es el presidente de la A.I.P.D.A. (Asociación para la Producción y Distribución Audiovisual) cuyo fin es promover y ayudar al cine independiente. Y tampoco podemos olvidar otra de sus facetas: la de la radio puesto que es un gran comunicador., se recuerda su programa HOYESCINE. </p>
          <Link to={`/`}>Back</Link>
      </div>     
    </section>
  );
};

export default biography;