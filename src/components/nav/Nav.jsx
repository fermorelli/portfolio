import styles from './nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineMail} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs'
import {RiSuitcaseLine} from 'react-icons/ri'
import { useState } from 'react';

export const Nav = ()=>{
    const [activeNav, setActiveNav] = useState('#h');
    return (
        <nav className={styles.nav}>
            <a href="#h" onClick={()=> setActiveNav('#h')} className={activeNav==='#h' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav==='#projects' ? 'active' : ''}><RiSuitcaseLine/></a>
            <a href="#knowledge" onClick={()=> setActiveNav('#knowledge')} className={activeNav==='#knowledge' ? 'active' : ''}><BsBook/></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiOutlineMail/></a>
        </nav>
    )
};