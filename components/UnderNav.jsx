"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const UnderNav = () => {
    return (
        <nav className="flex-between w-full p-10">
            <Link href="/home" className="black_btn m-4">
                スタート
            </Link>
            <Link href="/namesetting" className="flex gap-2 flex-center">
                <Image
                    src="/images/book2.png"
                    alt="book icon"
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </Link>
            <Link href="/namesetting" className="flex gap-2 flex-center">
                <Image
                    src="/images/graph2.png"
                    alt="graph icon"
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </Link>
        </nav>
    )
}

export default UnderNav;