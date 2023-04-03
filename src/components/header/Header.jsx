import './header.css';
import { CTA } from './cta';
import { HeaderSocials } from './HeaderSocials';

export const Header = ({lan})=>{
    if(lan==='eng'){
    return (
        <header id='h'>
            <div className="container header__container">
                <div className="header">
                    <h3>Hello I'm</h3>
                    <h1>Fernando Morelli</h1>
                    <h3 className="text-light">a web developer & designer</h3>
                </div>
                <HeaderSocials />
                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>
            <CTA lan={'eng'}/>
        </header>
    )}else if(lan==='es'){
        return (
            <header id='h'>
                <div className="container header__container">
                    <div className="header">
                        <h3>Hola, soy</h3>
                        <h1>Fernando Morelli</h1>
                        <h3 className="text-light">un desarrollador y diseñador web</h3>
                    </div>
                    <HeaderSocials />
                    <a href="#contact" className='scroll__down'>Desliza hacia abajo</a>
                </div>
                <CTA lan={'es'}/>
            </header>
        )
    }
};