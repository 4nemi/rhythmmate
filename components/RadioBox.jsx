
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const RadioBox = ({ question }) => {
    return (
        <div className="flex flex-col justify-center">
            <h2 className="text-center mt-10">Q{}: {question}</h2>
        <ul class="grid grid-cols-5 gap-x-5 m-10 max-w-md mx-auto">
            <li class="relative">
                <input class="sr-only peer" type="radio" value="yes" name="answer" id="answer_yes" />
                <label class="flex text-s p-7 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" for="answer_yes">１</label>
            </li>

            <li class="relative">
                <input class="sr-only peer" type="radio" value="maybe" name="answer" id="answer_maybe" />
                <label class="flex text-s p-7 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-Cyan-500 peer-checked:ring-2 peer-checked:border-transparent" for="answer_maybe">２</label>
            </li>

            <li class="relative">
                <input class="sr-only peer" type="radio" value="no" name="answer" id="answer_no" />
                <label class="flex text-s p-7 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-slate-500 peer-checked:ring-2 peer-checked:border-transparent" for="answer_no">３</label>
            </li>

            <li class="relative">
                <input class="sr-only peer" type="radio" value="maybe" name="answer" id="answer_4" />
                <label class="flex text-s p-7 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" for="answer_4">４</label>
            </li>

            <li class="relative">
                <input class="sr-only peer" type="radio" value="maybe" name="answer" id="answer_5" />
                <label class="flex text-s p-7 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" for="answer_5">５</label>
            </li>
        </ul>
    </div>
    )
}

export default RadioBox;