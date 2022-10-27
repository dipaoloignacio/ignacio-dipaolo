import foto1 from '../../images/portfolio/portfolio1.jpg'
import foto2 from '../../images/portfolio/portfolio2.jpg'
import foto3 from '../../images/portfolio/portfolio3.jpg'
import foto4 from '../../images/portfolio/portfolio4.jpg'
import { useContext, useEffect, useRef } from 'react';
import { navbarContex } from '../../context/navBarContext';
import AnimationSections from '../animations/AnimationSections';

let portfolioList = [
    {
        id: 1,
        link: 'https://elalmaenunhilo.com/',
        img: foto1,
        title: 'WEBSITE',
        description: 'Web hecha con HTML y CSS, con el uso de boostrap'
    },
    {
        id: 2,
        link: 'https://fundacionlilianabodoc.org.ar',
        img: foto2,
        title: 'WEBSITE',
        description: 'WebSite creado con React, SASS, Framer-Motion, Formik, Boostrap'
    },
    {
        id: 3,
        link: 'https://legendary-blini-1434ae.netlify.app/',
        img: foto3,
        title: 'APP WEB',
        description: 'Mock de e-commers APP hecha con React, SASS, Framer-Motion, Formik, Boostrap conectada con Firebase'
    },
    {
        id: 4,
        link: 'https://aconcagua-chat-frontend.herokuapp.com/',
        img: foto4,
        title: 'WEB APP',
        description: 'Chat real time desarrollado con Node.js, Socket-io, React Js, Mongo Atlas *NOTA: Heroku tarda en cargar 30seg *'
    },
]

function Portfolio() {

    const { setPositions } = useContext(navbarContex);
    const myRef = useRef<any>();

    useEffect(() => {
        setPositions(myRef.current.offsetTop, 'portfolio')
    }, [])

    return (
        <>
            <section ref={myRef} className="portfolio" id="portfolio">

                <div className="portfolio-margin">
                    <AnimationSections animation={'translate(-200px)'}>

                        <h1>PORTFOLIO</h1>
                        <hr />

                        <h3>Deploys</h3>
                        <ul className="grid">
                            {
                                portfolioList.map((proyect, i) => {
                                    return (
                                        <li key={i}>
                                            <a href={proyect.link} target={'_blank'}>
                                                <img src={proyect.img} alt="Portfolio item" />
                                                <div className="text">
                                                    <p className='proyect'>{proyect.title} {i + 1}</p>
                                                    <p className="description">{proyect.description}</p>
                                                </div>
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </AnimationSections>
                    <AnimationSections animation={'translate(-1000px)'}>

                        <h3>Demos</h3>
                        <ul className="grid">
                            <li>
                                <iframe width="300" height="250" src="https://www.youtube.com/embed/TV6W8KZi_bw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </li>
                            <li>
                                <iframe width="300" height="250" src="https://www.youtube.com/embed/OvBqHGXThXc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </li>
                        </ul>
                    </AnimationSections>
                </div>
            </section>
        </>
    )
}

export default Portfolio