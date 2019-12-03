import React, { Component } from 'react';
import Filmography from '../../components/sectionFilmography/filmography';
import Biography from '../../components/sectionBiography/biography';
import NavBar from '../../components/navBar/navBar';
import Events from '../../components/sectionEvents/events';
import Contact from '../../components/sectionContact/contact';
import Festival from '../../components/sectionFestival/festival';
import Footer from '../../components/footer/footer';
import M from 'materialize-css';
import SwiftSlider from 'react-swift-slider';
import slider from '../../data/slider.json';
import "materialize-css/dist/css/materialize.min.css";
import './home.css';

class home extends Component {

  componentDidMount(){
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }

  render() {
    
    return (
      <>
      <NavBar />
      <div id="home" className="parallax-container parallax-height">
        <div className="parallax">
          <div className="containerHome">
          <h1>ADOLFO QUIBUS</h1>
          <h2>[ actor & productor & director ]</h2>
          </div>
          <img src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/462408_4702701407973_283705807_o.jpg?_nc_cat=100&_nc_oc=AQlZ7Axcp6g2uplTuQsf6kj66l7myLHX4Z5QZN5Yd2b1L4PzuKkkAH1BEK_6rPhi1O2VlE-X_yYLi6w5bGe4M_VK&_nc_ht=scontent-mad1-1.xx&oh=80a91c5fa39024595c643b76b998fb58&oe=5E49F90F" alt="adolfo"/>
        </div>
      </div>
      
      <Festival
        title= "FESTIVAL NUNES 2019"
      />
      <div className="parallax-container">
        <div className="parallax" ><img src="https://images.unsplash.com/photo-1570834322056-ba3e2994ab85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="adolfo"/></div>
      </div>

      <Filmography 
        title= "FILMOGRAFIA"
      />
      

      <div className="parallax-container">
        <div className="parallax" ><img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="adolfo"/></div>
      </div>

      <Events 
        title= "EVENTOS"
      />    
      
      <div className="parallax-container">
        <div className="parallax"><img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="adolfo"/></div>
      </div>

      <section id="images" className="sliderContainer black">
      <SwiftSlider
          data={slider}
          height={700}
      />
      </section>

      <Biography 
        title= "BIOGRAFIA"
      />

      <Contact 
        email = "adolfoquibus@gmail.com"
        phone = "+34 688 30 65 81"

      />

      <Footer /> 

    </>
    );
  }
}

export default home;