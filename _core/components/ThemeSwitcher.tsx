/* eslint-disable import/order */
'use client';

import React, { useCallback } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { useThemeContext } from '../contexts/themeContext';

// import icons from '/assets/icons';

import moonGreyIcon from '_core/assets/moon-grey-icon.svg';
import moonYellowBlackIcon from '_core/assets/moon-yellow-black-icon.svg';
import sunBlueWhiteIcon from '_core/assets/sun-blue-white-icon.svg';
import sunGreyIcon from '_core/assets/sun-grey-icon.svg';

import Image from 'next/image';

import { ETheme } from '_core/constants/theme';
import styles from './ThemeSwitcher.module.scss';
const ThemeSwitcher = () => {
    const { theme, setTheme } = useThemeContext();

    const handleOnClick = useCallback(
        (newTheme: ETheme) => () => {
            setTheme(newTheme);
        },
        [theme],
    );

    return (
        <motion.div className={clsx(styles.container)}>
            <>
                <motion.button
                    animate={{
                        opacity: theme === ETheme.Light ? 1 : 0.3,
                        scale: theme === ETheme.Light ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                    className={clsx(styles.button, {
                        [styles.active]: theme === ETheme.Light,
                    })}
                    onClick={handleOnClick(ETheme.Light)}>
                    <motion.div animate={{ rotate: theme === ETheme.Light ? 360 : 0 }} transition={{ duration: 0.5 }}>
                        <Image src={theme === ETheme.Light ? sunBlueWhiteIcon : sunGreyIcon} alt="Light-theme-switch" />
                    </motion.div>
                </motion.button>
                <motion.button
                    animate={{
                        opacity: theme === ETheme.Dark ? 1 : 0.3,
                        scale: theme === ETheme.Dark ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                    className={clsx(styles.button, {
                        [styles.active]: theme === ETheme.Dark,
                    })}
                    onClick={handleOnClick(ETheme.Dark)}>
                    <motion.div animate={{ rotate: theme === ETheme.Dark ? 360 : 0 }} transition={{ duration: 0.5 }}>
                        <Image
                            src={theme === ETheme.Light ? moonGreyIcon : moonYellowBlackIcon}
                            alt="Dark-theme-switch"
                        />
                    </motion.div>
                </motion.button>
            </>
        </motion.div>
    );
};

export default ThemeSwitcher;
