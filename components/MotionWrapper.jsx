"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function MotionWrapper({ children }) {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathName}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}