import React from "react";
import { useTranslation } from "next-i18next";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import { Button } from "shared/components/@buttons/button";
import { MediaQuery } from "shared/ui/media-query";
import css from "./future.module.scss";

export const Future: React.FC = () => {
    const futureRef = React.useRef<HTMLDivElement>(null);
    const { t } = useTranslation("footer");

    return (
        <section className={css.future} ref={futureRef} id={HOME_PAG.FUTURE}>
            <h2 className={css.heading}>Join the future of </h2>
            <h2 className={css.heading}>Ethereum scaling</h2>
            <p className={css.text}>Limited spots available</p>
            <MediaQuery
                query="(min-width: 657px)"
                children={
                    <Button
                        className={css.button}
                        text={t("Register here")}
                        animated={{ offset: "200px" }}
                    />
                }
            />
        </section>
    );
};
