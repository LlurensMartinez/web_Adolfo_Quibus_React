import React from 'react';
import './footer.css'

const footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Adolfo Quibus Director</h5>
            <p className="grey-text text-lighten-4">Producciones Cinematograficas S.L.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Redes Sociales</h5>
            <ul>
              <div className="socialContainer">
                <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/adolfoquibus"><i className="fab fa-facebook iconSocial"></i></a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/adolfoquibus"><i className="fab fa-instagram iconSocial"></i></a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.youtube.com/user/adolfoquibus1"><i className="fab fa-youtube iconSocial"></i></a></li>
                <li><a className="grey-text text-lighten-3" href="https://twitter.com/adolfoquibus"><i className="fab fa-twitter iconSocial"></i></a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/adolfo-quibus-garcia-45691117/"><i className="fab fa-linkedin-in iconSocial"></i></a></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2019 Llorenç Martinez
        </div>
      </div>
    </footer>
  );
};

export default footer;