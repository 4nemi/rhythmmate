"use client";

import { useState } from 'react';
import Link from 'next/link';

{/* questionnaire form */}
const typecheck = () => {
    const questions = [
        '早起きは苦ではない',
        'リスクを取る性格だ',
        '7時間以下の睡眠でも問題ない',
        '内向的で考えることが好きだ'
    ]

    const [answers, setAnswers] = useState({q1: '', q2: '', q3: '', q4: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers({...answers, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(answers);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <div className="p-20 bg-white shadow-lg rounded-lg">
                <h1 className="mb-6 text-2xl font-bold text-gray-900">Chronotype Check</h1>
                <form onSubmit={handleSubmit}>
                    {questions.map((q, i) => (
                        <div key={i} className="mb-6">
                            <p className="mb-4 text-lg">{`Q${i + 1}: ${q}`}</p>
                            <div>
                                <label>
                                    <input 
                                        type="radio"
                                        name={`q${i + 1}`}
                                        value="yes"
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">Yes</span>
                                </label>
                                <label className="ml-4">
                                    <input
                                        type="radio"
                                        name={`q${i + 1}`}
                                        value="no"
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>
                    ))}
                    <Link type="submit" href= '/typecheck-result' className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">診断結果を見る</Link>
                </form>
            </div>
        </div>
    )

}

export default typecheck;