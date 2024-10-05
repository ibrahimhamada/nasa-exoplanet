'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { poppins } from '_core/styles/fonts';
import styles from './DemoTile.module.scss';
import ReactPlayer from 'react-player';

type TDemoData = {
    title: string;
    video: string;
};

type TTileProps = {
    data: TDemoData;
    margin?: string;
    maxWidth?: string;
};

const DemoTile: React.FC<TTileProps> = ({ data, margin, maxWidth }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id={data.title}>
            <motion.div
                style={{ marginTop: margin, maxWidth: maxWidth }}
                className={styles.container}
                initial={{
                    background: 'var(--color-primary-gradient-200)',
                    border: '1px solid var(--color-primary-gradient-200)',
                }}
                animate={{
                    background: 'var(--color-primary-gradient-200)',
                    border: '1px solid var(--color-primary-gradient-200)',
                }}
                whileHover={{
                    scale: 1.05,
                    background: 'var(--color-primary-gradient-300)',
                    border: '1px solid var(--color-primary-gradient-300)',
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                transition={{
                    scale: { duration: 0.5, ease: 'easeInOut' },
                    background: { delay: 0.1, duration: 0.7, ease: 'easeInOut' },
                    border: { delay: 0.1, duration: 0.7, ease: 'easeInOut' },
                }}
            >
                <motion.div
                    className={styles.innerContainer}
                    initial={{
                        background: 'var(--color-primary-gradient-100)',
                    }}
                    animate={{
                        background: 'var(--color-primary-gradient-100)',
                    }}
                    whileHover={{
                        background: 'var(--color-primary-gradient-300)',
                        border: '1px solid var(--color-primary-gradient-300)',
                    }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                >
                    <motion.h2
                        className={clsx(poppins.className, styles.title)}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        {data.title}
                    </motion.h2>

                    {/* Video Element */}
                    <ReactPlayer   
                        className={styles.video}
                        url={data.video}
                        controls  
                        aspectRatio="16:9" 
                        width={'100%'}           
                    />
                <motion.button
                    className={styles['know-more']}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2 , color: 'var(--color-main-100)', borderColor: 'var(--color-main-100)' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}   
                    onClick={() => window.open(`https://github.com/KareemMAX/LastMan/releases`)}      
                >       
                    <p className={styles.btn}>Try the game yourself</p>
                </motion.button>
                </motion.div>

                
            </motion.div>
        </section>
    );
};

export default DemoTile;
