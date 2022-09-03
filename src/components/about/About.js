import React from "react";
import './about.css';
import AboutMe from '../../assets/images/2.jpg';
class About extends React.Component {
    render(){
        return (
            <section id="about">
               <h5>Get to know</h5>
               <h2>
                About Me
               </h2>

               <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={AboutMe} alt="about me" />
                    </div>
                </div>
                <div className="about__content">
                    <p>
                    Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
                
               </div>
            </section>
        );
    }
}

export default About;
