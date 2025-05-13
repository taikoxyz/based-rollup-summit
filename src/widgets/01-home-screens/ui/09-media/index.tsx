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

const diamondSponsors: EventPartner[] = [
    { name: "Gattaca", logo: "", width: 226, height: 100 },
    { name: "Ethgas", logo: "/img/media/ethgas.svg", width: 226, height: 100 },
]

const goldSponsors: EventPartner[] = [  
    { name: "OpenZeppelin", logo: "/img/media/openzeppelin.png", width: 226, height: 100 },

]

const silverSponsors: EventPartner[] = [
    { name: "Fabric", logo: "/img/media/fabric.png", width: 226, height: 100 },
    { name: "Commit - Boost", logo: "/img/media/commitboost.png", width: 226, height: 100 },
    { name: "Izumi", logo: "/img/media/izumi.svg", width: 226, height: 100 },
    { name: "Goldsky", logo: "/img/media/goldsky.png", width: 226, height: 100 },
    { name: "Prismacloud", logo: "/img/media/prismacloud.png", width: 226, height: 100 },

]


const mediaPartners: MediaPartner[] = [
    { name: "BeInCrypto", logo: "/img/media/beincrypto.png" },
    { name: "CryptoNews", logo: "/img/media/cryptonews.png" },
    { name: "Mpost", logo: "/img/media/mpost.png" },
    /*
    { name: "Block Beats", logo: "/img/media/block.png" },
    { name: "BlockMedia", logo: "/img/media/blockmedia.png" },
    { name: "Bloomingbit", logo: "/img/media/bloomingbit.png" },
    { name: "Chain Catcher", logo: "/img/media/chaincatcher.png" },
    { name: "CoinNess", logo: "/img/media/coinness.png" },
    { name: "ODAILY", logo: "/img/media/daily.png" },
    { name: "TechFlow", logo: "/img/media/techflow.png" },
    { name: "吴说", logo: "/img/media/logo.png" },*/
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
             <div className={css.diamond_partners_label}>DIAMOND SPONSORS</div>

<div className={css.partners}>
    <div className={css.partners_grid}>
        {diamondSponsors.map((partner, index) => (
            <div key={index} className={css.partner_item}>
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

{/* Event Partners Section */}
<div className={css.gold_partners_label}>GOLD SPONSORS</div>

<div className={css.partners}>
    <div className={css.partners_grid}>
        {goldSponsors.map((partner, index) => (
            <div key={index} className={css.partner_item}>
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

            
            {/* Event Partners Section */}
            <div className={css.silver_partners_label}>SILVER SPONSORS</div>

            <div className={css.partners}>
                <div className={css.partners_grid}>
                    {silverSponsors.map((partner, index) => (
                        <div key={index} className={css.partner_item}>
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

            {/* Media Support Section */}
            <div className={css.media_label}>MEDIA SUPPORT</div>
            <div className={css.partners}>
                <div className={css.media_support}>
                    <div className={css.media_grid}>
                        {mediaPartners.map((partner, index) => (
                            <div key={index} className={css.media_item}>
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
