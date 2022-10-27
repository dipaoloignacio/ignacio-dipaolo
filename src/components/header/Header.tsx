import React, { useEffect } from 'react'
import { useContext, useRef } from 'react';
import { navbarContex } from '../../context/navBarContext';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const { setPositions } = useContext(navbarContex);
  const myRef = useRef<any>();

  useEffect(() => {
    setPositions(myRef.current.offsetTop, 'inicio')
  }, [])

  return (
    <div style={{overflow:'hidden'}}>
      <div ref={myRef} className='container-header'>
        <div className='bg-opaco'></div>
        <div className='container-title'>
          <h1 className='title-Header'>Bienvenido <br /> a mi <span>website</span></h1>
          <a href='#about' className='btn-read-more'>SOBRE MI</a>
          <motion.a className='icon-down'
            href='#about'
            animate={{ opacity: 0.2, y: 40 }}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
          > <FontAwesomeIcon icon={faAngleDown} /></motion.a>
        </div>
      </div>
    </div>
  )
}

export default Header