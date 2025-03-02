import { useEffect, useState } from "react";
import { RangeCalendarValue } from "../lib/types";
import { CalendarContext, createCalendarState } from "./context";

interface Props {
    value?: RangeCalendarValue;
    children: React.ReactNode;
}

export const WithCalendar: React.FC<Props> = ({ children, value }) => {
    const [state, setState] = useState(createCalendarState(value));

    useEffect(() => {
        if (value) {
            setState({ ...state });
        }
    }, [value]);

    return (
        <CalendarContext.Provider value={{ state, setState }}>{children}</CalendarContext.Provider>
    );
};
