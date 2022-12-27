/* eslint-disable react/jsx-no-target-blank */
import './projects.css';
import { ImageSwiper } from './imageSwiper';

export const Projects = ()=>{

    const projects = [
        {
            id: 4,
            title: 'Cannagotchi',
            description: 'Cannabis crops tracking app developed by me using the complete MERN stack, in addition with Firebase to authenticate users. The app is aimed to help you maintain a control over your weed crops in order to help you remembering plants cycles, harvest dates and much more!',
            github: 'https://github.com/fermorelli/Trackgenix-app',
            demo: ''
        },
        {
            id: 1,
            title: 'E-commerce',
            description: 'Virtual store to browse and buy different products. Built with a shopping cart and a credit card and shipping info form to make payments. Frontend made with react js, using the context hook, as well as the form hook for validations. Data is consumed from an API.',
            github: 'https://github.com/fermorelli/E-commerce',
            demo: 'https://fermorelli.github.io/E-commerce'
        },
        {
            id: 3,
            title: 'Trackgenix ',
            description: 'App made with a development team, aimed to provide a schedule tracking service to companies wanting to manage their staff. Users can track their worked hours along with projects in wich they are involved. Frontend made with react js. Backend built with node js, mongo db and express',
            github: 'https://github.com/fermorelli/Trackgenix-app',
            demo: ''
        },
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