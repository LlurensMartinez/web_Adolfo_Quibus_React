import React from 'react';
import Home from './pages/home';
import MoviesDetails from './pages/moviesDetails';
import VideoYouTube from './pages/videoYouTube';
import Biography from './pages/biography';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies/:id" children={<MoviesDetails />} />
          <Route exact path="/movies/:id/:title" children={<VideoYouTube />} />
          <Route exact path="/biography" component={Biography} />
          {/* <Route exact path="*" component={NoMatch} /> */}
      </Switch>
    </Router>
  );
}

export default App;
