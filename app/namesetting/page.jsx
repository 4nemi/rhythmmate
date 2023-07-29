"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useContext } from 'react';
import { NameContext } from '@/contexts/NameContext';
import { useRouter } from 'next/navigation';

const namesetting = () => {
    const [localname, setLocalName] = useState('');
    const {setName} = useContext(NameContext);
    const router = useRouter();

    const handleChange = (e) => {
        setLocalName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(localname);
        console.log(localname);
        router.push('/home');
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
            <div className="flex flex-col items-center">
                <p className="text-center m-3">
                    なまえをつける
                </p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" value={localname} onChange={handleChange}/>
                    </label>
                    <div className="flex justify-center">
                        <button type="submit" className="black_btn m-5">確定</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default namesetting