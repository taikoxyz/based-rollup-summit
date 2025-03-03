import React from "react";
import clsx from "clsx";
import ArrowLinkIcon from "shared/icons/ArrowLink.icon";
import { NextLink } from "shared/ui/NextLink";
import css from "./hero.module.scss";

const CardsTemplate1 = () => {
    return (
        <NextLink
            href="https://lu.ma/37ykg387"
            target="_blank"
            rel="noopener noreferrer"
            className={css.cards_link}
        >
            <span
                className={css.cards_link_text}
                dangerouslySetInnerHTML={{ __html: "Register<br />now" }}
            />
            <div className={css.cards_link_link}>
                <ArrowLinkIcon />
            </div>
        </NextLink>
    );
};

const CardsTemplate2 = () => {
    return (
        <NextLink
            href="https://www.notion.so/taikoxyz/2025-Based-Rollup-Summit-Sponsor-Package-19e9673143d68087b018fd5c2679b937"
            target="_blank"
            rel="noopener noreferrer"
            className={css.cards_link_type}
        >
            <span
                className={css.cards_link_text}
                dangerouslySetInnerHTML={{ __html: "Apply as<br />Sponsor" }}
            />
            <div className={css.cards_link_link_type}>
                <ArrowLinkIcon />
            </div>
        </NextLink>
    );
};

const CardsTemplate3 = () => {
    return (
        <NextLink
            href="https://docs.google.com/forms/d/1g-FnXyQ2qAsWpJ0cPY_2BGE-1mwkxTP0N-RXDV4YZfg/"
            target="_blank"
            rel="noopener noreferrer"
            className={css.cards_link_type}
        >
            <span
                className={css.cards_link_text}
                dangerouslySetInnerHTML={{ __html: "Apply as<br />Speaker" }}
            />
            <div className={css.cards_link_link_type}>
                <ArrowLinkIcon />
            </div>
        </NextLink>
    );
};

export const Hero = () => {
    return (
        <section className={css.hero}>
            <video className={css.hero_video} autoPlay loop muted playsInline>
                <source src="/img/herosection/heroBlobby.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={css.container_top}>
                <div className={css.hero_left}>
                    <p>Based</p>
                    <p>Rollup</p>
                    <p>Summit</p>
                </div>
                <div className={css.hero_right}>
                    <div className={css.hero_right_top}>
                        <img src="/img/stars/pink.svg" alt="" />
                        <span>The First-Ever</span>
                    </div>
                    <p>Summit Dedicated to Truly Decentralized Scaling Solutions.</p>
                </div>
            </div>

            <div className={css.container_bottom}>
                <div className={css.bottom_left}>
                    <div className={css.subheading}>
                        <p>
                            Join the brightest minds in the L2 ecosystem to explore, debate, and
                            shape the future of Ethereum scalability
                        </p>
                    </div>

                    <div className={css.venue}>
                        <img src="/img/icons/nav-arrow-right.svg" alt="" />
                        <p>
                            SAN FRANCISCO <span className={css.date}>MARCH 10, 2025</span>
                        </p>
                    </div>
                </div>
                <div className={css.cardSection}>
                    <CardsTemplate1 />
                    <CardsTemplate2 />
                    <CardsTemplate3 />
                </div>
            </div>
        </section>
    );
};
