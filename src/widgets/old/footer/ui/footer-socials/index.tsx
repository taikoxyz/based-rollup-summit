import React from "react";
import { IFooterSocial } from "widgets/old/footer/lib/types";
import { useTranslationObject } from "shared/lib/hooks/use-translation-object";
import Image from "shared/ui/image";
import Sprite from "shared/ui/sprite";
import css from "./footer-socials.module.scss";

export const FooterSocials: React.FC = () => {
    const socials = useTranslationObject<IFooterSocial[]>("socials", "footer");

    return (
        <div className={css.socials}>
            {socials.map((social) => (
                <a className={css.socials_link} href={social.url} key={social.url} target="_blank">
                    {social.name}
                    <div className={css.socials_wrapper}>
                        {social.name === "mirror" ? (
                            <div className={css.mirror_logo}>
                                <Image.Default src="/img/mirror-logo.png" alt="" />
                            </div>
                        ) : (
                            <Sprite.Default icon={social.icon} />
                        )}
                        <span>{social.name}</span>
                    </div>
                </a>
            ))}
        </div>
    );
};
