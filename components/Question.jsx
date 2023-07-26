{/* 質問の内容と5択の選択肢を表示するコンポーネント */}

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Question = ({ question }) => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col justify-center">
                <label>
                <input 
                    type="radio"
                    name="answer"
                    className="mx-2 h-10 w-10"
                />
                </label>
                <span className="text-center">そう思う</span>
            </div>

            <div className="flex flex-col justify-center">
                <label>
                <input 
                    type="radio"
                    name="answer"
                    className="mx-2 h-10 w-10"
                />
                </label>
            </div>
            <div className="flex flex-col justify-center">
                <label>
                <input 
                    type="radio"
                    name="answer"
                    className="mx-2 h-10 w-10"
                />
                </label>
            </div>
        </div>

    )
}

export default Question;