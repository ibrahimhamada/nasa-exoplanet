'use client'; // Ensure this is a client component

import React from 'react';

import Link from 'next/link';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './NavItems.module.scss';



const NavItems: React.FC = () => {
    const links = [
        { name: 'Explore', url: '/' },
        { name: 'About', url: '/articles' },
        { name: 'Contact', url: '/portfolio' },
        // { name: 'About', url: '/about' },
        // { name: 'Contact', url: '/contact' }
      ];
    
    return (
        <div className={styles.container}>
            {links.map((link, index) => (
                <Link
                    href={link.url}
                    key={index}
                    className={`${styles.title}`}
                    // onClick={() => setSelectedIndex(index)}
                    >
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

export default NavItems;
