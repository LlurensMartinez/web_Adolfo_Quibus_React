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
              <li><a href="#home">HOME</a></li>
              <li><a href="#festival">FESTIVAL NUNES 2019</a></li>
              <li><a href="#filmography">FILMOGRAFIA</a></li>
              <li><a href="#events">EVENTOS</a></li>
              <li><a href="#images">IMAGENES</a></li>
              <li><a href="#biography">BIOGRAFIA</a></li>
              <li><a href="#contact">CONTACTO</a></li>
            </ul>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li><div className="user-view">
            <div className="background">
              <img src="https://images.unsplash.com/photo-1523207911345-32501502db22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="pop corn"/>
            </div>
          </div></li>
          <li><a href="#home" className="waves-effect"><i className="material-icons red600">home</i>HOME</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#festival" className="waves-effect"><i className="material-icons red600">event_seat</i>FESTIVAL NUNES 2019</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#filmography" className="waves-effect"><i className="material-icons red600">videocam</i>FILMOGRAFIA</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#events" className="waves-effect"><i className="material-icons red600">event</i>EVENTOS</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#images" className="waves-effect"><i className="material-icons red600">image</i>IMAGENES</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#biography" className="waves-effect"><i className="material-icons red600">library_books</i>BIOGRAFIA</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#contact" className="waves-effect"><i className="material-icons red600">contacts</i>CONTACTO</a></li>
          <li><div className="divider"></div></li>

        </ul>
        
      </>
    );
  }
}

export default navBar;