import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                src={getImageUrl("about/about-icon.png")}
                alt="girl programming on laptop"
                className={styles.aboutImg}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/user-experience.png")}
                            alt="user experience icon"
                            className={styles.aboutIcon}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>User-Focused Experience</h3>
                            <p>I have familiarity with the
                            end-user experience with responsive 
                            intuitive interfaces.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/high-performance.png")}
                            alt="high performance icon"
                            className={styles.aboutIcon}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Value High Performance </h3>
                            <p> I understand taking responsibility for 
                                delivering visually aesthetic interfaces while 
                                simultaneously valuing high performance and responsiveness.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/remote-team.png")}
                            alt="remote team icon"
                            className={styles.aboutIcon}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Virtual Team Player </h3>
                            <p> I have been known to be an instrumental 
                                team player on in-person and remote teams that 
                                value collaboration to create a unique user-focused experience.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    );
};

