/* eslint-disable react/jsx-no-target-blank */
import './projects.css';
import ECM1 from '../../assets/ecommerce2.jpg';
import ECM2 from  '../../assets/ecommerce.jpg';
import ECM3 from  '../../assets/ecommerce3.jpg';
import ECM4 from  '../../assets/ecommerce4.jpg';
import TGX1 from '../../assets/trackgenix1.jpeg';
import TGX2 from '../../assets/trackgenix2.jpeg';
import TGX3 from '../../assets/trackgenix3.jpeg';
import CAL from '../../assets/calculadora.jpg';

export const Projects = ()=>{

    const projects = [
        {
            id: 1,
            images: ECM2,
            title: 'E-commerce',
            github: 'https://github.com/ilcosme/E-commerce',
            demo: 'https://ilcosme.github.io/E-commerce'
        },
        {
            id: 2,
            images: CAL,
            title: 'Calculator',
            github: 'https://github.com/ilcosme/CalculadoraVainilla',
            demo: 'https://ilcosme.github.io/CalculadoraVainilla'
        },
        {
            id: 3,
            images: TGX1,
            title: 'Calculator',
            github: 'https://github.com/ilcosme/Trackgenix-app',
            demo: ''
        }
    ]

    return (
        <section id='projects' className='projects'>
            <h5>My recent work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    projects.map(({id, images, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={images} alt={title} />
                            </div>
                                <h3>{title}</h3>
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