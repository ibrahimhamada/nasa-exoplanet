'use client';
import React from 'react';

// import Image from 'next/image';

import { useThemeContext } from '../contexts/themeContext';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Footer.module.scss';


// import icons from '@/assets/icons';


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
                {/* <Image className={styles.noonLogo} src={icons.noonLogo} width={25} height={25} alt="poweredbynoon" /> */}
            </div>
        </>
    );
};

export default Footer;
