import { useState, useContext } from 'react';
import { WeekContext } from '../contexts/WeekContext';

const Modal = ({ show, setShow }) => {
    const [localweek, setLocalWeek] = useState(0);
    const { setWeek } = useContext(WeekContext);
 
    const handleSubmit = (e) => {
        e.preventDefault();
        setWeek(localweek);
        setShow(false);
    }
    
    if (show === true) {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="z-10 w-1/2 p-4 bg-white rounded-lg">
                    <p className='text-center'>週設定</p>
                    {/* weekを0から4まで選ぶ */}
                    <form onSubmit={handleSubmit}>
                        <select
                            name="week"
                            value={localweek}
                            onChange={(e) => setLocalWeek(e.target.value)}
                            className="flex justify-center border-2 border-gray-200 rounded-lg p-2"
                        >
                            <option value="0">0週目</option>
                            <option value="1">1週目</option>
                            <option value="2">2週目</option>
                            <option value="3">3週目</option>
                            <option value="4">4週目</option>
                        </select>
                        <button type="submit">決定</button>
                    </form>
                    <button onClick={() => setShow(false)}>Close</button>
                </div>
            </div>
        </div>
    )
    } else {
        return null;
    }
}

export default Modal;