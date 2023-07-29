import { useState, useContext, useEffect } from 'react';
import { NameContext } from '../contexts/NameContext';
import { WeekContext } from '../contexts/WeekContext';
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const Comment = () => {
    const { name } = useContext(NameContext);
    const { week } = useContext(WeekContext);

    const weekNumber = Number(week);
    return (
        <div className="flex justify-center">
            <p className={`${inter.className} text-center text-2xl`}>
                {(weekNumber === 0) && <span>{name}はすやすや眠っている...</span>}
                {(weekNumber === 1) && <span>1週間経ったね!<br />{name}が進化したよ!!</span>}
                {(weekNumber === 2) && <span>2週間経ったね!<br />順調に{name}が進化中!!</span>}
                {(weekNumber === 3) && <span>3週間経ったね!<br />すごい!あとすこし!!</span>}
                {(weekNumber === 4) && <span>4週間経ったね!<br />{name}がイルカに変わったよ!!</span>}
            </p>
        </div>
    )
}

export default Comment;