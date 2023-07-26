{/*アバターを表示するコンポーネント*/}

import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

{/*アバターは睡眠時間によって変化する*/}

const Avatar = ({successTime}) => {
    const [avatar, setAvatar] = useState(1);

    useEffect(() => {
        if (successTime >= 4) {
            setAvatar(5);
        }
        else if (successTime >= 3) {
            setAvatar(4);
        }
        else if (successTime >= 2) {
            setAvatar(3);
        }
        else if (successTime >= 1) {
            setAvatar(2);
        }
        else {
            setAvatar(1);
        }
    }, [successTime]);

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
