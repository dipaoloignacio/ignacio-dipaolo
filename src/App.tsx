import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Socials from './components/socials/Socials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import AnimationSections from './components/animations/AnimationSections';
import { NavBarContextProvider } from './context/navBarContext';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './scss/app.scss';

function App() {
  return (
    <>
      <NavBarContextProvider>
        <Header />
        <Navbar />
        <About />
        <div className='clear'></div>
        <Portfolio />
        <div className='clear'></div>
        <Socials />
        <Contact />
        <Footer />
      </NavBarContextProvider>
    </>
  );
}

export default App;
