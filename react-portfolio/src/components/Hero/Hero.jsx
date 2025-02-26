import React from 'react';

import styles from './hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jalielle!</h1>
            <p className={styles.description}>I am a dedicated professional with education and experience in full stack software
            development. I would love to hear from you!
            </p>
            <a href="mailto:jalielle@icloud.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img 
            src={getImageUrl("hero/heroImg-t.png")} 
            alt="hero image of me" 
            className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    );
};

