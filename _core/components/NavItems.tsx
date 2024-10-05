'use client'; // Ensure this is a client component

import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './NavItems.module.scss';

const NavItems: React.FC = () => {
    const links = [
        { name: 'Explore', id: 'Explore Exovision' },
        { name: 'About', id: 'About' },
        { name: 'Contact', id: 'Contact' },
        { name: 'Demo', id: 'Demo' },

    ];

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.container}>
            {links.map((link, index) => (
                <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className={styles.title}
                >
                    {link.name}
                </button>
            ))}
        </div>
    );
};

export default NavItems;
