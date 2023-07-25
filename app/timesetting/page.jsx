"use client";

import Link from 'next/link';
import { useState } from 'react';

const setting = () => {
        const [time, setTime] = useState({ bedtime: '', waketime: '' });

    const handleChange = (e) => {
        setTime({ ...time, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(time, null, 2));
    };

    return (
        <div>
            <div className="p-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">目標を設定する</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <p className="mb-4 text-lg">就寝時間</p>
                        <input 
                            type="time" 
                            name="bedtime" 
                            value={time.bedtime}
                            onChange={handleChange}
                            className="border-2 border-gray-200 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-6">
                        <p className="mb-4 text-lg">起床時間</p>
                        <input 
                            type="time" 
                            name="waketime"
                            value={time.waketime}
                            onChange={handleChange}
                            className="border-2 border-gray-200 rounded-lg p-2"
                        />
                    </div>
                    <Link href= "/namesetting" type="submit" className="px-6 py-3 bg-blue-400 text-xl text-white rounded hover:bg-blue-600">決定！</Link>
                </form>
            </div>
        </div>
    );
}

export default setting