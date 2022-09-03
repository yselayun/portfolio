import React from "react";
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer__logo">
                <a href="#header">Y Sel Ayun</a>
                </div>
                

                <ul className="footer__permalinks">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer__socials">
                    <a href="https://facebook.com" target="blank"><FaFacebookF/></a>
                    <a href="https://facebook.com" target="blank"><BsInstagram/></a>
                    <a href="https://facebook.com" target="blank"><BsTwitter/></a>
                </div>
            </footer>
        );
    }
}

export default Footer;