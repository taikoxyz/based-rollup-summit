import React from "react";
import { RangeCalendarProps } from "../../lib/types";
import { WithCalendar } from "../../provider";
import { CalendarBody } from "../calendar-body";
import { CalendarHead } from "../calendar-head";
import { CalendarTooltips } from "../calendar-tooltips";
import css from "./range-calendar.module.scss";

export const RangeCalendar: React.FC<RangeCalendarProps> = ({
    onApply,
    onChange,
    onCancel,
    value,
}) => {
    return (
        <WithCalendar value={value}>
            <div className={css.calendar}>
                <CalendarHead />
                <CalendarBody onChange={onChange} />
                <CalendarTooltips onApply={onApply} onCancel={onCancel} />
            </div>
        </WithCalendar>
    );
};
