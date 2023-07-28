"use client";

import Link from 'next/link';
import { useState } from 'react';

const questions = [
    '早起きは苦ではない',
    '夜は24時前には眠くなる',
    'リスクを取る性格だ',
    '不眠症だ',
    '昼頃が一番頭が動いていると思う',
    '何事もスケジュール通りきっちり進めるタイプだ',
    '目覚ましがなくても起きれるタイプだ',
    '起きて30分経つとかなり空腹だ',
    '7時間以下の睡眠でも問題ない',
    '新しいチャレンジが好きだ',
    '他人との衝突を避ける性格だ',
    '人並み以上に努力する',
    '週末は夜ふかしして朝遅く起きがちだ',
    'つい欲望に負けてしまう',
    '神経質で心配性だ',
    '仕事や勉強は朝が一番捗る',
    '人にやさしくフレンドリーな性格だ',
    '完璧主義だと思う',
    '夜になると頭が冴えてきて仕事が捗る',
    '内向的で考えることが好きだ',
]

const Question = () => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleAnswer = (questionIndex, answer) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answer;
        setAnswers(newAnswers);
    };

    return (
        <div className="flex flex-col justify-center m-0 bg-beige">
            <h1 className="text-center text-2xl font-bold mt-10">ChronoType Check</h1>
            <p className="desc text-center">
                以下の質問に対して<br />あなたが直感的に近いと思うものを<br />選んでください。
            </p>
            <p className="text-s text-center text-gray-500 m-2">
                1: そう思う 2: まあそう思う 3: どちらとも言えない 4: あまりそう思わない 5: そう思わない
            </p>
            {questions.map((question, questionIndex) => (
                <div key={questionIndex}>
                    <h2 className="text-center mt-10">Q{questionIndex + 1}: {question}</h2>
                    <ul className="grid grid-cols-5 gap-x-0 m-2 max-w-md mx-auto">
                        {[['1', 'peer-checked:ring-green-500'], ['2', 'peer-checked:ring-cyan-500'], ['3', 'peer-checked:ring-gray-500'], ['4', 'peer-checked:ring-orange-500'], ['5', 'peer-checked:ring-red-500']].map((option, index) => (
                            <li className="relative" key={index}>
                                <input
                                    className="sr-only peer"
                                    type="radio"
                                    value={option[0]}
                                    name={`answer-${questionIndex}`}
                                    id={`answer_${questionIndex}_${index}`}
                                    onChange={() => handleAnswer(questionIndex, option[0])}
                                />
                                <label
                                    className={`flex text-center text-s mx-2 p-4 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 ${option[1]} peer-checked:ring-2 peer-checked:border-transparent`}
                                    htmlFor={`answer_${questionIndex}_${index}`}
                                >
                                    <p className="text-[14px] mx-2">{option[0]}</p>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <Link href="/typecheck-result" className="black_btn m-5">
                診断結果を見る
            </Link>
        </div>

    )}
           

export default Question;