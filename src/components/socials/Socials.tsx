import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import AnimationSections from '../animations/AnimationSections'
import { faGithub, faInstagram, faLinkedin, } from '@fortawesome/free-brands-svg-icons'

const mySocials = [
    {
        icon: faEnvelope,
        animation: 'translateY(-100px)',
        redirect: "#contact",
        target: ''
    },
    {
        icon: faGithub,
        animation: 'translateY(100px)',
        redirect: "https://github.com/dipaoloignacio",
        target: '_blank'
    },
    {
        icon: faInstagram,
        animation: 'translateY(-100px)',
        redirect: "https://www.instagram.com/nacho_dipaolo/",
        target: '_blank'
    },
    {
        icon: faLinkedin,
        animation: 'translateY(100px)',
        redirect: "https://www.linkedin.com/in/ignacio-di-paolo-9354711b8/",
        target: '_blank'
    },
]
function Socials() {
    return (
        <div>
            <section className="partners parallax-background-partners" id="partners">

                <div className="opacity"></div>

                <div className="content">

                    <h2>Mis redes sociales</h2>

                    <div className="logo">
                        {
                            mySocials.map(social => {
                                return (
                                    <AnimationSections animation={social.animation} key={social.redirect}>
                                        <a href={social.redirect} className='icon-socials' target={social.target}>
                                            <FontAwesomeIcon icon={social.icon} />
                                        </a>
                                    </AnimationSections>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Socials