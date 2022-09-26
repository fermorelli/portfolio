import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs';

export const HeaderSocials = () =>{
    return(
        <div className="header__socials">
            <a href="https://linkedin.com"><BsLinkedin /></a>
            <a href="https://github.com"><BsGithub /></a>
            <a href="https://facebook.com"><BsFacebook /></a>
        </div>
    )
}