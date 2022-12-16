import styles from './about.css';
import me from '../../assets/me4.jpg';
import {FaCode, FaTools} from 'react-icons/fa';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';

export const About = ()=>{
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
                            <small>HTML, CSS, JavaScript, React, NodeJS, Express</small>
                        </article>
                        <article className='about__card'>
                            <FaTools className='about_icon'/>
                            <h5>Tools</h5>
                            <small>Mongo DB, Firebase, Postman, Figma, Slack, Photoshop</small>
                        </article>
                        <article className='about__card'>
                            <AiOutlineFundProjectionScreen className='about_icon'/>
                            <h5>Projects</h5>
                            <small>Lots of projects to checkout on my personal github repo</small>
                        </article>
                    </div>
                    <p>
                        I'm a front end programmer very passionate about technology and design. I started working with computers when I was still a child building my first PC. Then in college I studied design and communication, which allowed me to have a vast knowledge of marketing and communication strategies, and started studying programming on my own. Then I was part of the 'Argentina Programa' initiative and I finished complementing my studies through an intensive 15-week bootcamp with the Radium Rocket company, where I was able to incorporate very extensive knowledge both in front and back end. But I never stop learning new things, I'm always learning! This knowledge can be seen reflected in my projects stored here in my repo. I hope you like them!
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    )
};