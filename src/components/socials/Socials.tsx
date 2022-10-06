import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
function Socials() {
    return (
        <div>
            <section className="partners parallax-background-partners" id="partners">

                <div className="opacity"></div>

                <div className="content">

                    <h2>Mis redes sociales</h2>

                    <div className="logo">

                        <a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> </a>
                        <a href="https://github.com/dipaoloignacio" target={'_blank'}><FontAwesomeIcon icon={faGithub} /> </a>
                        <a href="https://www.instagram.com/nacho_dipaolo/" target={'_blank'}><FontAwesomeIcon icon={faInstagram} /> </a>
                        <a href="https://www.linkedin.com/in/ignacio-di-paolo-9354711b8/" target={'_blank'}><FontAwesomeIcon icon={faLinkedin} /> </a>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Socials