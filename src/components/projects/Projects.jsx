/* eslint-disable react/jsx-no-target-blank */
import './projects.module.css';

export const Projects = ()=>{
    return (
        <section id='projects' className='projects'>
            <h5>My recent work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <h3>This is a portfolio item title</h3>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" target='_blank' className='btn btn-primary'>Deploy</a>
                    </div>
                </article>
            </div>
        </section>
    )
};