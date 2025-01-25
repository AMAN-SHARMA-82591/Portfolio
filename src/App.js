
import React from 'react'
import './App.css';
import About from './About';
// import Navbar from './Navbar';
import Contact from './Contact';
import Home from './Home';
import Experience from './Experience';
import Footer from './Footer';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      {/* <Navbar handleClick={handleClick} /> */}
      <Home>
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Home>
    </div>
  );
}

export default App;
