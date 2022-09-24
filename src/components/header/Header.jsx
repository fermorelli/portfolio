import './header.module.css';
import { CTA } from './cta';

export const Header = ()=>{
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Fernando Morelli</h1>
                <h5 className="text-light">a front end trainee developer</h5>
                <CTA />

                <div className='me'>
                    <img src="" alt="" />
                </div>
            </div>
        </header>
    )
};