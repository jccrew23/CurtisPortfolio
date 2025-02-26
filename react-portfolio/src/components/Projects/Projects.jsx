import React from "react";
import profProjects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                    profProjects.map((project, id) => {
                        return (
                            <div className={styles.cardContainer} key={id}>
                                <img 
                                    src={getImageUrl(project.imgSrc)}
                                    alt={`Image of ${project.title}`} 
                                    className={styles.image}
                                />
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <ul className={styles.skills}>
                                    {
                                        project.skills.map((skill, id) => {
                                            return (
                                                <li className={styles.skill} key={id}>{skill}</li>
                                            );
                                        })
                                    }
                                </ul>
                                <div className={styles.links}>
                                    <a href={project.demo} className={styles.link}>Demo</a>
                                    <a href={project.source} className={styles.link}>Source</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}
