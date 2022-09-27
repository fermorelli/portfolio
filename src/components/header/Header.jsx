import './header.css';
import { CTA } from './cta';
import me from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials';

export const Header = ()=>{
    return (
        <header id='h'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Fernando Morelli</h1>
                <h5 className="text-light">a front end trainee developer</h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={me} alt="profile pic" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
};