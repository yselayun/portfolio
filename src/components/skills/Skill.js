import React from "react";
import "./skill.css";
import {BsPatchCheckFill} from 'react-icons/bs';
class Skill extends React.Component {
    render(){
        return (
            <section id = "skills">
                <h2>My Skills</h2>
               <div className="container skill__container">
                    <div className="skill__frontend">
                        <h3>
                            Frontend Developer
                        </h3>
                        <div className="skill__content">
                            <article className="skill-detail">
                                <BsPatchCheckFill className = "skill-detail-icon" />
                                <div>
                                    <h4>
                                        HTML
                                    </h4>
                                    <small className="text-light">3+</small>
                                </div>
                            </article>
                            <article className="skill-detail">
                                <BsPatchCheckFill className = "skill-detail-icon" />
                                <div>
                                    <h4>
                                        HTML
                                    </h4>
                                    <small className="text-light">3+</small>
                                </div>
                            </article>
                            <article className="skill-detail">
                                <BsPatchCheckFill className = "skill-detail-icon" />
                                <div>
                                    <h4>
                                        HTML
                                    </h4>
                                    <small className="text-light">3+</small>
                                </div>
                            </article>
                            <article className="skill-detail">
                                <BsPatchCheckFill className = "skill-detail-icon" />
                                <div>
                                    <h4>
                                        HTML
                                    </h4>
                                    <small className="text-light">3+</small>
                                </div>
                            </article>
                            <article className="skill-detail">
                                <BsPatchCheckFill className = "skill-detail-icon" />
                                <div>
                                    <h4>
                                        HTML
                                    </h4>
                                    <small className="text-light">3+</small>
                                </div>
                            </article>

                        </div>
                      
                    </div>
                    <div className="skill__backend">
                    <h3>
                            Backend Developer
                        </h3>
                        <div className="skill__content">
                        <article className="skill-detail">
                                <BsPatchCheckFill className = "skill-detail-icon" />
                                <div>
                                    <h4>
                                        HTML
                                    </h4>
                                    <small className="text-light">3+</small>
                                </div>
                            </article>
                            <article className="skill-detail">
                                <BsPatchCheckFill className = "skill-detail-icon" />
                                <div>
                                    <h4>
                                        HTML
                                    </h4>
                                    <small className="text-light">3+</small>
                                </div>
                            </article>
                            <article className="skill-detail">
                                <BsPatchCheckFill className = "skill-detail-icon" />
                                <div>
                                    <h4>
                                        HTML
                                    </h4>
                                    <small className="text-light">3+</small>
                                </div>
                            </article>
                            <article className="skill-detail">
                                <BsPatchCheckFill className = "skill-detail-icon" />
                                <div>
                                    <h4>
                                        HTML
                                    </h4>
                                    <small className="text-light">3+</small>
                                </div>
                            </article>

                    </div>
               </div>
            </div>
            </section>
        );
    }
}
export default Skill;