'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { poppins } from '_core/styles/fonts';
import styles from './Header.module.scss';
import ThemeSwitcher from './ThemeSwitcher';
import NavItems from './NavItems';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [, setSelectedIndex] = useState<number | null>(null);

    const resetSelectedIndex = () => setSelectedIndex(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust the scroll value as needed
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={clsx(styles.container, { [styles.scrolled]: isScrolled })}>
            <div className={styles.ctr}>
                <Link href="/" onClick={resetSelectedIndex}>
                    <h1 className={clsx(poppins.className, styles.header)}>EXOVISION</h1>
                </Link>
                <div className={styles.themeSwitcher}>
                    <ThemeSwitcher />
                </div>
            </div>
            <div className={styles.navContainer}>
                <NavItems />
            </div>
        </div>
    );
};

export default Header;
