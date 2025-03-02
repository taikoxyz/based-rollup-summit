import React from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./cloud.module.scss";

export const Cloud: React.FC = () => {
    const cloudRef = React.useRef<HTMLDivElement>(null);

    return <section className={css.cloud} ref={cloudRef} id={HOME_PAG.CLOUD}></section>;
};
