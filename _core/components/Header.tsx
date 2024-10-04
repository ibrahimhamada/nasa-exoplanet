'use client';

import React, { useState } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { poppins } from '_core/styles/fonts';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './Header.module.scss';
import ThemeSwitcher from './ThemeSwitcher';
import NavItems from './NavItems';


const Header = () => {
    const [, setSelectedIndex] = useState<number | null>(null);

    const resetSelectedIndex = () => setSelectedIndex(null);

    return (
        <div className={styles.container}>
            <Link href="/" onClick={resetSelectedIndex}>
                <h1 className={clsx(poppins.className, styles.header)}>EXOVISION</h1>
            </Link>
            <div className={styles.themeSwitcher}>
                <ThemeSwitcher />
            </div>
            <div className={styles.navContainer}>
                <NavItems />
            </div>
            
            
        </div>
    );
};

export default Header;
