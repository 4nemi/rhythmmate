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
        <section className="w-full flex-center flex-col">
            <h1 className="text-lg text-center mt-3">あなたの相棒</h1>
            <Image
                    src="/images/dolphin/dolphin1.jpg"
                    alt="Your Partner"
                    width={450}
                    height={450}
                    className="object-contain m-5"
            /> 
            <p className="text-center m-2">
                名前をつける
            </p>
            <div className="flex-center">
            <form onSubmit={handleSubmit}>
                <label>
                    なまえ:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <input type="submit" value="確定" />
            </form>
            </div>
            <Link href="/home" className="black_btn m-5">
                はじめる
            </Link>
        </section>
    )
}

export default namesetting