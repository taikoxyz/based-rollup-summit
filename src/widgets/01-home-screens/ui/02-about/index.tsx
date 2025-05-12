import React from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./about.module.scss";

export const About: React.FC = () => {
    const aboutRef = React.useRef<HTMLDivElement>(null);

    return (
        <section className={css.about} ref={aboutRef} id={HOME_PAG.ABOUT}>
            <div className={css.section_wrapper}>
                <div className={css.section_title}>
                    THE PREMIER EVENT FOR DECENTRALIZED ETHEREUM SCALING RETURNS
                </div>
                <div className={css.section_body}>
                    Following our groundbreaking Based Rollup Summit in San Francisco, Taiko brings
                    the Based Rollup Summit to Cannes during EthCC. Join the architects of
                    Ethereum&apos;s scalable future for a day of technical innovation, industry
                    collaboration, and ecosystem advancement.
                </div>
            </div>

            <div className={css.section_wrapper}>
                <div className={css.section_title}>BUILDING ON SUCCESS</div>
                <div className={css.section_body}>
                    The inaugural Based Rollup Summit in San Francisco united 450+ attendees from 12
                    countries, including Vitalik Buterin, Professor Dan Boneh, and leaders from
                    major L2 projects. With AI, ZK, preconfirmations, composability and
                    unprecedented technical talks and panels, we&apos;re raising the bar even higher
                    in Cannes.{" "}
                </div>
            </div>
        </section>
    );
    
};
