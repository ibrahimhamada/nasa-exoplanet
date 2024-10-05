'use client';
import React from 'react';

import { useThemeContext } from '../contexts/themeContext';
import styles from './Footer.module.scss';

const Footer = () => {
    const { theme } = useThemeContext();
    if (!theme) {
        console.error('Theme context not provided');
        return null;
    }
    return (
        <>
            <div className={styles.poweredWrapper}>
                powered by: ExoVision
            </div>
        </>
    );
};

export default Footer;
