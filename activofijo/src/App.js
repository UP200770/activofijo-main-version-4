// App.js
import React from 'react';
import './App.css';
import ActivoFijo from './components/ActivoFijo';
import { Home } from './Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/ActivoFijo" element={ <ActivoFijo /> } />
      </Routes>
    </div>
  );
}

export default App;
