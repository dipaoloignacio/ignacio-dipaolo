import React from 'react'
import { motion } from 'framer-motion';
import { useEffect, useRef, useContext } from 'react'
import AnimationSections from '../animations/AnimationSections';
import { navbarContex } from '../../context/navBarContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faReact, faSquareJs, faCss3, faSass, faJava, faGithub } from '@fortawesome/free-brands-svg-icons'

let habilidadesPrincipales = [
    {
        id: 1,
        icon: faReact,
        skill: 'React',
        description: '1 año +',
    },
    {
        id: 2,
        icon: faSquareJs,
        skill: 'JavaScript | TypeScript',
        description: '1 año +',
    },
    {
        id: 3,
        icon: faCss3,
        skill: 'HTML y CSS',
        description: '2 años +',
    },
]

let habilidadesGenerales = [
    {
        id: 4,
        icon: faSass,
        skill: 'SASS',
        description: '1 año +'
    },
    {
        id: 5,
        icon: faJava,
        skill: 'JAVA',
        description: '2 años +'
    },
    {
        id: 5,
        icon: faCode,
        skill: 'SpringBoot',
        description: '6 mes +'
    },
    {
        id: 6,
        icon: faGithub,
        skill: 'GIT y GITHUB',
        description: '2 años +'
    },
    {
        id: 7,
        icon: faDatabase,
        skill: 'MYSQL',
        description: '2 años +'
    },
    {
        id: 8,
        icon: faDatabase,
        skill: 'MongoDB | FireBase',
        description: '6 meses +'
    },
    {
        id: 9,
        icon: faLanguage,
        skill: 'English A2 certificado',
    },
]

function About() {
    const { setPositions } = useContext(navbarContex);
    const myRef = useRef<any>();

    useEffect(() => {
        setPositions(myRef.current.offsetTop, 'about')
    }, [])

    return (
        <div ref={myRef} id="about">
            <section className="about" >

                <h1>SOBRE MI</h1>
                <hr />
                <p className="title">Hola, soy Ignacio Di Paolo, nacido en octubre de 1993, en Mendoza-Argentina. Me formaba en el ámbito de la actividad física y montaña, hasta alrededor del 2020 que descubrí y me interesé en este mundo de la programación y el desarrollo web, donde se construyen proyectos y todos los días se aprenden cosas nuevas. <br />
                    Actualmente me sigo dedicando a la montaña pero busco un cambio laboral y poder empezar en el mundo IT. <br />
                </p>
                <br />
                <a href="./cv-di-paolo-ignacio.pdf" download> Descargar CV.</a>
                <h2>PRINCIPALES HABILIDADES</h2>
                <AnimationSections animation={'none'}>
                    <div className='container-p-skills'>
                        {
                            habilidadesPrincipales.map(skill => {
                                return (
                                    <div className="column-one" key={skill.id}>

                                        <motion.div
                                            whileHover={{ rotate: 360, }}
                                            transition={{ duration: 1.5 }}
                                            whileTap={{ scale: 1.2, rotate: 360 }}
                                            className="circle-one"> <FontAwesomeIcon icon={skill.icon} /></motion.div>

                                        <h2>{skill.skill}</h2>
                                        <p>{skill.description}</p>

                                    </div>
                                )
                            })
                        }
                    </div>
                </AnimationSections>
                <div className='clear'></div>
                <h2 className='mb-5'>habilidades secundarias</h2>
                <div className='skills'>
                    {
                        habilidadesGenerales.map((skill, i) => {
                            return (
                                <div className='skill' key={i}>
                                    <FontAwesomeIcon icon={skill.icon} />
                                    <p>{skill.skill}</p>
                                    <p>{skill.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default About