import React from 'react';
import './App.css';
import Person from './components/Person';
import Feelings from './components/Feelings';
import HairColor from './components/HairColor';
// import { createStore } from 'redux';




function App() {
  return (
    <div className="App">

      <Person />
      <br />

      <Feelings name="Jasmin" />
      <br />

      <HairColor />
      <br />

    </div>
  );
}


// let store = createStore(App)


export default App;
