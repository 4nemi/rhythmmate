"use client";

import Link from 'next/link';

import Question from '@/components/Question';
import RadioBox from '@components/RadioBox';

const QuestionList = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-xl item-center mt-10">ChronoType Check</h2>
                <p className="m-10 text-slate-600">以下の質問に対してあなたが直感的に近いと思うものを選んでください。<br />1:そう思う 2: ややそう思う 3: どちらでもない <br />4: あまりそう思わない 5: 思わない</p>
            </div>
            <RadioBox />
            <RadioBox />
            <RadioBox />
            <RadioBox />
            <Link href="/typecheck-result" className="black_btn m-10">
                はじめる
            </Link>

        </div>
    )
} 

export default QuestionList;