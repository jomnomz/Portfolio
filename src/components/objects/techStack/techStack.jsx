import { motion } from 'framer-motion'
import styles from './techStack.module.css'
import css from '../../../assets/css.png'
import HTML from '../../../assets/HTML.png'
import javaScript from '../../../assets/javaScript.png'
import react from '../../../assets/react.svg'
import nodeJs from '../../../assets/nodeJs.png'
import node from '../../../assets/node.png'
import expressJs from '../../../assets/expressJs.png'
import supabase from '../../../assets/supabase.png'

export default function TechStack({ scrollProgress }) {
    const techStack = [
        { name: 'React/React Native', color: '#6A7D93', icon: react },
        { name: 'Node.js', color: '#A8C5B4', icon: node },
        { name: 'Express', color: '#9BA5AB', icon: expressJs },
        { name: 'Supabase', color: '#607F83', icon: supabase },
        { name: 'JavaScript', color: '#CFCDA2', icon: javaScript },
        { name: 'HTML', color: '#BFA18A', icon: HTML },
        { name: 'CSS', color: '#91ACC8', icon: css },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.bookStack}>
                {techStack.map((tech, index) => {
                    const isBottomBook = index === 0;
                    return (
                        <motion.div 
                            key={index} 
                            className={styles.book}
                            style={{
                                backgroundColor: tech.color,
                                zIndex: index + 1,
                                position: 'relative'
                            }}
                            initial={{ 
                                x: 200,
                                opacity: 0 
                            }}
                            whileInView={{ 
                                x: 0,
                                opacity: 1,
                                rotate: Math.random() * 3 - 1.5
                            }}
                            transition={{ 
                                duration: 0.3, 
                                delay: index * 0.08,
                                ease: "easeOut" 
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className={styles.bookSpine}>
                                <div className={styles.bookTop}></div>
                                <div className={styles.bookContent}>
                                    <div className={styles.bookIcon}>
                                        {typeof tech.icon === 'string' && tech.icon.length > 2 ? (
                                            <img src={tech.icon} alt={tech.name} />
                                        ) : (
                                            tech.icon
                                        )}
                                    </div>
                                    <div className={styles.bookName}>{tech.name}</div>
                                </div>
                                <div className={styles.bookBottom}></div>
                            </div>
                            <div className={styles.bookPages}></div>
                            <div className={styles.bookShadow}></div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}