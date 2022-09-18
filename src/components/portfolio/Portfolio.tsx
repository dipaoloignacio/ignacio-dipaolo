import React from 'react'
import foto1 from '../../images/portfolio/portfolio1.jpg'
import foto2 from '../../images/portfolio/portfolio2.jpg'
import foto3 from '../../images/portfolio/portfolio3.jpg'
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
        link: 'https://fundacionlilianabodoc.org.ar/',
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
]

function Portfolio() {
    return (
        <div>
            <section className="portfolio" id="portfolio">

                <div className="portfolio-margin">

                    <h1>PORTFOLIO</h1>
                    <hr />

                    <ul className="grid">

                        {
                            portfolioList.map((proyect, i) => {
                                return (
                                    <li>
                                        <a href={proyect.link} target={'_blank'}>
                                            <img src={proyect.img} alt="Portfolio item" />
                                            <div className="text">
                                                <p className='proyect'>{proyect.title} {i+1}</p>
                                                <p className="description">{proyect.description}</p>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })
                        }

                    </ul>

                </div>

            </section>

        </div>
    )
}

export default Portfolio