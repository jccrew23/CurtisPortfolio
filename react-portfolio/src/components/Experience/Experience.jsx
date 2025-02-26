import React from "react";

import skills from "../../data/skills.json";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience and Education</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img 
                                        src={getImageUrl(skill.imgSrc)} 
                                        alt={skill.name} 
                                    />
                                </div>
                                <p>{skill.title}</p>
                            </div>

                        )
                    })}
                </div>
                <ul className={styles.education}>
                    {
                        education.map((education, id) => {
                            return (
                                <li key={id} className={styles.educationItem}>
                                    <img 
                                        src={getImageUrl(education.logoSrc)} 
                                        alt={`${education.schoolName} logo`}
                                    />
                                    <div className={styles.educationDetails}>
                                        <h3>{`${education.major} | ${education.degree}`}</h3>
                                        <p>{education.schoolName}</p>
                                        <p className={styles.educationDate}>{education.completionDate}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
    
}