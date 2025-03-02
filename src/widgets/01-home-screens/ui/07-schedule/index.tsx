import React, { useEffect } from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./schedule.module.scss";

export const Schedule: React.FC = () => {
    const scheduleRef = React.useRef<HTMLDivElement>(null);

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
                <p className={css.schedule_label}>SCHEDULE</p>

                <div className={css.timeline}>
                    <div className={css.timeline_item1 + " " + css.left}>
                        <div className={css.content}>
                            <h2>Technical Talks</h2>
                            <ul>
                                <li>In-depth technical presentations</li>
                                <li>Leading L2 developers</li>
                                <li>Infrastructure providers</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css.timeline_marker}></div>
                    <div className={css.timeline_item2 + " " + css.right}>
                        <div className={css.content}>
                            <h2>Panel Discussions</h2>
                            <ul>
                                <li>Latest based rollup developments</li>
                                <li>Ecosystem challenges</li>
                                <li>Future directions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
