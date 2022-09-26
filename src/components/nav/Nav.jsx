import styles from './nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineMail} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs'
import {RiSuitcaseLine} from 'react-icons/ri'
// import { useState } from 'react';

export const Nav = ()=>{
    // const [activeNav, setActiveNav] = useState('');
    return (
        <nav className={styles.nav}>
            <a href="#home"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#projects"><RiSuitcaseLine/></a>
            <a href="#knowledge"><BsBook/></a>
            <a href="#contact"><AiOutlineMail/></a>
        </nav>
    )
};