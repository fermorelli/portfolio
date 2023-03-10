import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {ImBehance2} from 'react-icons/im';

export const HeaderSocials = () =>{
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/fer-morelli/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
            <a href="https://github.com/fermorelli" target='_blank' rel='noreferrer'><BsGithub /></a>
            <a href="https://www.behance.net/fernandomorelli" target='_blank' rel='noreferrer'><ImBehance2 /></a>
        </div>
    )
}