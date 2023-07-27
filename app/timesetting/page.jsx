"use client";

import Link from 'next/link';
import { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker'


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

export default function TimePickerValue() {
    const [value, setValue] = useState(dayjs(new Date()));

    return (
        <div className="min-h-screen flex flex-col justify-center m-10">
            <div className="grid grid-cols-1 divide-y text-center">
                <div className="m-2">目標を設定する</div>
                <div>オススメ 23:00 - 7:00</div>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    label="就寝時間"
                    defaultValue={value}
                    onChange={(newValue) => setValue(newValue)}
                    className="m-10"
                />
                <TimePicker
                    label="起床時間"
                    defaultValue={value}
                    onChange={(newValue) => setValue(newValue)}
                    className="m-10"
                />
            </LocalizationProvider>
            <Link href= "/namesetting" type="submit" className="black_btn m-10">決定！</Link>
        </div>
    )
}
