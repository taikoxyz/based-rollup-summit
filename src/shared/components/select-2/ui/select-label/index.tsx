import React from "react";
import { ISelectDefaultItem, ISelectProps } from "../../types";
import clsx from "clsx";
import css from "./select-label.module.scss";

export const SelectLabel = <T extends ISelectDefaultItem | object>({
    label,
    classNames,
}: ISelectProps<T>) => {
    if (!label) return null;

    return (
        <p className={clsx(css.label, classNames?.label || css.default)} data-select="label">
            <span>{label}</span>
        </p>
    );
};
