import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faReact, faSquareJs, faCss3, faSass, faJava, faGithub } from '@fortawesome/free-brands-svg-icons'

let habilidadesPrincipales = [
    {
        id: 1,
        icon: faReact,
        skill: 'React',
        description: '1 año +'
    },
    {
        id: 2,
        icon: faSquareJs,
        skill: 'JavaScript | TypeScript',
        description: '1 año +'
    },
    {
        id: 3,
        icon: faCss3,
        skill: 'HTML y CSS',
        description: '2 años +'
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
    return (
        <div>
            <section className="about" id="about">

                <h1>SOBRE MI</h1>

                <p className="title">Hola, Soy Ignacio Di Paolo. Me formaba en el ambito de la actividad física y montaña, hasta alrededor del 2020 que descubrí y me interesé en este mundo de la programacion y el desarrollo web, donde se construyen proyectos y todos los dias se aprenden cosas nuevas. <br />
                Actualmente me sigo dedicando a la montaña pero busco un cambio laboral y poder empezar en el mundo IT. <br />
                </p>
                <br />
                <h2>PRINCIPALES HABILIDADES</h2>
                <div className='container-p-skills'>


                    {
                        habilidadesPrincipales.map(skill => {
                            return (
                                <div className="column-one">

                                    <div className="circle-one"> <FontAwesomeIcon icon={skill.icon} /></div>

                                    <h2>{skill.skill}</h2>
                                    <p>{skill.description}</p>

                                </div>
                            )
                        })
                    }
                </div>
                <div className='clear'></div>
                <h2 className='mb-5'>habilidades secundarias</h2>
                <div className='skills'>
                    {
                        habilidadesGenerales.map((skill, i) => {
                            return (
                                <div className='skill'>
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