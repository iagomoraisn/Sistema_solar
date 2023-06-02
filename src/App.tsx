import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

function App() {
  return (
    <p>
      <Header />
      <SolarSystem />
      <Missions />
    </p>
  );
}

export default App;
