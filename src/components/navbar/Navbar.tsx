import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun, faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  const [viewMenu, setViewMenu] = useState(true)

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid ">
        <FontAwesomeIcon icon={faMountainSun} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <a className="nav-link" aria-current="page" href="#">INICIO</a>
            <a className="nav-link" href="#about">SOBRE MI</a>
            <a className="nav-link" href="#portfolio">PORTFOLIO</a>
            <a className="nav-link" href="#contact">CONTACT</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar