import './knowledge.css';
import {BsPatchCheckFill} from 'react-icons/bs';

export const Knowledge = ()=>{
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
            </div>
        </section>
    )
};