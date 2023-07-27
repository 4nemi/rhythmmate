"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const UnderNav = () => {
    const [isStart, setIsStart] = useState(false);

    const handleStart = () => {
        setIsStart((prev) => !prev);
    };

    return (
        <nav className="flex justify-between w-full p-0 bg-beige">
            <div>
                <Link href="/home" onClick={handleStart} className="black_btn m-10">
                    {isStart ? 'おやすみちゅう' : 'スタート'}
                </Link>
            </div>
            <div className="flex gap-2">
                <Link href="/namesetting" className="flex-center">
                    <Image
                        src="/images/book2.png"
                        alt="book icon"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </Link>
                <Link href="/namesetting" className="flex-center">
                    <Image
                        src="/images/graph2.png"
                        alt="graph icon"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </Link>
            </div>
        </nav>
    )
}

export default UnderNav;