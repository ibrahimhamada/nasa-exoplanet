'use client';
import React from 'react';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{
                    opacity: 0,
                    x: 100,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                exit={{
                    opacity: 0,
                    x: -100,
                }}
                transition={{
                    duration: 1,
                    ease: 'easeOut',
                }}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedWrapper;
