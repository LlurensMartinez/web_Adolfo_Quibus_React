import React from 'react';
import Iframe from 'react-iframe';
import movies from '../data/movies.json';
import { useParams } from "react-router-dom";

const VideoYouTube = () => {

  const { id, title } = useParams();
  const filterVideo = movies.filter(movie => movie.id === parseInt(id) && movie.title === title);

  return (
    <Iframe url={filterVideo[0].url}
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            frameborder="0"
            webkitallowfullscreen
            allowfullscreen
            styles={{height: "25px"}}/>
  );
};

export default VideoYouTube;