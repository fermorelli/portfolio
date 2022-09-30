import './footer.css';
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs';

export const Footer = ()=>{
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
                <a href="https://linkedin.com"><BsLinkedin /></a>
                <a href="https://github.com"><BsGithub /></a>
                <a href="https://facebook.com"><BsFacebook /></a>
            </div>
        </footer>
    )
};