import React, { useEffect, useState } from "react";
import ArrowLinkIcon from "shared/icons/ArrowLink.icon";
import { NextLink } from "shared/ui/NextLink";
import css from "./hero.module.scss";

interface CardTemplateProps {
    isMobile: boolean;
}

const CardsTemplate1: React.FC<CardTemplateProps> = ({ isMobile }) => {
    return (
        <NextLink
            href="https://lu.ma/37ykg387"
            target="_blank"
            rel="noopener noreferrer"
            className={`${css.cards_link} ${isMobile ? css.mobile_card : ""}`}
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

const CardsTemplate2: React.FC<CardTemplateProps> = ({ isMobile }) => {
    return (
        <NextLink
            href="https://www.notion.so/taikoxyz/2025-Based-Rollup-Summit-Sponsor-Package-19e9673143d68087b018fd5c2679b937"
            target="_blank"
            rel="noopener noreferrer"
            className={`${css.cards_link_type} ${isMobile ? css.mobile_card : ""}`}
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

const CardsTemplate3: React.FC<CardTemplateProps> = ({ isMobile }) => {
    return (
        <NextLink
            href="https://docs.google.com/forms/d/1g-FnXyQ2qAsWpJ0cPY_2BGE-1mwkxTP0N-RXDV4YZfg/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${css.cards_link_type} ${isMobile ? css.mobile_card : ""}`}
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

export const Hero: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            const isMobileView = window.innerWidth <= 768;
            setIsMobile(isMobileView);
        };

        // Initial check
        checkMobile();

        // Add event listener
        window.addEventListener("resize", checkMobile);

        // Cleanup
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className={css.hero}>
            {/* Background video - different sources for mobile and desktop */}
            {!isMobile ? (
                <video className={css.hero_video} autoPlay loop muted playsInline>
                    <source src="/img/herosection/Desktop_Blobby.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div className={css.mobile_background}>
                    <video className={css.hero_video} autoPlay loop muted playsInline>
                        <source src="/img/herosection/Mobile_Blobby.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {/* Top content */}
            <div className={css.container_top}>
                <div className={css.hero_left}>
                    <p>Based</p>
                    <p>Rollup</p>
                    <p>Summit</p>
                </div>

                {!isMobile && (
                    <div className={css.hero_right}>
                        <div className={css.hero_right_top}>
                            <img src="/img/stars/pink.svg" alt="" />
                            <span>The First-Ever</span>
                        </div>
                        <p>Summit Dedicated to Truly Decentralized Scaling Solutions.</p>
                    </div>
                )}
            </div>

            {/* Desktop bottom section */}
            {!isMobile && (
                <div className={css.container_bottom}>
                    <div className={css.bottom_left}>
                        <div className={css.subheading}>
                            <p>
                                Join the brightest minds in the L2 ecosystem to explore, debate, and
                                shape the future of Ethereum scalability
                            </p>
                        </div>

                        <div className={css.venue}>
                            <div className={css.venue_arrow}>→</div>
                            <p>
                                SAN FRANCISCO <span className={css.date}>MARCH 10, 2025</span>
                            </p>
                        </div>
                    </div>

                    {/* Desktop card buttons */}
                    <div className={css.desktop_cardSection}>
                        <CardsTemplate1 isMobile={false} />
                        <CardsTemplate2 isMobile={false} />
                        <CardsTemplate3 isMobile={false} />
                    </div>
                </div>
            )}

            {/* Mobile bottom section */}
            {isMobile && (
                <div className={css.mobile_footer}>
                    {/* Mobile location and date */}
                    <div className={css.mobile_location_wrapper}>
                        <div className={css.mobile_arrow}>→</div>
                        <div className={css.mobile_location}>
                            <span>SAN</span>
                            <span>FRANCISCO</span>
                        </div>
                        <div className={css.mobile_date}>
                            <span>MARCH 10,</span>
                            <span>2025</span>
                        </div>
                    </div>

                    {/* Mobile card buttons */}
                    <div className={css.mobile_cardSection}>
                        <CardsTemplate1 isMobile={true} />
                        <CardsTemplate2 isMobile={true} />
                        <CardsTemplate3 isMobile={true} />
                    </div>
                </div>
            )}
        </section>
    );
};
