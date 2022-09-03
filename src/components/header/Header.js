import React from "react";
import "./header.css";
import CV from "../..//assets/files/MyCV.pdf";
import ME from "../..//assets/images/1.jpg";
import { HeaderSocial } from "./HeaderSocial";
class Header extends React.Component {
    render(){
        return(
            
                <header id="header">
                    <div className="container header__container ">
                        <h5>Hello I'm</h5>
                        <h1>Y Sel Ayun</h1>
                        <h5 className="text-light">
                            Fullstack Developer
                        </h5>
                        <div className="cta">
                            <a href={CV} download className="btn">Download CV</a>
                            <a href="#contact" className="btn btn-primary">Let's Talk</a>
                        </div>
                        <HeaderSocial/>
                        <div >
                            <img className="me" src={ME} alt="me" ></img>
                        </div>
                        <a href="#contact" className="scroll__down">Scroll Down</a>
                        
                    </div>   
                </header>
        
        );
    }

}

export default Header;