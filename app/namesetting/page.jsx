"use client";

import Link from 'next/link';
import Image from 'next/image';

const namesetting = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="text-lg text-center mt-10">あなたの相棒</h1>
            <Image
                    src="/images/dolphin1.jpg"
                    alt="Your Partner"
                    width={450}
                    height={450}
                    className="object-contain m-10"
            /> 
            <p className="text-center m-2">
                名前をつける
            </p>
            <Link href="/home" className="black_btn">
                はじめる
            </Link>
        </section>
    )
}

export default namesetting