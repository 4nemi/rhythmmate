"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const pageTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/explain');
        }, 4000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <motion.div
            className="min-h-screen bg-primary-cyan flex items-center justify-center m-0 p-0 box-border"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageTransition}
        >
            <div className="text-center">
            <Image
                src="/images/logo.png"
                alt="RhythmMate Logo"
                width={400}
                height={400}
                className="object-contain p-2"
            />
            <p className="mt-4">
                <span className="text-2xl text-white">Rhythm</span>
                <span className="text-2xl text-red-500">Mate</span>
            </p>
            </div>
        </motion.div>
    )
}

export default Home