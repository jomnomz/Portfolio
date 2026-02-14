import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './contact.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import keyCaps1 from '../../../assets/keyCaps1.png'
import keyCaps2 from '../../../assets/keyCaps2.png'
import keyCaps3 from '../../../assets/keyCaps3.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';
import catLogo from '../../../assets/catLogo.png'

export default function Contact(){
    const [isFooterVisible, setIsFooterVisible] = useState(false)

    const handleEmailClick = () => {
        window.location.href = 'mailto:jomeorenzdelacruz@gmail.com';
    }

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/jomeorenzdelacruz', '_blank');
    }

    const handleGitHubClick = () => {
        window.open('https://github.com/jomnomz', '_blank');
    }

    return(
        <div className={styles.mainContainer}>

            <motion.div 
                className={styles.headerTitle}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                >
                Let's Connect!
            </motion.div>

            <div className={styles.imgAndIconSectionContainer}>
                <motion.div 
                    className={styles.imgAndIconContainer}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        ease: "easeOut",
                        delay: 0.2
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    onClick={handleEmailClick}
                    style={{ cursor: 'pointer' }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                >
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={keyCaps1} alt="" />
                    </div>
                    <div className={styles.icon}>
                        <AlternateEmailIcon fontSize='large'/>
                    </div>
                </motion.div>

                <motion.div 
                    className={styles.imgAndIconContainer}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        ease: "easeOut",
                        delay: 0.4
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    onClick={handleLinkedInClick}
                    style={{ cursor: 'pointer' }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                >
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={keyCaps2} alt="" />
                    </div>
                    <div className={styles.icon}>
                        <LinkedInIcon fontSize='large'/>
                    </div>
                </motion.div>
                
                <motion.div 
                    className={styles.imgAndIconContainer}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        ease: "easeOut",
                        delay: 0.6
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    onViewportEnter={() => setIsFooterVisible(true)}
                    onViewportLeave={() => setIsFooterVisible(false)}
                    onClick={handleGitHubClick}
                    style={{ cursor: 'pointer' }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                >
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={keyCaps3} alt="" />
                    </div>
                    <div className={styles.icon}> 
                        <GitHubIcon fontSize='large'/>
                    </div>
                </motion.div>
            </div>

            <motion.div 
    className={styles.footer}
    initial={{ opacity: 0 }}
    animate={isFooterVisible ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 0.6, delay: isFooterVisible ? 0.5 : 0 }}
>
            <div className={styles.text}> 
                Copyright <CopyrightIcon 
                    sx={{ 
                        marginBottom: {
                            xs: '-1.8px',
                            sm: '-8px',
                            md: '-0px',
                            lg: '-3px'
                        },
                        fontSize: { 
                            xs: '0.8rem',    
                            sm: '2.5rem', 
                            md: '3rem',    
                            lg: '1rem'  
                        } 
                    }}
                ></CopyrightIcon> jomeorenz 2026. All rights reserved.
            </div>
        </motion.div>
        </div>
    )
}