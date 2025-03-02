import React from "react";
import { HOME_PAG, useHomeData } from "widgets/01-home-screens/lib";
import css from "./about.module.scss";

export const About: React.FC = () => {
    const data = useHomeData();
    const aboutRef = React.useRef<HTMLDivElement>(null);

    return (
        <section className={css.about} ref={aboutRef} id={HOME_PAG.ABOUT}>
            <div className={css.about_wrapper}>
                <p className={css.about_label}>About</p>
                <h3 className={css.about_title}>Based Rollup Summit 2025</h3>
                <p className={css.about_text}>
                    The first-ever gathering dedicated to truly decentralized scaling solutions for
                    Ethereum. Organized by Taiko during ETH San Francisco, this summit brings
                    together the brightest minds in the L2 ecosystem to explore, debate, and shape
                    the future of Ethereum scalability.
                </p>
            </div>
        </section>
    );
};
