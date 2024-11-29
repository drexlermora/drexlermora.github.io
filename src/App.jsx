import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';  


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App
