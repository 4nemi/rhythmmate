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
        <nav className="flex flex-between bg-beige">
            <div>
                <Link href="/home" onClick={handleStart} className="black_btn m-8">
                    <p className='text-xs'>{isStart ? 'おやすみ中' : 'スタート'}</p>
                </Link>
            </div>
            <div className="flex gap-2 gap-x-0">
                <Link href="/diary">
                    <Image
                        src="/images/book2.png"
                        alt="book icon"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </Link>
                <Link href="/graph">
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