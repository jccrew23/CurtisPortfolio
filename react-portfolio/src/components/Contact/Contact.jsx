import React, { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [showDialog, setShowDialog] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        setShowDialog(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form inputs
    };

    return (
        <footer className={styles.contactFooter} id="contact">
            <section className={styles.contactSection}>
                <h2 className={styles.title}>Contact Me</h2>
                <div className={styles.formSection}>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.nameGroup}>
                            <label htmlFor="name" className={styles.nameLabel}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles.nameInput}
                            />
                        </div>
                        <div className={styles.emailGroup}>
                            <label htmlFor="email" className={styles.emailLabel}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.emailInput}
                            />
                        </div>
                        <div className={styles.messageGroup}>
                            <label htmlFor="message" className={styles.messageLabel}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className={styles.messageArea}
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.formSubmit}>Send</button>
                    </form>
                </div>
            </section>

            {/* Dialog Box */}
            {showDialog && (
                <div className={styles.dialogOverlay}>
                    <div className={styles.dialogBox}>
                        <p>Thanks for your message! Looking forward to talking with you soon!</p>
                        <button onClick={() => setShowDialog(false)} className={styles.dialogButton}>OK</button>
                    </div>
                </div>
            )}
        </footer>
    );
};


