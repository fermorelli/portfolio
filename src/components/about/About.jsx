import styles from './about.css';
import me from '../../assets/me4.jpg';
import {FaCode, FaTools} from 'react-icons/fa';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';

export const About = ({lan})=>{
    if(lan==='eng'){
    return (
        <section id='about' className={styles.about}>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={me} alt="about img" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaCode className='about_icon'/>
                            <h5>Technologies</h5>
                            <small>HTML, CSS, JavaScript, React, NodeJS, Express, MongoDB</small>
                        </article>
                        <article className='about__card'>
                            <FaTools className='about_icon'/>
                            <h5>Tools</h5>
                            <small>Firebase, Postman, Figma, Slack, Trello, Photoshop, Illustrator</small>
                        </article>
                        <article className='about__card' id='projects-card'>
                            <AiOutlineFundProjectionScreen className='about_icon'/>
                            <h5>Projects</h5>
                            <small>Lots of projects to checkout on my personal github and behance repo</small>
                        </article>
                    </div>
                    <p>
                    I am a web developer who is very passionate about technology and design. I started working with computers as a child, when I built my own PCs. In university, I studied Social Communication, which allowed me to have extensive knowledge in graphic design, interface design, and communication strategies. Later on, I started studying programming on my own, learning about HTML and CSS. In 2021, I was part of the 'Argentina Programa' initiative where I was able to learn about the logic of different languages, and in 2022, I complemented my studies with a 15-week intensive bootcamp with the company Radium Rocket. There, I was able to incorporate knowledge both in front end and back end using the MERN stack, and in UX/UI design consolidating my previous knowledge as a designer. But I never stop learning new things, I am always learning! This knowledge can be reflected in my personal projects stored {<a id='here' href="https://github.com/fermorelli" target='_blank' rel='noreferrer'>here</a>} in my Github repo, and {<a id='here' href='https://www.behance.net/fernandomorelli' target='_blank' rel='noreferrer'>here</a>} in my Behance repo. I hope you like them!
                    </p>
                    <a href="#contact" className='btn btn-primary' id='btn-about'>Let's talk!</a>
                </div>
            </div>
        </section>
    )}else if(lan==='es'){
        return (
            <section id='about' className={styles.about}>
                <h5>Conoceme</h5>
                <h2>Acerca de mi</h2>
    
                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={me} alt="about img" />
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className='about__card'>
                                <FaCode className='about_icon'/>
                                <h5>Tecnologías</h5>
                                <small>HTML, CSS, JavaScript, React, NodeJS, Express, MongoDB</small>
                            </article>
                            <article className='about__card'>
                                <FaTools className='about_icon'/>
                                <h5>Herramientas</h5>
                                <small>Firebase, Postman, Figma, Slack, Trello, Photoshop, Illustrator</small>
                            </article>
                            <article className='about__card' id='projects-card'>
                                <AiOutlineFundProjectionScreen className='about_icon'/>
                                <h5>Proyectos</h5>
                                <small>Varios proyectos personales para chequear en mis repos de Github y de Behance</small>
                            </article>
                        </div>
                        <p> 
                            Soy un desarrollador web muy apasionado por la tecnología y el diseño. Empecé a trabajar con computadoras desde chico, cuando armaba mis propias PC. En la universidad estudié Comunicación Social, lo que me permitió tener un amplio conocimiento en diseño gráfico, diseño de interfaces y estrategias de comunicación. Más adelante, empecé a estudiar programación por mi cuenta, aprendiendo sobre HTML y CSS. En 2021 fui parte de la iniciativa 'Argentina Programa' donde pude aprender sobre lógicas de distintos lenguajes y en 2022 complementé mis estudios con un bootcamp intensivo de 15 semanas de duración con la empresa Radium Rocket. Allí pude incorporar conocimientos tanto en front end como en back end utilizando el stack MERN, y en diseño UX/UI consolidando mis conocimientos previos que tenia como diseñador. Pero nunca dejo de aprender cosas nuevas, siempre estoy aprendiendo! Este conocimiento puede verse reflejado en mis proyectos personales almacenados {<a id='here' href="https://github.com/fermorelli" target='_blank' rel='noreferrer'>aquí</a>} en mi repo de Github, y {<a id='here' href='https://www.behance.net/fernandomorelli' target='_blank' rel='noreferrer'>aquí</a>} en mi repo de Behance. Espero que les gusten!
                        </p>
                        <a href="#contact" className='btn btn-primary' id='btn-about'>Hablemos!</a>
                    </div>
                </div>
            </section>
        )
    }
};