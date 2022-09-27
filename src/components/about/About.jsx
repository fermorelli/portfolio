import styles from './about.css';
import me from '../../assets/me2.jpeg';
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam, officiis magni labore nisi cupiditate aut nobis, voluptate quisquam numquam officia dolor omnis animi blanditiis saepe ducimus itaque ipsam similique?
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    )
};