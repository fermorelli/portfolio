import './header.css';
import { CTA } from './cta';
import me from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials';

export const Header = ({lan})=>{
    if(lan==='eng'){
    return (
        <header id='h'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Fernando Morelli</h1>
                <h5 className="text-light">a web developer</h5>
                <CTA lan={'eng'}/>
                <HeaderSocials />

                <div className='me'>
                    <img src={me} alt="profile pic" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )}else if(lan==='es'){
        return (
            <header id='h'>
                <div className="container header__container">
                    <h5>Hola, mi nombre es</h5>
                    <h1>Fernando Morelli</h1>
                    <h5 className="text-light">y soy desarrollador web</h5>
                    <CTA lan={'es'}/>
                    <HeaderSocials />
    
                    <div className='me'>
                        <img src={me} alt="profile pic" />
                    </div>
    
                    <a href="#contact" className='scroll__down'>Desliza hacia abajo</a>
                </div>
            </header>
        ) 
    }
};