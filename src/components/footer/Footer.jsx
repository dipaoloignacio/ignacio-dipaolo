import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
            <div className='footer'>
                <a href="#">
                    <FontAwesomeIcon icon={faMountainSun} />
                </a>
                <p>Ignacio Di Paolo</p>
            </div>
        </>
    )
}

export default Footer