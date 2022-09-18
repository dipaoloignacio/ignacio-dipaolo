import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Header() {

  return (
    <div className='container-header'>
      <div className='bg-opaco'></div>
      <div className='container-title'>
        <h1 className='title-Header'>Bienvenido <br /> a mi <span>website</span></h1>
        <a href='#about' className='btn-read-more'>SOBRE MI</a>
        <motion.div className='icon-down'
          animate={{ opacity: 0.2, y: 40 }}
          transition={{ ease: "linear", duration: 1, repeat: Infinity }}
        > <FontAwesomeIcon icon={faAngleDown} /></motion.div>
      </div>
    </div>
  )
}

export default Header