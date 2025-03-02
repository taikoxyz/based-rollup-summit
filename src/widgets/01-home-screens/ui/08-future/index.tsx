import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import { Button } from "shared/components/@buttons/button";
import css from "./future.module.scss";

export const Future: React.FC = () => {
    const futureRef = React.useRef<HTMLDivElement>(null);
    const { t } = useTranslation("footer");

    // Add animation class on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (futureRef.current) {
                const rect = futureRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    futureRef.current.classList.add(css._animated);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Check once on mount
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={css.future} ref={futureRef} id={HOME_PAG.FUTURE}>
            <div className={css.future_wrapper}>
                <h2 className={css.heading}>Join the future of</h2>
                <h2 className={css.heading}>Ethereum scaling</h2>
                <p className={css.text}>Limited spots available</p>
                <Button
                    className={css.button}
                    text={t("Register here")}
                    animated={{ offset: "200px" }}
                />
            </div>
        </section>
    );
};
