import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs';

export const HeaderSocials = () =>{
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/fer-morelli/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
            <a href="https://github.com/fermorelli" target='_blank' rel='noreferrer'><BsGithub /></a>
            <a href="https://www.facebook.com/ilcosme18" target='_blank' rel='noreferrer'><BsFacebook /></a>
        </div>
    )
}