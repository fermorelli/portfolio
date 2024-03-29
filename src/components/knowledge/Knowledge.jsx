import './knowledge.css';
import {BsPatchCheckFill} from 'react-icons/bs';

export const Knowledge = ({lan})=>{
    if(lan==='eng'){
        return (
            <section id='knowledge' className='knowledge'>
                <h5>What Skills I have</h5>
                <h2>My Knowledge</h2>
                <div className="container knowledge__container">
                    <div className="knowledge__frontend">
                        <h3>Frontend Development</h3>
                        <div className="knowledge__content">
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>HTML</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>CSS</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>JavaScript</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>React JS</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>WordPress</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Elementor</h4>
                            </div>
                        </div>
                    </div>
                    <div className="knowledge__tools">
                    <h3>Tools</h3>
                        <div className="knowledge__content">
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Google Analytics</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Click Up</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Firebase</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Git/Github</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Postman</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Slack</h4>
                            </div>
                        </div>
                    </div>
                    <div className="knowledge__backend">
                    <h3>Backend Development</h3>
                        <div className="knowledge__content">
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Node JS</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Express</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Mongo DB</h4>
                            </div>
                        </div>
                    </div>
                    <div className="knowledge__design">
                    <h3>Design</h3>
                        <div className="knowledge__content">
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Adobe Photoshop</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Adobe Illustrator</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Figma</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }else if(lan==='es'){
        return (
            <section id='knowledge' className='knowledge'>
                <h5>Que habilidades tengo</h5>
                <h2>Mis conocimientos</h2>
                <div className="container knowledge__container">
                    <div className="knowledge__frontend">
                        <h3>Desarrollo front end</h3>
                        <div className="knowledge__content">
                        <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>HTML</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>CSS</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>JavaScript</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>React JS</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>WordPress</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Elementor</h4>
                            </div>
                        </div>
                    </div>
                    <div className="knowledge__tools">
                    <h3>Herramientas</h3>
                        <div className="knowledge__content">
                            <div div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Google Analytics</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Click Up</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Firebase</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Git/Github</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Postman</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Slack</h4>
                            </div>
                        </div>
                    </div>
                    <div className="knowledge__backend">
                    <h3>Desarrollo backend</h3>
                        <div className="knowledge__content">
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Node JS</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Express</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Mongo DB</h4>
                            </div>
                        </div>
                    </div>
                    <div className="knowledge__design">
                    <h3>Diseño</h3>
                        <div className="knowledge__content">
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Adobe Photoshop</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Adobe Illustrator</h4>
                            </div>
                            <div className='knowledge__details'>
                                <BsPatchCheckFill className='knowledge__details-icons' />
                                <h4>Figma</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};