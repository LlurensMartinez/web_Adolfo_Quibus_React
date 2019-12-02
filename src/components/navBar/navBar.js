import React, { Component } from 'react';
import M from 'materialize-css';
import './navBar.css';

class navBar extends Component {

  componentDidMount(){
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  render() {
    return (
      <>
        <nav className="grey darken-4">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">PRODUCCIONES</a>
            <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">HOME</a></li>
              <li><a href="badges.html">FILMOGRAFIA</a></li>
              <li><a href="collapsible.html">EVENTOS</a></li>
              <li><a href="mobile.html">IMAGENES</a></li>
              <li><a href="mobile.html">BIOGRAFIA</a></li>
              <li><a href="mobile.html">CONTACTO</a></li>
            </ul>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li><div className="user-view">
            <div className="background">
              <img src="https://images.unsplash.com/photo-1523207911345-32501502db22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="pop corn"/>
            </div>
          </div></li>
          <li><a href="#!" className="waves-effect"><i className="material-icons red600">home</i>HOME</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#!" className="waves-effect"><i className="material-icons red600">videocam</i>FILMOGRAFIA</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#!" className="waves-effect"><i className="material-icons red600">event</i>EVENTOS</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#!" className="waves-effect"><i className="material-icons red600">image</i>IMAGENES</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#!" className="waves-effect"><i className="material-icons red600">library_books</i>BIOGRAFIA</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#!" className="waves-effect"><i className="material-icons red600">contacts</i>CONTACTO</a></li>
          <li><div className="divider"></div></li>

        </ul>
        
      </>
    );
  }
}

export default navBar;