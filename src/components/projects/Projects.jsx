/* eslint-disable react/jsx-no-target-blank */
import './projects.css';
import { ImageSwiper } from './imageSwiper';

export const Projects = ()=>{

    const projects = [
        {
            id: 1,
            title: 'E-commerce',
            description: 'Virtual store to browse and buy products, with a shopping cart and a credit card and shipping info form. Frontend made with react js, consuming an API to show the different items.',
            github: 'https://github.com/fermorelli/E-commerce',
            demo: 'https://fermorelli.github.io/E-commerce'
        },
        {
            id: 2,
            title: 'Calculator',
            description: 'Functional calculator made from scratch with plain HTML, CSS and JS. Able to resolve the basics operation a normal calculator can handle. Style made entirely with plain css. ',
            github: 'https://github.com/fermorelli/CalculadoraVainilla',
            demo: 'https://fermorelli.github.io/CalculadoraVainilla'
        },
        {
            id: 3,
            title: 'Trackgenix app',
            description: 'App made with a development team to provide a schedule tracking service to companies. Frontend made with react js. Backend built with node js, mongo db and express',
            github: 'https://github.com/fermorelli/Trackgenix-app',
            demo: ''
        }
    ]

    return (
        <section id='projects' className='projects'>
            <h5>My recent work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    projects.map(({id, title, description, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <ImageSwiper id={id} />
                                </div>
                                <div className="portfolio__item-text">
                                    <h3>{title}</h3>
                                    <p className='portfolio__item-description'>{description}</p>
                                </div>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} target='_blank' className='btn btn-primary'>Deploy</a>
                                </div>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
};