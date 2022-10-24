import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import About from './components/about/about.jsx'
// import Skills from './components/skills/skills.jsx'
import Nav from './components/navBar/navBar.jsx'
import Canva from './components/canva/canva.jsx'
import './App.scss';


function App() {

  return (
    <div className="App">
      <div >
        <div className='Nav'>
          {/* <Nav /> */}
        </div>
        <Canva />
        {/* <div>
      <Nav/>
      </div>
      <About/>
      <Skills/>
      <About/>
      <Skills/>
      <About/>
      <Skills/> */}
        {/* <Routes>
        <Route exact path='/' element={<About />} />
        <Route exact path='/' element={<Skills />} />
      </Routes> */}
      </div>
    </div>
  );
}

export default App;
