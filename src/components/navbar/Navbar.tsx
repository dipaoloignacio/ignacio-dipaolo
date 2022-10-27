import React, { useState, useContext, useRef, useEffect } from 'react'
import { navbarContex } from '../../context/navBarContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const { inicio, about, portfolio, contact } = useContext(navbarContex);
  const boxRef = useRef<HTMLDivElement>(null);
  const [y, setY] = useState<any>(0);

  const getPosition = () => {
    const vertical = boxRef.current?.offsetTop;
    setY(vertical);
  }

  useEffect(() => {
    window.addEventListener("scroll", getPosition);
  }, [])

  return (
    <nav ref={boxRef} className={"navbar navbar-expand-lg sticky-top"}>
      <div className="container-fluid ">
        <a href="#"><FontAwesomeIcon icon={faMountainSun} /></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <a className={y > inicio && y < (about - 1) ? 'nav-link active' : 'nav-link'} aria-current="page" href="#">INICIO</a>
            <a className={y >= (about - 1) && y < (portfolio - 100) ? 'nav-link active' : 'nav-link'} href="#about">SOBRE MI</a>
            <a className={y >= (portfolio - 100) && y < (contact - 300) ? 'nav-link active' : 'nav-link'} href="#portfolio">PORTFOLIO</a>
            <a className={y > (portfolio) && y > (contact - 300) ? 'nav-link active' : 'nav-link'} href="#contact">CONTACT</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar