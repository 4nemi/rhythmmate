"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const namesetting = () => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    };

    return (
        <section className="min-h-screen flex flex-center flex-col bg-beige">
            <h2 className="text-lg text-center mt-10">あなたの相棒</h2>
            <Image
                    src="/images/dolphin/dolphin1.png"
                    alt="Your Partner"
                    width={450}
                    height={450}
                    className="object-contain m-5"
            /> 
            <div className="flex">
                <p className="text-center mx-3">
                    なまえをつける
                </p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" value={name} onChange={handleChange} className="w-32 h-6"/>
                    </label>
                </form>
            </div>
            <Link href="/home" className="black_btn m-5">
                はじめる
            </Link>
        </section>
    )
}

export default namesetting