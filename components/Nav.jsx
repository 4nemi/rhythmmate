"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Nav = () => {
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/namesetting" className="flex gap-2 flex-center">
                <Image
                    src="/images/setting2.png"
                    alt="home icon"
                    width={80}
                    height={80}
                    className="object-contain"
                />
                <p className="logo_text">RhythmMate</p>
            </Link>
        </nav>
    )
}

export default Nav;