import '../projects/projects.css';
import { ImageSwiper } from './imageSwiper2';

export const DesignerProjects = ({lan})=>{

    const projectsEN = [
        {
            id: 1,
            title: 'Branding Mary Jane',
            description: `Branding made for Mary Jane clothing store from Rosario`,
            demo: 'https://www.behance.net/gallery/165416417/Branding-local-Mary-Jane'
        },
        {
            id: 2,
            title: 'Concept art Jellyhead',
            description: `Concept art for Rosario local rock band Jellyhead`,
            demo: 'https://www.behance.net/gallery/165671769/Concept-Art-Jellyhead'
        },
        {
            id: 3,
            title: 'CD cover art Jellyhead',
            description: 'Cover art for Rosario local rock band Jellyhead first CD',
            demo: 'https://www.behance.net/gallery/165415917/Arte-banda-Jellyhead'
        },
    ]

    const projectsES = [
        {
            id: 1,
            title: 'Branding Mary Jane',
            description: `Branding realizado para local de ropa Mary Jane`,
            demo: 'https://www.behance.net/gallery/165416417/Branding-local-Mary-Jane'
        },
        {
            id: 2,
            title: 'Concept art Jellyhead',
            description: `Arte conceptual para banda rosarina de rock Jellyhead`,
            demo: 'https://www.behance.net/gallery/165671769/Concept-Art-Jellyhead'
        },
        {
            id: 3,
            title: 'CD cover art Jellyhead',
            description: 'Covert art para el primer CD de la banda rosarina de rock Jellyhead',
            demo: 'https://www.behance.net/gallery/165415917/Arte-banda-Jellyhead'
        },
    ]

    if(lan==='eng'){
        return (
            <section id='projects' className='projects'>
                <h5>My recent work</h5>
                <h2>Designer Portfolio</h2>
                <div className="container portfolio__container">
                    {
                        projectsEN.map(({id, title, description, demo}) => {
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
                                        <a href={demo} target='_blank' className='btn btn-primary'  id='btn'>See more</a>
                                    </div>
                            </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }else if(lan==='es'){
        return (
            <section id='projects' className='projects'>
                <h5>Mi trabajo más reciente</h5>
                <h2>Portfolio diseñador</h2>
                <div className="container portfolio__container">
                    {
                        projectsES.map(({id, title, description, demo}) => {
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
                                        <a href={demo} target='_blank' className='btn btn-primary'  id='btn'>See more</a>
                                    </div>
                            </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
};