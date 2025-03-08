import React, { useEffect } from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./media.module.scss";

interface MediaPartner {
    name: string;
    logo: string;
}

interface EventPartner {
    name: string;
    logo: string;
    width: number;
    height: number;
}

const eventPartners: EventPartner[] = [
    { name: "Stanford Blockchain", logo: "/img/media/stanford.png", width: 226, height: 100 },
    { name: "Blockchain Builders Fund", logo: "/img/media/BBF.png", width: 226, height: 100 },
    { name: "Berkeley Blockchain", logo: "/img/media/berkeley.png", width: 226, height: 100 },
    { name: "Columbia Blockchain", logo: "/img/media/columbia.png", width: 226, height: 100 },
    { name: "Openledger", logo: "/img/media/openledger.png", width: 226, height: 100 },
    { name: "Spire Labs", logo: "/img/media/spire.png", width: 226, height: 100 },
    {name: "Rise Labs", logo: "/img/media/rise.png", width: 226, height: 100 },
];

const mediaPartners: MediaPartner[] = [
    { name: "BeInCrypto", logo: "/img/media/beincrypto.png" },
    { name: "Block Beats", logo: "/img/media/block.png" },
    { name: "BlockMedia", logo: "/img/media/blockmedia.png" },
    { name: "Bloomingbit", logo: "/img/media/bloomingbit.png" },
    { name: "Chain Catcher", logo: "/img/media/chaincatcher.png" },
    { name: "CoinNess", logo: "/img/media/coinness.png" },
    { name: "CryptoNews", logo: "/img/media/cryptonews.png" },
    { name: "ODAILY", logo: "/img/media/daily.png" },
    { name: "TechFlow", logo: "/img/media/techflow.png" },
    { name: "吴说", logo: "/img/media/logo.png" },
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
                    <div className={css.partnersGrid}>
                        {eventPartners.map((partner, index) => (
                            <div key={index} className={css.partnerItem}>
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name}`}
                                    className={css.partnerLogo}
                                    width={partner.width}
                                    height={partner.height}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Media Support Section */}
            <div className={css.media}>
                <div className={css.media_wrapper}>
                    <p className={css.media_label}>MEDIA SUPPORT</p>
                    <div className={css.mediaGrid}>
                        <div className={css.mediaRow}>
                            {mediaPartners.slice(0, 6).map((partner, index) => (
                                <div key={`top-${index}`} className={css.mediaItem}>
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
                        <div className={css.mediaRow}>
                            {mediaPartners.slice(6).map((partner, index) => (
                                <div key={`bottom-${index}`} className={css.mediaItem}>
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
            </div>
        </section>
    );
};
