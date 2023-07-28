"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';

const Nav = () => {
    const [show, setShow] = useState(false);

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <button onClick={() => setShow(true)}>
                <Image
                    src="/images/setting2.png"
                    alt="home icon"
                    width={80}
                    height={80}
                    className="object-contain"
                />
                <p className="logo_text">RhythmMate</p>
            </button>
            <Modal show={show} setShow={setShow} />
        </nav>
    )
}

export default Nav;