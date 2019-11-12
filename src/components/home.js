import React, { Component } from 'react';
import Filmography from './sectionFilmography/filmography'
import M from 'materialize-css';

class home extends Component {

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      M.Parallax.init(elems);
    });
  }

  render() {
    return (
      <>
      <div className="parallax-container parallax-height">
        <div className="parallax">
          <div className="containerHome">
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
          </div>
          <img src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/462408_4702701407973_283705807_o.jpg?_nc_cat=100&_nc_oc=AQlZ7Axcp6g2uplTuQsf6kj66l7myLHX4Z5QZN5Yd2b1L4PzuKkkAH1BEK_6rPhi1O2VlE-X_yYLi6w5bGe4M_VK&_nc_ht=scontent-mad1-1.xx&oh=80a91c5fa39024595c643b76b998fb58&oe=5E49F90F" alt="adolfo"/>
        </div>
      </div>
      <Filmography 
        title= "FILMOGRAFIA"
      />
      <div className="parallax-container">
        <div className="parallax" ><img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="adolfo"/></div>
      </div>
      <div className="section black">
        <div className="row container">
          <h2 className="header white-text text-white">Parallax</h2>
          <p className="white-text text-white">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          <h2 className="header white-text text-white">Parallax</h2>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax"><img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="adolfo"/></div>
      </div>
    </>
    );
  }
}

export default home;