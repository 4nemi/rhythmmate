{/*アバターを表示するコンポーネント*/}

import React, { useContext } from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { WeekContext } from '../contexts/WeekContext';

{/*アバターは睡眠時間によって変化する*/}

const Avatar = () => {
    const { week } = useContext(WeekContext);
    const [avatar, setAvatar] = useState(1);

    useEffect(() => {
        const weekNumber = Number(week);

        if (weekNumber === 4) {
            setAvatar(5);
        }
        else if (weekNumber === 3) {
            setAvatar(4);
        }
        else if (weekNumber === 2) {
            setAvatar(3);
        }
        else if (weekNumber === 1) {
            setAvatar(2);
        }
        else {
            setAvatar(1);
        }
    }, [week]);

    return (
        <div className="flex justify-center">
            <Image
                src={`/images/dolphin/dolphin${avatar}.png`}
                alt="Your Partner"
                width={450}
                height={450}
                className="object-contain m-10"
            />
        </div>
    )
}

export default Avatar;
