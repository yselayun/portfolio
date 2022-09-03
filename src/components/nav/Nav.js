import React from "react";
import "./nav.css";
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {AiOutlineProject} from 'react-icons/ai';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from "react";
const Nav = () => {
        const [activeNav, setActiveNav] = useState('#header');
        return (
           <nav>
                <a href="#header" onClick={() => setActiveNav('#header')} className={ activeNav === '#header' ? 'active' : ''} ><AiOutlineHome/></a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
                <a href="#skills" onClick={() => setActiveNav('#skills')} className={ activeNav === '#skills' ? 'active' : ''}><BiBook/></a>
                <a href="#project" onClick={() => setActiveNav('#project')} className={ activeNav === '#project' ? 'active' : ''}><AiOutlineProject/></a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
           </nav>
        );
    }
export default Nav;