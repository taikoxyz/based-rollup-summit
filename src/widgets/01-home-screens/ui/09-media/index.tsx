import React, { useEffect } from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./media.module.scss";

interface MediaPartner {
    name: string;
    logo: string;
}

const mediaPartners: MediaPartner[] = [
    { name: "CoinNess", logo: "/img/media/coinness.png" },
    { name: "BlockMedia", logo: "/img/media/blockmedia.png" },
    { name: "吴说", logo: "/img/media/logo.png" },
    { name: "Block Beats", logo: "/img/media/block.png" },
    { name: "ODAILY", logo: "/img/media/daily.png" },
    { name: "CryptoNews", logo: "/img/media/cryptonews.png" },
    { name: "Chain Catcher", logo: "/img/media/chaincatcher.png" },
    { name: "TechFlow", logo: "/img/media/techflow.png" },
    { name: "BeInCrypto", logo: "/img/media/beincrypto.png" },
];

export const Media: React.FC = () => {
    const mediaRef = React.useRef<HTMLDivElement>(null);

    // Add animation class on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (mediaRef.current) {
                const rect = mediaRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    mediaRef.current.classList.add(css._animated);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Check once on mount
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={css.container} ref={mediaRef} id={HOME_PAG.MEDIA}>
            {/* Event Partners Section */}
            <div className={css.partners}>
                <div className={css.partners_wrapper}>
                    <p className={css.partners_label}>EVENT PARTNERS</p>
                    <div className={css.partnersLogo}>
                        <img
                            src="/img/media/stanford.png"
                            alt="Stanford Blockchain"
                            className={css.partnerLogo}
                            width={226}
                            height={100}
                        />
                    </div>
                </div>
            </div>

            {/* Media Support Section */}
            <div className={css.media}>
                <div className={css.media_wrapper}>
                    <p className={css.media_label}>MEDIA SUPPORT</p>
                    <div className={css.mediaGrid}>
                        {mediaPartners.map((partner, index) => (
                            <div key={index} className={css.mediaItem}>
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className={css.mediaLogo}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
