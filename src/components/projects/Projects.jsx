import './projects.css';
import { ImageSwiper } from './imageSwiper';

export const Projects = ({lan})=>{

    const projectsEN = [
        {
            id: 4,
            title: 'Cannagotchi (WIP)',
            description: `Cannabis crops tracking app developed by me using the complete MERN stack, in addition with Firebase to authenticate users. The app is aimed to help you maintain a control over your weed crops and to help you remembering plants cycles, harvest dates and much more!`,
            github: 'https://github.com/fermorelli/cannagotchi',
            demo: ''
        },
        {
            id: 5,
            title: 'Music Player',
            description: `Shazam clone app to stream online music, all original functionalities replicated. Data is consumed from a Shazam free API, using the Rapid API tool for better performance. Front end built with React, Tailwind, and Redux for stage management`,
            github: 'https://github.com/fermorelli/music-player',
            demo: 'https://fermorelli-music-player.netlify.app/'
        },
        {
            id: 1,
            title: 'Market Palace',
            description: 'Virtual store to browse and buy different products. Built with a shopping cart and, a credit card and shipping info form to make payments. Frontend made with react js, using the context hook, as well as the form hook for validations',
            github: 'https://github.com/fermorelli/E-commerce',
            demo: 'https://fermorelli.github.io/E-commerce'
        },
        {
            id: 3,
            title: 'Trackgenix',
            description: 'App made with a development team, aimed to provide a schedule tracking service to companies wanting to manage their staff. Users can track their worked hours along with projects in wich they are involved. Built entirely with the MERN stack',
            github: 'https://github.com/fermorelli/Trackgenix-app',
            demo: ''
        },
        {
            id: 2,
            title: 'Shopping List',
            description: 'Shopping list made entirely with vanilla JavaScript, HTML and CSS, using local storage as storage method. It allows the user to add, edit or delete items at their choice, forming a shopping list that is persistent in the browser for greater functionality.',
            github: 'https://github.com/fermorelli/shopping-list',
            demo: 'https://fermorelli.github.io/shopping-list/'
        },
        {
            id: 6,
            title: 'Calculator',
            description: 'Functional calculator made from scratch with plain HTML, CSS and JavaScript. Able to solve the basic operations that a normal calculator can handle. The whole project is built using plain languages, not using any library or framework.',
            github: 'https://github.com/fermorelli/CalculadoraVainilla',
            demo: 'https://fermorelli.github.io/CalculadoraVainilla/'
        },
    ]

    const projectsES = [
        {
            id: 4,
            title: 'Cannagotchi (WIP)',
            description: `Aplicación de seguimiento de cultivos de cannabis desarrollada por mí utilizando el stack MERN completo, además de Firebase para autenticar a los usuarios. La app tiene como objetivo ayudarte a mantener un control detallado sobre tus cultivos, y a recordar los ciclos de las plantas, las fechas de cosecha y mucho más!.`,
            github: 'https://github.com/fermorelli/cannagotchi',
            demo: ''
        },
        {
            id: 5,
            title: 'Music Player',
            description: `Aplicación clon de Shazam para realizar streaming de música online, todas las funcionalidades originales estan replicadas. Los datos se consumen desde una API gratuita de Shazam, utilizando la herramienta Rapid API para un mejor rendimiento. Desarrollado con React, Tailwind y Redux para manejar los estados`,
            github: 'https://github.com/fermorelli/music-player',
            demo: 'https://fermorelli-music-player.netlify.app/'
        },
        {
            id: 1,
            title: 'Market Palace',
            description: 'Tienda virtual para navegar y comprar diferentes productos. Construido con un carrito de compras y un formulario para pagos con tarjeta de crédito e información de envío para realizar pagos. Frontend hecho con react js, usando el context hook, así como el hook de formularios para validaciones. Los datos se consumen desde una API externa.',
            github: 'https://github.com/fermorelli/E-commerce',
            demo: 'https://fermorelli.github.io/E-commerce'
        },
        {
            id: 3,
            title: 'Trackgenix',
            description: 'Aplicación realizada con un equipo de desarrollo, destinada a brindar un servicio de seguimiento de horarios a empresas que desean administrar su personal,  y sus proyectos. Hecha integramente con el stack MERN',
            github: 'https://github.com/fermorelli/Trackgenix-app',
            demo: ''
        },
        {
            id: 2,
            title: 'Shopping List',
            description: 'Lista de compras realizada integramente con JavaScript vainilla, HTML y CSS, utilizando local storage como método de almacenamiento. Permite que el usuario añada, edite o borre elementos a su elección. manteniendo persistencia en el navegador.',
            github: 'https://github.com/fermorelli/shopping-list',
            demo: 'https://fermorelli.github.io/shopping-list/'
        },
        {
            id: 6,
            title: 'Calculadora',
            description: 'Calculadora funcional hecha desde cero con HTML, CSS y JavaScript. Capaz de resolver las operaciones básicas que puede manejar una calculadora normal. La aplicación entera esta realizada con los lenguages vainilla, sin librerías o frameworks adicionales',
            github: 'https://github.com/fermorelli/CalculadoraVainilla',
            demo: 'https://fermorelli.github.io/CalculadoraVainilla/'
        },
    ]

    if(lan==='eng'){
        return (
            <section id='projects' className='projects'>
                <h5>My recent work</h5>
                <h2>Portfolio</h2>
                <div className="container portfolio__container">
                    {
                        projectsEN.map(({id, title, description, github, demo}) => {
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
                                        <a href={github} className='btn' target='_blank'  id='btn'>Github</a>
                                        <a href={demo} target='_blank' className='btn btn-primary'  id='btn'>Deploy</a>
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
                <h2>Portfolio</h2>
                <div className="container portfolio__container">
                    {
                        projectsES.map(({id, title, description, github, demo}) => {
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
                                        <a href={github} className='btn' target='_blank'  id='btn'>Github</a>
                                        <a href={demo} target='_blank' className='btn btn-primary'  id='btn'>Deploy</a>
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