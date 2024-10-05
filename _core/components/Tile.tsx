'use client';

import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import clsx from 'clsx';

import { poppins, inter } from '_core/styles/fonts';

import styles from './Tile.module.scss';

type TPageData = {
    title: string;
    desc: string | JSX.Element;
};

type TTileProps = {
    data: TPageData; // Define that the component receives a prop called 'data' of type TPageData
    margin?: string;
    maxWidth?: string;
};

const Tile: React.FC<TTileProps> = ({ data, margin, maxWidth }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id={data.title}>
        <motion.div
            style={{marginTop: margin, maxWidth: maxWidth}}
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
            }}>
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
                {/* <TileImage data={data} /> */}
                <motion.h2
                    className={clsx(poppins.className, styles.title)}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}>
                    {data.title}
                </motion.h2>
                <motion.p
                    className={clsx(inter.className, styles.description)}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}>
                    {data.desc}
                </motion.p>
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
        </motion.div>
        </section>
    );
};

export default Tile;
