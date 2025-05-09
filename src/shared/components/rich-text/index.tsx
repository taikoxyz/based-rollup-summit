import React from "react";
import clsx from "clsx";
import css from "./rich-text.module.scss";

type BlocksRendererProps = React.ComponentProps<any>;

interface Props {
    blocks?: BlocksRendererProps["blocks"];
    modifiers?: BlocksRendererProps["modifiers"];
    className?: string;
    content: string;
}

export const RichText: React.FC<Props> = ({ content, className }) => {
    return <div className={clsx(css.text, className)}>{content}</div>;
};
