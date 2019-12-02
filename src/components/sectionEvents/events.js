import React, { Component } from 'react';
import eventsData from '../../data/events.json'
import M from 'materialize-css';
import './events.css'

class events extends Component {

  state = {
    isClicked: false,
    color: "",
    id: 0
  }

  componentDidMount(){
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }

  iconChange = (idClick) => {
    const { id, isClicked } = this.state
    if(id !== idClick){
      this.setState({
        isClicked:true,
        color:"red",
        id: idClick
      });
    }
    if(id === idClick){
      if(isClicked === false){
        this.setState({
          isClicked:true,
          color:"red",
        });
      } else {
        this.setState({
          isClicked:false,
          color:"white",
        });
      }
    }
    
  }

  renderMovies = () => {
    return eventsData.map(event => 
      <li key={event.id}>
        <div onClick={() => this.iconChange(event.id)} className="collapsible-header black containerEvents" id={this.state.color}>
          <h2><span>{event.day}</span> <b>{event.month}</b></h2>
          <h3 >{event.title}</h3>
          {
          this.state.isClicked === false ?
          <i className="large material-icons">expand_more</i> 
          : 
          <i className="large material-icons">expand_less</i>
          }

        </div>
        <div className="collapsible-body">
          <div>
            <p>{event.info.weekday} {event.day} {event.info.completeMonth} {event.info.year}, {event.info.hour}</p>
            <p>{event.info.place}</p>
            <p>{event.info.street}</p>
            <p>{event.info.zip} {event.info.city} </p>
            <p>{event.info.country}</p>
          </div>
        </div>
      </li>)
  } 
  
  render() {
    return (
      <section id="events" className="section black">
          <h2 className="header white-text text-white">{this.props.title}</h2>
          <ul className="collapsible borderNone">
          {this.renderMovies()}
          </ul>
    </section>
    );
  }
}

export default events;