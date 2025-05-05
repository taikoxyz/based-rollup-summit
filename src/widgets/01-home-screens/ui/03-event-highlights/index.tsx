import React, { useEffect } from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./event-highlights.module.scss";

interface IEntry {
    title: string;
    description: string;
    image: string;
}
export const Attend: React.FC = () => {
    const cards = [
        {
            title: "Developers",
            iconColor: "pink",
            description:
                "Get hands-on insight with the latest zkEVM advancements, interoperability solutions, and AI. Connect directly with other pioneers and position yourself at the forefront of Ethereum's scaling revolution.",
            star: "/img/stars/pink.svg",
        },
        {
            title: "Infrastructure providers",
            iconColor: "pink",
            description:
                "Gain insights into emerging L2 standards and connect with potential integration partners to align your roadmap with the based rollup ecosystem, maximizing your project's adoption and relevance.",
            star: "/img/stars/light-pink.svg",
        },
        {
            title: "Explorers",
            iconColor: "purple",
            description:
                "Discover how Based Rollups will reshape Ethereum directly from the innovators. Position yourself at the cutting edge whether you're building, investing, or exploring the future of blockchain.",
            star: "/img/stars/purple.svg",
        },
    ];

    const entries: IEntry[] = [
        {
            title: "Technical Deep Dives",
            description: "Cutting-edge based rollup implementations and research",
            image: "",
        },
        {
            title: "PRECONFIRMATIONS Showcase",
            description: "Next-generation transaction finality solutions",
            image: "",
        },
        {
            title: "CROSS-L2 INTEROPERABILITY",
            description: "Building bridges across the Ethereum scaling ecosystem",
            image: "",
        },
        {
            title: "ZERO-KNOWLEDGE INNOVATIONS",
            description: "Latest breakthroughs in ZK technology",
            image: "",
        },
        {
            title: "AI INTEGRATION",
            description: "Exploring the convergence of AI and blockchain",
            image: "",
        },
        {
            title: "ECOSYSTEM BUILDING",
            description: "Standards development for seamless scaling",
            image: "",
        },
    ];

    const attendRef = React.useRef<HTMLDivElement>(null);

    // Add animation class on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (attendRef.current) {
                const rect = attendRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    attendRef.current.classList.add(css._animated);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Check once on mount
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={css.attend} ref={attendRef} id={HOME_PAG.ATTEND}>
            <EventHighlightsBanner />

            <div className={css.entry_wrapper}>
                {entries.map((entry, index) => (
                    <HighlightEntry entry={entry} key={index} />
                ))}
            </div>

            <div className={css.attend_wrapper}>
                <div className={css.cards_container}>
                    {cards.map((card, index) => (
                        <div key={index} className={css.card}>
                            <div className={css.topHeading}>
                                <img className={css.icon} src={card.star} alt="" />
                                <h3 className={css.card_title}>{card.title}</h3>
                            </div>
                            <p className={css.card_description}>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EventHighlightsBanner = () => {
    const repeatCount = 10; // Adjust to ensure enough content for seamless scroll
    const content = "EVENT HIGHLIGHTS";

    return (
        <div className={css.event_highlights_banner}>
            <div className={css.event_highlights_banner__content}>
                {Array.from({ length: repeatCount }).map((_, i) => (
                    <span key={i}>{content}</span>
                ))}
            </div>
        </div>
    );
};

const HighlightEntry = ({ entry }: { entry: IEntry }) => {
    return (
        <div className={css.highlight_entry}>
            <img src="/img/rectangle.png" className={css.highlight_entry_image} alt="" />
            <div className={css.highlight_entry_title}>{entry.title} </div>
            <div className={css.highlight_entry_description}>{entry.description}</div>
        </div>
    );
};
