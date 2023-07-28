import { createContext, useState } from "react";

export const WeekContext = createContext();

export const WeekProvider = ({ children }) => {
    const [week, setWeek] = useState(0);

    return (
        <WeekContext.Provider value={{ week, setWeek }}>
            {children}
        </WeekContext.Provider>
    );
};