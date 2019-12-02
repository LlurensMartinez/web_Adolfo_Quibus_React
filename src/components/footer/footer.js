import React from 'react';

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
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Youtube</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Tweeter</a></li>
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