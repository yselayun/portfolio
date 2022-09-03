import React from "react";
import "./project.css";
import IMG1 from '../../assets/images/portfolio1.jpg';
import IMG2 from '../../assets/images/portfolio2.jpg';
import IMG3 from '../../assets/images/portfolio3.jpg';
import IMG4 from '../../assets/images/portfolio4.jpg';
import IMG5 from '../../assets/images/portfolio5.png';
import IMG6 from '../../assets/images/portfolio6.jpg';
class Project extends React.Component {
    render(){
        const data = [
            {
                id: 1,
                image: IMG1,
                title: "project 1",
                github: "https://github.com",
                demon: "https://github.com"
            },
            {
                id: 2,
                image: IMG2,
                title: "project 2",
                github: "https://github.com",
                demon: "https://github.com"
            },
            {
                id: 3,
                image: IMG3,
                title: "project 3",
                github: "https://github.com",
                demon: "https://github.com"
            },
            {
                id: 4,
                image: IMG4,
                title: "project 4",
                github: "https://github.com",
                demon: "https://github.com"
            },
            {
                id: 5,
                image: IMG5,
                title: "project 5",
                github: "https://github.com",
                demon: "https://github.com"
            },
            {
                id: 6,
                image: IMG6,
                title: "project 6",
                github: "https://github.com",
                demon: "https://github.com"
            }

        ];
        return (
            <section id="project">
                <h2>My Projects</h2>
                <div className="container project__container">
                    {
                        data.map(({id, image, title, github, demon}) => {
                            return (
                                <article key={id} className="project__item">
                                    <div className="project__item-image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <h3>{title}</h3>
                                    <div className="project__item-cta">
                                        <a href={github} className="btn">Github</a>
                                        <a href={demon} className="btn btn-primary">Live Demo</a>
                                    </div>
                                </article>
                            )
                        }) 
                        
                        
                    }
                </div>
            </section>
        );
    }
}
export default Project;