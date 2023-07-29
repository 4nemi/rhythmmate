"use client";

import Link from 'next/link';
import { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

export default function TimePickerValue() {
    const [value, setValue] = useState(dayjs(new Date()));

    return (
        <div className="min-h-screen flex flex-col justify-center bg-beige">
            <div className="divide-y text-center">
                <div className="m-2">目標を設定する</div>
                <div>オススメ 23:00 - 7:00</div>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="m-10 grid grid-col-2 gap-y-5">
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
                </div>
            </LocalizationProvider>
            <Link href= "/namesetting" type="submit" className="black_btn m-10">決定！</Link>
        </div>
    )
}
