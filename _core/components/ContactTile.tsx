'use client';

import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import clsx from 'clsx';

import { poppins } from '_core/styles/fonts';

import styles from './ContactTile.module.scss';
import Image from 'next/image';

type TContactData = {
    name: string;
    email: string;
    linkedin: string;
    img: string;
};

type TTileProps = {
    data: TContactData;
    margin?: string;
    maxWidth?: string;
};

const ContactTile: React.FC<TTileProps> = ({ data, margin, maxWidth }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id={data.name}>
        <div
            style={{marginTop: margin, maxWidth: maxWidth}}
            className={styles.container}
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
                transition={{ duration: 0.7, ease: 'easeInOut' }}>
                <motion.div
                    className={styles.img}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <Image src={data.img} alt="Tile image" layout="fill" objectFit="cover" style={{borderRadius:'16px'}}/>
                </motion.div>
                <div className={styles.nameImgCtr}>
                <motion.h2
                    className={clsx(poppins.className, styles.title)}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}>
                    {data.name}
                </motion.h2>

                <div className={styles.imgCtr}>
                <motion.button
                    className={styles.img2}                    
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}   
                    onClick={() => window.open(`mailto:${data.email}`)}             
                >
                    <Image src={require('_core/assets/gmail.svg')} alt="Tile image" layout="fill" objectFit="cover" style={{borderRadius:'4px'}}/>
                </motion.button>
                
                <motion.button
                    className={styles.img2}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.3}}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={() => window.open(data.linkedin, "_blank")}
                >
                    <Image src={require('_core/assets/linkedin.png')} alt="Tile image" layout="fill" objectFit="cover" style={{borderRadius:'4px'}}/>
                </motion.button>
                </div>
                </div>
                {/* <motion.p
                    className={clsx(inter.className, styles.description)}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}>
                    {data.desc}
                </motion.p> */}
                {/* <motion.div
                    className={styles['know-more']}
                    animate={{
                        color: isHovered ? 'var(--color-main-100)' : 'var(--color-secondary-600)',
                        borderColor: isHovered ? 'var(--color-main-100)' : 'var(--color-primary-300)',
                    }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}>
                    <p>Explore</p>
                    <img src={chevronIcon} alt="arrow-right" loading="lazy" className={styles.lightChevron} />
                </motion.div> */}
            </motion.div>
        </div>
        </section>
    );
};

export default ContactTile;
