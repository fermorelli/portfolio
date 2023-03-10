import './footer.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {ImBehance2} from 'react-icons/im';

export const Footer = ({lan})=>{

    if(lan==='eng'){
        return (
            <footer className='footer'>
                <a href="#h" className='footer__logo'>Fernando Morelli</a>
                <ul className='permalinks'>
                    <li><a href="#h">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#knowledge">Knowledge</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/fer-morelli/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
                    <a href="https://github.com/fermorelli" target='_blank' rel='noreferrer'><BsGithub /></a>
                    <a href="https://www.behance.net/fernandomorelli" target='_blank' rel='noreferrer'><ImBehance2 /></a>
                </div>
            </footer>
        )
    } else if(lan==='es'){
        return (
            <footer className='footer'>
                <a href="#h" className='footer__logo'>Fernando Morelli</a>
                <ul className='permalinks'>
                    <li><a href="#h">Home</a></li>
                    <li><a href="#about">Acerca de mí</a></li>
                    <li><a href="#knowledge">Conocimientos</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/fer-morelli/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
                    <a href="https://github.com/fermorelli" target='_blank' rel='noreferrer'><BsGithub /></a>
                    <a href="https://www.behance.net/fernandomorelli" target='_blank' rel='noreferrer'><ImBehance2 /></a>
                </div>
            </footer>
        )
    }
};