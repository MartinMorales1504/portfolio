import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about.jsx'
import './App.css';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
