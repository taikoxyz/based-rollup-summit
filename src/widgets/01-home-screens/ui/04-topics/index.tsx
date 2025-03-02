import React from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./topics.module.scss";

export const Topics: React.FC = () => {
    const topicsRef = React.useRef<HTMLDivElement>(null);
    const tags = [
        { text: "Based Rollups", emoji: "🔥", color: "#FF6FC8" },
        { text: "Booster Rollups", emoji: "🚀", color: "#FFC6E9" },
        { text: "Interoperability", emoji: "🔗", color: "#FF6FC8" },
        { text: "Synchronous Composability", emoji: "🔄", color: "#FFC6E9" },
        { text: "Ecosystem", emoji: "🌐", color: "#FF6FC8" },
        { text: "Preconfirmations", emoji: "⚡", color: "#FFC6E9" },
        { text: "AI Integration", emoji: "💻", color: "#FF6FC8" },
        { text: "zkEVMs", emoji: "🔒", color: "#FFC6E9" },
    ];
    return (
        <section className={css.topics} ref={topicsRef} id={HOME_PAG.TOPICS}>
            <div className={css.topics_wrapper}>
                <p className={css.topics_label}>Techincal Topics Covered?</p>
                <div className={css.tagsContainer}>
                    {tags.map((tag, index) => (
                        <span key={index} className={css.tag}>
                            {tag.emoji} {tag.text}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
