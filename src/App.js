import React from 'react';
import Home from './components/home'
import NavBar from './components/navBar/navBar'
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Home
        title= "Adolfo Quibus"
        subtitle= '[ actor & productor & director ]'
      />
    </>
  );
}

export default App;
