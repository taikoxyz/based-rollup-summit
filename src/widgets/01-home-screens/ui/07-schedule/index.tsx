import React, { useEffect } from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import { Button } from "shared/components/@buttons/button";
import css from "./schedule.module.scss";

export const Schedule: React.FC = () => {
    const scheduleRef = React.useRef<HTMLDivElement>(null);

    const entries = [
        {
            color: "#FF5FFF",
            title: "TECHNICAL EXCELLENCE",
            body: "Genuine developer-focused content without marketing fluff",
        },
        {
            color: "#D4FF00",
            title: "ECOSYSTEM INFLUENCE",
            body: "Help shape the standards for based rollup development",
        },
        {
            color: "#E81899",
            title: "QUALITY NETWORKING",
            body: "Connect with the decision-makers driving Ethereum scaling",
        },
        {
            color: "#FFC6E9",
            title: "GLOBAL PERSPECTIVE",
            body: "European and international scaling projects and perspectives",
        },
        {
            color: "#FF6FC8",
            title: "STRATEGIC TIMING",
            body: "Coordinate with EthCC for the ultimate Ethereum week in Cannes",
        },
    ];
    // Add animation class on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (scheduleRef.current) {
                const rect = scheduleRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    scheduleRef.current.classList.add(css._animated);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Check once on mount
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={css.schedule} ref={scheduleRef} id={HOME_PAG.SCHEDULE}>
            <div className={css.schedule_wrapper}>
                <div className={css.entries_wrapper}>
                    {entries.map((entry, index) => (
                        <div key={index} className={css.entry}>
                            <div>
                                <div
                                    className={css.entry_color}
                                    style={{ backgroundColor: entry.color }}
                                ></div>
                                <div className={css.entry_title}>{entry.title}</div>
                            </div>
                            <div className={css.entry_body}>{entry.body}</div>
                        </div>
                    ))}
                </div>

                <div className={css.venue_title}>VENUE</div>
                <div className={css.text_row}>
                    The Based Rollup Summit will be held at the iconic Majestic Cannes, a five-star
                    temple to French elegance that gazes out to sea on the Croisette, just a few
                    steps away from the famous steps of the Palais des Festivals and offering
                    breathtaking views of the Mediterranean.
                </div>

                <div className={css.location_wrapper}>
                    <div className={css.location_image}>
                        <div className={css.venue_title}>
                            HOTEL
                            <br />
                            BARRIÈRE LE
                            <br />
                            MAJESTIC
                        </div>
                        <div className={css.location_text}>
                            <p>Boulevard de la Croisette</p>
                            <p>10Bd de la Croisette, 06400 Cannes, France</p>
                        </div>
                    </div>

                    <div className={css.location_map}>a fancy map</div>
                </div>
            </div>

            <div className={css.become_sponsor_wrapper}>
                <div className={css.become_sponsor_title}>BECOME A SPONSOR</div>
                <div className={css.become_sponsor_body}>
                    Interested in sponsoring the Based Rollup Summit in Cannes? We offer limited
                    sponsorship opportunities for organizations aligned with our mission of
                    advancing decentralized Ethereum scaling solutions.
                </div>

                <div className={css.become_sponsor_alert}>
                    *Sponsorship opportunities are limited and available on a first-come,
                    first-served basis.
                </div>

                <div className={css.button_wrapper}>
                    <Button noArrow text="View sponsorship deck" />
                </div>
            </div>
        </section>
    );
};
