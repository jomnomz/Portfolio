import { useState } from 'react'
import styles from './about.module.css'
import IdCard from '../../objects/idCard/idCard'
import { motion } from "framer-motion";

export default function About() {
    const [isCardVisible, setIsCardVisible] = useState(false)

    return(
        <div className={styles.mainContainer}>
            <div className={styles.aboutContainer}>
                
                <motion.div
                    className={styles.titleContainer}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Hi! My name is <br /> 
                    <span className={styles.bold}>Jomeo Renz Dela Cruz.</span>
                </motion.div>

                <motion.div
                    className={styles.descriptionContainer}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    onViewportEnter={() => setIsCardVisible(true)}
                    onViewportLeave={() => setIsCardVisible(false)}
                >
                    I am a 21-year-old student currently pursuing BSIT at <a href="https://www.pup.edu.ph/" target='blank' rel='noopener noreferrer' className={styles.link}>Polytechnic University of the Philippines</a>.
                    I'm an aspiring full-stack developer with familiarity on building web applications
                    and I am strongly interested in branching out more in other areas of software development.
                </motion.div>

            </div>

            <div className={styles.cardContainer}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isCardVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isCardVisible ? 1.0 : 0 }}
                >
                    <IdCard />
                </motion.div>
            </div>
        </div>
    )
}