import React, { useEffect } from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import { EventHighlightsBanner } from "shared/ui/HighlightBanner";
import css from "./event-highlights.module.scss";

interface IEntry {
    title: string;
    description: string;
    image: string;
}
export const Attend: React.FC = () => {
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
            <EventHighlightsBanner content="EVENT HIGHLIGHTS" />

            <div className={css.entry_wrapper}>
                {entries.map((entry, index) => (
                    <HighlightEntry entry={entry} index={index} key={index} />
                ))}
            </div>
        </section>
    );
};

const HighlightEntry = ({ entry, index }: { entry: IEntry; index: number }) => {
    console.log({ index });
    return (
        <div className={css.highlight_entry}>
            <img
                src={`/img/event-highlights/${index}.png`}
                className={css.highlight_entry_image}
                alt=""
            />
            <div className={css.highlight_entry_title}>{entry.title} </div>
            <div className={css.highlight_entry_description}>{entry.description}</div>
        </div>
    );
};
